import { w as writable, d as derived, r as readable } from "./index.js";
const closeDate = writable();
let close_date = /* @__PURE__ */ new Date();
closeDate.subscribe((val) => close_date = val);
const shortCloseDate = derived(closeDate, ($closeDate) => close_date?.toLocaleDateString());
const remainingTime = readable(close_date?.getTime() - (/* @__PURE__ */ new Date()).getTime(), function start(set) {
  const interval = setInterval(() => {
    set(close_date?.getTime() - (/* @__PURE__ */ new Date()).getTime());
  }, 1e3);
  return function stop() {
    clearInterval(interval);
  };
});
const daysLeft = derived(remainingTime, ($timeLeft) => $timeLeft / 1e3 / 60 / 60 / 24);
const hoursLeft = derived(daysLeft, ($daysLeft) => ($daysLeft - ~~$daysLeft) * 24);
const minLeft = derived(hoursLeft, ($hoursLeft) => ($hoursLeft - ~~$hoursLeft) * 60);
const secLeft = derived(minLeft, ($minLeft) => ($minLeft - ~~$minLeft) * 60);
const closed = derived(remainingTime, ($remainingTime) => $remainingTime < 0);
const timeLeft = {
  daysLeft,
  hoursLeft,
  minLeft,
  secLeft,
  closed
};
export {
  closeDate as c,
  shortCloseDate as s,
  timeLeft as t
};
