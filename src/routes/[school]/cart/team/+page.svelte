<script lang="ts">
	import { page } from "$app/stores";
    import * as catalogs from '$lib/assets/catalogs';

    export let data;
    const { success, orders, school } = data;

    console.log('$page.data', $page.data);

    const catalog = catalogs[school];
    const { products } = catalog;

    const teamSubtotal = orders.reduce((total, order) => total + Number(order.subtotal), 0).toFixed(2);
    const teamSalexTax = orders.reduce((total, order) => total + Number(order.salesTax), 0).toFixed(2);
    const teamGrandTotal = orders.reduce((total, order) => total + Number(order.grandTotal), 0).toFixed(2);

    const aggregatedProducts = {};
    for (const product of products) {
        aggregatedProducts[product.id] = {};
    }

    for (const order of orders) {
        for (const item of order.cart) {
            const { id, size, quantity, customization, varsity } = item;
            aggregatedProducts[id][[size]] = aggregatedProducts[id][[size]] || { quantity: 0, names: [] };
            aggregatedProducts[id][[size]].quantity += quantity;
            if (customization) {
                const c = customization.toUpperCase();
                const name = varsity ? `${c}/V` : c;
                let times = quantity;
                while (times--) {
                    aggregatedProducts[id][[size]].names.push(name);
                }
            }
        }
    }

</script>

{#if success}
    <ol>
        {#each orders as order}
            <li>
                {order._id}
                {order.name}
                {order.email}
                <ol>
                    {#each order.cart as item}
                    <li>
                        {item.id} /
                        {item.title} /
                        {item.size} /
                        {#if item.customization}
                           name = {item.customization} /
                        {/if}
                        {#if item.varsity}
                            Varsitry imprint /
                        {/if}
                        qty = {item.quantity} /
                        {item.dynamicPrice}
                    </li>
                    {/each}
                    <hr>
                    Subtotal: {order.subtotal} <br>
                    Sales tax: {order.salesTax} <br>
                    Grand total: {order.grandTotal} <br>
                    <hr>
                </ol>
            </li>
        {/each}
    </ol>

    <hr>
    Team Subtotal: {teamSubtotal} <br>
    Team Sales tax: {teamSalexTax} <br>
    Team Grand total: {teamGrandTotal} 

    <hr>
    <strong>Screen-printing format:</strong> <br>

    {#each Object.keys(aggregatedProducts) as productId}
        <strong>{productId}</strong> <br>
        {#each Object.keys(aggregatedProducts[productId]) as size}
            &nbsp;&nbsp;{aggregatedProducts[productId][size].quantity} {size}
            {#if aggregatedProducts[productId][size].names.length > 0}
                ({aggregatedProducts[productId][size].names.join(', ')})
            {/if}         
            <br>
        {/each}

        <br>

    {/each}

{:else}
    <form>
        <label for="code">School code:</label>
        <input name="code" type="text" placeholder="School code" />
        <button type="submit">View Team Cart</button>
    </form>
{/if}