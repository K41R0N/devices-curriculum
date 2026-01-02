<script lang="ts">
	import { page } from '$app/stores';
	import { getLesson } from '$lib/data/curriculum';
	
	export let data;
	
	$: result = getLesson($page.params.cluster, $page.params.lesson);
	$: cluster = result?.cluster;
	$: lessonMeta = result?.lesson;
	$: lessonIndex = cluster?.lessons.findIndex(l => l.slug === $page.params.lesson) ?? -1;
	$: prevLesson = lessonIndex > 0 ? cluster?.lessons[lessonIndex - 1] : null;
	$: nextLesson = cluster && lessonIndex < cluster.lessons.length - 1 ? cluster.lessons[lessonIndex + 1] : null;
	
	$: lesson = data.hasContent ? data.lesson : lessonMeta;
</script>

<svelte:head>
	<title>{lesson?.title || 'Lesson'} | DEVICES Curriculum</title>
</svelte:head>

{#if cluster && lesson}
	<div class="page-header">
		<div class="container">
			<a href="/curriculum/{cluster.slug}" class="back-link">&larr; Back to {cluster.title}</a>
			<div class="cluster-label">Cluster {cluster.id} · Lesson {lessonIndex + 1}</div>
			<h1>{lesson.title}</h1>
			{#if lesson.author}
				<p style="font-style: italic; margin-top: 0.5rem;">{lesson.author}</p>
			{/if}
		</div>
	</div>
	
	<section class="content-section">
		<div class="container">
			<div class="prose">
{#if data.hasContent}
						{#if lesson.featured_image}
							<figure class="featured-image">
								<img src={lesson.featured_image} alt={lesson.title} />
							</figure>
						{/if}
						{#if lesson.content}
						<div style="font-size: 1.125rem; margin-bottom: 2rem;">
							{@html lesson.content}
						</div>
					{/if}
					
					{#if lesson.objectives && lesson.objectives.length > 0}
						<div class="lesson-panel">
							<h3 style="margin-top: 0;">Learning Objectives</h3>
							<ul style="margin: 0; padding-left: 1.25rem;">
								{#each lesson.objectives as objective}
									<li>{objective}</li>
								{/each}
							</ul>
						</div>
					{/if}
					
					{#if lesson.key_concepts && lesson.key_concepts.length > 0}
						<h2>Key Concepts</h2>
						{#each lesson.key_concepts as concept}
							<div style="margin-bottom: 2rem;">
								<h3 style="margin-bottom: 0.75rem;">{concept.name}</h3>
								<div>
									{@html concept.explanation}
								</div>
							</div>
						{/each}
					{/if}
					
					{#if lesson.assignment}
						<div class="lesson-panel" style="background-color: rgba(212, 43, 43, 0.05);">
							<h3 style="margin-top: 0;">Assignment</h3>
							<div style="margin-bottom: 1rem;">
								{@html lesson.assignment.instructions}
							</div>
							{#if lesson.assignment.url}
								<a 
									href={lesson.assignment.url} 
									target="_blank" 
									rel="noopener noreferrer"
									class="btn btn-primary"
									style="text-decoration: none;"
								>
									Read: {lesson.assignment.reading_title || 'Primary Reading'} →
								</a>
							{/if}
						</div>
					{/if}
					
					{#if lesson.knowledge_check && lesson.knowledge_check.length > 0}
						<div class="knowledge-check">
							<h3 style="margin-top: 0;">Knowledge Check</h3>
							<p style="margin-bottom: 1.5rem;">
								The following questions are an opportunity to reflect on key topics in this lesson.
							</p>
							<ul>
								{#each lesson.knowledge_check as question}
									<li>
										<p style="font-weight: 500; margin: 0;">{question.question}</p>
										{#if question.hint}
											<p style="font-size: 0.875rem; color: var(--color-ink-light); margin: 0.5rem 0 0 0; font-style: italic;">Hint: {question.hint}</p>
										{/if}
									</li>
								{/each}
							</ul>
						</div>
					{/if}
					
					{#if lesson.additional_resources && lesson.additional_resources.length > 0}
						<h2>Additional Resources</h2>
						<p>This section contains helpful links to related content. It isn't required, so consider it supplemental.</p>
						{#each lesson.additional_resources as resource}
							<div class="card" style="margin-bottom: 1rem;">
								<h3 style="margin: 0 0 0.25rem 0; font-size: 1.125rem;">
									{#if resource.url}
										<a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.title}</a>
									{:else}
										{resource.title}
									{/if}
								</h3>
								{#if resource.author}
									<p style="font-size: 0.875rem; color: var(--color-ink-light); margin: 0 0 0.5rem 0; font-style: italic;">{resource.author}</p>
								{/if}
								{#if resource.description}
									<p style="margin: 0;">{resource.description}</p>
								{/if}
							</div>
						{/each}
					{/if}
				{:else}
					<p style="font-size: 1.125rem;">{lesson.description}</p>
					
					<div class="lesson-panel">
						<h3 style="margin-top: 0;">Lesson Content Coming Soon</h3>
						<p style="margin: 0;">
							Full lesson content will be available soon. Check back later or explore other lessons in the curriculum.
						</p>
					</div>
				{/if}
			</div>
			
			<div class="nav-links">
				{#if prevLesson}
					<a href="/curriculum/{cluster.slug}/{prevLesson.slug}">
						&larr; {prevLesson.title}
					</a>
				{:else}
					<a href="/curriculum/{cluster.slug}">
						&larr; Back to Cluster
					</a>
				{/if}
				{#if nextLesson}
					<a href="/curriculum/{cluster.slug}/{nextLesson.slug}">
						{nextLesson.title} &rarr;
					</a>
				{:else}
					<a href="/curriculum">
						View All Clusters &rarr;
					</a>
				{/if}
			</div>
		</div>
	</section>
{:else}
	<div class="content-section">
		<div class="container">
			<h1>Lesson not found</h1>
			<p>
				<a href="/curriculum">Return to curriculum</a>
			</p>
		</div>
	</div>
{/if}
