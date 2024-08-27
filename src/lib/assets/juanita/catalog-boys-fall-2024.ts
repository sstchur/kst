import type { Product } from "$lib/product";

import pc380Front from '$lib/assets/juanita/img/boys/fall2024/pc380_deep-navy_front.png';

import pc78hFront from '$lib/assets/juanita/img/boys/fall2024/pc78h_dark-heather-grey_front.png';

import st800Front from '$lib/assets/juanita/img/boys/fall2024/st800_true-navy-white_front.png';

const pc380: Product = {
    id: 'pc380-deep-navy',
    title: 'PC380: Port & Company Performance Tee, Deep Navy',
    description: '3.8-ounce, 100% polyester, UPF rating of 50, removable tag',
    images: [ pc380Front ],
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

const st800: Product = {
    id: 'st800-navy-white',
    title: 'J343: Sport-Tek Full-zip Jacket w/ Embroidered Logo',
    description: 'True navy / white, 100% polyester double knit, side slash pockets, tag free label',
    images: [ st800Front ],
    price: 38.95
};


export const title = 'Juanita Boys 2024 Tennis Apparel';
export const schoolName = 'Juanita High School';
export const collectionName = 'juanita-boysfall2024';
import logo2023 from '$lib/assets/juanita/img/boys/fall2024/logo.png';
export const logo = logo2023;
export const taxRate = 0.102;
export const markup = 0;
export const payPalEnabled = true;
export const closeDate = new Date(2025, 10, 27, 59, 59);
export const products: Product[] = [
    pc380,
    pc78h,
    st800
];