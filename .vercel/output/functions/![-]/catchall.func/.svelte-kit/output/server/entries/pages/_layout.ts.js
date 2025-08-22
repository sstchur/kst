import { c as catalogs } from "../../chunks/catalogs.js";
import "clsx";
const prerender = true;
function load({ params }) {
  const school = params.school ?? void 0;
  const catalog = catalogs[school];
  if (!catalog) {
    return { title: void 0 };
  }
  return { title: catalog.title };
}
export {
  load,
  prerender
};
