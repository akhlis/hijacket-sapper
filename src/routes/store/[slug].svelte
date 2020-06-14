<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`https://api.hijacket.net/${params.slug}/index.json`);
    const post = await res.json();

      return { post };
  }
</script>

<script>
  import marked from "marked";
  import Carousel from './../../components/Carousel.svelte';
  import Product from './../../components/Product.svelte';
  import Card from './../../components/Card.svelte';

  export let post;
</script>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }

  .content :global(img) {
    max-width: 100%;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
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
    <span class="text-gray-600">Hijacket Aurelia Alpine</span></div>

  <div class="product bg-white grid grid-cols-1 lg:grid-cols-12 gap-8">
    <div class="product__media bg-white col-span-1 lg:col-span-6 lg:py-4 lg:pl-4">
      <Carousel slides={post.images} />
    </div>
    <div class="product__body bg-white col-span-1 lg:col-span-6 py-4 px-3 lg:px-4">
      <Product products={post} />
    </div>
  </div>
  <div class="product__content bg-white py-8 px-3 lg:px-4 mb-6">
    <div class="border-b border-solid border-gray-300 mb-8">
      <span class="inline-block text-primary border-b-2 border-solid border-primary py-2">Info Detail</span>
    </div>
    <div class="max-w-screen-md mx-auto text-sm text-gray-700">
    {@html marked(post.content)}
    </div>
	<div class="max-w-screen-md mx-auto text-sm text-gray-700">
	{#each post.galleries || [] as gallery}
		<div class="mb-4">
			<img class="product__image" src="https://api.hijacket.net{gallery.image}" alt="image slider" />
		</div>
	{/each}
	</div>
  </div>
  <section class="product__featured bg-white py-4 px-3 mb-6">
    <header class="text-center uppercase flex justify-between items-center mb-4">
      <h3 class="text-white text-xs font-medium relative bg-primary py-3px px-3 mb-0 border-tag">Pilih warna hijacket
        Aurelia Favoritmu</h3>
      <a class="text-teal-500 text-sm hover:underline uppercase" href="/aurelia/">lihat semua</a>
    </header>
    <Card cards={post.related_product}/>
  </section>
    <section class="product__featured bg-white py-4 px-3 mb-6">
    <header class="text-center uppercase flex justify-between items-center mb-4">
      <h3 class="text-white text-xs font-medium relative bg-primary py-3px px-3 mb-0 border-tag">Pilih warna hijacket
        Aurelia Favoritmu</h3>
      <a class="text-teal-500 text-sm hover:underline uppercase" href="/aurelia/">lihat semua</a>
    </header>
    <Card cards={post.related_color}/>
  </section>
</div>
