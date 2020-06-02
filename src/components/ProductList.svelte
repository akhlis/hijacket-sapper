<script>
    import { onMount } from 'svelte'

    let posts = []

    const apiUrl = process.env.SAPPER_APP_API_URL

    onMount(async () => {
        //const res = await fetch(`${apiUrl}/shops`)
        const res = await fetch(`${apiUrl}/store/index.json`)
        posts = await res.json()

        console.log(posts);
    })
</script>

{#each posts as post}
<li><a rel="prefetch" href="shop/{post.slug}">{post.slug}</a></li>
{/each}
