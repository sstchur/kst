import type { Product } from "$lib/product";

import logo2023 from '$lib/assets/issaquah/img/boys/fall2023/logo2023.jpg';

import st350Front from '$lib/assets/issaquah/img/boys/fall2023/st350_purple_front.jpg';
import st350lsFront from '$lib/assets/issaquah/img/boys/fall2023/st350ls_purple_front.jpg';
import pc78Front from '$lib/assets/issaquah/img/boys/fall2023/pc78_purple_front.jpg';

const st350: Product = {
    id: 'st350-purple',
    title: 'ST350: Sport-Tek dri-fit T, Purple',
    description: '3.8-ounce, 100% polyester, removable tag',
    images: [ st350Front, logo2023 ],
    customizable: 8.00,
    price: 19.95,
};

const st350ls: Product = {
    id: 'st350ls-purple',
    title: 'ST350LS: Sport-Tek dri-fit long sleeve T, Purple',
    description: '3.8-ounce, 100% polyester, removable tag',
    images: [ st350lsFront, logo2023 ],
    customizable: 8.00,
    price: 22.95
};

const pc78: Product = {
    id: 'pc78-purple',
    title: 'PC78: Port & Company Fleece Crewneck Sweatshirt, Purple',
    description: '7.8-ounce, 50/50 cotton/poly fleece, removable tag',
    images: [ pc78Front, logo2023 ],
    restrictedSizes: new Set(['X-Small']),
    customizable: 8.00,
    price: 32.95
};


export const title = 'Issaquah Boys 2023 Tennis Apparel';
export const schoolName = 'Issaquah High School';
export const collectionName = 'issaquah-boysFall2023';

export const logo = logo2023;
export const taxRate = 0.101;
export const markup = 0;
export const payPalEnabled = true;
export const closeDate = new Date(2023, 8, 10, 9, 30, 59);
export const products: Product[] = [
    st350,
    st350ls,
    pc78
];