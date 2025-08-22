import { I as store_get, T as store_set, M as attr, J as escape_html, O as stringify, K as unsubscribe_stores, S as bind_props, B as pop, z as push } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores.js";
import { a as createShoppingCart } from "../../../../chunks/shoppingCart.js";
import { S as ShoppingCart } from "../../../../chunks/ShoppingCart2.js";
import { c as catalogs } from "../../../../chunks/catalogs.js";
import { c as closeDate, t as timeLeft } from "../../../../chunks/timeLeft.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const { closed } = timeLeft;
  const { form } = store_get($$store_subs ??= {}, "$page", page);
  const { school } = store_get($$store_subs ??= {}, "$page", page).params;
  const { payPalEnabled } = catalogs[school];
  store_set(closeDate, catalogs[school].closeDate);
  let data = $$props["data"];
  const { taxRate } = data;
  const payPalOrder = form?.payPalOrder ?? "{}";
  const order = JSON.parse(payPalOrder ?? null);
  if (form?.success) {
    createShoppingCart(school).clear();
  }
  $$payload.out.push(`<main class="svelte-1n9fqvh">`);
  if (!store_get($$store_subs ??= {}, "$closed", closed)) {
    $$payload.out.push("<!--[-->");
    if (form?.success) {
      $$payload.out.push("<!--[-->");
      if (!payPalEnabled) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<p>Order received. Your Order ID is <a${attr("href", `/${stringify(school)}/order/${stringify(form?.orderId)}`)}>${escape_html(form?.orderId)}</a>.
                Save this link. You'll need it if you want to delete your order.</p>`);
      } else {
        $$payload.out.push("<!--[!-->");
        $$payload.out.push(`<h1>Thank you for your order!</h1> <p>Your order has been received. Your PayPal Order ID is ${escape_html(order.id)}.</p> <p>Please know that orders are not shipped directly to students. Instead they delivered to your school's coach for distribution to the players. <br/> If you have questions about your order, or would like to make a change, email <a style="display: inline" href="mailto:info@kickserve.biz">info@kickserve.biz</a> and include your Order ID.</p>`);
      }
      $$payload.out.push(`<!--]-->`);
    } else {
      $$payload.out.push("<!--[!-->");
      ShoppingCart($$payload, { taxRate });
    }
    $$payload.out.push(`<!--]-->`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></main>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
