import type { Product } from "$lib/product";

import lst350Front from '$lib/assets/juanita/img/lst350front.jpg';

import lst356Front from '$lib/assets/juanita/img/lst356front.jpg';

import lpc54Front from '$lib/assets/juanita/img/lpc54front.jpg';

import pc78hFront from '$lib/assets/juanita/img/pc78hfront.jpg';

const lst350: Product = {
    id: 'lst350',
    title: 'Sport-Tek Tee',
    description: 'Lightweight, moisture-wicking, 100% polyester',
    images: [ lst350Front ],
    price: 20.00
};
const lst356: Product = {
    id: 'lst356',
    title: 'Sport-Tek Racerback Tank',
    description: '100% polyester interlock with PosiCharge technology',
    images: [ lst356Front ],
    price: 20.00
};

const lpc54: Product = {
    id: 'lpc54',
    title: 'Port & Company Cotton Tee',
    description: 'Classic tee, 100% cotton, side seamed with a contoured body for a feminine fit',
    images: [ lpc54Front ],
    price: 15.00,
};

const pc78h: Product = {
    id: 'pc78h',
    title: 'Port & Company Fleece Pullover Hoodie',
    description: '50/50 cotton/poly fleece blend',
    images: [ pc78hFront ],
    restrictedSizes: new Set(['X-Small']),
    price: 32
};


export const title = 'Juanita Girls 2023 Tennis Apparel';
export const schoolName = 'Juanita High School';
export const collectionName = 'girls2023';
import logo2023 from '$lib/assets/juanita/img/logo2023.jpg';
export const logo = logo2023;
export const taxRate = 0.087;
export const markup = 0;
export const payPalEnabled = true;
export const closeDate = new Date(2023, 2, 22, 23, 59, 59);
export const products: Product[] = [
    lst350,
    lst356,
    lpc54,
    pc78h
];