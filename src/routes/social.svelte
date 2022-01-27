<script lang="ts">
	import { onMount } from 'svelte';

	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Social media</title>
</svelte:head>

<div class="flex xl:flex-row flex-col-reverse items-center" in:fly>
	<div class="xl:w-1/2 w-full m-y-10 scale-75 md:scale-100 ">
		<blockquote
			class="tiktok-embed"
			loading="lazy"
			cite="https://www.tiktok.com/@pr0ject_eden/video/7047865245422980357"
			data-video-id="7047865245422980357"
			style="max-width: 625px; min-width: 320px"
		>
			<section class="hidden">
				<a target="_blank" title="@pr0ject_eden" href="https://www.tiktok.com/@pr0ject_eden"
					>@pr0ject_eden</a
				>
				OTWARCIE REKRUTACJI! Link w bio
				<a title="famous" target="_blank" href="https://www.tiktok.com/tag/famous">#famous</a><a
					title="projecteden"
					target="_blank"
					href="https://www.tiktok.com/tag/projecteden">#ProjectEden</a
				> <a title="arma" target="_blank" href="https://www.tiktok.com/tag/arma">#arma</a>
				<a title="arma3" target="_blank" href="https://www.tiktok.com/tag/arma3">#arma3</a>
				<a title="arma3" target="_blank" href="https://www.tiktok.com/tag/arma3">#Arma3</a>
				<a title="games" target="_blank" href="https://www.tiktok.com/tag/games">#games</a><a
					title="gaming"
					target="_blank"
					href="https://www.tiktok.com/tag/gaming">#gaming</a
				><a title="gamer" target="_blank" href="https://www.tiktok.com/tag/gamer">#gamer</a>
				<a title="game" target="_blank" href="https://www.tiktok.com/tag/game">#game</a><a
					title="pc"
					target="_blank"
					href="https://www.tiktok.com/tag/pc">#pc</a
				> <a title="fakegun" target="_blank" href="https://www.tiktok.com/tag/fakegun">#Fakegun</a>
				<a title="tactical" target="_blank" href="https://www.tiktok.com/tag/tactical">#tactical</a>
				<a title="military" target="_blank" href="https://www.tiktok.com/tag/military">#military</a
				><a title="explor" target="_blank" href="https://www.tiktok.com/tag/explor">#explor</a>
				<a title="war" target="_blank" href="https://www.tiktok.com/tag/war">#war</a>
				<a
					target="_blank"
					title="♬ dźwięk oryginalny - Project Eden"
					href="https://www.tiktok.com/music/dźwięk-oryginalny-7047865234366679813"
					>♬ dźwięk oryginalny - Project Eden</a
				>
			</section>
		</blockquote>
		<script async src="https://www.tiktok.com/embed.js"></script>
	</div>


	
	<div class="xl:w-1/2 flex items-center m-10 scale-50 md:scale-100">
		<iframe
			width="560"
			height="315"
			src="https://www.youtube-nocookie.com/embed/YMS5aLzp3UQ?controls=0"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	</div>
</div>
