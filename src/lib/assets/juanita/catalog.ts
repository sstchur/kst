import type { Product } from "$lib/product";

import lst700Front from '$lib/assets/juanita/img/lst700front.png';

import lst350Front from '$lib/assets/juanita/img/lst350front.png';

import lst356Front from '$lib/assets/juanita/img/lst356front.png';

import lpc54Front from '$lib/assets/juanita/img/lpc54front.png';

import pc78hFront from '$lib/assets/juanita/img/pc78hfront.png';

const lst700: Product = {
    id: 'lst700',
    title: 'Sport-Tek Ladies V-Next, Team Tee, True Navy',
    description: 'Lightweight, 95/5 poly/spandex',
    images: [ lst700Front ],
    price: 23.00
};

const lst350: Product = {
    id: 'lst350',
    title: 'Sport-Tek Tee, True Navy',
    description: 'Lightweight, moisture-wicking, 100% polyester',
    images: [ lst350Front ],
    price: 20.00
};

const lst356: Product = {
    id: 'lst356',
    title: 'Sport-Tek Racerback Tank, True Navy',
    description: '100% polyester interlock with PosiCharge technology',
    images: [ lst356Front ],
    price: 20.00
};

const lpc54: Product = {
    id: 'lpc54',
    title: 'Port & Company Cotton Tee, Navy',
    description: 'Classic tee, 100% cotton, side seamed with a contoured body for a feminine fit',
    images: [ lpc54Front ],
    price: 15.00,
};

const pc78h: Product = {
    id: 'pc78h',
    title: 'Port & Company Fleece Pullover Hoodie, Navy',
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
    lst700,
    lst350,
    lst356,
    lpc54,
    pc78h
];