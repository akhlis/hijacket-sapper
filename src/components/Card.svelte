<script>
	export let cards = [];
</script>

<div class="grid grid-cols-2 lg:grid-cols-5 gap-6">
    {#each cards || [] as card, i}
    <div class="product-card col-span-1 transition duration-500 ease-in-out hover:transform hover:-translate-y-1 hover:shadow-lg">
        <div class="product-card__image relative">
            <a class="product-card__link" rel="prefetch" href="store/{card.slug}">
            <img class="product__image" src="https://api.hijacket.net{card.cover}" alt="{card.title}"/>
            </a>
            <span class="product-card__badge absolute text-sm text-white top-2 left-2 bg-green-500 px-2 new">{card.badge}</span>
        </div>
        <div class="product-card__info pt-3 pl-2">
            <a class="product-card__link" rel="prefetch" href="store/{card.slug}">
				<h3 class="product-card__title product__name text-base text-gray-700 font-medium mb-1">{card.title}</h3>
            </a>
            <p class="product-card__price text-primary font-medium mb-3">Rp {card.price}</p>
        </div>
    </div>
    {/each}
</div>