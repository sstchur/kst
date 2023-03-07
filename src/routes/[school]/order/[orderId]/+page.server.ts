import clientPromise from "$lib/db/mongo";
import { error } from "@sveltejs/kit";
import { ObjectId } from "mongodb";
import sgMail, { type MailDataRequired } from '@sendgrid/mail';

import { schoolCodes } from '$lib/server/schoolCodes';
import type { Order } from "../../cart/+page.server";

export const prerender = false;

export async function load({params }) {
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
            sendDeletionEmail(order._id, order);
            return { orderdeleted: true, response }
        }
        throw error(404, 'Order not found with the given email');
    }
}

function sendDeletionEmail(orderId: string, order: Order) {
    const { school } = order;
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg: MailDataRequired = {
        to: order.email,
        from: 'info@kickserve.biz',
        bcc: 'info@kickserve.biz',
        subject: `Order deleted (${orderId})`,
        text:
`This email confirms you have deleted order ${orderId}. No further action is needed.

You can place a new order if desired: https://kickserve.vercel.app/${school}/order/
`,
    };

    sgMail.send(msg)
        .then(() => {
            console.log('Email sent!');
        })
        .catch((error) => {
            console.error(error);
        });

}