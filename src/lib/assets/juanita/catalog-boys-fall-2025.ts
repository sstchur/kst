import type { Product } from "$lib/product";

import st350Front from '$lib/assets/juanita/img/boys/fall2025/st350_black_front.png';

import pc78hFront from '$lib/assets/juanita/img/boys/fall2025/pc78h_dark-heather-grey_front.png';

const st350: Product = {
    id: 'st350-black',
    title: 'ST350: Sport Tek Performance Tee, Black',
    description: '3.8-ounce, 100% polyester, removable tag',
    images: [ st350Front ],
    price: 19.95,
    required: true,
};

const pc78h: Product = {
    id: 'pc78h-grey',
    title: 'PC78H: Port & Company Pullover Hoodie, Dark Heather Grey',
    description: '7.8-ounce, 50/50 cotton/poly fleece',
    images: [ pc78hFront ],
    restrictedSizes: new Set(['X-Small']),
    price: 32.95
};



export const title = 'Juanita Boys 2025 Tennis Apparel';
export const schoolName = 'Juanita High School';
export const collectionName = 'juanita-boysfall2025';
import logo2025 from '$lib/assets/juanita/img/boys/fall2025/logo.png';
export const logo = logo2025;
export const taxRate = 0.102;
export const markup = 0;
export const payPalEnabled = true;
export const closeDate = new Date(2025, 7, 29, 23, 59, 59);
export const products: Product[] = [
    st350,
    pc78h
];