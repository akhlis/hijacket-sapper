<script context="module">
  const apiUrl = process.env.SAPPER_APP_API_URL;

  export async function preload(page, session) {
    const res = await this.fetch(`${apiUrl}/product/index.json`);
    const posts = await res.json();

    return { posts };
  }
</script>

<script>
  import Card from './../../components/Card.svelte';
  export let posts;
</script>

<svelte:head>
  <title>Store</title>
</svelte:head>

<div class="container w-full max-w-screen-xl mx-auto px-3 lg:px-12 py-4 bg-grey">
  <div class="breadcrumb text-sm text-gray-600 mb-4"><span><a class="text-teal-500 hover:text-teal-400" href="."><svg
          aria-hidden="true" focusable="false" data-prefix="fad" data-icon="home" role="img"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
          class="svg-inline--fa fa-home fa-w-18 fa-2x w-4 h-4 inline-block fill-current mr-2">
          <g class="fa-group">
            <path fill="currentcolor"
              d="M336 463.59V368a16 16 0 00-16-16h-64a16 16 0 00-16 16v95.71a16 16 0 01-15.92 16L112 480a16 16 0 01-16-16V300.06l184.39-151.85a12.19 12.19.0 0115.3.0L480 3e2v164a16 16 0 01-16 16l-112-.31a16 16 0 01-16-16.1z"
              class="fa-secondary"></path>
            <path fill="currentcolor"
              d="M573.32 268.35l-25.5 31a12 12 0 01-16.9 1.65L295.69 107.21a12.19 12.19.0 00-15.3.0L45.17 301a12 12 0 01-16.89-1.65l-25.5-31a12 12 0 011.61-16.89L257.49 43a48 48 0 0161 0L408 116.61V44a12 12 0 0112-12h56a12 12 0 0112 12v138.51l83.6 68.91a12 12 0 011.72 16.93z"
              class="fa-primary"></path>
          </g>
        </svg>Home</a><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
        class="svg-inline--fa fa-chevron-right fa-w-8 fa-2x w-3 h-3 inline-block fill-current mx-1">
        <path fill="currentcolor"
          d="M24.707 38.101 4.908 57.899c-4.686 4.686-4.686 12.284.0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284.0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971.0l209.414-209.414c4.686-4.686 4.686-12.284.0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971.0z">
        </path>
      </svg></span>
    <span class="breadcrumb__model"><a class="text-teal-500 capitalize hover:text-teal-400"
        href="/aurelia">Aurelia</a><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right"
        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
        class="svg-inline--fa fa-chevron-right fa-w-8 fa-2x w-3 h-3 inline-block fill-current mx-1">
        <path fill="currentcolor"
          d="M24.707 38.101 4.908 57.899c-4.686 4.686-4.686 12.284.0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284.0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971.0l209.414-209.414c4.686-4.686 4.686-12.284.0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971.0z">
        </path>
      </svg></span>
    <span class="text-gray-600">Hijacket Aurelia Alpine</span>
  </div>
  <section class="product__featured bg-white py-4 px-3 mb-6">
    {#each posts as post}
    <header class="text-center uppercase flex justify-between items-center mb-4">
      <h3 class="text-white text-xs font-medium relative bg-primary py-3px px-3 mb-0 border-tag">{post.title}</h3>
      <a class="text-teal-500 text-sm hover:underline uppercase" href="/aurelia/">lihat semua</a>
    </header>
    <Card cards={post.related_product}/>
    {/each}
  </section>
</div>