<script lang="ts">
	import { page } from '$app/stores';
    import { closeModal } from 'svelte-modals';
	import type { ProductInstance } from '$lib/types/ProductTypes';
	import { cartCount, cartSubtotal } from '../ShoppingCart/shoppingCart';

    export let isOpen = false;
    export let product: ProductInstance;
    export let school: string;
</script>

{#if isOpen}
    <div role="dialog" class="modal">
        <div class="contents">
            <h2>Added: {product.title}</h2>
            <p>
                <img src={product.images[0]} alt={product.description} />
                <span>
                    {product.description}
                    <ul>
                        <li>Qty: {product.quantity}</li>
                        <li>Size: {product.size}</li>
                        {#if product.customization}
                            <li>Customization: {product.customization}</li>
                        {/if}
                        {#if product.varsity}
                            <li>Varsity imprint: {product.varsity ? 'yes' : 'no'}</li>
                        {/if}
                    </ul>
                </span>
            </p>

            <div class="footer">
                <div class="actions">
                    <a class="button" href="/{$page.params.school}/cart" on:click={closeModal}>Go to cart</a>
                    <button on:click={closeModal}>Keep shopping</button>
                </div>

                <span class="cart">
                    {#if school}
                        <svg height="25px" width="25px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#507599"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#507599;} </style> <g> <path class="st0" d="M507.316,126.733L138.349,97.498l-5.612-31.861c-5.154-29.076-28.294-51.611-57.524-55.942L9.677,0 L4.684,33.717l65.544,9.72c14.676,2.165,26.342,13.504,28.919,28.134l52.95,300.107c4.969,28.168,29.431,48.69,58.044,48.698 h229.728l6.828-34.102H210.142c-12.049,0.017-22.373-8.662-24.454-20.522l-7.42-41.992h283.58L507.316,126.733z"></path> <path class="st0" d="M223.148,438.658c-20.253,0-36.667,16.426-36.667,36.678c0,20.254,16.414,36.663,36.667,36.663 c20.258,0,36.675-16.409,36.675-36.663C259.823,455.084,243.405,438.658,223.148,438.658z"></path> <path class="st0" d="M386.068,438.658c-20.257,0-36.666,16.426-36.666,36.678c0,20.254,16.409,36.663,36.666,36.663 c20.258,0,36.68-16.409,36.68-36.663C422.748,455.084,406.327,438.658,386.068,438.658z"></path> </g> </g></svg>
                        <a href="/{school}/cart" on:click={closeModal}>{$cartCount} items</a> ${$cartSubtotal.toFixed(2)}                
                    {/if}
                </span>
            </div>
        </div>
    </div>
{/if}

<style>
    .modal {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        /* allow click-through to backdrop */
        pointer-events: none;
    }

    .footer {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .actions {
        margin-bottom: 1em;
    }

    .cart svg {
        vertical-align: middle;
    }

    .contents {
        min-width: 250px;
        max-width: 500px;
        border-radius: 6px;
        padding: 16px;
        background: white;
        pointer-events: auto;
        margin: 0 5px;
    }

    .contents p {
        display: flex;
    }

    a.button,
    button {
        background: #507599;
        border: 1px solid #fefefe;
        border-radius: 5px;
        color: #fff;
        font-size: 1em;
        padding: 5px 10px;
        margin-top: 3px;
        font-family: monospace;
        text-decoration: none;
        cursor: pointer;
    }
 
    button:active {
        background: slategray;
        border: 1px solid #507599;
        color: #ccc;
    }

    button:disabled {
        background: slategray;
        border: 1px solid #507599;
        color: #ccc;
    }

    img {
        max-height: 150px;
    }
</style>