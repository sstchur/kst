import { I as store_get, T as store_set, M as attr, J as escape_html, K as unsubscribe_stores, S as bind_props, B as pop, z as push, O as stringify } from "../../../../../chunks/index2.js";
import { p as page } from "../../../../../chunks/stores.js";
import { S as ShoppingCart } from "../../../../../chunks/ShoppingCart2.js";
import { c as closeDate } from "../../../../../chunks/timeLeft.js";
import { c as catalogs } from "../../../../../chunks/catalogs.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const { form } = store_get($$store_subs ??= {}, "$page", page).data;
  const { school, orderId } = store_get($$store_subs ??= {}, "$page", page).params;
  store_set(closeDate, catalogs[school].closeDate);
  let data = $$props["data"];
  const { order } = data;
  const { cart: items, name, orderDate } = order ?? {};
  if (form?.orderdeleted) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<p>Order successfully deleted. You can place a <a${attr("href", `/${stringify(school)}/order}`)}>new order</a>, if desired.</p>`);
  } else {
    $$payload.out.push("<!--[!-->");
    if (order) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<div class="svelte-1g52h9c"><h2>Order ${escape_html(orderId)}</h2> <h3>${escape_html(name)} <br/> ${escape_html(orderDate ?? "")}</h3></div> `);
      ShoppingCart($$payload, { taxRate: 0, items, order, readonly: "true" });
      $$payload.out.push(`<!---->`);
    } else {
      $$payload.out.push("<!--[!-->");
      $$payload.out.push(`<div class="svelte-1g52h9c"><h2>Order ${escape_html(orderId)} not found.</h2> <p>If you just deleted your order, no further action is needed. If you are searching for an order,
           it may have been previously deleted.</p></div>`);
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]-->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
