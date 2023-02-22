<script lang="ts">
    import * as catalogs from '$lib/assets/catalogs';
	import { createEventDispatcher } from 'svelte';
    import { closeDate, timeLeft } from '$lib/stores/timeLeft';
    const { closed } = timeLeft;

    export let school: keyof typeof catalogs | '' = '';
    export let schools: { key: string, name: (keyof typeof catalogs)}[];
  
    const dispatch = createEventDispatcher();
  
    function dispatchSchoolChange() {
        $closeDate = catalogs[school].closeDate;
        dispatch('schoolChange', { school });
    }
</script>

<label for="schoolSelect">What school are you with?</label>
<select name="schoolSelect" bind:value={school} on:change={dispatchSchoolChange}>
    {#each schools as option}
        <option value={option.key}>{option.name}</option>
    {/each}
</select>

{#if !$closed && school}
    <a href="/{school}/order">Order form</a>

    <img src={catalogs[school].logo} alt="School tennis logo for 2023"/>
{/if}

<style>
    select {
        padding: 5px;
        border-radius: 10px;
        margin: 1em 0 2em;
    }

    img {
        margin-top: 1em;
        border: 1px solid #000;
        border-radius: 20px;
        max-width: 70%;
    }
</style>