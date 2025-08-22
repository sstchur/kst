import { c as catalogs } from "../../../../../chunks/catalogs.js";
import { s as schoolCodes, c as clientPromise } from "../../../../../chunks/schoolCodes.js";
import { error } from "@sveltejs/kit";
const prerender = false;
const load = (async ({ params, url }) => {
  const { school } = params;
  const { searchParams } = url;
  const code = Number(searchParams.get("code"));
  if (code) {
    if (!schoolCodes.has(school) || schoolCodes.get(school) !== code) {
      throw error(403, "Invalid school code");
    }
    const dbConnection = await clientPromise;
    const db = dbConnection.db(school);
    const { collectionName } = catalogs[school];
    const collection = db.collection(collectionName);
    try {
      const orders = await (await collection.find({})).toArray();
      console.log(orders.map((o) => {
        o._id = o._id.toString();
        return o;
      }));
      return { success: true, school, orders };
    } catch (error2) {
      console.error("THE ERROR IS:", error2);
    }
  }
  return { success: false, school, orders: [] };
});
export {
  load,
  prerender
};
