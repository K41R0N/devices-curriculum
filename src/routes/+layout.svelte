<script lang="ts">
	import '../app.css';
</script>

<div class="min-h-screen flex flex-col">
	<nav class="nav">
		<div class="container flex items-center justify-between">
			<a href="/" class="nav-brand">Devices</a>
			<div class="flex items-center gap-6">
				<a href="/curriculum">Curriculum</a>
				<a href="/about">About</a>
				<a href="https://k41r0n.substack.com" target="_blank" rel="noopener">K41R0N</a>
			</div>
		</div>
	</nav>
	
	<main class="flex-1">
		<slot />
	</main>
	
	<footer class="footer">
		<div class="container">
			<p>Built for depth, not breadth.</p>
			<p style="margin-top: 0.5rem;">
				<a href="https://k41r0n.substack.com" target="_blank" rel="noopener">K41R0N</a>
			</p>
		</div>
	</footer>
</div>
