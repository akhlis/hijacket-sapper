<script>
    import { fly } from 'svelte/transition'
	import { carts } from './cart.js'
    import Item from './CheckoutProduct.svelte'
    import { onMount } from 'svelte'
    import AutoComplete from './AutoComplete.svelte'


    let promise = Promise.resolve([]);

    export let districts;
    let selectedDistrict;
    let districtId = 1;

    $: if (selectedDistrict !== undefined) {
        console.log(selectedDistrict.id)
        districtId = selectedDistrict.id
    }
	
	async function fetchCourier() {
		const res = await self.fetch(`https://qirim.netlify.app/api/cost/23/${districtId}`);
		const data = await res.json();

		if (res.ok) {
		  return data;
		} else {
		  throw new Error(data);
		}
	}

    let getCost = () => {
		promise = fetchCourier();
	}

    $: selectedDistrict, getCost();


    onMount(() => {
        carts.useLocalStorage();
    })

    let itemInCart = 0;
    let totalPrice = 0;
    let visible = false;
    
    const clearCart = () => {
        $carts = []
    }

    function localPrice(amount) {
        return amount.toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
    }

    function toggle() {
		visible = !visible;
	}

    $:{
        let qty = 0
        let price = 0
        for(let item of $carts){
            qty += item.quantity
            price += item.price * item.quantity
        }
        itemInCart = qty
        totalPrice = price
    }
</script>

