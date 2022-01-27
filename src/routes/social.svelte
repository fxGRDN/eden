<script lang="ts">
import { onMount } from 'svelte';

	import { fly } from 'svelte/transition';

	// var reqURL =
	// 			'https://api.rss2json.com/v1/api.json?rss_url=' +
	// 			encodeURIComponent('https://www.youtube.com/feeds/videos.xml?channel_id=');
	// 		function loadVideo(iframe) {
	// 			$.getJSON(reqURL + iframe.getAttribute('cid'), function (data) {
	// 				var videoNumber = iframe.getAttribute('vnum') ? Number(iframe.getAttribute('vnum')) : 0;
	// 				console.log(videoNumber);
	// 				var link = data.items[videoNumber].link;
	// 				id = link.substr(link.indexOf('=') + 1);
	// 				iframe.setAttribute('src', 'https://youtube.com/embed/' + id + '?controls=0&autoplay=1');
	// 			});
	// 		}
	// 		var iframes = document.getElementsByClassName('latestVideoEmbed');
	// 		for (var i = 0, len = iframes.length; i < len; i++) {
	// 			loadVideo(iframes[i]);
	// 		}

	let reqURL = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent('https://www.youtube.com/feeds/videos.xml?channel_id=');
	let channelId = 'UCYCTedumMPKNCN2hATjJz2w';
	let ytFilm;

	const loadVid = (frame: HTMLIFrameElement) => {
		fetch(reqURL + channelId)
		.then( res => {return res.json()})
		.then( res =>  frame.setAttribute('src', res.items[0].link));
	}  
	onMount(() => {
		loadVid(ytFilm);
	})

</script>

<svelte:head>
	<title>Social media</title>
</svelte:head>

<div class="flex h-auto" in:fly>
	<div class="w-1/2">
		<blockquote
			class="tiktok-embed"
            loading="lazy"
			cite="https://www.tiktok.com/@pr0ject_eden/video/7047865245422980357"
			data-video-id="7047865245422980357"
			style="max-width: 605px;min-width: 325px; background-color:black"
		>
			<section>
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
	<div class="w-1/2 flex items-center">
		<iframe
			bind:this="{ytFilm}"
            loading="lazy"
            title="xd"
			class="latestVideoEmbed"
			width="600"
			height="340"
			frameborder="0"
			allowfullscreen
		/>
	</div>
</div>
