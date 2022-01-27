<script lang="ts">
	import { afterUpdate, onMount } from 'svelte';
	import { ImgSlider } from '../scripts/imgSlider';
	import { fly } from 'svelte/transition';

	afterUpdate( () => {
		const slider = new ImgSlider(imgContainer);
	})

	let imgContainer;
</script>

<svelte:head>
	<title>O nas</title>
</svelte:head>

<div class="flex p-5 xl:flex-row flex-col items-center xl:items-start" in:fly="{{duration: 300}}">
	<div class="xl:w-1/2 m-10 ">
		<h1 class="text-4xl my-2">O nas</h1>
		<p class="my-4"> 
			Project Eden to niedawno powstała grupa, która zrzesza grono ludzi skupionych wokół
			wykorzystania potencjału gry ARMA III do maksimum. W naszym gronie znajdziesz nie tylko
			miłośników militariów. Pośród nas miejsce znalazło wiele osobnych zainteresowań, co sprawia,
			że jesteśmy niezwykle wszechstronni.
		</p>
		<p class="my-4">
			Nasza grupę wyróżnia również to, że cenimy sobie rolę głosu ludu i każda osoba może zgłosić
			pomysł, a następnie podstawić to pod głosowanie, co realnie sprawia, że liczy się nasze
			community, aniżeli forma dyktatury. Współpracujemy z dużą ilością klanów w Polsce i dzięki
			temu możemy mieć w pełni zapewnione misje na kolejne dwa miesiące, dlatego każdy członek grupy
			jest w stanie wybierać spośród misji.
		</p>
	</div>

	<div bind:this={imgContainer} class="xl:w-3/5 m-y-10  xl:h-160 md:h-128 img_trap_fade about">
		<div class="h-full w-full flex justify-center items-center">
			<svg>
				<circle cx="50" cy="50" fill="none" stroke="#e15b64" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
					<animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
				  </circle>
			</svg>
		</div>
	</div>
</div>
