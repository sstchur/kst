import type { Product } from "$lib/product";

import logo2023 from '$lib/assets/liberty/img/boys/fall2023/logo2023.png';

import tt11Front from '$lib/assets/liberty/img/boys/fall2023/team365-tt11-front.jpg';
import jerzees996Front from '$lib/assets/liberty/img/boys/fall2023/jerzees-996-front.jpg';

const tt11: Product = {
    id: 'tt11-royal-blue',
    title: 'TT11: Performance Tee, Royal Blue',
    description: '3.5-ounce, 100% polyester, moisture-wicking and UV 40+ protection',
    images: [ tt11Front, logo2023 ],
    customizable: 8.00,
    price: 21.95,
};

const jerzees996: Product = {
    id: 'jerzees-996-royal-blue',
    title: '996: Jerzees Fleece Pullover Hoodie, Royal Blue',
    description: '8-ounce, 50/50 cotton/poly fleece',
    images: [ jerzees996Front, logo2023 ],
    restrictedSizes: new Set(['X-Small']),
    customizable: 8.00,
    price: 32.95
};


export const title = 'Liberty Boys 2023 Tennis Apparel';
export const schoolName = 'Liberty High School';
export const collectionName = 'liberty-boysFall2023';
export const staticCode = 102938;

export const logo = logo2023;
export const taxRate = 0.101;
export const markup = 0;
export const payPalEnabled = true;
export const closeDate = new Date(2023, 9, 2, 9, 30, 0);
export const products: Product[] = [
    tt11,
    jerzees996
];