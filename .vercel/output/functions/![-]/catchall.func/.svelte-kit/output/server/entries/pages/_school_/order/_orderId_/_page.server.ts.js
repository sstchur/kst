import { c as catalogs } from "../../../../../chunks/catalogs.js";
import { c as clientPromise, s as schoolCodes } from "../../../../../chunks/schoolCodes.js";
import { error } from "@sveltejs/kit";
import { ObjectId } from "mongodb";
import sgMail from "@sendgrid/mail";
const prerender = false;
async function load({ params }) {
  const dbConnection = await clientPromise;
  const db = dbConnection.db(params.school);
  const { collectionName } = catalogs[school];
  const collection = db.collection(collectionName);
  const id = params.orderId;
  try {
    const order = (await (await collection.find({ _id: new ObjectId(id) })).toArray())[0];
    if (order) {
      order._id = order._id.toString();
      return { order };
    }
  } catch (error2) {
    console.error("THE ERROR IS:", error2);
  }
}
const actions = {
  deleteorder: async ({ params, request }) => {
    const id = params.orderId;
    const { school: school2 } = params;
    const data = await request.formData();
    const email = data.get("email");
    const code = Number(data.get("code")?.valueOf());
    if (!schoolCodes.has(school2) || schoolCodes.get(school2) !== code) {
      throw error(403, "Invalid school code");
    }
    const dbConnection = await clientPromise;
    const db = dbConnection.db(school2);
    const { collectionName } = catalogs[school2];
    const collection = db.collection(collectionName);
    const searchCriteria = { _id: new ObjectId(id), email };
    const order = (await (await collection.find(searchCriteria)).toArray())[0];
    if (order) {
      const response = await collection.deleteOne(searchCriteria);
      sendDeletionEmail(order._id, order);
      return { orderdeleted: true, response };
    }
    throw error(404, "Order not found with the given email");
  }
};
function sendDeletionEmail(orderId, order) {
  const { school: school2 } = order;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: order.email,
    from: "info@kickserve.biz",
    bcc: "info@kickserve.biz",
    subject: `Order deleted (${orderId})`,
    text: `This email confirms you have deleted order ${orderId}. No further action is needed.

You can place a new order if desired: https://kickserve.vercel.app/${school2}/order/
`
  };
  sgMail.send(msg).then(() => {
    console.log("Email sent!");
  }).catch((error2) => {
    console.error(error2);
  });
}
export {
  actions,
  load,
  prerender
};
