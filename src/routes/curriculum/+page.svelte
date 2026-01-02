<script lang="ts">
	import { clusters } from '$lib/data/curriculum';
	
	const foundationClusters = clusters.slice(0, 3);
	const specializationClusters = clusters.slice(3);
</script>

<svelte:head>
	<title>Curriculum | DEVICES Framework</title>
	<meta name="description" content="The complete DEVICES curriculum organized into thematic clusters." />
</svelte:head>

<div class="page-header">
	<div class="container">
		<h1>The Curriculum</h1>
		<p>
			25 seminal readings organized into 9 thematic clusters. Start anywhere, but the foundations provide essential context for everything that follows.
		</p>
	</div>
</div>

<section class="content-section">
	<div class="container">
		<div class="section-header" style="text-align: left;">
			<h2>Foundations</h2>
			<p>These clusters lay the conceptual groundwork for the entire framework—mediation, embodiment, and ritual.</p>
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
		<div class="section-header" style="text-align: left;">
			<h2>Specializations</h2>
			<p>These clusters apply the foundational concepts to specific domains—technology, media, ideology, and social evolution.</p>
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
