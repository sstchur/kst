import type { Product } from "$lib/product";

import pc380Front from '$lib/assets/juanita/img/boys/fall2023/pc380_deep-navy_front.png';

import pc78hFront from '$lib/assets/juanita/img/boys/fall2023/pc78h_dark-heather-grey_front.png';

import j343Front from '$lib/assets/juanita/img/boys/fall2023/j343_dress-navy-blue_front.png';

const pc380: Product = {
    id: 'pc380-deep-navy',
    title: 'PC380: Port & Company Performance Tee, Deep Navy',
    description: '3.8-ounce, 100% polyester, UPF rating of 50, removable tag',
    images: [ pc380Front ],
    price: 0,
    required: true,
};

const pc78h: Product = {
    id: 'pc78h-grey',
    title: 'PC78H: Port & Company Pullover Hoodie, Dark Heather Grey',
    description: '7.8-ounce, 50/50 cotton/poly fleece',
    images: [ pc78hFront ],
    restrictedSizes: new Set(['X-Small']),
    price: 0
};

const j343: Product = {
    id: 'j343-dress-navy',
    title: 'J343: Port Authority Zephyr 1/2 Zip Pullover, Dress Navy Blue',
    description: '100% polyester, wind/water resistant, left-size seam zipper for easy on/off',
    images: [ j343Front ],
    price: 0
};


export const title = 'Juanita Boys 2023 Tennis Apparel';
export const schoolName = 'Juanita High School';
export const collectionName = 'juanita-boysFall2023';
import logo2023 from '$lib/assets/juanita/img/boys/fall2023/logo_2023_fall_boys.png';
export const logo = logo2023;
export const taxRate = 0.087;
export const markup = 0;
export const payPalEnabled = true;
export const closeDate = new Date(2024, 8, 1, 23, 59, 59);
export const products: Product[] = [
    pc380,
    pc78h,
    j343
];