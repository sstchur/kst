<script lang="ts">
    import { shortCloseDate, timeLeft } from "$lib/stores/timeLeft";
    const { daysLeft, hoursLeft, minLeft, secLeft } = timeLeft;

</script>

<h2>⚠️ Form closes {$shortCloseDate} {~~$daysLeft}D:{~~$hoursLeft}H:{~~$minLeft}M:{~~$secLeft.toFixed(2)}S</h2>

<style>
    h2 {
        color: #FF9E24;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 400;
    }    
</style>
