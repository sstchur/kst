import { error } from "@sveltejs/kit";
import { c as catalogs } from "../../../../chunks/catalogs.js";
console.log(catalogs);
const prerender = "auto";
function load({ params }) {
  const products = catalogs[params.school].products;
  if (!products) {
    throw error(404, "Not found");
  }
  return { products, school: params.school };
}
export {
  load,
  prerender
};
