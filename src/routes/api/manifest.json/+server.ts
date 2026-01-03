/**
 * Content Manifest
 *
 * A lightweight index of all content for quick discovery.
 * Useful for agents that need to understand site structure
 * without downloading full content.
 *
 * @see /CONTENT_ARCHITECTURE.md
 */
import type { RequestHandler } from './$types';
import { loadCurriculum } from '$lib/data/curriculum.server';

const SITE_URL = 'https://devices-curriculum.netlify.app';

export const GET: RequestHandler = async () => {
	const clusters = loadCurriculum();

	const manifest = {
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: 'DEVICES Curriculum',
		description: 'A self-directed research curriculum exploring how devices shape human reality.',
		url: SITE_URL,
		provider: {
			'@type': 'Person',
			name: 'K41R0N'
		},
		hasCourseInstance: clusters.map(cluster => ({
			'@type': 'CourseInstance',
			name: cluster.title,
			description: cluster.description,
			url: `${SITE_URL}/curriculum/${cluster.slug}`,
			courseWorkload: `${cluster.lessons.length} lessons`,
			teaches: cluster.lessons.map(lesson => ({
				'@type': 'LearningResource',
				name: lesson.title,
				description: lesson.description,
				author: lesson.author,
				url: `${SITE_URL}/curriculum/${cluster.slug}/${lesson.slug}`
			}))
		})),
		// Machine-readable endpoints
		_links: {
			self: `${SITE_URL}/api/manifest.json`,
			curriculum: `${SITE_URL}/api/curriculum.json`,
			feed: `${SITE_URL}/feed.xml`,
			sitemap: `${SITE_URL}/sitemap.xml`
		}
	};

	return new Response(JSON.stringify(manifest, null, 2), {
		headers: {
			'Content-Type': 'application/ld+json; charset=utf-8',
			'Cache-Control': 'max-age=3600',
			'Access-Control-Allow-Origin': '*'
		}
	});
};
