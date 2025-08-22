import { d as derived, w as writable } from "./index.js";
let items = [];
const cartItems = writable(items);
const cartCount = derived(cartItems, ($cartItems) => $cartItems.length);
const cartSubtotal = derived(cartItems, ($cartItems) => $cartItems.reduce((total, productInstance) => Number(total + productInstance.quantity * productInstance.dynamicPrice), 0));
const orderId = writable(void 0);
function createShoppingCart(school) {
  const storageKey = `kst/${school}/shoppingCart`;
  const cart = "[]";
  items = JSON.parse(cart);
  cartItems.update((_) => items);
  const id = void 0;
  orderId.update((_) => id);
  return {
    recall(products) {
      for (const product of products) {
        this.add(product, false);
      }
    },
    add(product, useLocalStore = true) {
      items.push(product);
      if (useLocalStore) localStorage.setItem(storageKey, JSON.stringify(items));
      cartItems.update((_) => items);
    },
    remove(i) {
      items.splice(i, 1);
      localStorage.setItem(storageKey, JSON.stringify(items));
      cartItems.update((_) => items);
    },
    confirm(id2) {
      orderId.update((_) => id2);
      localStorage.setItem(`${storageKey}/orderId}`, id2);
    },
    clear() {
      items = [];
      cartItems.update((_) => items);
      orderId.update((_) => void 0);
    }
  };
}
export {
  createShoppingCart as a,
  cartItems as b,
  cartCount as c,
  cartSubtotal as d
};
