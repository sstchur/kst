import * as catalogs  from '$lib/assets/catalogs';
import { readable } from 'svelte/store';
export const prerender = true;

export function load({ params }) {

    const school = params.school ?? undefined;
    const catalog = catalogs[school];
    
    if (!catalog) {
        return { title: undefined };
    }

    return { title: catalog.title }
}