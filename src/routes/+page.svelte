<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: foundationClusters = data.clusters.slice(0, 3);
	$: specializationClusters = data.clusters.slice(3);
	$: totalLessons = data.clusters.reduce((sum, c) => sum + c.lessons.length, 0);
</script>

<svelte:head>
	<title>DEVICES Curriculum</title>
	<meta name="description" content="A self-directed research curriculum exploring how devices shape human reality." />
</svelte:head>

<!-- Hero Section -->
<header class="home-hero">
	<div class="hero-content">
		<!-- Book Cover Card -->
		<div class="book-cover">
			<div class="book-label">Self-Directed Research</div>
			<h1 class="book-title">The Devices Curriculum</h1>

			<!-- Decorative Geometric SVG -->
			<div class="book-decoration">
				<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
					<circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.35"/>
					<circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/>
					<circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.65"/>
					<line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" stroke-width="0.5" opacity="0.25"/>
					<line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" stroke-width="0.5" opacity="0.25"/>
					<line x1="43" y1="43" x2="157" y2="157" stroke="currentColor" stroke-width="0.5" opacity="0.25"/>
					<line x1="157" y1="43" x2="43" y2="157" stroke="currentColor" stroke-width="0.5" opacity="0.25"/>
				</svg>
			</div>

			<div class="book-meta">
				{data.clusters.length} clusters · {totalLessons} lessons
			</div>
		</div>

		<!-- Philosophy Quotes -->
		<div class="philosophy-blocks">
			<div class="philosophy-block">
				<p class="philosophy-quote">
					"A self-directed research program for understanding how devices shape human reality."
				</p>
				<span class="philosophy-divider"></span>
				<span class="philosophy-label">The Goal</span>
			</div>
			<div class="philosophy-block">
				<p class="philosophy-quote">
					"You start with the things you know you have to learn, and you branch out as you actually develop an understanding."
				</p>
				<span class="philosophy-divider"></span>
				<span class="philosophy-label">The Method</span>
			</div>
		</div>
	</div>
</header>

