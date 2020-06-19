<script context="module">
  export async function preload({params, query}) {
    const res = await this.fetch("https://api.hijacket.net/product/index.json");
    const menuCategory = await res.json();

    return { menuCategory };
  }
</script>

<script>
	import Tailwindcss from '../components/Tailwindcss.svelte';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
	export let menuCategory;
</script>

<Tailwindcss />
<Nav {segment} menuCategories={menuCategory}/>

<main id="site-main" class="site__main bg-grey">
	<slot></slot>
</main>
 
<Footer {segment}/> 