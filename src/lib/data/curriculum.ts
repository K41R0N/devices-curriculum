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

// These will be populated by the server-side loader
export let clusters: Cluster[] = [];

export function setClusters(data: Cluster[]): void {
	clusters = data;
}

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
