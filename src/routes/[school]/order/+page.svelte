<script lang="ts">
	import ProductDetails from "$lib/components/ProductDetails/ProductDetails.svelte";
    import { modals } from 'svelte-modals';
    import ItemAddedModal from '$lib/components/ItemAddedModal/ItemAddedModal.svelte';
    import * as catalogs from '$lib/assets/catalogs';
	import { createShoppingCart } from "$lib/components/ShoppingCart/shoppingCart";
    import { closeDate, timeLeft } from '$lib/stores/timeLeft';
    const { closed } = timeLeft;

    export let data;
    const { products, school } = data;
    const shoppingCart = createShoppingCart(school);

    $closeDate = catalogs[school].closeDate;
    const markup = catalogs[school].markup;

    function addToCart(event) {
        const { productInstance } = event.detail;
        shoppingCart.add(productInstance);
        modals.open(ItemAddedModal, { product: productInstance, school });
    }

</script>

{#if !$closed}
    <div style="display: flex; flex-wrap: wrap; justify-content: center; position: relative; z-index: 0;">
        {#each products as product}
            <div class="product">
                <ProductDetails {product} {markup} on:addToCart={addToCart} />
            </div>
        {/each}
    </div>
{/if}