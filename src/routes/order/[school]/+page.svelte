<script lang="ts">
    export let data;
    const { products } = data;

    console.log('products', products);
</script>

{#each products as product}
    <h1>{product.description}</h1>
{/each}