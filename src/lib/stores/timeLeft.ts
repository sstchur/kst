import { derived, readable, writable } from "svelte/store";

export const closeDate = writable();

let close_date = new Date;
closeDate.subscribe(val => close_date = val);

const remainingTime = readable(close_date?.getTime() - new Date().getTime(), function start(set) {
    const interval = setInterval(() => {
      set(close_date?.getTime() - new Date().getTime());
    }, 1000);
  
    return function stop() {
      clearInterval(interval);
    };
  });

const daysLeft = derived(remainingTime, $timeLeft => $timeLeft/1000/60/60/24);
const hoursLeft = derived(daysLeft, $daysLeft => ($daysLeft - ~~$daysLeft) * 24);
const minLeft = derived(hoursLeft, $hoursLeft => ($hoursLeft - ~~$hoursLeft) * 60);
const secLeft = derived(minLeft, $minLeft => ($minLeft - ~~$minLeft) * 60);
const closed = derived(remainingTime, $remainingTime => $remainingTime < 0);

export const timeLeft = {
    daysLeft,
    hoursLeft,
    minLeft,
    secLeft,
    closed
};
