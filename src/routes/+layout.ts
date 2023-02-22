import * as catalogs  from '$lib/assets/catalogs';
import { readable } from 'svelte/store';
export const prerender = true;

export function load({ params }) {

    // const school = params.school ?? undefined;
    // const catalog = catalogs[school];
    // const closeDate = catalog?.closeDate ?? -1;
    
    // const timeLeft = readable(closeDate - new Date().getTime(), function start(set) {
    //     const interval = setInterval(() => {
    //     set(closeDate - new Date().getTime());
    //     }, 1000);
    
    //     return function stop() {
    //         clearInterval(interval);
    //     };
    // });
    
    // if (!catalog) {
    //     return { title: undefined };
    // }

    // return { title: catalog.title, timeLeft, school }
}