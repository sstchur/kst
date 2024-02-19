import type { Product } from "$lib/types/ProductTypes";

import holloway222777Green from '$lib/assets/redmond/img/holloway222777-green.png';
import holloway222777Black from '$lib/assets/redmond/img/holloway222777-black.png';

import augusta1732Green from '$lib/assets/redmond/img/augusta1732-green.png';
import holloway221335Black from '$lib/assets/redmond/img/holloway221335-black.png';

import dt6100Black from '$lib/assets/redmond/img/dt6100-black.png';
import dt6100Green from '$lib/assets/redmond/img/dt6100-green.png';

import augusta1790Green from '$lib/assets/redmond/img/augusta1790-green.png';
import augusta1790Black from '$lib/assets/redmond/img/augusta1790-black.png';

import augusta2797Black from '$lib/assets/redmond/img/augusta2797-black.png';

export const products: Product[] = [
    {
        id: 'holloway222777-green',
        model: '222777-Green',
        title: 'Ladies Holloway Training Tank, Green',
        description: 'Moisture wicking, 88% poly/12% elastane Coolcore®, stretchy fit',
        images: [holloway222777Green],
        restrictedSizes: new Set(['3X-Large', '4X-Large']),
        price: 26.95
    },
    {
        id: 'holloway222777-black',
        model: '222777-Black',
        title: 'Ladies Holloway Training Tank, Black',
        description: 'Moisture wicking, 88% poly/12% elastane Coolcore®, stretchy fit',
        images: [holloway222777Black],
        restrictedSizes: new Set(['3X-Large', '4X-Large']),        
        price: 26.95
    },
    {
        id: 'augusta1732-green',
        model: '1732-Green',
        title: 'Ladies Augusta Step-Back Jersey, Green',
        description: 'Moisture wicking, 100% polyester, ladies fit',
        images: [augusta1732Green],
        restrictedSizes: new Set(['3X-Large', '4X-Large']),        
        price: 31.95
    },
    {
        id: 'holloway221335-black',
        model: '221335-Black',
        title: 'Ladies Holloway PR Max Track Jersey, Black',
        description: 'Moisture wicking, 100% polyester, ladies fit',
        images: [holloway221335Black],
        restrictedSizes: new Set(['3X-Large', '4X-Large']),        
        price: 31.95
    },
    {
        id: 'augusta1790-green',
        model: '1790-Green',
        title: 'Augusta Ladies NextGen Tee, Green',
        description: '100% polyester wicking knit with color secure® technology',
        images: [augusta1790Green],
        restrictedSizes: new Set(['4X-Large']),
        price: 16.95
    },
    {
        id: 'augusta1790-black',
        model: '1790-Black',
        title: 'Augusta Ladies NextGen Tee, Black',
        description: '100% polyester wicking knit with color secure® technology',
        images: [augusta1790Black],
        restrictedSizes: new Set(['4X-Large']),
        price: 16.95
    },
    {
        id: 'augusta2797-black',
        model: '2797-Black',
        title: 'Augusta Ladies Long Sleeve Tee, Black',
        description: '100% polyester wicking knit with color secure® technology',
        images: [augusta2797Black],
        restrictedSizes: new Set(['4X-Large']),
        price: 21.95
    },
    {
        id: 'dt6100-green',
        model: 'dt6100-Green',
        title: 'District Cotton Hoodie, Green',
        description: '8.8oz, 100% ring spun cotton face',
        images: [dt6100Green],
        customizable: 9,
        price: 29.95
    },
    {
        id: 'dt6100-black',
        model: 'dt6100-Black',
        title: 'District Cotton Hoodie, Black',
        description: '8.8oz, 100% ring spun cotton face',
        customizable: 9,
        images: [dt6100Black],
        price: 29.95
    }
];

export const title = 'Redmond Girls Tennis Apparel 2024';
export const staticCode = 564738;
export const schoolName = 'Redmond High School';
export const collectionName = 'girls2024';
import logo2023 from '$lib/assets/redmond/img/logo2023.png';
export const logo = logo2023;
export const taxRate = 0.101;
export const markup = 3.00;
export const payPalEnabled = true;
export const closeDate = new Date(2024, 10, 27, 59, 59);
