import { c as catalogs } from "../../../../chunks/catalogs.js";
import { s as schoolCodes, c as clientPromise } from "../../../../chunks/schoolCodes.js";
import { error } from "@sveltejs/kit";
import "@sendgrid/mail";
const prerender = false;
const load = (({ params }) => {
  const { school } = params;
  const catalog = catalogs[school];
  if (!catalog) {
    throw error(404, "Not found");
  }
  catalog.taxRate;
  return { taxRate: catalog.taxRate, school };
});
const actions = {
  confirmorder: async ({ request }) => {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const notes = data.get("notes");
    const payPalOrder = data.get("payPalOrder");
    const code = Number(data.get("code")?.valueOf());
    const school = data.get("school")?.toString() ?? "";
    const orderDate = data.get("orderDate")?.toString() ?? "";
    const subtotal = data.get("subtotal")?.toString() ?? "";
    const salesTax = data.get("salesTax")?.toString() ?? "";
    const grandTotal = data.get("grandTotal")?.toString() ?? "";
    if (!schoolCodes.has(school) || schoolCodes.get(school) !== code) {
      throw error(403, "Invalid school code");
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
      cart: JSON.parse(data.get("cart")?.toString() ?? ""),
      payPalOrder
    };
    console.log("ORDER", order);
    const dbConnection = await clientPromise;
    const db = dbConnection.db(school);
    const { collectionName } = catalogs[school];
    const collection = db.collection(collectionName);
    const ins = await collection.insertOne(order, (err, res) => {
      console.log("res", res);
    });
    const orderId = ins.insertedId.toString();
    return { success: true, orderId, payPalOrder };
  }
};
export {
  actions,
  load,
  prerender
};
