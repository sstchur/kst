<script lang="ts">
	import { page } from "$app/stores";
	import type { ProductInstance } from "$lib/types/ProductTypes";
	import { cartItems, cartSubtotal, createShoppingCart } from "./shoppingCart";
    import * as catalogs from '$lib/assets/catalogs';
    import { loadScript } from "@paypal/paypal-js";

    const { school } = $page.params;
    const { payPalEnabled } = catalogs[school];

    const shoppingCart = createShoppingCart(school);

    export let taxRate: number;
    export let readonly: boolean = false;
    export let items: ProductInstance[] = $cartItems;
    export let order = null;

    let name = '';
    let email = '';
    let code: number | undefined = undefined;
    
    $: isFormValid = code && name && email;

    let subtotal: string;
    $: subtotal = $cartSubtotal.toFixed(2);

    let salesTax: string;
    $: salesTax = ($cartSubtotal * taxRate).toFixed(2);

    let payPalFee: string;
    $: payPalFee = payPalEnabled ? ($cartSubtotal * 3.49/100 + 0.49).toFixed(2) : '0.00';

    let grandTotal: string;
    $: grandTotal = ($cartSubtotal + Number(salesTax) + Number(payPalFee)).toFixed(2);

    const currency_code = 'USD';
    $: purchaseUnits = {
        description: 'Tennis spirit wear',
        soft_descriptor: 'Kick Serve Tennis',
        amount: {
            currency_code,
            value: grandTotal,
            breakdown: {
                item_total: {
                    currency_code,
                    value: subtotal
                },
                tax_total: {
                    currency_code,
                    value: `${salesTax}`
                },
                handling: {
                    currency_code,
                    value: `${payPalFee}`
                }
            }
        },
        items: $cartItems.map((p, i) => ({
            name: `(${p.id}) - SZ: ${p.size}, CUST: ${p.customization || 'N/A'}, VRSTY: ${p.varsity || 'N/A'} [school: ${school}]`,
            description: `SIZE: ${p.size}, CUSTOMIZATION: ${p.customization || 'N/A'}, VARSITY: ${p.varsity || 'N/A'}`,
            unit_amount: {
                currency_code,
                value: `${p.dynamicPrice}`
            },
            quantity: `${p.quantity}`
        }))
    }

    function removeItem(item: ProductInstance) {
        const i = $cartItems.indexOf(item);
        shoppingCart.remove(i);
        items = items;
    }

    let payPalSucceeded = false;
    let payPalTxnStatus = '';
    let payPalTxnId = '';

    // AZ6KxIlNEhfWChYzGXiJtfMZOrkrllJmRc1MYhNnGAytbjk3_YMDeOIf4M24TYi-OKdd7IYdOUxZ5R9X
    loadScript({ "client-id": 'AZ6KxIlNEhfWChYzGXiJtfMZOrkrllJmRc1MYhNnGAytbjk3_YMDeOIf4M24TYi-OKdd7IYdOUxZ5R9X', commit: true, currency: 'USD', components: 'buttons', 'disable-funding': ['card', 'credit'] })
        .then((paypal) => {
            paypal.Buttons({
            style: {
                color: 'silver',
                shape: 'pill'
            },

			// Sets up the transaction when a payment button is clicked
			createOrder: (data, actions) => {
                console.log('UNITS:', purchaseUnits)
			    return actions.order.create({
				    purchase_units: [ purchaseUnits ]
			    });
			},
			// Finalize the transaction after payer approval
			onApprove: (data, actions) => {

                return actions.order.capture().then(function(orderData) {
                    // Successful capture! For dev/demo purposes:
                    console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
                    const transaction = orderData.purchase_units[0].payments.captures[0];
                    payPalSucceeded = true;
                    payPalTxnStatus = transaction.status as unknown as any;
                    payPalTxnId = transaction.id as unknown as any;
                    
                    createShoppingCart(school).clear();
                });
            }
            }).render('#paypal-button-container');
        })
        .catch((err) => {
            console.error("failed to load the PayPal JS SDK script", err);
        });
</script>

<main>
    {#if payPalSucceeded }
        <h2>Thank you for your order.</h2>
        <h3>Your PayPal transaction ID is {payPalTxnId}</h3>
        <p>If you have questions about your order, or would like to make a change,
           email <a style="display: inline" href="mailto:info@kickserve.biz">info@kickserve.biz</a> and include the Transaction ID.</p>
    {:else}
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
                    <td><img src={item.images[0]} alt={item.description} height=75 /></td>
                    <td class="item">
                        {item.title} - { item.size}
                        {#if item.customization}
                            <br> Customization: {item.customization}
                        {/if}
                        {#if item.varsity}
                            <br> Varsity imprint: yes
                        {/if}
                    </td>
                    <td>{item.quantity}</td>
                    <td class="price">{item.dynamicPrice}</td>
                    <td class="amount">${(item.dynamicPrice * item.quantity).toFixed(2)}</td>
                </tr>
                {#if !readonly}
                    <tr>
                        <td colspan=5>
                            <button class="link" on:click|preventDefault={() => removeItem(item)}>Remove</button>
                        </td>
                    </tr>
                {/if}
            {/each}

            {#if items.length > 0}
                <tfoot>
                    <tr>
                        <td colspan=4 class="price">Subtotal</td>
                        <td class="amount">${order ? order.subtotal : subtotal}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan=4 class="price">Sales tax</td>
                        <td class="amount">${order ? order.salesTax : salesTax}</td>
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
                        <td class="amount">${order ? order.grandTotal : grandTotal}</td>
                        <td></td>
                    </tr>                      
                </tfoot>
            {/if}
        </table>

        {#if items.length > 0}
            <div class="payment">
            {#if payPalEnabled}
                <div id="paypal-button-container"></div>
            {:else}
                {#if readonly}
                    <form method="post" action="?/deleteorder">
                        This order cannot be modified, but you can delete this order or place an additional order, if desired.
                        <input name="email" type="text" placeholder="Email" />
                        <input name="code" type="number" placeholder="6 digit school code" />
                        <button>Delete this order</button>
                    </form>
                {:else}
                    <form method="post" action="?/confirmorder">
                        <input bind:value={name} name="name" type="text" placeholder="Name" />
                        <input bind:value={email} name="email" type="email" placeholder="Email" />
                        <input bind:value={code} name="code" type="number" placeholder="6 digit school code" />
                        <input bind:value={subtotal} name="subtotal" type="hidden" />
                        <input bind:value={salesTax} name="salesTax" type="hidden" />
                        <input bind:value={grandTotal} name="grandTotal" type="hidden" />
                        <input value={new Date()} name="orderDate" type="hidden" />
                        <input value={$page.params.school} name="school" type="hidden" />
                        <input value={JSON.stringify(items)} name="cart" type="hidden" />
                        <button type="submit" disabled={!isFormValid}>Confirm order</button>
                    </form>
                {/if}
            {/if}
            </div>
        {:else}
            <p>Your cart is empty</p>
        {/if}
    {/if}    
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
        max-width: 340px;
    }

    button.link {
        border: none;
        background: transparent;
        cursor: pointer;
        text-decoration: underline;
        color: #369;    
    }
</style>
