<script>
    import { onMount } from 'svelte'

    let posts = []
    let totalPages = null
    let currentPage = 1
    let pages = []

    const apiUrl = process.env.SAPPER_APP_API_URL

    function createPagesArray(total) {
        let arr = []

        for(let i = 1; i <= total; i++) {
            arr.push(i)
        }

        return arr
    }

    function changePage(page) {
        if (page > 1) {
            fetch(`${apiUrl}/store/page/${page}/index.json`).then(res => {
                return res.json()
            }).then(result => {
                posts = result
                currentPage = page
            })
        } else {
            fetch(`${apiUrl}/store/index.json`).then(res => {
                return res.json()
            }).then(result => {
                posts = result
                currentPage = page
            })
        }
    }

    onMount(async () => {
        //const res = await fetch(`${apiUrl}/shops`)
        const res = await fetch(`${apiUrl}/store/index.json`)
        posts = await res.json()
        
        totalPages = 3

        pages = createPagesArray(totalPages)

        console.log(posts);
        console.log(pages);
    })
</script>

{#each posts as post}
<li><a rel="prefetch" href="shop/{post.slug}">{post.slug}</a></li>
{/each}

<ul class="pagination">
    {#each  pages as page}
        <li>
            <button on:click="{() => changePage(page)}">
            {page}
            </button>
        </li>
    {/each}
</ul>
