import clientPromise from "$lib/db/mongo";
import { error } from "@sveltejs/kit";
import { ObjectId } from "mongodb";

export const prerender = false;

const schoolCodes = new Map<string, number>([
	['eastlake', 123456 ],
	['skyline', 234567 ]
]);

export async function load({params, request }) {
    if (request.url.includes('?/delete')) {
        return;
    }

    const dbConnection = await clientPromise;
    const db = dbConnection.db(params.school);
    const collection = db.collection('girls2023');
    const id = params.orderId;

    try {
        const order = (await ((await collection.find({ _id: new ObjectId(id)})).toArray()))[0];
        if (order) {
            order._id = order._id.toString();
            return { order };
        }
    }
    catch(error) {
        console.error('THE ERROR IS:', error);
    }
}

export const actions = {
    deleteorder: async ({ params, request }) => {
        const id = params.orderId;
        const { school } = params;

        const data = await request.formData();
        const email = data.get('email');
        const code = Number(data.get('code')?.valueOf());

        if (!schoolCodes.has(school) || schoolCodes.get(school) !== code) {
             throw error(403, 'Invalid school code')
        }
    
        const dbConnection = await clientPromise;
        const db = dbConnection.db(school);
        const collection = db.collection('girls2023');
        
        const searchCriteria = { _id: new ObjectId(id), email };
        const order = (await ((await collection.find(searchCriteria)).toArray()))[0];

        if (order) {
            const response = await collection.deleteOne(searchCriteria);
            deleted = true;
            return { orderdeleted: true, response }
        }
        throw error(404, 'Order not found with the given email');
    }
}