import type { PageServerLoad } from './$types';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const load: PageServerLoad = async ({ params }) => {
	const { cluster, lesson } = params;

	// Search through all lesson files to find one matching the cluster and slug
	const contentDir = path.join(process.cwd(), 'content', 'lessons');

	try {
		if (!fs.existsSync(contentDir)) {
			return { lesson: null, hasContent: false };
		}

		const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

		for (const file of files) {
			const filepath = path.join(contentDir, file);
			const fileContent = fs.readFileSync(filepath, 'utf-8');
			const { data, content } = matter(fileContent);

			// Match by frontmatter cluster and slug fields
			if (data.cluster === cluster && data.slug === lesson) {
				return {
					lesson: {
						...data,
						content
					},
					hasContent: true
				};
			}
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
