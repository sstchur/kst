import { derived, writable } from 'svelte/store';
import type { ProductInstance } from '$lib/types/ProductTypes';
import { browser } from '$app/environment';

export let items: ProductInstance[] = [];

export const cartItems = writable(items);
export const cartCount = derived(cartItems, $cartItems => $cartItems.length);
export const cartSubtotal = derived(cartItems, $cartItems => $cartItems.reduce((total, productInstance) => 
        Number((total + (productInstance.quantity * productInstance.dynamicPrice))), 0));

export const orderId = writable<string|undefined>(undefined);

export function createShoppingCart(school: string) {
    const storageKey = `kst/${school}/shoppingCart`;
    const cart = browser ? window.localStorage.getItem(storageKey) ?? '[]' : '[]';
    items = JSON.parse(cart);
    cartItems.update(_ => items);
    const id = browser ? window.localStorage.getItem(`${storageKey}/orderId`) ?? undefined : undefined;
    orderId.update(_ => id);

    return {
        recall(products: ProductInstance[]) {
            for (const product of products) {
                this.add(product, false);
            }
        },

        add(product: ProductInstance, useLocalStore = true) {
            items.push(product);
            if (useLocalStore) localStorage.setItem(storageKey, JSON.stringify(items));
            cartItems.update(_ => items);
        },

        remove(i: number) {
            items.splice(i, 1);
            localStorage.setItem(storageKey, JSON.stringify(items));
            cartItems.update(_ => items);
        },

        confirm(id: string) {
            orderId.update(_ => id);
            localStorage.setItem(`${storageKey}/orderId}`, id);
        },

        clear() {
            items = [];
            cartItems.update(_ => items);
            orderId.update(_ => undefined);
            if (browser && window.localStorage) {
                localStorage.removeItem(storageKey);
                localStorage.removeItem(`${storageKey}/orderId`);
            }
        }
    }
}
