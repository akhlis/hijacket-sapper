<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch('api/destination.json');
    const districts = await res.json();

    return { districts };
  }
</script>

<svelte:head>
	<title>Checkout</title>
</svelte:head>

<script>
    import { fly } from 'svelte/transition'
	import { carts } from '../components/cart.js'
    import Item from '../components/CheckoutProduct.svelte'
    import { onMount } from 'svelte'
    import AutoComplete from '../components/AutoComplete.svelte'
    import Circle from '../components/Circle2.svelte'
    import Chasing from '../components/Chasing.svelte'
    import Scaleout from '../components/ScaleOut.svelte'

    onMount(() => {
        carts.useLocalStorage();
    })

    let itemInCart = 0;
    let totalPrice = 0;
    let totalWeight = 0;
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

    $:{
        let qty = 0
        let price = 0
        let weight = 0
        for(let item of $carts){
            qty += item.quantity
            price += item.price * item.quantity
            weight += item.weight * item.quantity
        }
        itemInCart = qty
        totalPrice = price
        totalWeight = weight
    }
		
	let getWeight = (weight) => {
		return Math.ceil(weight) % 1000 == 0 / 1000 ? Math.ceil(weight) / 1000 : Math.round((weight + 399 / 2) / 1000 );
	}
	
	let promise = Promise.resolve([]);

    export let districts;
    let selectedDistrict;
    let districtId = 1;
    let selectedCourier;
	let costShipping;

    $: if (selectedDistrict !== undefined) {
        console.log(selectedDistrict.id)
        districtId = selectedDistrict.id
    }

	async function fetchCourier() {
		const res = await fetch(`api/cost/23/${districtId}/index.json`);
		const data = await res.json();

		if (res.ok) {
		  return data;
		} else {
		  throw new Error(data);
		}
	}

    let getCost = () => {
        if (selectedDistrict !== undefined) {
			promise = fetchCourier();
			selectedCourier = '';
			costShipping = '';
			console.log(districtId)
        }
	}
	
	let name = '';
	let hp = '';
	let email = '';
	let address = '';

    $: selectedDistrict, selectedCourier, costShipping;
</script>

