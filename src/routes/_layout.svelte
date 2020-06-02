<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<Nav {segment}/>

<main id="site-main" class="site__main bg-grey">
	<slot></slot>
</main>

<Footer {segment}/>