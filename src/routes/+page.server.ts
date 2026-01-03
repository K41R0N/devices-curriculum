import type { PageServerLoad } from './$types';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { config } from '$lib/config';

export const load: PageServerLoad = async () => {
	// Load home page content
	const homePath = path.join(process.cwd(), 'content', 'pages', 'home.md');
	let homeContent = {
		title: 'The Devices Curriculum',
		tagline: 'A self-directed research curriculum.',
		cta_text: 'Begin Reading',
		body: ''
	};

	try {
		if (fs.existsSync(homePath)) {
			const fileContent = fs.readFileSync(homePath, 'utf-8');
			const { data, content } = matter(fileContent);
			homeContent = {
				title: data.title || homeContent.title,
				tagline: data.tagline || homeContent.tagline,
				cta_text: data.cta_text || homeContent.cta_text,
				body: content.trim()
			};
		}
	} catch (e) {
		console.error('Error loading home content:', e);
	}

	// Load site settings
	const siteSettings = config.settings;

	return {
		home: homeContent,
		settings: siteSettings
	};
};
