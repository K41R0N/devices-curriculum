/**
 * Dynamic robots.txt
 *
 * Guides search engine crawlers to the sitemap and
 * machine-readable content endpoints.
 */
import type { RequestHandler } from './$types';

const SITE_URL = 'https://devices-curriculum.netlify.app';

export const GET: RequestHandler = async () => {
	const content = `# DEVICES Curriculum - robots.txt
# https://devices-curriculum.netlify.app

User-agent: *
Allow: /

# Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml

# Machine-readable content
# RSS Feed: ${SITE_URL}/feed.xml
# JSON API: ${SITE_URL}/api/curriculum.json
# Manifest: ${SITE_URL}/api/manifest.json
# LLM Guide: ${SITE_URL}/llms.txt

# Admin panel (no indexing needed)
Disallow: /admin
`;

	return new Response(content, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'max-age=86400' // Cache for 24 hours
		}
	});
};
