import type { Product } from "$lib/product";

import logo2025 from '$lib/assets/liberty-badminton/img/girls/2025/logo.png';

import lst350Front from '$lib/assets/liberty-badminton/img/girls/2025/lst350front.png';
import lst350Back from '$lib/assets/liberty-badminton/img/girls/2025/lst350back.png';
import st350Front from '$lib/assets/liberty-badminton/img/girls/2025/st350front.png';
import st350Back from '$lib/assets/liberty-badminton/img/girls/2025/st350back.png';
import pc78hFront from '$lib/assets/liberty-badminton/img/girls/2025/pc78h.png';
import augusta987Front from '$lib/assets/liberty-badminton/img/girls/2025/augusta987.png';
import augusta988Front from '$lib/assets/liberty-badminton/img/girls/2025/augusta988.png';
import holloway222784Front from '$lib/assets/liberty-badminton/img/girls/2025/holloway222784.png';

const lst350: Product = {
    id: 'lst350-white',
    title: 'LST350: Sport-Tek Women\'s Competitor T, White',
    description: '3.8-ounce, 100% polyester, moisture wicking, removeable tag',
    images: [ lst350Front, lst350Back ],
    price: 26.00
};

const st350: Product = {
    id: 'lst350-white',
    title: 'ST350: Sport-Tek Unisex Competitor T, White',
    description: '3.8-ounce, 100% polyester, moisture wicking, removeable tag',
    images: [ st350Front, st350Back ],
    price: 26.00
};

const pc78h: Product = {
    id: 'pc78h-ash',
    title: 'PC78H: Port & Company Fleece Pullover Hoodie, Ash',
    description: '7.8-ounce, 50/50 cotton/poly fleece',
    images: [ pc78hFront ],
    customizable: 10,
    restrictedSizes: new Set(['X-Small']),
    price: 41.00
};


const augusta987: Product = {
    id: 'augusta-987-royal-blue',
    title: 'Augusta 987: Ladies Junior Fit Jersey Shorts, Royal Blue',
    description: '50/50 cotton/poly jersey knit, ladies\' fit, 3in inseam',
    images: [ augusta987Front ],
    restrictedSizes: new Set(['3X-Large', '4X-Large']),
    price: 22.00
};


const augusta988: Product = {
    id: 'augusta-988-royal-blue',
    title: 'Augusta 988 (Youth): Girls Fit Jersey Shorts, Royal Blue',
    description: 'Same as Augusta 987 but in Youth sizing',
    images: [ augusta988Front ],
    restrictedSizes: new Set(['X-Large', '2X-Large', '3X-Large', '4X-Large']),
    price: 22.00
};


const holloway222784: Product = {
    id: 'holloway-222784-royal-blue',
    title: 'Holloway 222784: Ladies Skort, Royal Blue',
    description: '88/12 poly/elastane Coolcore fabric, 4-way stretch, UPF 50',
    images: [ holloway222784Front ],
    restrictedSizes: new Set(['3X-Large', '4X-Large']),
    price: 40.00
};

export const title = 'Liberty Girls 2025 Badminton Apparel';
export const schoolName = 'Liberty High Badminton';
export const collectionName = 'liberty-badminton-girls2025';
export const staticCode = 102938;

export const logo = logo2025;
export const taxRate = 0.102;
export const markup = 0;
export const payPalEnabled = true;
export const closeDate = new Date(2025, 2, 4, 11, 59, 59);
export const products: Product[] = [
    lst350,
    st350,
    pc78h,
    augusta987,
    augusta988,
    holloway222784
];