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

// Parse clusters from markdown files
function loadClusters(): Cluster[] {
	const clustersData: Cluster[] = [];

	for (const [path, content] of Object.entries(clusterFiles)) {
		const { data, content: body } = matter(content as string);
		clustersData.push({
			id: data.order,
			title: data.title,
			slug: data.slug,
			description: data.description,
			overview: body.trim() || undefined,
			lessons: []
		});
	}

	// Sort clusters by order
	clustersData.sort((a, b) => a.id - b.id);

	return clustersData;
}

// Parse lessons and associate them with clusters
function loadLessons(clusters: Cluster[]): void {
	const clusterMap = new Map(clusters.map(c => [c.slug, c]));

	for (const [path, content] of Object.entries(lessonFiles)) {
		const { data } = matter(content as string);
		const cluster = clusterMap.get(data.cluster);

		if (cluster) {
			cluster.lessons.push({
				id: `${cluster.id}-${data.order}`,
				title: data.title,
				slug: data.slug,
				author: data.author,
				description: data.description,
				order: data.order
			});
		}
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
