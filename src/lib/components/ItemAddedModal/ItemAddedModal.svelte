<script lang="ts">
	import { page } from '$app/stores';
    import { closeModal } from 'svelte-modals';
	import type { ProductInstance } from '$lib/types/ProductTypes';

    export let isOpen = false;
    export let product: ProductInstance;
</script>

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

    .contents {
        min-width: 240px;
        border-radius: 6px;
        padding: 16px;
        background: white;
        pointer-events: auto;
        margin: 0 5px;
    }

    .contents p {
        display: flex;
    }

    a,
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

            <a href="/{$page.params.school}/cart" on:click={closeModal}>Go to cart</a>
            <button on:click={closeModal}>Keep shopping</button>
        </div>
    </div>
{/if}