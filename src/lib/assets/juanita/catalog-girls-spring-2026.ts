import type { Product } from "$lib/product";

import lk398NavyFront from '$lib/assets/juanita/img/girls/spring2026/lk398_true-navy_front.png';

import lk398RedFront from '$lib/assets/juanita/img/girls/spring2026/lk398_engine-red_front.png';

import pc78hFront from '$lib/assets/juanita/img/girls/spring2026/pc78h_dark-heather-grey_front.png';

const lk398_navy: Product = {
    id: 'lk398-true-navy',
    title: 'LK398: Port Authority Women\'s Performance Staff Polo, True Navy',
    description: '4.7-ounce, 100% polyester, moisture wicking, open neck, side vents',
    images: [ lk398NavyFront ],
    price: 26.00
};

const lk398_red: Product = {
    id: 'lk398-engine-red',
    title: 'LK398: Port Authority Women\'s Performance Staff Polo, Engine Red',
    description: '4.7-ounce, 100% polyester, moisture wicking, open neck, side vents',
    images: [ lk398RedFront ],
    price: 26.00
};


const pc78h: Product = {
    id: 'pc78h-grey',
    title: 'PC78H: Port & Company Pullover Hoodie, Dark Heather Grey',
    description: '7.8-ounce, 50/50 cotton/poly fleece',
    images: [ pc78hFront ],
    customizable: 10,
    restrictedSizes: new Set(['X-Small']),
    price: 38.00
};

export const title = 'Juanita Girls 2026 Tennis Apparel';
export const schoolName = 'Juanita High School';
export const collectionName = 'juanita-girlsspring2025';
import logo2026 from '$lib/assets/juanita/img/girls/spring2026/logo.png';
export const logo = logo2026;
export const taxRate = 0.104;
export const markup = 0;
export const payPalEnabled = true;
export const closeDate = new Date(2026, 2, 7, 23, 59, 59);
export const products: Product[] = [
    lk398_navy,
    lk398_red,
    pc78h
];