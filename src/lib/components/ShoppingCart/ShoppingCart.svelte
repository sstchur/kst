<script lang="ts">
	import { page } from "$app/stores";
	import type { ProductInstance } from "$lib/types/ProductTypes";
	import { cartItems, cartSubtotal, createShoppingCart } from "./shoppingCart";
    import * as catalogs from '$lib/assets/catalogs';

    const { school } = $page.params;
    const { payPalEnabled } = catalogs[school];

    const shoppingCart = createShoppingCart(school);

    export let taxRate: number;
    export let readonly: boolean = false;
    export let items: ProductInstance[] = $cartItems;

    let name = '';
    let email = '';
    let code: number | undefined = undefined;
    
    $: isFormValid = code && name && email;

    $: salesTax = (Number($cartSubtotal) * taxRate).toFixed(2);

    $: payPalFee = payPalEnabled ? ($cartSubtotal * 3.49/100 + 0.49).toFixed(2) : 0;

    $: purchaseUnits = $cartItems.map((p, i) => ({ reference_id: `item-${i+1} (${p.id})`, description: `PRODUCT: ${p.title}, SIZE: ${p.size}, PRICE: ${p.price}, QTY: ${p.quantity}`, amount: { value: `${p.price * p.quantity}`, currency_code: 'USD', tax: { value: salesTax, currency_code: 'USD' } } }));

    $: grandTotal = Number($cartSubtotal) + Number(salesTax) + Number(payPalFee);

    function removeItem(item: ProductInstance) {
        const i = $cartItems.indexOf(item);
        shoppingCart.remove(i);
        items = items;
    }    

</script>

<main>
    <a href="/{school}/order">Back to order form</a>

    <table>
        <thead>
            <tr>
                <th></th>
                <th>Items</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Amount</th>
            </tr>
        </thead>
        {#each items as item}
            <tr>
                <td>
                    <img src={item.images[0]} alt={item.description} height=75 /></td>
                <td class="item">
                    {item.title} - { item.size}
                </td>
                <td>{item.quantity}</td>
                <td class="price">{item.price}</td>
                <td class="amount">${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
            {#if !readonly}
                <tr>
                    <td colspan=5>
                        <button class="link" on:click|preventDefault={() => removeItem(item)}>Remove</button>
                    </td>
                </tr>
            {/if}
        {/each}

        <tfoot>
            <tr>
                <td colspan=4 class="price">Subtotal</td>
                <td class="amount">${$cartSubtotal}</td>
                <td></td>
            </tr>
            <tr>
                <td colspan=4 class="price">Sales tax</td>
                <td class="amount">${salesTax}</td>
                <td></td>
            </tr>
            {#if payPalEnabled}
            <tr>
                <td colspan=4 class="price">Paypal fee</td>
                <td class="amount">${payPalFee}</td>
                <td></td>
            </tr>
            {/if}
            <tr>
                <td colspan=4 class="price">Grand total</td>
                <td class="amount">${grandTotal.toFixed(2)}</td>
                <td></td>
            </tr>                      
        </tfoot>
    </table>

    <div class="payment">
        {#if payPalEnabled}
            <div id="paypal-button-container"></div>
        {:else}
            {#if readonly}
                This order cannot be modified, but you can delete this order or place an additional order, if desired.
                <input name="name" type="text" placeholder="Email" />
                <input name="code" type="number" placeholder="6 digit school code" />
                <button>Delete this order</button>
            {:else}
                {#if $page.form?.success}
                    <strong>Order submitted successfully</strong>
                {:else}
                    <form method="post" action="?/confirmorder">
                        <input bind:value={name} name="name" type="text" placeholder="Name" />
                        <input bind:value={email} name="email" type="email" placeholder="Email" />
                        <input bind:value={code} name="code" type="number" placeholder="6 digit school code" />
                        <input value={$page.params.school} name="school" type="hidden" />
                        <input value={JSON.stringify(items)} name="cart" type="hidden" />
                        <button type="submit" disabled={!isFormValid}>Confirm order</button>
                    </form>
                {/if}
            {/if}
        {/if}
    </div>    
</main>

<style>
    main {
        margin: 1em;
    }
    ul {
        list-style: none;
        margin: 0;
    }

    li { 
        display: flex;
    }

    table {
        width: 100%;
    }

    thead {
        background: #507599;
        color: #fff;
    }
    th,
    td {
        padding: 10px 0;
        text-align: center;
    }
    th:last-of-type {
        min-width: auto;
    }
    td {
        text-align: left;
    }

    td.price,
    td.amount {
        text-align: right;
    }
   
    td[colspan='5'] {
        border-bottom: 1px solid #ccc;
        text-align: right;
        padding-top: 0;
    }

    td img {
        vertical-align: top;
    }

    a {
        margin: .75em 5px;
        display: block;
    }

    .payment {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-top: 2em;
    }
    .payment input {
        margin-bottom: 8px;
        padding: 5px;
        min-width: 250px;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    button.link {
        border: none;
        background: transparent;
        cursor: pointer;
        text-decoration: underline;
        color: #369;    
    }
</style>
