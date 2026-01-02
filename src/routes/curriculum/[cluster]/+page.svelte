<script lang="ts">
	import { page } from '$app/stores';
	import { getCluster, clusters } from '$lib/data/curriculum';
	
	$: cluster = getCluster($page.params.cluster);
	$: clusterIndex = clusters.findIndex(c => c.slug === $page.params.cluster);
	$: prevCluster = clusterIndex > 0 ? clusters[clusterIndex - 1] : null;
	$: nextCluster = clusterIndex < clusters.length - 1 ? clusters[clusterIndex + 1] : null;
</script>

<svelte:head>
	<title>{cluster?.title || 'Cluster'} | DEVICES Curriculum</title>
</svelte:head>

{#if cluster}
	<div class="page-header">
		<div class="container">
			<a href="/curriculum" class="back-link">&larr; Back to Curriculum</a>
			<div class="cluster-label">Cluster {cluster.id}</div>
			<h1>{cluster.title}</h1>
			<p>{cluster.description}</p>
		</div>
	</div>
	
	<section class="content-section">
		<div class="container">
			<h2 style="margin-bottom: 1.5rem;">Lessons</h2>
			
			{#each cluster.lessons as lesson, i}
				<a href="/curriculum/{cluster.slug}/{lesson.slug}" class="card" style="display: flex; gap: 1rem; text-decoration: none; align-items: flex-start;">
					<div class="lesson-number">{i + 1}</div>
					<div>
						<h3 style="margin: 0 0 0.25rem 0; font-size: 1.25rem;">{lesson.title}</h3>
						{#if lesson.author}
							<p style="font-size: 0.875rem; color: var(--color-ink-light); margin: 0 0 0.5rem 0; font-style: italic;">{lesson.author}</p>
						{/if}
						<p style="margin: 0;">{lesson.description}</p>
					</div>
				</a>
			{/each}
			
			<div class="nav-links">
				{#if prevCluster}
					<a href="/curriculum/{prevCluster.slug}">
						&larr; {prevCluster.title}
					</a>
				{:else}
					<div></div>
				{/if}
				{#if nextCluster}
					<a href="/curriculum/{nextCluster.slug}">
						{nextCluster.title} &rarr;
					</a>
				{/if}
			</div>
		</div>
	</section>
{:else}
	<div class="content-section">
		<div class="container">
			<h1>Cluster not found</h1>
			<p>
				<a href="/curriculum">Return to curriculum</a>
			</p>
		</div>
	</div>
{/if}
