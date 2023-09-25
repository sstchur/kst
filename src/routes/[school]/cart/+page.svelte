<script lang="ts">
	import { page } from "$app/stores";
	import { createShoppingCart } from "$lib/components/ShoppingCart/shoppingCart";
	import ShoppingCart from "$lib/components/ShoppingCart/ShoppingCart.svelte";
    import * as catalogs from '$lib/assets/catalogs';
    import { closeDate, timeLeft } from '$lib/stores/timeLeft';
	import { payPalEnabled } from "$lib/assets/eastlake/catalog-boys-fall-2023.js";
    const { closed } = timeLeft;

    const { form } = $page;
    const { school } = $page.params;

    $closeDate = catalogs[school].closeDate;

    export let data;
    const { taxRate } = data;

    const payPalOrder = form?.payPalOrder ?? '{}';

    const order = JSON.parse(payPalOrder ?? null);

    if (form?.success) {
        createShoppingCart(school).clear();
    }

</script>

<main>
    {#if !$closed}
        {#if form?.success}
            {#if !payPalEnabled}
                <p>Order received. Your Order ID is <a href="/{school}/order/{form?.orderId}">{form?.orderId}</a>.
                Save this link. You'll need it if you want to delete your order.</p>
            {:else}
                <h1>Thank you for your order!</h1>
                <p>Your order has been received. Your PayPal Order ID is { order.id }.</p>
                <p>Please know that orders are not shipped directly to students. Instead they delivered to your school's coach for distribution to the players. <br />
                If you have questions about your order, or would like to make a change, email <a style="display: inline" href="mailto:info@kickserve.biz">info@kickserve.biz</a> and include your Order ID.</p>
            {/if}
        {:else}
            <ShoppingCart taxRate={taxRate} />
        {/if}
    {/if}
</main>

<style>
    main {
        margin: 0 2em;
    }
</style>