{#await promise}
  <p>loading</p>
{:then couriers}
    <h3>{couriers.title}</h3>
	{#each couriers.couriers || [] as courier}
	<p>{courier.name}  {courier.service} {courier.cost}</p>
	{/each}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}




<section class="block__checkout-order bg-grey pt-8">
    <div class="checkout-box container w-full max-w-screen-xl mx-auto px-3 lg:px-12 pb-4">
        <div class="grid grid-cols-12 gap-8">
            <div class="col-span-8 bg-white">
                <div class="flex justify-between items-center text-gray-700 py-2 px-3">
                    <p class="mb-0">Checkout Produk</p>
                    <button
                        class="cart__item-btn flex items-center text-xs uppercase text-gray-500 hover:text-primary focus:outline-none"
                        on:click={clearCart}>
                        <svg aria-hidden="true" data-prefix="far" data-icon="trash-alt"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                            class="trash-alt_svg__svg-inline--fa trash-alt_svg__fa-trash-alt trash-alt_svg__fa-w-14 trash-alt_svg__fa-2x text-red-500 mx-auto"
                            width="14px" height="14px">
                            <path fill="currentColor"
                                d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z">
                            </path>
                        </svg>
                        <span class="ml-3">Clear Cart</span></button>
                </div>
                <div class="bg-grey pt-4"></div>

                {#each $carts as product}
                <Item product={product} price={localPrice(product.price * product.quantity)} />
                {/each}

                <div class="bg-grey pt-8"></div>
                <div class="py-4 px-4">
                    <form action="">
                        <div class="checkout__form form-address">
                            <header class="checkout__form-header">
                                <h3 class="text-gray-700">Detail Alamat Pengiriman</h3>
                            </header>
                            <div class="grid grid-cols-2 gap-6">
                                <div class="form-address__item col-span-1 mb-2">
                                    <label class="block text-gray-700 mb-2" for="name">Nama Lengkap<span
                                            class="text-red-500">*</span></label>
                                    <input
                                        class="w-full text-sm border border-solid rounded-sm focus:outline-none py-3px px-3"
                                        type="text" id="name" name="Name" value="" placeholder="Nama lengkap anda"
                                        required="">
                                </div>
                                <div class="form-address__item col-span-1 mb-2">
                                    <label class="block text-gray-700 mb-2" for="name">Email (Opsional)</label>
                                    <input
                                        class="w-full text-sm border border-solid rounded-sm focus:outline-none py-3px px-3"
                                        type="text" id="email" name="email" value="" placeholder="Email anda"
                                        required="">
                                </div>
                            </div>

                            <div class="grid grid-cols-2 gap-6">
                                <div class="form-address__item mb-2">
                                    <label class="block text-gray-700 mb-2" for="name">No. HP/WA<span
                                            class="text-red-500">*</span></label>
                                    <input
                                        class="w-full text-sm border border-solid rounded-sm focus:outline-none py-3px px-3"
                                        type="text" id="phone" name="HP" value="" placeholder="No HP/Whatsapp anda"
                                        required="">
                                </div>
                                <div class="form-address__item relative col-span-1 mb-2">
                                    <label class="block text-gray-700 mb-2" for="name">Kota atau Kecamatan</label>
                                    <AutoComplete
                                        items={districts}
                                        placeholder="Masukkan nama kecamatan"
                                        bind:selectedItem={selectedDistrict}
                                        labelFieldName="name"
                                        minCharactersToSearch="3"
                                        maxItemsToShowInList="10"/>
                                </div>
                            </div>

                            <div class="form-address__item mb-2">
                                <label class="block text-gray-700 mb-2" for="name">Alamat Lengkap<span
                                        class="text-red-500">*</span></label>
                                <textarea
                                    class="w-full text-sm border border-solid rounded-sm focus:outline-none py-3px px-3"
                                    rows="3" id="alamat" name="Alamat" value=""
                                    placeholder="Masukkan alamat lengkap + kode POS anda" required=""></textarea>
                            </div>
                        </div>
                    </form>
                </div>

                {#if selectedDistrict !== undefined}
                <p>{selectedDistrict.id} {selectedDistrict.name}</p>
                {/if}

                <div class="bg-grey pt-8"></div>

                <div class="form-address__item py-4 px-4 mb-4">
                    <div class="flex items-center text-gray-600 border-b border-solid border-grey py-3 mb-4">
                        <svg aria-hidden="true" data-prefix="fal" data-icon="shipping-fast"
                            viewBox="0 0 640 512" width="36" height="36"
                            class="shipping-fast_svg__svg-inline--fa shipping-fast_svg__fa-shipping-fast shipping-fast_svg__fa-w-20 shipping-fast_svg__fa-5x w-6 h-6 inline-block fill-current mr-2">
                            <path fill="currentColor"
                                d="M280 192c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240zm352 192h-24V275.9c0-16.8-6.8-33.3-18.8-45.2l-83.9-83.9c-11.8-12-28.3-18.8-45.2-18.8H416V78.6c0-25.7-22.2-46.6-49.4-46.6H113.4C86.2 32 64 52.9 64 78.6V96H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H96V78.6c0-8.1 7.8-14.6 17.4-14.6h253.2c9.6 0 17.4 6.5 17.4 14.6V384H207.6C193 364.7 170 352 144 352c-18.1 0-34.6 6.2-48 16.4V288H64v144c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16h195.2c-1.1 5.2-1.6 10.5-1.6 16 0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16H632c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm-488 96c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm272-320h44.1c8.4 0 16.7 3.4 22.6 9.4l83.9 83.9c.8.8 1.1 1.9 1.8 2.8H416V160zm80 320c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-96h-16.4C545 364.7 522 352 496 352s-49 12.7-63.6 32H416v-96h160v96zM256 248v-16c0-4.4-3.6-8-8-8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8z">
                            </path>
                        </svg>
                        <span>Silahkan pilih dan klik kurir pengiriman!</span>
                    </div>


                </div>
            </div>
            <div class="col-span-4 bg-white py-4 px-4">
                <div class="checkout-form__info">
                    <header class="checkout-form__header">
                        <h3 class="checkout-form__title text-gray-700">Ringkasan Pesanan</h3>
                    </header>
                    <div
                        class="checkout-form__box checkout-form__footer flex justify-between items-center text-sm text-gray-700 border-t border-dashed pt-2 mb-3">
                        <div class="checkout-form--left">
                            <p class="mb-0">Subtotal <span>{localPrice(totalPrice)}</span></p>
                        </div>
                        <div class="checkout-form--right">
                            <span class="checkout-form__subtotal"></span>
                        </div>
                    </div>
                    <div class="checkout-form__box flex justify-between items-center text-sm text-gray-700 mb-3">
                        <div class="checkout-form--left">
                            <p class="mb-0">Berat Total</p>
                        </div>
                        <div class="checkout-form--right">
                            <span class="checkout-form__weight-total"></span>
                        </div>
                    </div>
                    <div class="checkout-form__box flex justify-between items-center text-sm text-gray-700 mb-3">
                        <div class="checkout-form--left">
                            <p class="mb-0">Biaya Pengiriman</p>
                        </div>
                        <div class="checkout-form--right">
                            <span class="checkout-form__cost-courier">Pilih kurir dulu</span>
                        </div>
                    </div>
                    <div class="checkout-form__box flex justify-between items-center text-sm text-gray-700 mb-3">
                        <div class="flex-grow w-3/5 mr-4">
                            <span class="next-input"><input
                                    class="w-full text-sm border border-solid rounded-sm focus:outline-none py-3px px-3"
                                    type="text" id="automation-voucher-input" placeholder="Masukkan Kode Voucher"
                                    value="" height="100%"></span>
                        </div>
                        <div class="flex-none">
                            <button type="button"
                                class="text-white leading-none flex bg-teal-500 hover:bg-teal-400 items-center focus:outline-none rounded py-2 px-4">GUNAKAN</button>
                        </div>
                    </div>
                    <div
                        class="checkout-form__box flex justify-between items-center text-sm text-gray-700 font-medium mb-3">
                        <div class="checkout-form--left">
                            <h4 class="mb-0">Total Bayar</h4>
                        </div>
                        <div class="checkout-form--right">
                            <span class="text-primary"></span>
                        </div>
                    </div>
                </div>
                <div class="checkout-form__button pt-8">
                    <button type="submit"
                        class="checkout-form__btn w-full text-white text-center leading-none uppercase flex bg-green-500 hover:bg-green-400 items-center focus:outline-none rounded py-2 px-4"
                        formtarget="_blank">
                        <span>Pesan Sekarang</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
