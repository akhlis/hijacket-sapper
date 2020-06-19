<script context="module">
  const apiUrl = process.env.SAPPER_APP_API_URL;
  export async function preload({ params, query }) {
    const res = await this.fetch(`${apiUrl}/index.json`);
    const posts = await res.json();

    return { posts };
  }
</script>

<script>
  import Card from './../../components/Card.svelte';
  export let posts;
  let count = posts.noOfPages,
      current = 1;
  count = parseInt(count);
  $: pages = count > 10 ? 10 : count;

  // const apiUrl = process.env.SAPPER_APP_API_URL;

  // function changePage(page) {
  //   fetch(`${apiUrl}/${page !== 1 ? 'page/' + page : ''}/index.json`).then(res => {
  //     return res.json()
  //   }).then(result => {
  //     posts = result
  //     current = page
  //     console.log(page);
  //   })
  // }
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
    <span class="text-gray-600">Hijacket Aurelia Alpine</span></div>

  <section class="product__featured bg-white py-4 px-3 mb-6">
    <header class="text-center uppercase flex justify-between items-center mb-4">
      <h3 class="text-white text-xs font-medium relative bg-primary py-3px px-3 mb-0 border-tag">Pilih warna hijacket
        Aurelia Favoritmu</h3>
      <a class="text-teal-500 text-sm hover:underline uppercase" href="/aurelia/">lihat semua</a>
    </header>
    <Card cards={posts.data}/>
  </section>
<!-- 
{#if count>1}
<div class="flex flex-col lg:flex-row justify-between items-center">
  <div class="text-xs text-gray-500 items-center mb-4 lg:mb-0">Page {current} of {count}</div>
  <div class="flex-1 flex items-center text-center justify-center">
    {#if current > 1}
      <button
        class="pagination-link text-sm text-gray-600 hover:text-secondary hover:no-underline bg-white rounded-sm shadow hover:shadow-lg py-1 px-3 mr-1"
        on:click={() => changePage(1)}>
        <span>««</span>
      </button>
      <button
        class="pagination-link text-sm text-gray-600 hover:text-secondary hover:no-underline bg-white rounded-sm shadow hover:shadow-lg py-1 px-3 mx-1"
        on:click={() => changePage(current - 1)}>
        <span>«</span>
      </button>
    {/if}
    {#each { length: pages } as _, i}
      <button
        class="pagination-link text-sm text-gray-600 hover:text-secondary hover:no-underline bg-white rounded-sm shadow hover:shadow-lg py-1 px-3 mx-1"
        class:active={current === i + 1}
        on:click={() => changePage(i + 1)}>
        {i + 1}
      </button> 
    {/each}
    {#if current < count}
      <button
        class="pagination-link text-sm text-gray-600 hover:text-secondary hover:no-underline bg-white rounded-sm shadow hover:shadow-lg py-1 px-3 mx-1"
        on:click={() => changePage(current + 1)}>
        <span>»</span>
      </button>
      <button
        class="pagination-link text-sm text-gray-600 hover:text-secondary hover:no-underline bg-white rounded-sm shadow hover:shadow-lg py-1 px-3 ml-1"
        on:click={() => changePage(count)}>
        <span>»»</span>
      </button> 
    {/if}
  </div>
</div>
{/if} -->

{#if count>1}
<div class="flex flex-col lg:flex-row justify-between items-center">
  <div class="text-xs text-gray-500 items-center mb-4 lg:mb-0">Page {current} of {count}</div>
  <div class="flex-1 flex items-center text-center justify-center">
    <ul class="pagination flex items-center justify-center text-sm text-center mx-auto">
    {#if current > 1}
      <li class="pagination__item list-none mr-1"><a rel="prefetch" href="/store" class="text-gray-600 hover:text-secondary hover:no-underline bg-white rounded-sm shadow hover:shadow-lg py-1 px-3">««</a></li>
      <li class="pagination__item list-none mx-1"><a rel="prefetch" href="{current !== 1 ? `store/page/${current - 1}` : 'store' }" class="text-gray-600 hover:text-secondary hover:no-underline bg-white rounded-sm shadow hover:shadow-lg py-1 px-3">«</a></li>
    {/if}
    {#each { length: pages } as _, i}
    <li class="pagination__item list-none mx-1"><a rel="prefetch" href="{(i + 1) !== 1 ? `store/page/${i + 1}` : 'store' }" class="pagination__item-link text-gray-600 hover:text-secondary hover:no-underline bg-white rounded-sm shadow hover:shadow-lg py-1 px-3 { (i + 1) === current ? 'active' : '' }">{i + 1}</a></li>
    {/each}
    {#if current < count}
    <li class="pagination__item list-none mx-1"><a rel="prefetch" href="{current !== 1 ? `store/page/${current + 1}` : 'store' }" class="text-gray-600 hover:text-secondary hover:no-underline bg-white rounded-sm shadow hover:shadow-lg py-1 px-3">»</a></li>
    <li class="pagination__item list-none ml-1"><a rel="prefetch" href="{`/store/page/${count}`}" class="text-gray-600 hover:text-secondary hover:no-underline bg-white rounded-sm shadow hover:shadow-lg py-1 px-3">»»</a></li>
    {/if}
    </ul>
  </div>
</div>
{/if}
</div>

<style>
  .pagination__item-link.active {
    @apply text-white bg-primary;
  }
</style>