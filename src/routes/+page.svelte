<script lang="ts">
    import * as catalogs from '$lib/assets/catalogs';
	import SchoolSelector from '$lib/components/SchoolSelector/SchoolSelector.svelte';

    let school: keyof typeof catalogs | '' = '';

    let schools = [];
    for (const key in catalogs) {
        schools.push({ key, name: catalogs[key].schoolName });
    }

    console.log(schools);

    export function load() {
        return { school }
    }
</script>

<main>
    <SchoolSelector {school} schools={schools} />
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
</style>
