import matter from 'gray-matter';

export interface Lesson {
	id: string;
	title: string;
	slug: string;
	author?: string;
	description: string;
	order: number;
}

export interface Cluster {
	id: number;
	title: string;
	slug: string;
	description: string;
	overview?: string;
	lessons: Lesson[];
}

// Load all cluster and lesson markdown files at build time
const clusterFiles = import.meta.glob('/content/clusters/*.md', { eager: true, query: '?raw', import: 'default' });
const lessonFiles = import.meta.glob('/content/lessons/*.md', { eager: true, query: '?raw', import: 'default' });

/**
 * Validates that a value is a non-empty string
 */
function isNonEmptyString(value: unknown): value is string {
	return typeof value === 'string' && value.trim().length > 0;
}

/**
 * Validates and coerces a value to an integer
 */
function toValidInteger(value: unknown): number | null {
	if (typeof value === 'number' && Number.isInteger(value)) {
		return value;
	}
	if (typeof value === 'string') {
		const parsed = parseInt(value, 10);
		if (!isNaN(parsed) && Number.isInteger(parsed)) {
			return parsed;
		}
	}
	return null;
}

/**
 * Parse clusters from markdown files with validation
 */
function loadClusters(): Cluster[] {
	const clustersData: Cluster[] = [];
	const seenOrders = new Set<number>();
	const errors: string[] = [];

	for (const [path, content] of Object.entries(clusterFiles)) {
		// Parse frontmatter with error handling
		let data: Record<string, unknown>;
		let body: string;

		try {
			const parsed = matter(content as string);
			data = parsed.data;
			body = parsed.content;
		} catch (err) {
			const message = err instanceof Error ? err.message : String(err);
			errors.push(`Failed to parse frontmatter in ${path}: ${message}`);
			continue;
		}

		// Validate required fields
		const missingFields: string[] = [];

		if (!isNonEmptyString(data.title)) {
			missingFields.push('title (string)');
		}
		if (!isNonEmptyString(data.slug)) {
			missingFields.push('slug (string)');
		}
		if (!isNonEmptyString(data.description)) {
			missingFields.push('description (string)');
		}

		const order = toValidInteger(data.order);
		if (order === null) {
			missingFields.push('order (integer)');
		}

		if (missingFields.length > 0) {
			errors.push(`Invalid cluster ${path}: missing or invalid fields: ${missingFields.join(', ')}`);
			continue;
		}

		// Check for duplicate order values
		if (seenOrders.has(order!)) {
			errors.push(`Duplicate cluster order ${order} in ${path}. Each cluster must have a unique order value.`);
			continue;
		}
		seenOrders.add(order!);

		// Handle overview/body - trim and convert empty to undefined
		const overview = body?.trim() || undefined;

		clustersData.push({
			id: order!,
			title: data.title as string,
			slug: data.slug as string,
			description: data.description as string,
			overview,
			lessons: []
		});
	}

	// If there were any errors, throw with all of them
	if (errors.length > 0) {
		throw new Error(`Cluster validation errors:\n${errors.map(e => `  - ${e}`).join('\n')}`);
	}

	// Sort clusters by order
	clustersData.sort((a, b) => a.id - b.id);

	return clustersData;
}

/**
 * Parse lessons and associate them with clusters, with validation
 */
function loadLessons(clusters: Cluster[]): void {
	const clusterMap = new Map(clusters.map(c => [c.slug, c]));
	const errors: string[] = [];
	const orphanedLessons: string[] = [];

	for (const [path, content] of Object.entries(lessonFiles)) {
		// Parse frontmatter with error handling
		let data: Record<string, unknown>;

		try {
			const parsed = matter(content as string);
			data = parsed.data;
		} catch (err) {
			const message = err instanceof Error ? err.message : String(err);
			errors.push(`Failed to parse frontmatter in ${path}: ${message}`);
			continue;
		}

		// Validate required fields
		const missingFields: string[] = [];

		if (!isNonEmptyString(data.title)) {
			missingFields.push('title (string)');
		}
		if (!isNonEmptyString(data.slug)) {
			missingFields.push('slug (string)');
		}
		if (!isNonEmptyString(data.cluster)) {
			missingFields.push('cluster (string)');
		}
		if (!isNonEmptyString(data.description)) {
			missingFields.push('description (string)');
		}

		const order = toValidInteger(data.order);
		if (order === null) {
			missingFields.push('order (integer)');
		}

		if (missingFields.length > 0) {
			errors.push(`Invalid lesson ${path}: missing or invalid fields: ${missingFields.join(', ')}`);
			continue;
		}

		// Verify cluster exists
		const cluster = clusterMap.get(data.cluster as string);
		if (!cluster) {
			orphanedLessons.push(`${path} (references non-existent cluster: "${data.cluster}")`);
			continue;
		}

		// Add valid lesson to cluster
		cluster.lessons.push({
			id: `${cluster.id}-${order}`,
			title: data.title as string,
			slug: data.slug as string,
			author: isNonEmptyString(data.author) ? data.author : undefined,
			description: data.description as string,
			order: order!
		});
	}

	// Collect all errors
	const allErrors: string[] = [...errors];

	if (orphanedLessons.length > 0) {
		allErrors.push(`Orphaned lessons (cluster not found):\n${orphanedLessons.map(l => `    - ${l}`).join('\n')}`);
	}

	// If there were any errors, throw with all of them
	if (allErrors.length > 0) {
		throw new Error(`Lesson validation errors:\n${allErrors.map(e => `  - ${e}`).join('\n')}`);
	}

	// Sort lessons within each cluster by order
	for (const cluster of clusters) {
		cluster.lessons.sort((a, b) => a.order - b.order);
	}
}

// Initialize data at build time
const loadedClusters = loadClusters();
loadLessons(loadedClusters);

export const clusters: Cluster[] = loadedClusters;

export function getCluster(slug: string): Cluster | undefined {
	return clusters.find(c => c.slug === slug);
}

export function getLesson(clusterSlug: string, lessonSlug: string): { cluster: Cluster; lesson: Lesson } | undefined {
	const cluster = getCluster(clusterSlug);
	if (!cluster) return undefined;
	const lesson = cluster.lessons.find(l => l.slug === lessonSlug);
	if (!lesson) return undefined;
	return { cluster, lesson };
}
