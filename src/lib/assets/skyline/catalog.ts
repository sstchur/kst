import type { Product } from "$lib/types/ProductTypes";

import lpc54Front from '$lib/assets/skyline/img/lpc54front.png';
import lpc54Back from '$lib/assets/skyline/img/lpc54back.png';

import lst350Front from '$lib/assets/skyline/img/lst350front.png';
import lst350Back from '$lib/assets/skyline/img/lst350back.png';

import lst356Front from '$lib/assets/skyline/img/lst356front.png';
import lst356Back from '$lib/assets/skyline/img/lst356back.png';

import pc78qFront from '$lib/assets/skyline/img/pc78qfront.png';
import pc78qBack from '$lib/assets/skyline/img/pc78qback.png';


export const products: Product[] = [
    {
        id: 'lpc54',
        title: 'Port & Company Ladies Tee',
        description: 'Classic tee, 100% cotton, side seamed with a contoured body for a feminine fit',
        images: [lpc54Front, lpc54Back],
        customizable: true,
        price: 50.00
    },
    {
        id: 'lst350',
        title: 'Sport-Tek Tee',
        description: 'Lightweight, moisture-wicking, 100% polyester',
        images: [lst350Front, lst350Back],
        customizable: true,
        price: 37.42
    },
    {
        id: 'lst356',
        title: 'LST356',
        images: [lst356Front, lst356Back],
        customizable: true,
        price: 132.45,
    },
    {
        id: 'pc78q',
        title: 'PC78Q',
        images: [pc78qFront, pc78qBack],
        customizable: true,
        varsityEnabled: true,
        restrictedSizes: new Set(['X-Small']),
        price: 132.45,
    }
];

export const title = 'Skyline Girls 2023 Tennis Apparel';
export const schoolName = 'Skyline High School';
export const collection = 'girls2023';
import logo2023 from '$lib/assets/skyline/img/logo2023.png';
export const logo = logo2023;
export const taxRate = 0.101;
export const payPalEnabled = false;
export const closeDate = new Date(2023, 1, 23, 10, 0, 0);
