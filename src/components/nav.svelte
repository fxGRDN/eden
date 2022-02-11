<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import Intro from './intro.svelte';

    let menu: HTMLDivElement;
    let hide = true;

    $: PLAY = $page.url.pathname; 
    $: if(PLAY === '/') {
        hide = false
    } else {
        hide = true
    }

    onMount( () => {
        setTimeout(() => glitchRand(3000), 6000);
        
    })

    const randInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const glitchRand = (time: number) => {
        let ele = menu.children[randInt(0,3)].firstElementChild;
        ele.classList.toggle('glitch-ele');
        setTimeout( () => {
            ele.classList.toggle('glitch-ele');
            glitchRand(randInt(5000, 10000))
        }, time)
    }


</script>
<nav class=" sitcky z-20 w-full flex flex-col  justify-evenly items-center p-5">
    <div class:hide class="duration-700 flex justify-center overflow-hidden"><Intro/></div>
    <div class="w-4/5 h-px bg-eden_red mb-5 "></div>
 <div class="xl:w-3/5 w-screen flex  md:flex-row items-center justify-evenly uppercase flex-col text-white font-thin text-2xl font-vudo tracking-widest select-none"  bind:this="{menu}">
    <a class="box-border border-b-2 duration-300 border-b-transparent hover:border-b-eden_red hover:text-eden_gold" href="/"><div data-text="glówna">glówna</div></a>
    <a class="box-border border-b-2 duration-300 border-b-transparent hover:border-b-eden_red hover:text-eden_gold" href="/about"><div data-text="o nas">o nas</div></a>
    <a class="box-border border-b-2 duration-300 border-b-transparent hover:border-b-eden_red hover:text-eden_gold" href="enrol"><div data-text="rekrutacja">rekrutacja</div></a>
    <a class="box-border border-b-2 duration-300 border-b-transparent hover:border-b-eden_red hover:text-eden_gold" href="social"><div  data-text="social media">social media</div></a>
</div>
</nav>







