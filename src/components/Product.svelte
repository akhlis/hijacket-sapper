<script>
    import {
        carts
    } from './cart.js';
    import {
        onMount
    } from 'svelte'

    onMount(() => {
        carts.useLocalStorage();
    })

    export let products = [];
    let selectedVariant = 0;
    let quantity = 1;
    let value = 1;
    let disabled = false;

    let selected = 0

    function setSelected(e) {
        selectedVariant = Number(e.target.value)
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

    const buyNow = () => {
        for (let item of $carts) {
            if (item.sku == products.sku + '-' + products.variants[selectedVariant].size) {
                item.quantity++
                $carts = $carts
                return
            }
        }
        $carts = [...$carts, {
            name: products.title,
            image: products.images[0].image,
            sku: products.sku + '-' + products.variants[selectedVariant].size,
            size: products.variants[selectedVariant].size,
            price: products.variants[selectedVariant].price,
            quantity: quantity
        }]
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
</script>

<div class="product__info-badge mb-4">
    <span
        class="text-white text-sm uppercase text-center leading-none bg-green-500 rounded-md py-1 px-3">ORIGINAL</span>
    <span class="text-white text-sm uppercase text-center leading-none bg-secondary rounded-md py-1 px-3">GARANSI
        100%</span>
</div>

<h1 class="product__title text-2xl font-medium text-gray-700 border-0 border-b border-solid border-gray-300 pb-3">
    <span class="product__name">{ products.title }</span>
    <span class="product__size">{products.variants[selectedVariant].size}</span>
</h1>

<div class="product__price-wrap flex items-center justify-between mb-6">
    <h3 class="product__price text-primary font-medium lg:text-3xl mt-2 mb-0">
        {localPrice(products.variants[selectedVariant].price)}</h3>
    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
        class="svg-inline--fa fa-heart fa-w-16 fa-2x product__price-heart w-6 h-6 inline-block text-gray-700  hover:text-primary fill-current mr-2">
        <path fill="currentColor"
            d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
            class=""></path>
    </svg>
</div>

<div class="product__promo mb-6">
    <label class="product__promo-label w-16 inline-block">
        <strong class="product__promo-text text-sm lg:text-base font-medium text-gray-700">Promo</strong>
    </label>: <span class="product__promo-gift">Bonus
        Souvenir Gantungan Kunci Cantik</span>
</div>
<div id="product__size" class="product__variant mb-6">
    <label class="product__variant-label w-16 inline-block">
        <strong class="product__variant-text text-sm lg:text-base font-medium text-gray-700">Size</strong>
    </label>:
    {#each products.variants || [] as variant, index}
        <button
            class="product__variant-button text-sm text-gray-700 hover:text-primary focus:outline-none bg-transparent border border-solid border-gray-400 hover:border-primary cursor-pointer transition duration-75 ease-in-out py-4px px-2 mr-2 {selectedVariant === index ? 'selected' : ''}" value="{variant.id}" name="{variant.name}"
            on:click="{setSelected}">{variant.name}
        </button>
    {/each}
</div>

<div class="product__quantity flex items-center mb-6">
    <div class="product__qty">
        <label class="product__qty-label w-16 inline-block">
            <strong class="product__qty-text text-sm lg:text-base font-medium text-gray-700">Qty</strong>
        </label>:
    </div>
    <div class="product__counter ml-1">
        <button
            class="product__counter-btn text-sm text-gray-700 bg-grey border-0 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 rounded-sm cursor-pointer py-6px px-3" on:click={decreaseBtn}>&minus;</button>
        <span
            class="product__counter-qty text-sm text-gray-700 py-6px px-3">{quantity}</span>
        <button
            class="product__counter-btn text-sm text-gray-700 bg-grey border-0 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 rounded-sm cursor-pointer py-6px px-3" on:click={increaseBtn}>&plus;</button>
    </div>
</div>

<div class="product__color flex items-center mb-6">
    <label class="product__color-label w-16 inline-block">
        <strong class="product__color-text text-sm lg:text-base font-medium text-gray-700">Warna</strong>
    </label>: 
    <span class="product__color-item text-gray-700 capitalize ml-2">{products.color.name}</span>
</div>

<div class="product__order flex flex-wrap items-center mb-6">
    <div class="product__order-button">
        <button class="product__order-cart text-white leading-none flex bg-tertiery hover:bg-secondary focus:outline-none items-center border-0 rounded py-2 px-4 mr-4 mb-3 lg:mb-0" on:click="{buyNow}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="product__cart-icon w-4 h-4 inline-block fill-current mr-2"><path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
            <span class="text-white">Beli Sekarang</span>
        </button>
    </div>
    <div class="product__order-button">
        <a href="https://api.whatsapp.com/send?phone==6282324089982&amp;text=Assalamu%27alaikum%20kak%2C%20saya%20mau%20order%20{products.name}%20{products.variants[selectedVariant].size}%20ini%20apa%20stoknya%20masih%20ada%20ya%20kak%3F" target="_blank" rel="noopener" class="product__order-wa text-white leading-none no-underline flex bg-green-500 hover:bg-green-400 focus:outline-none items-center border-0 rounded py-2 px-4">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-whatsapp fa-w-14 fa-2x product__cart-icon w-4 h-4 inline-block fill-current mr-2"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" class=""></path></svg>
            <span class="text-white">Beli via Whatsapp</span>
        </a>
    </div>
</div>

<div class="product__safety flex items-center text-teal-500 bg-green-100 rounded-sm py-3 px-3 mb-6">
    <span class="product__safety-icon w-4 h-4">
        <svg aria-hidden="true" data-prefix="fas" data-icon="lock-alt" viewBox="0 0 448 512" width="14px"
            height="14px"
            class="lock-alt_svg__svg-inline--fa lock-alt_svg__fa-lock-alt lock-alt_svg__fa-w-14 lock-alt_svg__fa-2x">
            <path fill="currentColor"
                d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zM264 392c0 22.1-17.9 40-40 40s-40-17.9-40-40v-48c0-22.1 17.9-40 40-40s40 17.9 40 40v48zm32-168H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z">
            </path>
        </svg>
    </span>
    <div class="product__safety-info pl-3">
        <h4 class="text-current text-base mb-2">Transaksi 100% aman dan mudah</h4>
        <p class="text-xs mb-2">Bila ada pertanyaan, silahkan hubungi WA 082324089982</p>
    </div>
</div>

<div class="product__guaranty">
    <h4 class="text-base text-center">KENAPA HARUS BELI DISINI?</h4>
    <p class="text-sm text-gray-600"><b>HIJACKET.NET</b> merupakan Official Store Resmi produk Hijacket yang telah dipercaya oleh lebih dari <b>300.000-an hijaber</b> dalam <b>waktu 3 tahun</b> setelah launching. Semua produk yang kami jual dijamin <b>ORIGINAL 100%</b> dan <b>BERGARANSI RESMI</b> dari brand Hijacket.</p>
    <p class="text-xs text-italic text-red-500">“Jaket Hijacket <b>diproduksi langsung</b> dan dikirim ke rumah kamu. <b>Garansi kepuasan</b>, jika ada produk yang tidak sesuai dan tidak sampai, kamu akan mendapatkan <b>100% uang kembali</b>”</p>
</div>

<style>
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
.product__variant-button {
    background-image: none;
}
.product__variant-button.selected {
    @apply text-primary border-primary;
}
.product__counter-btn {
    background-image: none;
}
</style>