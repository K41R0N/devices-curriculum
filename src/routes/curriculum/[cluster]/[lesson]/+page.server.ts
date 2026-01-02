import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const load: PageServerLoad = async ({ params }) => {
	const { cluster, lesson } = params;
	
	// Try to find the lesson content file
	const contentDir = path.join(process.cwd(), 'content', 'lessons');
	const filename = `${cluster}-${lesson}.md`;
	const filepath = path.join(contentDir, filename);
	
	try {
		if (fs.existsSync(filepath)) {
			const fileContent = fs.readFileSync(filepath, 'utf-8');
			const { data, content } = matter(fileContent);
			
			return {
				lesson: {
					...data,
					content
				},
				hasContent: true
			};
		}
	} catch (e) {
		console.error('Error loading lesson content:', e);
	}
	
	// Return empty if no content file found
	return {
		lesson: null,
		hasContent: false
	};
};
