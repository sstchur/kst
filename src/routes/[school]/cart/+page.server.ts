export const prerender = false;

import * as catalogs from '$lib/assets/catalogs';
import type { PageServerLoad } from './$types';

const schoolCodes = new Map<string, number>([
	['eastlake', 123456 ],
	['skyline', 234567 ]
]);

let taxRate: number;

export const load = (({ params }) => {
    const { school } = params;
    const catalog = catalogs[school];
    if (!catalog) {
        throw error(404, 'Not found');
    }

    taxRate = catalog.taxRate;
    return { taxRate: catalog.taxRate }
}) satisfies PageServerLoad;

export const actions = {
    default: async () => {
        return { success: true, orderId: 12345 };
    }
}