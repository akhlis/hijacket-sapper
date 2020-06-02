<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<script>
	import PostsList from '../components/PostsList.svelte';
	import CategoryList from '../components/CategoryList.svelte';
</script>


<h1 class="text-2xl uppercase text-red-500">parezza store</h1>
<CategoryList/>
<PostsList/>