import type { Product } from "$lib/types/ProductTypes";

import redmond_mustangs_gold_letters from '$lib/assets/redmond/img/boys/fall2023/redmond_mustangs_gold_letters.png';
import st350_green_redmond_mustangs from '$lib/assets/redmond/img/boys/fall2023/st350_green_redmond_mustangs.png';

import redmond_mustangs_green_letters from '$lib/assets/redmond/img/boys/fall2023/redmond_mustangs_green_letters.png';
import st350_white_redmond_mustangs from '$lib/assets/redmond/img/boys/fall2023/st350_white_redmond_mustangs.png';

import dt6100_black_front from '$lib/assets/redmond/img/boys/fall2023/dt6100_black_front.png';
import dt6100_black_back from '$lib/assets/redmond/img/boys/fall2023/dt6100_black_back.png';

export const products: Product[] = [
    {
        id: 'st350-green',
        title: 'Sport-Tek Competitor T, Forest Green',
        description: '3.8oz, 100% polyester',
        images: [st350_green_redmond_mustangs, redmond_mustangs_gold_letters],
        price: 19.95,
        customizable: 8.00
    },
    {
        id: 'st350-white',
        title: 'Sport-Tek Competitor T, White',
        description: '3.8oz, 100% polyester',
        images: [st350_white_redmond_mustangs, redmond_mustangs_green_letters],
        price: 19.95,
        customizable: 8.00
    },
    {
        id: 'dt6100-black',
        title: 'District Fleece Hoodie, Black',
        description: '8.8oz, 65/35 ring spun cotton/polyester',
        images: [dt6100_black_front, dt6100_black_back],
        price: 34.95,
        customizable: 8.00
    }
];

export const title = 'Redmond Boys Fall 2023 Tennis Apparel';
export const schoolName = 'Redmond High School';
export const collectionName = 'redmond-boysFall2023';
import logo2023 from '$lib/assets/redmond/img/boys/fall2023/redmond_mustangs_green_letters.png';
export const logo = logo2023;
export const taxRate = 0.101;
export const markup = 0.00;
export const payPalEnabled = true;
export const closeDate = new Date(2024, 7, 23, 23, 59, 59);
