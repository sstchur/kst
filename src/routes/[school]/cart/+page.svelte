<script lang="ts">
	import { page } from "$app/stores";
	import { createShoppingCart } from "$lib/components/ShoppingCart/shoppingCart";
	import ShoppingCart from "$lib/components/ShoppingCart/ShoppingCart.svelte";

    const { form } = $page;
    const { school } = $page.params;

    export let data;
    const { taxRate } = data;

    if (form?.success) {
        createShoppingCart(school).clear();
    }

</script>

{#if form?.success}
    <p>Order received. Your Order ID is <a href="/{school}/order/{form?.orderId}">{form?.orderId}</a>.
    Save this link. You'll need it if you want to delete your order.</p>

{:else}
    <ShoppingCart taxRate={taxRate} />
{/if}