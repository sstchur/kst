import type { Product } from "$lib/product";

import st350Front from '$lib/assets/eastlake/img/boys/fall2023/st350_white_front.png';
import st350Back from '$lib/assets/eastlake/img/boys/fall2023/st350_white_back.png';

import dt6100Front from '$lib/assets/eastlake/img/boys/fall2023/dt6100_grey_front.png';
import dt6100Back from '$lib/assets/eastlake/img/boys/fall2023/dt6100_grey_back.png';

export const products: Product[] = [
    {
        id: 'st350-white',
        title: 'Sport-Tek Competitor T, White',
        description: '3.8oz, 100% polyester',
        images: [st350Front, st350Back],
        price: 18.95
    },
    {
        id: 'dt6100',
        title: 'District Fleece Hoodie, Grey Frost',
        description: '8.8oz, 65/35 ring spun cotton/polyester',
        images: [dt6100Front, dt6100Back],
        price: 30.95
    }
];

export const title = 'Eastlake Boys 2023 Tennis Apparel';
export const schoolName = 'Eastlake High School';
export const collectionName = 'eastlake-boysFall2023';
import logo2023 from '$lib/assets/eastlake/img/boys/fall2023/logo2023.png';
export const logo = logo2023;
export const taxRate = 0.087;
export const markup = 0;
export const payPalEnabled = true;
export const closeDate = new Date(2023, 10, 27, 59, 59);