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
        title: '222777: Ladies Holloway Training Tank, Green',
        description: 'Moisture wicking, 88% poly/12% elastane Coolcore®, stretchy fit',
        images: [holloway222777Green],
        restrictedSizes: new Set(['3X-Large', '4X-Large']),
        price: 29.00
    },
    {
        id: 'holloway222777-black',
        model: '222777-Black',
        title: '222777: Ladies Holloway Training Tank, Black',
        description: 'Moisture wicking, 88% poly/12% elastane Coolcore®, stretchy fit',
        images: [holloway222777Black],
        restrictedSizes: new Set(['3X-Large', '4X-Large']),        
        price: 29.00
    },
    {
        id: 'augusta1732-green',
        model: '1732-Green',
        title: '1732: Ladies Augusta Step-Back Jersey, Green',
        description: 'Moisture wicking, 100% polyester, ladies fit',
        images: [augusta1732Green],
        restrictedSizes: new Set(['3X-Large', '4X-Large']),        
        price: 28.00
    },
    {
        id: 'holloway221335-black',
        model: '221335-Black',
        title: '221335: Ladies Holloway PR Max Track Jersey, Black',
        description: 'Moisture wicking, 100% polyester, ladies fit',
        images: [holloway221335Black],
        restrictedSizes: new Set(['3X-Large', '4X-Large']),        
        price: 33.00
    },
    {
        id: 'augusta1790-green',
        model: '1790-Green',
        title: '1790: Augusta Ladies NextGen Tee, Green',
        description: '100% polyester wicking knit with color secure® technology',
        images: [augusta1790Green],
        restrictedSizes: new Set(['4X-Large']),
        price: 16.00
    },
    {
        id: 'augusta1790-black',
        model: '1790-Black',
        title: '1790: Augusta Ladies NextGen Tee, Black',
        description: '100% polyester wicking knit with color secure® technology',
        images: [augusta1790Black],
        restrictedSizes: new Set(['4X-Large']),
        price: 16.00
    },
    {
        id: 'augusta2797-black',
        model: '2797-Black',
        title: '2797: Augusta Ladies Long Sleeve Tee, Black',
        description: '100% polyester wicking knit with color secure® technology',
        images: [augusta2797Black],
        restrictedSizes: new Set(['4X-Large']),
        price: 20.00
    },
    {
        id: 'dt6100-green',
        model: 'dt6100-Green',
        title: 'DT6100: District Cotton Hoodie, Green',
        description: '8.8oz, 100% ring spun cotton face',
        images: [dt6100Green],
        customizable: 9,
        price: 27.00
    },
    {
        id: 'dt6100-black',
        model: 'DT6100: dt6100-Black',
        title: 'District Cotton Hoodie, Black',
        description: '8.8oz, 100% ring spun cotton face',
        customizable: 9,
        images: [dt6100Black],
        price: 27.00
    }
];

export const title = 'Redmond Girls Tennis Apparel 2025';
export const staticCode = 564738;
export const schoolName = 'Redmond High School';
export const collectionName = 'redmond-girlsspring2025';
import logo2023 from '$lib/assets/redmond/img/logo2023.png';
export const logo = logo2023;
export const taxRate = 0.103;
export const markup = 5.00;
export const payPalEnabled = true;
export const closeDate = new Date(2025, 2, 5, 23, 59, 59);