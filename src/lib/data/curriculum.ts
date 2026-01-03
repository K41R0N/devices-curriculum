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
