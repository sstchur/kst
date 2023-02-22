<script lang="ts">
    import * as catalogs from '$lib/assets/catalogs';
    export let school: string;

    //const { closeDate } = catalogs[school];

    const closeDate = 'test';
    // const timeLeft = readable(closeDate - new Date().getTime(), function start(set) {
        
    //     const interval = setInterval(() => {
    //     set(closeDate - new Date().getTime());
    //     }, 1000);
    
    //     return function stop() {
    //         clearInterval(interval);
    //     };
    // });
</script>

<!-- {#if school}

{#if time < 0}
    <h2>Order form closed</h2>
{:else}
{time}
    <h2>Form closes in {~~daysLeft}D:{~~hoursLeft}H:{~~minLeft}M:{~~secLeft.toFixed(2)}S</h2>

    {#if title}
        <h1>{title}</h1>
    {/if}

    <slot></slot>
{/if}

 -->
