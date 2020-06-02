// store.js
// use carts.useLocalStorage(); in Cart.svelte, CartProduct.svelte, & Product.svelte
// https://stackoverflow.com/questions/56488202/how-to-persist-svelte-store
import { writable } from 'svelte/store';

const createWritableStore = (key, startValue) => {
  const { subscribe, set } = writable(startValue);

	return {
    subscribe,
    set,
    useLocalStorage: () => {
      let json = localStorage.getItem(key);
      json = (json) ? set(JSON.parse(json)) : [];
      
      subscribe(current => {
        localStorage.setItem(key, JSON.stringify(current));
      });
    }
  };
}

export const carts = createWritableStore('carts', []);

//export const carts = writable([]);