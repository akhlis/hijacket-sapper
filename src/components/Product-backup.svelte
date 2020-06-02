<script>
    import { carts } from './cart.js';
    import { onMount } from 'svelte'

    onMount(() => {
        carts.useLocalStorage();
    })

    export let products = [];
    let items = [];
    let name;
    let image;
    let color;
    let sku;
    let size;
    let price;
    let quantity = 1;
    let value = 1;
    let disabled = false;

    $: name = products.title;
    $: image = products.images[0].image;
    $: size = products.variants[0].size;
    $: price = products.variants[0].price;
    $: color = products.color.name;
    $: items = {name: name, image: image, sku: sku, size: size, price: price, quantity: quantity };

    let selected = 0

    function setSelected(e){
        const newValue = Number(e.target.value)

        selected = newValue
        sku = products.sku + '-' + products.variants[selected].size
        size = products.variants[selected].size
        price = products.variants[selected].price
    }

    function localPrice(angka) {
        let myNumber = angka.toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        return myNumber;
    }

    const buyProduct = () => {
        for (let item of $carts){
            if (item.sku == sku){
                item.quantity++
                $carts = $carts
                return
            }
        }
        $carts = [ ...$carts, items]
    }

    const increaseBtn = () => {
        quantity++
        disabled = false
    }

    const decreaseBtn = () => {
        quantity--
        if (quantity == 1) disabled = true
    }

    const increaseCount = () => {
        count = count + 1
    }
    
    $: console.log(`${items}`)
</script>

<h1 class="product__title text-2xl font-medium text-gray-700 border-0 border-b border-solid border-gray-300 pb-3">
    <span class="product__name">{ products.title }</span>
    <span class="product__size">{size}</span>
</h1>
<div class="product__desc">
    <div class="product__price-wrap">
        <h3 class="product__price">{localPrice(price)}</h3>
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-heart fa-w-16 fa-2x product__price-heart"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z" class=""></path></svg>
    </div>
    <div class="product__promo">
        <label class="product__promo-label">
            <strong class="product__promo-text">Promosi</strong>
        </label>: <span class="product__promo-gift">Bonus
            Souvenir Gantungan Kunci Cantik</span>
    </div>
    
    <div id="product__size" class="product__variant">
        <label class="product__variant-label">
            <strong class="product__variant-text">Size</strong>
        </label>:
        {#each products.variants || [] as variant, index}
        <button
            class="product__variant-button {selected === index ? 'selected' : ''}" value="{variant.id}" name="{variant.name}"
            on:click="{setSelected}">{variant.name}</button>
        {/each}
    </div>

    <div class="product__quantity">
        <div class="product__qty">
            <label class="product__qty-label">
                <strong class="product__qty-text">Qty</strong>
            </label>:
        </div>
        <div class="product__counter">
            <button
                class="product__counter-btn" on:click={decreaseBtn}>&minus;</button>
            <span
                class="product__counter-qty">{quantity}</span>
            <button
                class="product__counter-btn" on:click={increaseBtn}>&plus;</button>
        </div>
    </div>

    <div class="product__color">
        <label class="product__color-label">
            <strong class="product__color-text">Warna</strong>
        </label>: 
        <span class="product__color-item">{color}</span>
    </div>

    <div class="product__order">
        <div class="product__order-button">
            <button class="product__order-cart" on:click="{buyProduct}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="product__cart-icon"><path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
                <span class="text-white">Beli Sekarang</span>
            </button>
        </div>
        <div class="product__order-button">
            <a href="https://api.whatsapp.com/send?phone==6282324089982&amp;text=Assalamu%27alaikum%20kak%2C%20saya%20mau%20order%20{name}%20{size}%20ini%20apa%20stoknya%20masih%20ada%20ya%20kak%3F" target="_blank" rel="noopener" class="product__order-wa">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-whatsapp fa-w-14 fa-2x product__wa-icon"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" class=""></path></svg>
                <span class="text-white">Beli via Whatsapp</span>
            </a>
        </div>
    </div>
</div>


<style>
.product__price-wrap {
    @apply flex items-center justify-between mb-6;
}
.product__price {
    @apply text-primary font-medium mt-2 mb-0;
}
.product__price-heart {
    @apply w-6 h-6 inline-block text-gray-700 fill-current mr-2;
}
.product__price-heart:hover {
    @apply text-primary;
}
.product__promo {
    @apply mb-6;
}
.product__promo-label {
    @apply w-16 inline-block;
}
.product__promo-text {
    @apply text-sm font-medium text-gray-700;
}
.product__promo-gift {
    @apply relative text-xs text-white leading-none bg-primary pt-3px pb-5px px-3;
}
.product__promo-gift:before {
    position: absolute;
    top: 0;
    right: -7px;
    display: inline-block;
    content: "";
    border-top: 12px solid #ff9800;
    border-bottom: 12px solid #ff9800;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
}
.product__variant  {
    @apply mb-6;
}
.product__variant-label {
    @apply w-16 inline-block;
}
.product__variant-text {
    @apply text-sm font-medium text-gray-700;
}
.product__variant-button {
    @apply text-sm text-gray-700 bg-transparent border border-solid border-gray-400 cursor-pointer transition duration-75 ease-in-out py-4px px-2 mr-2;
}
.product__variant-button {
    background-image: none;
}
.product__variant-button:hover {
    @apply text-primary border-primary;
}
.product__variant-button:focus {
    @apply outline-none;
}
.product__variant-button.selected {
    @apply text-primary border-primary;
}
.product__quantity {
    @apply flex items-center mb-6;
}
.product__qty-label {
    @apply w-16 inline-block;
}
.product__qty-text {
    @apply text-sm font-medium text-gray-700;
}
.product__counter {
    @apply ml-1;
}
.product__counter-btn {
    @apply text-sm text-gray-700 bg-grey border-0 rounded-sm cursor-pointer py-6px px-3;
}
.product__counter-btn {
    background-image: none;
}
.product__counter-btn:focus {
    @apply outline-none bg-gray-100;
}
.product__counter-btn:hover {
    @apply bg-gray-100;
}
.product__counter-qty {
    @apply text-sm text-gray-700 py-6px px-3;
}
.product__color {
    @apply flex items-center mb-6;
}
.product__color-label {
    @apply w-16 inline-block;
}
.product__color-text {
    @apply text-sm font-medium text-gray-700;
}
.product__color-item {
    @apply text-gray-700 capitalize ml-2;
}
.product__order {
    @apply flex flex-wrap items-center mb-6;
}
.product__order-cart {
    @apply text-white leading-none flex bg-tertiery items-center border-0 rounded py-2 px-4 mr-4 mb-3;
}
.product__order-cart:hover {
    @apply bg-secondary;
}
.product__order-cart:focus {
    @apply outline-none;
}
.product__cart-icon,
.product__wa-icon {
    @apply w-4 h-4 inline-block fill-current mr-2;
}
.product__order-wa {
    @apply text-white leading-none no-underline flex bg-green-500 items-center border-0 rounded py-2 px-4;
}
.product__order-wa:hover {
    @apply bg-green-400;
}
.product__order-wa:focus {
    @apply outline-none;
}
@screen lg {
    .product__price {
        @apply text-3xl;
    }
    .product__promo-text,
    .product__variant-text,
    .product__qty-text,
    .product__color-text {
        @apply text-base;
    }
    .product__order-cart {
        @apply mb-0;
    }
}

</style>