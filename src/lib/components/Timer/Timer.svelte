<script lang="ts">
    import { shortCloseDate, timeLeft } from "$lib/stores/timeLeft";
    const { daysLeft, hoursLeft, minLeft, secLeft } = timeLeft;

</script>

{#if $shortCloseDate}
    <h2>⚠️ Form closes {$shortCloseDate} {~~$daysLeft}D:{~~$hoursLeft}H:{~~$minLeft}M:{~~$secLeft.toFixed(2)}S</h2>
    <small>Something not working? <a href="mailto:info@kickserve.biz">info@kickserve.biz</a> for help.</small>
{/if}

<style>
    h2 {
        color: #FF9E24;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 400;
    }    
</style>
