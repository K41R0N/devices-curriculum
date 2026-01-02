<script lang="ts">
	import { clusters } from '$lib/data/curriculum';
	
	const foundationClusters = clusters.slice(0, 3);
	const specializationClusters = clusters.slice(3);
</script>

<svelte:head>
	<title>DEVICES Curriculum</title>
	<meta name="description" content="A self-directed research curriculum exploring how devices shape human reality." />
</svelte:head>

<section class="hero">
	<h1>The Devices Curriculum</h1>
	<p class="hero-subtitle">
		A self-directed research program for understanding how devices shape human reality.
	</p>
	<div style="margin-top: 2rem;">
		<a href="/curriculum" class="btn btn-primary">Begin the Curriculum</a>
	</div>
</section>

<section class="content-section">
	<div class="container">
		<div class="prose" style="max-width: 100%;">
			<p>
				When we went to school, teachers asked us not to use Wikipedia. What we did was cite the Wikipedia sources instead. This is the root of how digital scholarship in the algorithm age should go.
			</p>
			<p>
				You start with the things you know you have to learn, and you branch out as you actually develop an understanding and opinions to challenge. The goal is not comprehensive coverage, but depth. Each reading opens doors to further exploration.
			</p>
		</div>
	</div>
</section>

<section class="content-section" style="padding-top: 0;">
	<div class="container">
		<div class="section-header">
			<h2>Foundations</h2>
			<p>The conceptual groundwork—mediation, embodiment, and ritual.</p>
		</div>
		
		{#each foundationClusters as cluster}
			<a href="/curriculum/{cluster.slug}" class="card" style="display: block; text-decoration: none;">
				<div class="cluster-label">Cluster {cluster.id}</div>
				<h3 style="margin-bottom: 0.5rem;">{cluster.title}</h3>
				<p>{cluster.description}</p>
				<div class="lesson-count" style="margin-top: 0.75rem;">{cluster.lessons.length} lessons</div>
			</a>
		{/each}
	</div>
</section>

<section class="content-section" style="padding-top: 0;">
	<div class="container">
		<div class="section-header">
			<h2>Specializations</h2>
			<p>Applying the foundations to technology, media, ideology, and social evolution.</p>
		</div>
		
		{#each specializationClusters as cluster}
			<a href="/curriculum/{cluster.slug}" class="card" style="display: block; text-decoration: none;">
				<div class="cluster-label">Cluster {cluster.id}</div>
				<h3 style="margin-bottom: 0.5rem;">{cluster.title}</h3>
				<p>{cluster.description}</p>
				<div class="lesson-count" style="margin-top: 0.75rem;">{cluster.lessons.length} lessons</div>
			</a>
		{/each}
	</div>
</section>
