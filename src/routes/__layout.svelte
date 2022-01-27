<script>
    import '../app.scss';
    import Nav from '../components/nav.svelte';
    import Footer from '../components/footer.svelte';

</script>


<div class="bg-black h-screen box-border overflow-y-hidden text-white max-h-screen">
    <Nav/>
    <slot/>
    <Footer/>
</div>

   