<section class="block__checkout-order bg-grey pt-8">
    <div class="checkout-box container w-full max-w-screen-xl mx-auto px-3 lg:px-12 pb-8">
        <div class="grid grid-cols-12 gap-8">
            <div class="col-span-7 bg-white">
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
                            <header class="checkout__form-header mb-6">
                                <h3 class="text-gray-700">Detail Alamat Pengiriman</h3>
                            </header>
                            <div class="grid grid-cols-2 gap-6">
                                <div class="form-address__item col-span-1 mb-2">
                                    <label class="block text-gray-700 mb-2" for="name">Nama Lengkap<span
                                            class="text-red-500">*</span></label>
                                    <input
                                        class="w-full text-sm border border-solid rounded-sm focus:text-gray-600 focus:border-primary focus:outline-none transition-all duration-500 ease-in-out hover:placeholder-gray-300 py-3px px-3"
                                        type="text" id="name" name="Name" bind:value={name} placeholder="Nama lengkap anda"
                                        required="">
                                </div>
                                <div class="form-address__item col-span-1 mb-2">
                                    <label class="block text-gray-700 mb-2" for="name">Email (Opsional)</label>
                                    <input
                                        class="w-full text-sm border border-solid rounded-sm focus:text-gray-600 focus:border-primary focus:outline-none transition-all duration-500 ease-in-out hover:placeholder-gray-300 py-3px px-3"
                                        type="text" id="email" name="email" bind:value={email} placeholder="Email anda"
                                        required="">
                                </div>
                            </div>

                            <div class="grid grid-cols-2 gap-6">
                                <div class="form-address__item mb-2">
                                    <label class="block text-gray-700 mb-2" for="name">No. HP/WA<span
                                            class="text-red-500">*</span></label>
                                    <input
                                        class="w-full text-sm border border-solid rounded-sm focus:text-gray-600 focus:border-primary focus:outline-none transition-all duration-500 ease-in-out hover:placeholder-gray-300 py-3px px-3"
                                        type="text" id="phone" name="HP" bind:value={hp} placeholder="No HP/Whatsapp anda"
                                        required="">
                                </div>
                                <div class="form-address__item relative col-span-1 mb-2">
                                    <label class="block text-gray-700 mb-2" for="name">Kota atau Kecamatan</label>
                                    <AutoComplete
                                        items={districts}
                                        placeholder="Masukkan nama kecamatan"
                                        bind:selectedItem={selectedDistrict}
										onChange={getCost}
                                        labelFieldName="name" 
                                        minCharactersToSearch="3"
                                        maxItemsToShowInList="10"/>
                                </div>
                            </div>

                            <div class="form-address__item mb-2">
                                <label class="block text-gray-700 mb-2" for="name">Alamat Lengkap<span
                                        class="text-red-500">*</span></label>
                                <textarea
                                    class="w-full text-sm border border-solid rounded-sm focus:text-gray-600 focus:border-primary focus:outline-none transition-all duration-500 ease-in-out hover:placeholder-gray-300 py-3px px-3"
                                    rows="3" id="alamat" name="Alamat" bind:value={address}
                                    placeholder="Masukkan alamat lengkap + kode POS anda" required=""></textarea>
                            </div>
                        </div>
                    </form>
                </div>


                {#if selectedDistrict !== undefined}
                <p>{selectedDistrict.id} {selectedDistrict.name}</p>
                <p>{selectedDistrict.id} {selectedDistrict.name.split(',')[0]}</p>
                {/if}
					
				<p>{costShipping}</p>
				{#if costShipping !== undefined}
				<p>{costShipping.split(',')[0]}</p>
				{/if}


				

                <div class="bg-grey pt-8"></div>

                <div class="form-address__item py-4 px-4 mb-4">
                    <div class="flex items-center text-gray-700 border-b border-solid border-grey py-3 mb-4">
                        <svg aria-hidden="true" data-prefix="fal" data-icon="shipping-fast"
                            viewBox="0 0 640 512" width="36" height="36"
                            class="shipping-fast_svg__svg-inline--fa shipping-fast_svg__fa-shipping-fast shipping-fast_svg__fa-w-20 shipping-fast_svg__fa-5x w-6 h-6 inline-block fill-current mr-2">
                            <path fill="currentColor"
                                d="M280 192c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240zm352 192h-24V275.9c0-16.8-6.8-33.3-18.8-45.2l-83.9-83.9c-11.8-12-28.3-18.8-45.2-18.8H416V78.6c0-25.7-22.2-46.6-49.4-46.6H113.4C86.2 32 64 52.9 64 78.6V96H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H96V78.6c0-8.1 7.8-14.6 17.4-14.6h253.2c9.6 0 17.4 6.5 17.4 14.6V384H207.6C193 364.7 170 352 144 352c-18.1 0-34.6 6.2-48 16.4V288H64v144c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16h195.2c-1.1 5.2-1.6 10.5-1.6 16 0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16H632c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm-488 96c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm272-320h44.1c8.4 0 16.7 3.4 22.6 9.4l83.9 83.9c.8.8 1.1 1.9 1.8 2.8H416V160zm80 320c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-96h-16.4C545 364.7 522 352 496 352s-49 12.7-63.6 32H416v-96h160v96zM256 248v-16c0-4.4-3.6-8-8-8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8z">
                            </path>
                        </svg>
                        <span>Silahkan pilih dan klik kurir pengiriman!</span>
                    </div>
					{#if selectedDistrict !== undefined}
					{#await promise}
					<div class="flex justify-center items-center py-6">
						<Circle size="48" color="#FF3E00" unit="px"></Circle>
					</div>
					{:then couriers}
					{#each couriers.couriers || [] as courier, index}
						<div class="relative cursor-pointer hover:bg-orange-100 before:absolute before:empty-content before:inline-block before:w-6 before:h-6 before:left-0 before:top-0 before:border before:border-solid before:border-primary before:rounded-full before:transition-all before:duration-200 before:ease-in-out pl-6 mb-3 {selectedCourier === index ? 'bg-orange-100 transition-all duration-100 ease-in-out selected-courier' : ''}"
							on:click="{() => {selectedCourier = index; costShipping = courier.name + ', ' + courier.cost + ', ' + courier.etd}}">
							<div class="flex items-center justify-between h-6 pl-4 pr-3">
								<div>
									<span class="text-sm text-gray-700 leading-none">{courier.name}</span>
									{#if courier.code !== 'jnt_ez'}
									<span class="text-xs text-gray-600 leading-none">({courier.etd})</span>
									{/if}
								</div>
								<span class="text-sm text-primary leading-none">{localPrice(courier.cost)}</span>
							</div>
						</div>
					{/each}
					{:catch error}
					<div class="flex flex-col justify-center items-center text-sm text-center py-6 px-6">
						<Chasing size="60" color="#FF3E00" unit="px"></Chasing>
						<div class="py-6">
							<p class="text-red-500 mb-0">Data ongkir gagal dimuat</p>
						</div>
						<button on:click={getCost} class="text-sm text-gray-700 bg-grey border-0 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 rounded-sm cursor-pointer py-6px px-3">cek ongkir lagi</button>
					</div>
					{/await}
					{:else}
					<div class="flex flex-col justify-center items-center text-sm text-center py-6 px-6">
						<Scaleout size="60" color="#FF3E00" unit="px"></Scaleout>
						<div class="py-6">
							<p class="text-gray-700 mb-0">Masukkan dulu nama kecamatan pada kolom di atas!</p>
						</div>
					</div>
					{/if}
                </div>
            </div>
            <div class="col-span-5 bg-white py-4 px-4">
                <div class="checkout-form__info">
                    <header class="checkout-form__header">
                        <h3 class="checkout-form__title text-gray-700">Ringkasan Pesanan</h3>
                    </header>
                    <div
                        class="checkout-form__box checkout-form__footer flex justify-between items-center text-sm text-gray-700 border-t border-dashed pt-2 mb-3">
                        <div class="checkout-form--left">
                            <p class="mb-0">Subtotal <span class="text-xs text-gray-600">({itemInCart} barang)</span></p>
                        </div>
                        <div class="checkout-form--right">
                            <span class="checkout-form__subtotal">{localPrice(totalPrice)}</span>
                        </div>
                    </div>
                    <div class="checkout-form__box flex justify-between items-center text-sm text-gray-700 mb-3">
                        <div class="checkout-form--left">
                            <p class="mb-0">Berat Total <span class="text-xs text-gray-600">({(totalWeight).toLocaleString('id-ID')} gram)</span></p>
                        </div>
                        <div class="checkout-form--right">
                            <span class="checkout-form__weight-total">{getWeight(totalWeight)} kg</span>
                        </div>
                    </div>
                    <div class="checkout-form__box flex justify-between items-center text-sm text-gray-700 mb-3">
                        <div class="checkout-form--left">
                            <p class="mb-0">Biaya Pengiriman 
								{#if costShipping !== undefined && costShipping !== ''}
								<span class="text-xs text-gray-600">({costShipping.split(',')[0]})</span>
								{/if}
							</p>
                        </div>
                        <div class="checkout-form--right">
							{#if costShipping !== undefined && costShipping !== ''}
							<span class="text-gray-700">{localPrice(costShipping.split(',')[1] * getWeight(totalWeight))}</span>
							{:else}
							<span class="text-gray-600">Pilih kurir dulu</span>
							{/if}
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
							{#if costShipping !== undefined && costShipping !== ''}
							<span class="text-primary">{localPrice(totalPrice + (costShipping.split(',')[1] * getWeight(totalWeight)))}</span>
							{:else}
							<span class="text-primary">{localPrice(totalPrice)}</span>
							{/if}
                        </div>
                    </div>
                </div>
                <div class="checkout-form__button pt-8">
					<a href="https://api.whatsapp.com/send?phone=6285156514890&text=Assalamu%27alaikum%20kak%2C%20saya%20mau%20order%20jaket%20Hijacket%20dengan%20rincian%20berikut%2C%0A%0ANama%20%20%20%20%20%3A%20
					{name}
					%20%0ANo.%20HP%20%20%20%3A%20%
					{hp}
					%20%0AAlamat%20%20%20%3A%20
					{address} {selectedDistrict !== undefined ? selectedDistrict.name : ''}
					%0A%0ARincian%20Pesanan%2C%0A_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_
					{$carts.map((product, index) => product.summary = '%0A*' + product.quantity + 'x*%20' + product.name + '%20*' + product.size + '*%20%0A_@' + localPrice(product.price) + '_%20%20%3D%3D%3E%20%20%20%20%20%20%20%20%20' + localPrice(product.price * product.quantity)).join('%0A')}
					%0A_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%20_%2B%0ASubtotal%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20
					{localPrice(totalPrice)}
					%0A%0ABerat%20Total%20_(
					{(totalWeight).toLocaleString('id-ID')}
					%20gram)_%0A%0AOngkir%20*
					{(costShipping !== undefined && costShipping !== '') ? (getWeight(totalWeight) > 1 ? costShipping.split(',')[0] + '*%0A_@' + localPrice(costShipping.split(',')[1] * 1) + '_%20%20%3D%3D%3E%20%20%20%20%20%20%20%20%20%20%20%20%20' + localPrice(costShipping.split(',')[1] * getWeight(totalWeight)) : costShipping.split(',')[0] + '%20%20%20%20%20%20%20%20%20%20%20%20%20%20' + localPrice(costShipping.split(',')[1] * getWeight(totalWeight))) : 'Pilih kurir dulu'} +
					%0A____________________________________%2B%0A*Jumlah%20Total%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20
					{(costShipping !== undefined && costShipping !== '') ? localPrice(totalPrice + (costShipping.split(',')[1] * getWeight(totalWeight))) : localPrice(totalPrice)}
					*%0A%0AMohon%20segera%20diproses%20ya%20kak%21" target="_blank" rel="noopener" class="product__order-wa text-white leading-none no-underline flex bg-green-500 hover:bg-green-400 focus:outline-none items-center border-0 rounded py-2 px-4">
					<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-whatsapp fa-w-14 fa-2x product__cart-icon w-4 h-4 inline-block fill-current mr-2"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" class=""></path></svg>
					<span class="text-white">Beli via Whatsapp</span>
					</a>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
.selected-courier:before {
    text-align: center;
    content: "✓";
 }
 .selected-courier:before {
 @apply text-white bg-primary;
 }
</style>