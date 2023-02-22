export const prerender = false;

import * as catalogs from '$lib/assets/catalogs';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const schoolCodes = new Map<string, number>([
	['eastlake', 123456 ],
	['skyline', 234567 ]
]);

let taxRate: number;

export const load = (({ params }) => {
    const { school } = params;
    const catalog = catalogs[school];
    if (!catalog) {
        throw error(404, 'Not found');
    }

    taxRate = catalog.taxRate;
    return { taxRate: catalog.taxRate }
}) satisfies PageServerLoad;

export const actions = {
    default: async ({ request }) => {

        const data = await request.formData();
        const name = data.get('name');
        const email = data.get('email');
        const code = Number(data.get('code')?.valueOf());
        const school = data.get('school')?.toString() ?? '';
    
        console.log('CODE AND SCHOOL');
        console.log(code, school);
        console.log(schoolCodes.has(school), typeof schoolCodes.get(school), typeof code)
    
        if (!schoolCodes.has(school) || schoolCodes.get(school) !== code) {
             throw error(403, 'Invalid school code')
        }
    
        const order = { 
            name,
            email,
            cart: JSON.parse(data.get('cart')?.toString() ?? '')
        }
    
        // const dbConnection = await clientPromise;
        // const db = dbConnection.db(school);
        // const collection = db.collection('girls2023');
         
        // const ins = await collection.insertOne(order, (err, res) => {
        //     console.log('res', res)
        // });
    
        //return { success: true, orderId: ins.insertedId.toString() };

        return { success: true, orderid: 12345, order };
    }        
};