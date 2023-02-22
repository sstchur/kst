<script lang="ts">
	import ProductDetails from "$lib/components/ProductDetails/ProductDetails.svelte";

    export let data;
    const { products } = data;
</script>

<div style="display: flex; flex-wrap: wrap; justify-content: center">
    {#each products as product}
        <div class="product">
            <ProductDetails {product} />
        </div>
    {/each}
</div>
