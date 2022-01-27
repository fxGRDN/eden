<script lang="ts">
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Rekrutacja</title>
</svelte:head>

<div class="flex p-5 flex-col xl:flex-row items-center xl:items-start" in:fly>
	<div class="xl:w-1/2 m-10 ">
		<h1 class="text-4xl my-2">Rekrutacja</h1>
		<p class="my-4">
			Nie wymagamy również żadnej aktywności. Nie musisz się nam tłumaczyć, dlaczego nie przyszedłeś
			w danym dniu, liczy się tylko to, byś miał realne chęci do bycia aktywnym członkiem naszej
			społeczności.
		</p>
		<p class="my-4">
			Posiadamy własny serwer do ARMA III, Teamspeaka oraz przejrzysty Discord.
		</p>
	</div>
	<div class="xl:w-1/2 flex justify-center m-10 ">
		<iframe
			title="test"
			src="https://discord.com/widget?id=683297320124678162&theme=dark"
			width="350"
			height="500"
			frameborder="0"
			sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
		/>
	</div>
</div>
