export const prerender = false;

import * as catalogs from '$lib/assets/catalogs';
import clientPromise from '$lib/db/mongo';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import sgMail, { type MailDataRequired } from '@sendgrid/mail';

import { schoolCodes } from '$lib/server/schoolCodes';

let taxRate: number;

export type Order = {
    name: string,
    email: string,
    school: string,
    subtotal: string,
    salesTax: string,
    grandTotal: string,
    cart: any
};

export const load = (({ params }) => {
    const { school } = params;
    const catalog = catalogs[school];
    if (!catalog) {
        throw error(404, 'Not found');
    }

    taxRate = catalog.taxRate;
    return { taxRate: catalog.taxRate, school }
}) satisfies PageServerLoad;

export const actions = {
    confirmorder: async ({ request }) => {

        const data = await request.formData();
        const name = data.get('name');
        const email = data.get('email');
        const notes = data.get('notes');
        const payPalOrder = data.get('payPalOrder');

        const code = Number(data.get('code')?.valueOf());
        const school = data.get('school')?.toString() ?? '';
        const orderDate = data.get('orderDate')?.toString() ?? '';

        const subtotal = data.get('subtotal')?.toString() ?? '';
        const salesTax = data.get('salesTax')?.toString() ?? '';
        const grandTotal = data.get('grandTotal')?.toString() ?? '';
        
        if (!schoolCodes.has(school) || schoolCodes.get(school) !== code) {
             throw error(403, 'Invalid school code')
        }
    
        const order = { 
            name,
            email,
            notes,
            orderDate,
            school,
            subtotal,
            salesTax,
            grandTotal,
            cart: JSON.parse(data.get('cart')?.toString() ?? ''),
            payPalOrder
        }

        console.log('ORDER', order);

        const dbConnection = await clientPromise;
        const db = dbConnection.db(school);
        const { collectionName } = catalogs[school];
        const collection = db.collection(collectionName);
         
        const ins = await collection.insertOne(order, (err, res) => {
            console.log('res', res)
        });

        const orderId = ins.insertedId.toString();
        //sendConfirmationEmail(orderId, order);
    
        return { success: true, orderId, payPalOrder };
    }        
};


function sendConfirmationEmail(orderId: string, order: Order) {
    const { school } = order;
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg: MailDataRequired = {
        to: order.email,
        from: 'info@kickserve.biz',
        bcc: 'info@kickserve.biz',
        subject: `Your Kick Serve Tennis Order (${orderId})`,
        text:
`Thank you your order.
Your order number is ${orderId}. You can review your order with this link: https://kickserve.vercel.app/${school}/order/${orderId}

You cannot modify your order, but if your school's form has not yet closed, you can delete it and/or place a new/additional order if desired.
No payment is required at this time. Your school will contact you about how to pay for the items you've requested for purchase.

Order quick summary:
${order.name}
${order.email}
subtotal: $${order.subtotal}
sales tax: $${order.salesTax}
grand total: ${order.grandTotal}
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

