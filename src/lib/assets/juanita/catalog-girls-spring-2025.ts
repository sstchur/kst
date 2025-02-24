import type { Product } from "$lib/product";

import lk398Front from '$lib/assets/juanita/img/girls/spring2025/lk398_true-navy_front.png';

import pc78hFront from '$lib/assets/juanita/img/girls/spring2025/pc78h_dark-heather-grey_front.png';

const lk398: Product = {
    id: 'lk398-true-navy',
    title: 'LK398: Port Authority Women\'s Performance Staff Polo, True Navy',
    description: '4.7-ounce, 100% polyester, moisture wicking, open neck, side vents',
    images: [ lk398Front ],
    price: 25.00
};

const pc78h: Product = {
    id: 'pc78h-grey',
    title: 'PC78H: Port & Company Pullover Hoodie, Dark Heather Grey',
    description: '7.8-ounce, 50/50 cotton/poly fleece',
    images: [ pc78hFront ],
    restrictedSizes: new Set(['X-Small']),
    price: 40.00
};

export const title = 'Juanita Girls 2025 Tennis Apparel';
export const schoolName = 'Juanita High School';
export const collectionName = 'juanita-girlsspring2025';
import logo2025 from '$lib/assets/juanita/img/girls/spring2025/logo.png';
export const logo = logo2025;
export const taxRate = 0.102;
export const markup = 0;
export const payPalEnabled = true;
export const closeDate = new Date(2025, 2, 5, 23, 59, 59);
export const products: Product[] = [
    lk398,
    pc78h
];