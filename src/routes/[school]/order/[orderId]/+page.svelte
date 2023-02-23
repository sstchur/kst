<script lang="ts">

	import { page } from "$app/stores";
    import ShoppingCart from "$lib/components/ShoppingCart/ShoppingCart.svelte";
	import { closeDate } from "$lib/stores/timeLeft";
    import * as catalogs from '$lib/assets/catalogs';

    const { form } = $page.data;
    const { school, orderId } = $page.params;
    $closeDate = catalogs[school].closeDate;
    
    export let data;
    const { order } = data;
    const { cart: items, name, orderDate } = order ?? {};

</script>

{#if form?.orderdeleted}
    <p>Order successfully deleted. You can place a <a href="/{school}/order}">new order</a>, if desired.</p>
{:else if order}
    <div>
        <h2>Order {orderId}</h2>
        <h3>
            {name} <br>
            {orderDate ?? ''}
        </h3>
    </div>

    <ShoppingCart taxRate={0} {items} {order} readonly=true />
{:else}
    <div>
        <h2>Order {orderId} not found.</h2>
    </div>
{/if}

<style>
    div {
        margin: 0 1em;
    }
</style>