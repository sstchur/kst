import clientPromise from "$lib/db/mongo";
import { ObjectId } from "mongodb";

export const prerender = 'auto';

export async function load({ params }) {
    const dbConnection = await clientPromise;
    const db = dbConnection.db(params.school);
    const collection = db.collection('girls2023');
    const id = params.orderId;

    const order = (await ((await collection.find({ _id: new ObjectId(id)})).toArray()))[0];
    order._id = order._id.toString();
    return order;
}