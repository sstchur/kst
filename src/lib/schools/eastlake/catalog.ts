import type { Product } from "$lib/product";

import lst350Front from '$lib/assets/eastlake/lst350front.png';
import lst350Back from '$lib/assets/eastlake/lst350back.png';

import lst356Front from '$lib/assets/eastlake/lst356front.png';
import lst356Back from '$lib/assets/eastlake/lst356back.png';

import lst272Front from '$lib/assets/eastlake/lst272front.png';
import lst272Back from '$lib/assets/eastlake/lst272back.png';

import lst254Front from '$lib/assets/eastlake/lst254front.png';
import lst254Back from '$lib/assets/eastlake/lst254back.png';

const lst350: Product = {
    id: 'ls350',
    title: 'Sport-Tek Tee',
    description: 'Lightweight, moisture-wicking, 100% polyester',
    images: [ lst350Front, lst350Back ],
    price: 18.95
};
const lst356: Product = {
    id: 'lst356',
    title: 'Sport-Tek Racerback Tank',
    description: '100% polyester interlock with PosiCharge technology',
    images: [ lst356Front, lst356Back ],
    price: 18.95
};

const lst272: Product = {
    id: 'lst272',
    title: 'French Terry Pullover Hoodie',
    description: 'Lightweight, 59/41 combed ring spun cotton/poly, no pockets',
    images: [ lst272Front, lst272Back ],
    price: 33.95,
};

const lst254: Product = {
    id: 'lst254',
    title: 'Pullover Hooded Sweatshirt',
    description: '9 ounce, 65/35 ring spun combed cotton/poly fleece, front pouch pocket',
    images: [ lst254Front, lst254Back ],
    price: 30.99
};


export const title = 'Eastlake Girls 2023 Tennis Apparel';
import logo2023 from '$lib/assets/eastlake/logo2023.png';
export const logo = logo2023;
export const taxRate = 0.087;
export const payPalEnabled = true;
export const closeDate = new Date(2023, 2, 1, 0, 0, 0);
export const products: Product[] = [
    lst350,
    lst356,
    lst272,
    lst254
];