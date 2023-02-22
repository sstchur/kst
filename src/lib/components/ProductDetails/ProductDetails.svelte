<script lang="ts">

    import { createEventDispatcher } from 'svelte';
    import { Sizes, type Product, type Size } from '$lib/types/ProductTypes';
  
    export let product: Product;
  
    let size: Size;
    let quantity: number;
    let customization = '';
    let varsity = false;

    $: isXXL = size === '2X-Large' || size === '3X-Large' || size === '4X-Large';
    $: dynamicPrice = product.price + (isXXL ? 2 : 0);
  
    const dispatch = createEventDispatcher();
  
    function dispatchAddToCart(product: Product) {
      return function() {
        const productInstance = { ...product, size, quantity, customization, varsity, price: dynamicPrice };
        dispatch('addToCart', { product, productInstance });
        reset();
      }
    }
  
    function reset() {
      quantity = 1;
      size = 'X-Small';
      customization = '';
      varsity = false;
    }
  </script>
  
  <style>
    fieldset {
      border: 1px solid #ccc;
      border-radius: 5px;
      background: #fff;
      margin: 8px;
      min-width: 350px;
    }
  
    button {
      background: #507599;
      border: 1px solid #fefefe;
      border-radius: 20px;
      color: #fff;
      font-size: 1em;
      padding: 10px 15px;
      margin-top: 3px;
      font-family: monospace;
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
  
    .actions {
      border-top: 1px dotted #ccc;
      text-align: center;
      padding-top: 5px;
      margin-top: 10px;
    }
  
    .productOption {
      margin: .5em 0;
    }
  
    .productOption label[for=customization] {
      display: block;
    }
  
    .images {
      display: flex;
      justify-content: space-evenly;
      margin: .5em 0;
      flex-wrap: wrap;
    }
  
    .options {
      margin-top: 2em;
      padding-top: 1em;
      border-top: 1px dotted #ccc; 
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .productDetails img {
      max-width: 100%;
    }
  
    .productDetails select,
    .productDetails input {
      padding: 5px;
      border: 1px solid #667;
      border-radius: 7px;
    }
  
    .productDetails .title {
      display: block;
      font-variant: small-caps;
      font-size: 1.25em;
      font-weight: 400;
      margin-top: 2em;
    }
  
    .productDetails .desc {
      font-size: small;
    }

    strong {
        color: green;
        font-size: 1.25em;
    }
  
  </style>
  
<fieldset>
    <div class="productDetails">
        <div class="images">
        {#each product.images as image}
            <img src={image} height=325 alt={product.title} />
        {/each}
        </div>

        <span class="title">
        {product.title}
        </span>

        <p class="desc">{product.description}</p>

        <strong class="price">${dynamicPrice}</strong>

        <div class="options">
        <div>            
            <div class="productOption">
                <label for="size">Size:</label>
                <select id="size" bind:value={size}>
                    {#each Sizes.filter(s => !product.restrictedSizes?.has(s)) as size}
                        <option value={size}>{size}</option>
                    {/each}
                </select>
            </div>

            <div class="productOption">
                <label for="quantity">Quantity:</label>
                <select id="quantity" bind:value={quantity}>
                    {#each Array(75) as _, n}
                        <option value={n+1}>{n+1}</option>
                    {/each}
                </select>
            </div>

            {#if product.varsityEnabled}
            <div class="productOption">
                <label for="varsity">VARSITY imprint?</label> <input name="varsity" bind:checked={varsity} type="checkbox" />
            </div>
            {/if}
            
            {#if product.customizable}
            <div class="productOption">
                <label for="customization">Name on back (optional):</label> <input name="customization" bind:value={customization} type="text" placeholder="Name">
            </div>
            {/if}

        </div>
        </div>
    
    </div>
    <div class="actions">
        <button on:click={dispatchAddToCart(product)}> + Add to cart</button>
    </div>
</fieldset>
  