<!-- Table of Contents -->
<main class="home-main">
	<h2 class="toc-label">Table of Contents</h2>

	<div class="section-divider"></div>

	<!-- Foundations -->
	<section class="cluster-group">
		<h3 class="group-title">Foundations</h3>
		<p class="group-subtitle">The conceptual groundwork—mediation, embodiment, and ritual.</p>

		<div class="cluster-list">
			{#each foundationClusters as cluster}
				<a href="/curriculum/{cluster.slug}" class="cluster-item">
					<span class="cluster-number">Cluster {cluster.id}</span>
					<h4 class="cluster-title">{cluster.title}</h4>
					<p class="cluster-description">{cluster.description}</p>
				</a>
			{/each}
		</div>
	</section>

	<div class="section-divider"></div>

	<!-- Specializations -->
	<section class="cluster-group">
		<h3 class="group-title">Specializations</h3>
		<p class="group-subtitle">Applying the foundations to technology, media, ideology, and social evolution.</p>

		<div class="cluster-list">
			{#each specializationClusters as cluster}
				<a href="/curriculum/{cluster.slug}" class="cluster-item">
					<span class="cluster-number">Cluster {cluster.id}</span>
					<h4 class="cluster-title">{cluster.title}</h4>
					<p class="cluster-description">{cluster.description}</p>
				</a>
			{/each}
		</div>
	</section>

	<div class="section-divider"></div>

	<!-- Footer Links -->
	<nav class="home-footer-links">
		<a href="/curriculum">Full Curriculum</a>
		<a href="/about">About</a>
		<a href="https://k41r0n.substack.com" target="_blank" rel="noopener">Substack</a>
	</nav>

	<p class="home-tagline">
		Built for depth, not breadth. <span class="tagline-author">K41R0N</span>
	</p>
</main>

<!-- Floating Action Buttons -->
<div class="floating-actions">
	<a href="/curriculum" class="fab fab-primary" aria-label="View full curriculum">
		<span>Full</span>
	</a>
	<a href="/curriculum/{data.clusters[0]?.slug}/{data.clusters[0]?.lessons[0]?.slug}" class="fab fab-secondary" aria-label="Start curriculum">
		<span>Start</span>
	</a>
</div>

<style>
	/* Hero Section */
	.home-hero {
		background-color: var(--color-parchment-dark);
		padding: 4rem 1.5rem 5rem;
		position: relative;
		overflow: hidden;
	}

	.home-hero::after {
		content: '';
		position: absolute;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.02);
		pointer-events: none;
	}

	.hero-content {
		position: relative;
		z-index: 1;
		max-width: 28rem;
		margin: 0 auto;
		text-align: center;
	}

	/* Book Cover Card */
	.book-cover {
		background-color: var(--color-cream);
		padding: 2.5rem 2rem;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
		max-width: 280px;
		margin: 0 auto 3rem;
		aspect-ratio: 2/3;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.book-label {
		font-family: var(--font-body);
		font-size: 0.6875rem;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: var(--color-black-light);
		margin-bottom: 1rem;
	}

	.book-title {
		font-family: var(--font-heading);
		font-size: 2rem;
		line-height: 1.1;
		color: var(--color-red);
		margin: 0;
		font-weight: 400;
	}

	.book-decoration {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1.5rem 0;
		color: var(--color-red);
	}

	.book-decoration svg {
		width: 120px;
		height: 120px;
	}

	.book-meta {
		font-family: var(--font-body);
		font-size: 0.75rem;
		color: var(--color-black-light);
		letter-spacing: 0.05em;
	}

	/* Philosophy Blocks */
	.philosophy-blocks {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		max-width: 320px;
		margin: 0 auto;
	}

	.philosophy-block {
		text-align: center;
	}

	.philosophy-quote {
		font-family: var(--font-body);
		font-size: 0.9375rem;
		font-style: italic;
		line-height: 1.7;
		color: var(--color-black-light);
		margin: 0 0 0.75rem;
	}

	.philosophy-divider {
		display: block;
		width: 2rem;
		height: 1px;
		background-color: rgba(0, 0, 0, 0.2);
		margin: 0 auto 0.5rem;
	}

	.philosophy-label {
		font-family: var(--font-body);
		font-size: 0.6875rem;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: var(--color-black-light);
		border-bottom: 1px solid rgba(0, 0, 0, 0.15);
		padding-bottom: 0.25rem;
	}

	/* Main Content */
	.home-main {
		max-width: 36rem;
		margin: 0 auto;
		padding: 3rem 1.5rem 6rem;
		text-align: center;
	}

	.toc-label {
		font-family: var(--font-body);
		font-size: 0.6875rem;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		color: var(--color-black-light);
		margin: 0 0 2rem;
		font-weight: 400;
	}

	.section-divider {
		width: 50px;
		height: 1px;
		background-color: rgba(208, 28, 31, 0.3);
		margin: 2rem auto;
	}

	/* Cluster Groups */
	.cluster-group {
		margin: 2rem 0 3rem;
	}

	.group-title {
		font-family: var(--font-heading);
		font-size: 2rem;
		color: var(--color-red);
		margin: 0 0 0.5rem;
		font-weight: 400;
	}

	.group-subtitle {
		font-family: var(--font-body);
		font-size: 0.9375rem;
		font-style: italic;
		color: var(--color-black-light);
		margin: 0 0 2.5rem;
	}

	/* Cluster List */
	.cluster-list {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.cluster-item {
		display: block;
		text-decoration: none;
		text-align: center;
		padding: 0.5rem;
		transition: all 0.2s ease;
	}

	.cluster-item:hover .cluster-number,
	.cluster-item:hover .cluster-title {
		color: var(--color-red);
	}

	.cluster-number {
		font-family: var(--font-body);
		font-size: 0.6875rem;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: var(--color-black-light);
		display: block;
		margin-bottom: 0.375rem;
		transition: color 0.2s ease;
	}

	.cluster-title {
		font-family: var(--font-body);
		font-size: 1.375rem;
		font-weight: 600;
		color: var(--color-black);
		margin: 0 0 0.5rem;
		line-height: 1.3;
		transition: color 0.2s ease;
	}

	.cluster-description {
		font-family: var(--font-body);
		font-size: 0.9375rem;
		color: var(--color-black-light);
		line-height: 1.65;
		max-width: 320px;
		margin: 0 auto;
	}

	/* Footer Links */
	.home-footer-links {
		display: flex;
		justify-content: center;
		gap: 2rem;
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid rgba(208, 28, 31, 0.15);
	}

	.home-footer-links a {
		font-family: var(--font-body);
		font-size: 0.6875rem;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: var(--color-black-light);
		text-decoration: none;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		padding-bottom: 0.25rem;
		transition: all 0.2s ease;
	}

	.home-footer-links a:hover {
		color: var(--color-red);
		border-color: var(--color-red);
	}

	.home-tagline {
		font-family: var(--font-body);
		font-size: 0.75rem;
		font-style: italic;
		color: var(--color-black-light);
		margin-top: 2rem;
	}

	.tagline-author {
		font-style: normal;
		font-weight: 700;
		color: var(--color-red);
	}

	/* Floating Action Buttons */
	.floating-actions {
		position: fixed;
		bottom: 1.5rem;
		right: 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		z-index: 50;
	}

	.fab {
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		border-radius: 50%;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.fab:hover {
		transform: scale(1.05);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
	}

	.fab span {
		font-family: var(--font-body);
		font-size: 0.5625rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: 700;
	}

	.fab-primary {
		width: 4rem;
		height: 4rem;
		background-color: var(--color-red);
		color: var(--color-cream);
	}

	.fab-secondary {
		width: 3.5rem;
		height: 3.5rem;
		background-color: var(--color-black);
		color: var(--color-cream);
	}

	/* Responsive */
	@media (max-width: 640px) {
		.home-hero {
			padding: 3rem 1rem 4rem;
		}

		.book-cover {
			max-width: 240px;
			padding: 2rem 1.5rem;
		}

		.book-title {
			font-size: 1.625rem;
		}

		.book-decoration svg {
			width: 100px;
			height: 100px;
		}

		.group-title {
			font-size: 1.75rem;
		}

		.cluster-title {
			font-size: 1.25rem;
		}

		.home-footer-links {
			flex-direction: column;
			gap: 1rem;
		}

		.floating-actions {
			bottom: 1rem;
			right: 1rem;
		}

		.fab-primary {
			width: 3.5rem;
			height: 3.5rem;
		}

		.fab-secondary {
			width: 3rem;
			height: 3rem;
		}
	}
</style>
