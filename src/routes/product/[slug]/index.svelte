<svelte:head>
	<title>Sapper WordPress Site</title>
</svelte:head>

<script context="module">
  const apiUrl = process.env.SAPPER_APP_API_URL;
  function createPagesArray(total) {
    let arr = [];
    for (let i = 1; i <= total; i++) {
      arr.push(i);
    }
    return arr;
  }
  export async function preload({ params, query }) {
    const catResponse = await this.fetch(`${apiUrl}/${params.slug}/index.json`);
    const cat = await catResponse.json();
    const catName = cat.title;
    const posts = cat.results;
    const totalPages = 2;
    const pages = createPagesArray(totalPages);
    return {
      posts,
      pages,
      catName,
      currentPage: 1,
      isCategoryPage: true,
      catSlug: params.slug
    };
  }
</script>

<script>
    import PostsList from '../../../components/PostsList.svelte'
    export let posts
    export let pages
    export let catName
    export let currentPage
    export let isCategoryPage
    export let catSlug
</script>

<h1>Listing posts from <strong>{catName}</strong> category</h1>

<PostsList posts={posts} pages={pages} currentPage={currentPage} isCategoryPage={isCategoryPage} catSlug={catSlug} />