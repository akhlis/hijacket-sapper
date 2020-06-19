<ul class="post-list">
	{#each posts as post}
	<li>
		<a rel='prefetch' href='{post.slug}'>
			{post.title}
		</a>
	</li>
	{/each}
</ul>

<ul class="pagination">
	{#each pages as page}
	<li>
		<a href='{isCategoryPage ? `product/${catSlug}/page/${page}` : `page/${page}` }' class="{ page === currentPage ? 'active' : '' }">
			{page}
		</a>
	</li>
	{/each}
</ul>

<script>
    export let posts;
    export let pages;
    export let currentPage;
    export let isCategoryPage = undefined;
    export let catSlug = undefined;

    /*import { onMount } from 'svelte'

                                            import { stores } from '@sapper/app';
                                            const { page } = stores();

                                            let posts = []
                                            let totalPages = null
                                            let currentPage = 1
                                            let pages = []
                                            let catID = null

                                            $: if (process.browser && $page.path !== '/') {
                                                getCategoryID($page.params.slug)
                                                console.log(catID)
                                            }



                                            const apiUrl = process.env.SAPPER_APP_API_URL

                                            function getCategoryID(slug) {
                                                fetch(`${apiUrl}/wp/v2/categories?slug=${slug}`).then(res => {
                                                    return res.json()
                                                }).then(result => {
                                                    catID = result[0].id
                                                    getCategoryPosts()
                                                })
                                            }

                                            function getCategoryPosts() {
                                                fetch(`${apiUrl}/wp/v2/posts?per_page=2&categories=${catID}`).then(res => {
                                                    totalPages = res.headers.get('X-WP-TotalPages')
                                                    pages = createPagesArray(totalPages)
                                                    return res.json()
                                                }).then(result => {
                                                    posts = result
                                                    currentPage = 1
                                                })
                                            }

                                            function createPagesArray(total) {
                                                let arr = []

                                                for(let i = 1; i <= total; i++) {
                                                    arr.push(i)
                                                }

                                                return arr
                                            }

                                            function changePage(page) {
                                                fetch(catID !== null ? `${apiUrl}/wp/v2/posts?per_page=2&categories=${catID}&page=${page}` : `${apiUrl}/wp/v2/posts?per_page=5&page=${page}`).then(res => {
                                                    return res.json()
                                                }).then(result => {
                                                    posts = result
                                                    currentPage = page
                                                })
                                            }

                                            onMount(async () => {
                                                const res = await fetch(`${apiUrl}/wp/v2/posts?per_page=5&_embed`)
                                                posts = await res.json()

                                                totalPages = res.headers.get('X-WP-TotalPages')

                                                pages = createPagesArray(totalPages)

                                                console.log(pages);
                                            })*/
</script>