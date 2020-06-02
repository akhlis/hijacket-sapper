<script>
    import { fly } from 'svelte/transition';
	import { carts } from './cart.js'
    import CartItem from './CartProduct.svelte'
    import { onMount } from 'svelte'

    onMount(() => {
        carts.useLocalStorage();
    })

    let itemInCart = 0;
    let totalPrice = 0;
    let visible = false;
    
    const clearCart = () => {
        $carts = []
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

<div class="nav__cart">
    <button class="nav__cart-button" on:click={toggle}>
        <span class="nav__cart-info">
            <svg width="14px" height="14px" viewBox="0 0 510 510" class="cart__mobile-icon">
                <path
                    d="M153 408c-28.05 0-51 22.95-51 51s22.95 51 51 51 51-22.95 51-51-22.95-51-51-51zM0 0v51h51l91.8 193.8-35.7 61.2c-2.55 7.65-5.1 17.85-5.1 25.5 0 28.05 22.95 51 51 51h306v-51H163.2c-2.55 0-5.1-2.55-5.1-5.1v-2.551l22.95-43.35h188.7c20.4 0 35.7-10.2 43.35-25.5L504.9 89.25c5.1-5.1 5.1-7.65 5.1-12.75 0-15.3-10.2-25.5-25.5-25.5H107.1L84.15 0H0zm408 408c-28.05 0-51 22.95-51 51s22.95 51 51 51 51-22.95 51-51-22.95-51-51-51z">
                </path>
            </svg>
        </span>
        <span class="nav__cart-qty">{itemInCart}</span>
    </button>
    {#if visible}
    <div class="nav__cart-checkout" transition:fly="{{ y: 200, duration: 200 }}">
        <div class="cart">

            {#each $carts as product}
                <CartItem product={product} price={localPrice(product.price * product.quantity)} />
            {/each}

            <div class="cart__subtotal">
                <span>Subtotal: {localPrice(totalPrice)}</span>
            </div>

            <div class="cart__footer">
                <a class="cart__checkout"
                    href="/checkout">Lanjut Checkout</a>
                <button class="cart__empty-btn" on:click={clearCart}>Clear Cart</button>
            </div>
        </div>
    </div>
    {/if}
</div>

<style>.nav__cart {
    @apply col-span-1 relative;
}

.nav__cart-button {
    @apply w-full h-full flex items-center bg-transparent border-0 cursor-pointer;

    &:hover {
        @apply text-primary;
    }

    &:focus {
        @apply outline-none;
    }
}

.nav__cart-info {
    @apply py-2 px-2 text-gray-700 border border-solid border-gray-300 rounded-full;
}

.nav__cart-info:hover {
    @apply text-primary border-primary;
}

.cart__mobile-icon {
    @apply fill-current;
}

.nav__cart-qty {
    @apply w-6 h-6 absolute -top-2 right-0 text-xs text-center text-white bg-tertiery flex items-center justify-center rounded-full;
}

.nav__cart-checkout {
    @apply bg-gray-100 w-400px box-border right-0 rounded-sm shadow-md z-50;
}

.cart {
    @apply w-full;
}

.cart__subtotal {
    @apply text-right text-gray-700 border-0 border-t border-dashed border-gray-300 px-2 py-2 mt-2;
}

.cart__footer {
    @apply flex justify-between items-center py-2 px-3;
}

.cart__checkout {
    @apply text-sm text-white no-underline uppercase bg-green-500 py-1 px-3 rounded-sm;

    &:hover {
        @apply bg-green-400;
    }
}

.cart__empty-btn {
    @apply text-xs uppercase text-gray-500 border-0 bg-gray-200 rounded-sm cursor-pointer py-6px px-2;

    &:hover {
        @apply text-red-400;
    }

    &:focus {
        @apply outline-none;
    }
}

@screen lg {
    .nav__cart-button {
        @apply justify-end pr-4;
    }

    .nav__cart-qty {
        @apply ml-3;
    }

    .nav__cart-checkout {
        @apply absolute py-4 px-2;
    }
}

</style>