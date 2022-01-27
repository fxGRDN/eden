<script>
    import '../app.scss';
    import Nav from '../components/nav.svelte';
    import Footer from '../components/footer.svelte';

</script>


<div class="bg-black min-h-screen box-border overflow-y-hidden text-white">
    <Nav/>
    <slot/>
    <Footer/>
</div>

   