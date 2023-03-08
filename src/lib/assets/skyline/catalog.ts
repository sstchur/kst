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
        customizable: 8.00,
        price: 13.50
    },
    {
        id: 'lst350',
        title: 'Sport-Tek Tee',
        description: 'Lightweight, moisture-wicking, 100% polyester',
        images: [lst350Front, lst350Back],
        customizable: 8.00,
        price: 17.00
    },
    {
        id: 'lst356',
        title: 'Sport-Tek Racerback Tank',
        description: '100% polyester interlock with PosiCharge technology',
        images: [lst356Front, lst356Back],
        customizable: 8.00,
        price: 17.00,
    },
    {
        id: 'pc78q',
        title: 'Port & Company 1/4 Zip Pullover',
        description: 'A cozy 1/4 zip in 50/50 poly/cotton fleece',
        images: [pc78qFront, pc78qBack],
        customizable: 8.00,
        varsityEnabled: 7.00,
        restrictedSizes: new Set(['X-Small']),
        price: 26.50,
    }
];

export const title = 'Skyline Girls 2023 Tennis Apparel';
export const schoolName = 'Skyline High School';
export const collection = 'girls2023-2';
import logo2023 from '$lib/assets/skyline/img/logo2023.png';
export const logo = logo2023;
export const taxRate = 0;
export const markup = 5.00;
export const payPalEnabled = false;
export const closeDate = new Date(2023, 2, 9, 23, 59, 59);
