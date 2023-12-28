import type { Product } from "$lib/types/ProductTypes";

import holloway222777Green from '$lib/assets/redmond/img/holloway222777-green.png';
import holloway222777Black from '$lib/assets/redmond/img/holloway222777-black.png';

import holloway221335Green from '$lib/assets/redmond/img/holloway221335-green.png';
import holloway221335Black from '$lib/assets/redmond/img/holloway221335-black.png';

import pc78hFrontGreen from '$lib/assets/redmond/img/pc78hfront-green.png';
import pc78hBackGreen from '$lib/assets/redmond/img/pc78hback-green.png';

import pc78hFrontBlack from '$lib/assets/redmond/img/pc78hfront-black.png';
import pc78hBackBlack from '$lib/assets/redmond/img/pc78hback-black.png';

import augusta1790Green from '$lib/assets/redmond/img/augusta1790-green.png';
import augusta1790Black from '$lib/assets/redmond/img/augusta1790-black.png';

import augusta2797Green from '$lib/assets/redmond/img/augusta2797-green.png';
import augusta2797Black from '$lib/assets/redmond/img/augusta2797-black.png';

import pc78FrontAndBack from '$lib/assets/redmond/img/pc78frontAndBack.png';
import divisionChampsLogo from '$lib/assets/redmond/img/division-champs-logo.png';

export const products: Product[] = [
    {
        id: 'pc78',
        title: 'Crewneck sweatshirt, white',
        description: '7.8oz, 50/50 cotton/poly fleece',
        images: [divisionChampsLogo, pc78FrontAndBack],
        restrictedSizes: new Set(['X-Small']),
        price: 33.50,
        customizable: 8.00
    }
];

export const products_spring2023: Product[] = [
    {
        id: 'holloway222777-green',
        title: 'Ladies Holloway Training Tank, Green',
        description: 'Moisture wicking, 88% poly/12% elastane Coolcore®, stretchy fit',
        images: [holloway222777Green],
        restrictedSizes: new Set(['3X-Large', '4X-Large']),
        price: 27.00
    },
    {
        id: 'holloway222777-black',
        title: 'Ladies Holloway Training Tank, Black',
        description: 'Moisture wicking, 88% poly/12% elastane Coolcore®, stretchy fit',
        images: [holloway222777Black],
        restrictedSizes: new Set(['3X-Large', '4X-Large']),        
        price: 27.00
    },
    {
        id: 'holloway221335-green',
        title: 'Ladies Holloway PR Max Track Jersey, Green',
        description: 'Moisture wicking, 100% polyester, ladies fit',
        images: [holloway221335Green],
        restrictedSizes: new Set(['3X-Large', '4X-Large']),        
        price: 32.00
    },
    {
        id: 'holloway221335-black',
        title: 'Ladies Holloway PR Max Track Jersey, Black',
        description: 'Moisture wicking, 100% polyester, ladies fit',
        images: [holloway221335Black],
        restrictedSizes: new Set(['3X-Large', '4X-Large']),        
        price: 32.00
    },
    {
        id: 'pc78h-green',
        title: 'Port & Company Fleece Pullover Hoodie, Green',
        description: '50/50 cotton/poly fleece blend',
        images: [pc78hFrontGreen, pc78hBackGreen],
        restrictedSizes: new Set(['X-Small']),
        customizable: 8.00,
        price: 30.00
    },
    {
        id: 'pc78h-black',
        title: 'Port & Company Fleece Pullover Hoodie, Black',
        description: '50/50 cotton/poly fleece blend',
        images: [pc78hFrontBlack, pc78hBackBlack],
        restrictedSizes: new Set(['X-Small']),
        customizable: 8.00,
        price: 30.00
    },
    {
        id: 'augusta1790-green',
        title: 'Augusta Ladies NextGen Tee, Green',
        description: '100% polyester wicking knit with color secure® technology',
        images: [augusta1790Green],
        restrictedSizes: new Set(['4X-Large']),
        price: 17.00
    },
    {
        id: 'augusta1790-black',
        title: 'Augusta Ladies NextGen Tee, Black',
        description: '100% polyester wicking knit with color secure® technology',
        images: [augusta1790Black],
        restrictedSizes: new Set(['4X-Large']),
        price: 17.00
    },
    {
        id: 'augusta2797-green',
        title: 'Augusta Ladies Long Sleeve Tee, Green',
        description: '100% polyester wicking knit with color secure® technology',
        images: [augusta2797Green],
        restrictedSizes: new Set(['4X-Large']),
        price: 22.00
    },
    {
        id: 'augusta2797-black',
        title: 'Augusta Ladies Long Sleeve Tee, Black',
        description: '100% polyester wicking knit with color secure® technology',
        images: [augusta2797Black],
        restrictedSizes: new Set(['4X-Large']),
        price: 22.00
    }
];

export const title = 'Redmond Girls 2022/23 Division Champs Apparel';
export const schoolName = 'Redmond High School';
export const collectionName = 'girls2023';
import logo2023 from '$lib/assets/redmond/img/logo2023.png';
export const logo = logo2023;
export const taxRate = 0.101;
export const markup = 5.00;
export const payPalEnabled = true;
export const closeDate = new Date(2023, 11, 27, 59, 59);
