<script lang="ts">
    import * as catalogs from '$lib/assets/catalogs';

    let selectedSchool: keyof typeof catalogs | '' = '';
</script>

<main>
    <label for="schoolSelect">What school are you with?</label>
    <select bind:value={selectedSchool}>
        <option value="eastlake">Eastlake High School</option>
        <option value="skyline">Skyline High School</option>
    </select>

    {#if selectedSchool}
        <a href="/{selectedSchool}/order">Order form</a>

        <img src={catalogs[selectedSchool].logo} alt="School tennis logo for 2023"/>
    {/if}
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: space-around;
        flex-wrap: wrap;
        font-size: 1.5em;
        margin-top: 1em;
    }

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