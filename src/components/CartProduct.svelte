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

<div class="cart__item">
    <div class="cart__item-media">
        <img alt="{product.name}" src="https://hijacket-api.netlify.app/carousel{product.image}" class="cart__item-image" width="60" height="60">
    </div>
    <h3 class="cart__item-name">{product.name}&nbsp;{product.size}</h3>
    <div class="cart__item-quantity cart__counter">
        <button
            class="cart__counter-btn" on:click={decreaseBtn} {disabled}>&minus;</button>
        <span
            class="cart__counter-qty">{product.quantity}</span>
        <button
            class="cart__counter-btn" on:click={increaseBtn}>&plus;</button>
    </div>
    <span
        class="cart__item-price">{price}</span>
    <button class="cart__item-remove" on:click={deleteProduct}>
        <svg aria-hidden="true" data-prefix="far" data-icon="times" viewBox="0 0 320 512" width="16px"
            height="16px"
            class="times_svg__svg-inline--fa times_svg__fa-times times_svg__fa-w-10 times_svg__fa-2x">
            <path fill="currentColor"
                d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z">
            </path>
        </svg>
    </button>
</div>

<style>
.cart__item {
    @apply grid grid-cols-7 grid-rows-2 col-gap-2 row-gap-1 items-center mb-2;
}
.cart__item-media {
    @apply col-span-1 row-span-2 pt-6px;
}
.cart__item-image {
    @apply max-w-full h-auto;
}
.cart__item-name {
    @apply col-span-6 text-base font-normal text-gray-700 m-0;
}
.cart__item-quantity {
    @apply col-span-3 text-xs text-gray-600;
}
.cart__item-price {
    @apply col-span-2 col-start-5 text-xs text-gray-700 font-normal text-right;
}
.cart__counter-btn {
    @apply text-sm text-gray-600 bg-grey border-0 rounded-sm cursor-pointer py-4px px-2;

    &:focus {
        @apply outline-none bg-gray-100;
    }

    &:hover {
        @apply bg-gray-100;
    }
}
.cart__counter-qty {
    @apply text-sm text-gray-600 py-4px px-2;
}
.cart__item-remove {
    @apply text-right bg-transparent border-0 rounded-sm cursor-pointer;

    &:focus {
        @apply outline-none;
    }

    & svg {
        @apply inline-block text-red-500;
    }
}
</style>