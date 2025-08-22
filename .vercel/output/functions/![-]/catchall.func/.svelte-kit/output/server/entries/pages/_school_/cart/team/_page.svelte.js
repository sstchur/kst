import { I as store_get, E as ensure_array_like, J as escape_html, K as unsubscribe_stores, S as bind_props, B as pop, z as push } from "../../../../../chunks/index2.js";
import { p as page } from "../../../../../chunks/stores.js";
import { c as catalogs } from "../../../../../chunks/catalogs.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let success, orders, school, catalog, products, teamSubtotal, teamSalexTax, teamGrandTotal;
  let data = $$props["data"];
  const aggregatedProducts = {};
  ({ success, orders, school } = store_get($$store_subs ??= {}, "$page", page).data);
  catalog = catalogs[school];
  ({ products } = catalog);
  teamSubtotal = orders.reduce((total, order) => total + Number(order.subtotal), 0).toFixed(2);
  teamSalexTax = orders.reduce((total, order) => total + Number(order.salesTax), 0).toFixed(2);
  teamGrandTotal = orders.reduce((total, order) => total + Number(order.grandTotal), 0).toFixed(2);
  for (let product of products) {
    aggregatedProducts[product.id] = {};
  }
  for (const order of orders) {
    for (const item of order.cart) {
      const { id, size, quantity, customization, varsity } = item;
      aggregatedProducts[id][[size]] = aggregatedProducts[id][[size]] || { quantity: 0, names: [] };
      aggregatedProducts[id][[size]].quantity += quantity;
      if (customization || varsity) {
        const c = customization.toUpperCase();
        const name = varsity ? `${c}/V` : c;
        let times = quantity;
        while (times--) {
          aggregatedProducts[id][[size]].names.push(name);
        }
      }
    }
  }
  $$payload.out.push(`<main class="svelte-c9yb7i">`);
  if (success) {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(orders);
    const each_array_2 = ensure_array_like(Object.keys(aggregatedProducts));
    $$payload.out.push(`<ul class="svelte-c9yb7i"><!--[-->`);
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let order = each_array[$$index_1];
      const each_array_1 = ensure_array_like(order.cart);
      $$payload.out.push(`<li class="svelte-c9yb7i">Order ID: ${escape_html(order._id)} <br/> Name: ${escape_html(order.name)} <br/> Email: ${escape_html(order.email)} <br/> <ol class="svelte-c9yb7i"><!--[-->`);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let item = each_array_1[$$index];
        $$payload.out.push(`<li class="svelte-c9yb7i">${escape_html(item.id)} /
                        ${escape_html(item.title)} /
                        ${escape_html(item.size)} / `);
        if (item.customization) {
          $$payload.out.push("<!--[-->");
          $$payload.out.push(`name = ${escape_html(item.customization)} /`);
        } else {
          $$payload.out.push("<!--[!-->");
        }
        $$payload.out.push(`<!--]--> `);
        if (item.varsity) {
          $$payload.out.push("<!--[-->");
          $$payload.out.push(`Varsity imprint /`);
        } else {
          $$payload.out.push("<!--[!-->");
        }
        $$payload.out.push(`<!--]--> qty = ${escape_html(item.quantity)} /
                        ${escape_html(item.dynamicPrice)}</li>`);
      }
      $$payload.out.push(`<!--]--> <hr/> Subtotal: ${escape_html(order.subtotal)} <br/> Sales tax: ${escape_html(order.salesTax)} <br/> Grand total: ${escape_html(order.grandTotal)} <br/></ol></li>`);
    }
    $$payload.out.push(`<!--]--></ul> <hr/> Team Subtotal: ${escape_html(teamSubtotal)} <br/> Team Sales tax: ${escape_html(teamSalexTax)} <br/> Team Grand total: ${escape_html(teamGrandTotal)} <hr/> <strong>Screen-printing format:</strong> <br/> <!--[-->`);
    for (let $$index_3 = 0, $$length = each_array_2.length; $$index_3 < $$length; $$index_3++) {
      let productId = each_array_2[$$index_3];
      const each_array_3 = ensure_array_like(Object.keys(aggregatedProducts[productId]));
      $$payload.out.push(`<strong>${escape_html(productId)}</strong> <br/> <!--[-->`);
      for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
        let size = each_array_3[$$index_2];
        $$payload.out.push(`<!---->  ${escape_html(aggregatedProducts[productId][size].quantity)} ${escape_html(size)} `);
        if (aggregatedProducts[productId][size].names.length > 0) {
          $$payload.out.push("<!--[-->");
          $$payload.out.push(`(${escape_html(aggregatedProducts[productId][size].names.join(", "))})`);
        } else {
          $$payload.out.push("<!--[!-->");
        }
        $$payload.out.push(`<!--]--> <br/>`);
      }
      $$payload.out.push(`<!--]--> <br/>`);
    }
    $$payload.out.push(`<!--]-->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<form><label for="code">School code:</label> <input name="code" type="text" placeholder="School code"/> <button type="submit">View Team Cart</button></form>`);
  }
  $$payload.out.push(`<!--]--></main>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
