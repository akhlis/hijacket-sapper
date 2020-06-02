<script>
    import { carts } from './cart.js'
    export let product = {}
    export let price = 0
    import { onMount } from 'svelte'

    onMount(() => {
        carts.useLocalStorage();
    })

    let disabled = false
    
    const increaseBtn = () => {
        product.quantity++
        $carts = $carts
        disabled = false
    }
    const decreaseBtn = () => {
        product.quantity--
        $carts = $carts
        if (product.quantity == 1) disabled = true
    }
    const deleteProduct = () => {
        $carts = $carts.filter( item => product.sku != item.sku )
    }

        console.log('cart' + product)
</script>

<div class="checkout grid grid-cols-7 grid-rows-2 items-center py-3 px-4 first:pt-6 last:mb-4">
    <figure class="col-span-1 row-span-2 pr-2 lg:pr-4">
        <img alt="{product.name}" src="https://hijacket-api.netlify.app/carousel{product.image}" class="cart__item-thumb cart__item-image" width="60" height="60">
    </figure>
    <h3 class="checkout__item-name col-span-4 text-sm lg:text-lg font-medium text-gray-700 mb-0">{product.name}&nbsp;{product.size}</h3>
    <span
        class="checkout__price-total col-span-2 text-xs lg:text-base text-gray-700 text-right font-medium"></span>
    <div class="checkout__counter col-span-2">
        <div class="inline-block text-xs text-gray-600">
            <button class="checkout__decrease bg-gray-100 focus:outline-none py-4px px-2 btn--small" on:click={decreaseBtn} {disabled}>&minus;</button>
            <span class="checkout__qty focus:outline-none py-5px px-2">{product.quantity}</span>
            <button
                class="checkout__increase bg-gray-100 hover:bg-grey focus:outline-none py-4px px-2"
                on:click={increaseBtn}>&plus;</button>
        </div>
    </div>
    <span class="checkout__price col-span-2 text-xs lg:text-base text-primary">{price}</span>
    <span class="checkout__weight col-span-1 text-xs lg:text-base"
        x-text="cart.weight + ' gram'"></span>
    <button class="checkout__remove col-span-1 flex items-center justify-end"
        on:click={deleteProduct}>
        <svg aria-hidden="true" data-prefix="far" data-icon="times" viewBox="0 0 320 512"
            width="16px" height="16px"
            class="times_svg__svg-inline--fa times_svg__fa-times times_svg__fa-w-10 times_svg__fa-2x cart__icon inline-block text-red-500 mr-2">
            <path fill="currentColor"
                d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z">
            </path>
        </svg>
        <span class="text-xs text-gray-600 uppercase">hapus</span>
    </button>
</div>