<script lang="ts">

	import { page } from "$app/stores";
    import ShoppingCart from "$lib/components/ShoppingCart/ShoppingCart.svelte";
	import { closeDate } from "$lib/stores/timeLeft";
    import * as catalogs from '$lib/assets/catalogs';

    const { school, orderId } = $page.params;
    $closeDate = catalogs[school].closeDate;
    
    export let data;
    const order = data;
    const { cart: items, name, email, orderDate } = order;

</script>

<div>
    <h2>Order {orderId}</h2>
    <h3>
        Name:{name}, Email: {email} <br>
        {orderDate ?? ''}
    </h3>
</div>

<ShoppingCart taxRate={0} {items} {order} readonly=true />

<style>
    div {
        margin: 0 1em;
    }
</style>