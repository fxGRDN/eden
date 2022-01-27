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

<div class="flex m-10 p-10" in:fly="{{duration: 300}}">
	<div class="w-1/2">
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

	<div class="w-3/5 h-160 img_trap_fade about">
		<img bind:this={imgContainer} class="object-none h-full" src="" alt="" />
	</div>
</div>
