<script>
    import { onMount } from 'svelte'

    let categories = []

    const apiUrl = process.env.SAPPER_APP_API_URL


    onMount(async () => {
        const res = await fetch(`${apiUrl}/product/index.json`)
        categories = await res.json()

        console.log(categories);
    })
</script>

<ul>
{#each categories as category}
    <li><a href="product/{category.title}">{category.title}</a></li>
{/each}
</ul>