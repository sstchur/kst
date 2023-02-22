<script lang="ts">
	import ProductDetails from "$lib/components/ProductDetails/ProductDetails.svelte";
    import { openModal } from 'svelte-modals';
    import ItemAddedModal from '$lib/components/ItemAddedModal/ItemAddedModal.svelte';
	import { createShoppingCart } from "$lib/components/ShoppingCart/shoppingCart";
	import { page } from "$app/stores";

    export let data;
    const { products } = data;

    const { school } = $page.params;
    const shoppingCart = createShoppingCart(school);

    function addToCart(event) {
        const { productInstance } = event.detail;
        shoppingCart.add(productInstance);
        openModal(ItemAddedModal, { product: productInstance });
    }

</script>

<div style="display: flex; flex-wrap: wrap; justify-content: center">
    {#each products as product}
        <div class="product">
            <ProductDetails {product} on:addToCart={addToCart} />
        </div>
    {/each}
</div>
