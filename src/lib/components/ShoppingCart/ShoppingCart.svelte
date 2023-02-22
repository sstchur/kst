<script lang="ts">
	import { page } from "$app/stores";
	import { cartItems } from "./shoppingCart";

    export let taxRate: number;

    const { school } = $page.params;
    let name = '';
    let email = '';
    let code: number | undefined = undefined;
    
    let items = $cartItems;
    $: isFormValid = code && name && email;

</script>

This is a shopping cart, and the tax rate is {taxRate}

<input bind:value={name} name="name" type="text" placeholder="Name" />
<input bind:value={email} name="email" type="email" placeholder="Email" />
<input bind:value={code} name="code" type="number" placeholder="6 digit school code" />
<input value={$page.params.school} name="school" type="hidden" />
<input value={JSON.stringify(items)} name="cart" type="hidden" />
<button disabled={!isFormValid}>Confirm order</button>