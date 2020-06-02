<!-- <script context="module">
    const apiUrl = process.env.SAPPER_APP_API_URL
    
	export async function preload({ params, query }) {
		const res = await this.fetch(`${apiUrl}/${params.slug}/index.json`);
		const data = await res.json()

        return { product: data }
	}
</script>

<script>
    export let product
    console.log(product)
</script>


{#each product as post}
<li><a rel="prefetch" href="shop/{post.slug}">{post.slug}</a></li>
{/each}
 -->


<script context="module">
	export async function preload({ params, query }) {
		return this.fetch('product/index.json').then(r => r.json()).then(posts => {
            return { product }
        })
	}
</script>

<script>
    export let product
    console.log(product)
</script>


{#each product as post}
<li><a rel="prefetch" href="shop/{post.slug}">{post.slug}</a></li>
{/each}

