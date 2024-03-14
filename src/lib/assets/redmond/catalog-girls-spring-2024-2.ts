import type { Product } from "$lib/types/ProductTypes";

import pc78p from '$lib/assets/redmond/img/pc78p.png';

export const products: Product[] = [
    {
        id: 'pc78p-gray',
        model: 'PC78P-Gray',
        title: 'Port & Company Sweatpants',
        description: 'Core Fleece Sweatpant with Pockets',
        images: [pc78p],
        restrictedSizes: new Set(['X-Small']),
        price: 26.95
    }
];

export const title = 'Redmond Girls Tennis Apparel 2024';
export const staticCode = 564738;
export const schoolName = 'Redmond High School';
export const collectionName = 'girls2024';
import logo2023 from '$lib/assets/redmond/img/logo2023.png';
export const logo = logo2023;
export const taxRate = 0.101;
export const markup = 3.00;
export const payPalEnabled = true;
export const closeDate = new Date(2024, 2, 17, 23, 59, 59);