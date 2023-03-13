import * as catalogs from '$lib/assets/catalogs';
import clientPromise from '$lib/db/mongo';
import { schoolCodes } from '$lib/server/schoolCodes';
import { error, redirect } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const prerender = false;

export const load = (async ({ params, url }) => {
    const { school } = params;

    const { searchParams } = url;
    const code = Number(searchParams.get('code'));
    if (code) {

        if (!schoolCodes.has(school) || schoolCodes.get(school) !== code) {
            throw error(403, 'Invalid school code')
        }

        const dbConnection = await clientPromise;
        const db = dbConnection.db(school);
        const { collectionName } = catalogs[school];
        const collection = db.collection(collectionName);

        try {
            const orders = await (await collection.find({})).toArray();
            console.log(orders.map(o => {
                o._id = o._id.toString();
                return o;
            }));
            return { success: true, school, orders };
        }
        catch(error) {
            console.error('THE ERROR IS:', error);
        }
    }

    return { success: false, school, orders: [] }

}) satisfies PageServerLoad;