<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch('api/destination.json');
    const districts = await res.json();

    return { districts };
  }
</script>

<script>
	import Checkout from '../components/Checkout.svelte';

	export let districts;
</script>

<svelte:head>
	<title>Checkout</title>
</svelte:head>

<Checkout districts={districts}/>

