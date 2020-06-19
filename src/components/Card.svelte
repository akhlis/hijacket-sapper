<script>
	import { lazyload } from './../actions/lazyload'
	export let cards = [];
</script>

<div class="grid grid-cols-2 lg:grid-cols-5 gap-6">
    {#each cards || [] as card, i}
    <div class="product-card col-span-1 transition duration-500 ease-in-out hover:transform hover:-translate-y-1 hover:shadow-lg">
        <div class="product-card__image relative">
            <a class="product-card__link" rel="prefetch" href="{card.slug}">
			{#if card.cover}
			<figure class="relative pb-2/3">
			  <img
				use:lazyload
				src="https://api.hijacket.net{card.cover}"
				data-src="https://api.hijacket.net{card.cover}"
				class="absolute h-full w-full object-cover blur-up"
				alt="{card.title}"/>
			</figure>
			{/if}
            </a> 
            {#if card.badge !== undefined}
            <span class="product-card__badge absolute text-sm text-white top-2 left-2 bg-green-500 px-2">{card.badge}</span>
            {/if}
        </div> 
        <div class="product-card__info pt-3 pl-2">
            <a class="product-card__link" rel="prefetch" href="{card.slug}">
				<h3 class="product-card__title product__name text-base text-gray-700 font-medium mb-1">{card.title}</h3>
            </a>
            <p class="product-card__price text-primary font-medium mb-3">Rp {card.price}</p>
        </div>
    </div>
    {/each}
</div>

<style>
:global(.blur-up) {
    filter: blur(5px);
    transition: filter 1s;
}
:global(.blur-up[lazy="loaded"]) {
    filter: blur(0);
}
</style>