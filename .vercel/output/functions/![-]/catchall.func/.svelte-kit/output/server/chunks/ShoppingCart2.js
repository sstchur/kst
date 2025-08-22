import { I as store_get, Q as fallback, J as escape_html, E as ensure_array_like, M as attr, K as unsubscribe_stores, S as bind_props, B as pop, z as push, O as stringify } from "./index2.js";
import { p as page } from "./stores.js";
import { a as createShoppingCart, b as cartItems, d as cartSubtotal } from "./shoppingCart.js";
import { c as catalogs } from "./catalogs.js";
import { loadScript } from "@paypal/paypal-js";
function ShoppingCart($$payload, $$props) {
  push();
  var $$store_subs;
  let isFormValid, purchaseUnits;
  const { school } = store_get($$store_subs ??= {}, "$page", page).params;
  const { payPalEnabled } = catalogs[school];
  createShoppingCart(school);
  let taxRate = $$props["taxRate"];
  let readonly = fallback($$props["readonly"], false);
  let items = fallback($$props["items"], () => store_get($$store_subs ??= {}, "$cartItems", cartItems), true);
  let order = fallback($$props["order"], null);
  let name = "";
  let email = "";
  let code = void 0;
  let processing = false;
  let subtotal;
  let wouldBeSalesTax;
  let payPalFee;
  let salesTax;
  let grandTotal;
  const currency_code = "USD";
  let payPalSucceeded = false;
  let payPalTxnId = "";
  const clientId = "AZ6KxIlNEhfWChYzGXiJtfMZOrkrllJmRc1MYhNnGAytbjk3_YMDeOIf4M24TYi-OKdd7IYdOUxZ5R9X";
  loadScript({
    "client-id": clientId,
    commit: true,
    currency: "USD",
    components: "buttons",
    "disable-funding": ["credit"]
  }).then((paypal) => {
    paypal.Buttons({
      style: { color: "silver", shape: "pill" },
      // Sets up the transaction when a payment button is clicked
      createOrder: (data, actions) => {
        return actions.order.create({ purchase_units: [purchaseUnits] });
      },
      // Finalize the transaction after payer approval
      onApprove: (data, actions) => {
        return actions.order.capture().then(function(orderData) {
          console.log("Capture result", orderData, JSON.stringify(orderData, null, 2));
          const transaction = orderData.purchase_units[0].payments.captures[0];
          payPalSucceeded = true;
          transaction.status;
          payPalTxnId = transaction.id;
          createShoppingCart(school).clear();
        });
      }
    }).render("#paypal-button-container");
  }).catch((err) => {
    console.error("failed to load the PayPal JS SDK script", err);
  });
  isFormValid = code;
  subtotal = store_get($$store_subs ??= {}, "$cartSubtotal", cartSubtotal).toFixed(2);
  wouldBeSalesTax = store_get($$store_subs ??= {}, "$cartSubtotal", cartSubtotal) * taxRate;
  payPalFee = payPalEnabled ? ((store_get($$store_subs ??= {}, "$cartSubtotal", cartSubtotal) + wouldBeSalesTax) * 3.49 / 100 + 0.49).toFixed(2) : "0.00";
  salesTax = ((store_get($$store_subs ??= {}, "$cartSubtotal", cartSubtotal) + Number(payPalFee)) * taxRate).toFixed(2);
  grandTotal = (store_get($$store_subs ??= {}, "$cartSubtotal", cartSubtotal) + Number(salesTax) + Number(payPalFee)).toFixed(2);
  purchaseUnits = {
    description: "Tennis spirit wear",
    soft_descriptor: "Kick Serve Tennis",
    amount: {
      currency_code,
      value: grandTotal,
      breakdown: {
        item_total: { currency_code, value: subtotal },
        tax_total: { currency_code, value: `${salesTax}` },
        handling: { currency_code, value: `${payPalFee}` }
      }
    },
    items: store_get($$store_subs ??= {}, "$cartItems", cartItems).map((p, i) => ({
      name: `(${p.id}) - SZ: ${p.size}, CSTM: ${p.customization || "N/A"}, VRSTY: ${p.varsity || "N/A"} [school: ${school}]`,
      description: `SZ: ${p.size}, CSTM: ${p.customization || "N/A"}, VRSTY: ${p.varsity || "N/A"}`,
      unit_amount: { currency_code, value: `${p.dynamicPrice}` },
      quantity: `${p.quantity}`
    }))
  };
  $$payload.out.push(`<main class="svelte-66bwi0">`);
  if (payPalSucceeded) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<h2>Thank you for your order.</h2> <h3>Your PayPal transaction ID is ${escape_html(payPalTxnId)}</h3> <p>Please know that orders are not shipped directly to students. Instead they delivered to your school's coach for distribution to the players.
        If you have questions about your order, or would like to make a change,
        email <a style="display: inline" href="mailto:info@kickserve.biz" class="svelte-66bwi0">info@kickserve.biz</a> and include the Transaction ID.</p>`);
  } else {
    $$payload.out.push("<!--[!-->");
    const each_array = ensure_array_like(items);
    $$payload.out.push(`<a${attr("href", `/${stringify(school)}/order`)} class="svelte-66bwi0">Back to order form</a> <table class="svelte-66bwi0"><thead class="svelte-66bwi0"><tr><th class="svelte-66bwi0"></th><th class="svelte-66bwi0">Items</th><th class="svelte-66bwi0">Qty</th><th class="svelte-66bwi0">Price</th><th class="svelte-66bwi0">Amount</th></tr></thead><!--[-->`);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$payload.out.push(`<tr><td class="svelte-66bwi0"><img${attr("src", item.images[0])}${attr("alt", item.description)} height="75" class="svelte-66bwi0"/></td><td class="item svelte-66bwi0">${escape_html(item.title)} - ${escape_html(item.size)} `);
      if (item.customization) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<br/> Customization: ${escape_html(item.customization)}`);
      } else {
        $$payload.out.push("<!--[!-->");
      }
      $$payload.out.push(`<!--]--> `);
      if (item.varsity) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<br/> Varsity imprint: yes`);
      } else {
        $$payload.out.push("<!--[!-->");
      }
      $$payload.out.push(`<!--]--></td><td class="svelte-66bwi0">${escape_html(item.quantity)}</td><td class="price svelte-66bwi0">${escape_html(item.dynamicPrice)}</td><td class="amount svelte-66bwi0">$${escape_html((item.dynamicPrice * item.quantity).toFixed(2))}</td></tr> `);
      if (!readonly) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<tr><td colspan="5" class="svelte-66bwi0"><button class="link svelte-66bwi0">Remove</button></td></tr>`);
      } else {
        $$payload.out.push("<!--[!-->");
      }
      $$payload.out.push(`<!--]-->`);
    }
    $$payload.out.push(`<!--]-->`);
    if (items.length > 0) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<tfoot><tr><td colspan="4" class="price svelte-66bwi0">Subtotal</td><td class="amount svelte-66bwi0">$${escape_html(order ? order.subtotal : subtotal)}</td><td class="svelte-66bwi0"></td></tr>`);
      if (payPalEnabled) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<tr><td colspan="4" class="price svelte-66bwi0">Paypal fee</td><td class="amount svelte-66bwi0">$${escape_html(payPalFee)}</td><td class="svelte-66bwi0"></td></tr>`);
      } else {
        $$payload.out.push("<!--[!-->");
      }
      $$payload.out.push(`<!--]--><tr><td colspan="4" class="price svelte-66bwi0">Sales tax</td><td class="amount svelte-66bwi0">$${escape_html(order ? order.salesTax : salesTax)}</td><td class="svelte-66bwi0"></td></tr><tr><td colspan="4" class="price svelte-66bwi0">Grand total</td><td class="amount svelte-66bwi0">$${escape_html(order ? order.grandTotal : grandTotal)}</td><td class="svelte-66bwi0"></td></tr></tfoot>`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--></table> `);
    if (items.length > 0) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<div class="payment svelte-66bwi0">`);
      if (payPalEnabled) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<div id="paypal-button-container" style="z-index:0"></div>`);
      } else {
        $$payload.out.push("<!--[!-->");
        if (readonly) {
          $$payload.out.push("<!--[-->");
          $$payload.out.push(`<form method="post" action="?/deleteorder" class="svelte-66bwi0">This order cannot be modified, but you can delete this order or place an additional order, if desired. <input name="email" type="text" placeholder="Email" class="svelte-66bwi0"/> <input name="code" type="number" placeholder="6 digit school code" class="svelte-66bwi0"/> <button>Delete this order</button></form>`);
        } else {
          $$payload.out.push("<!--[!-->");
          $$payload.out.push(`<form method="post" action="?/confirmorder" class="svelte-66bwi0"><input${attr("value", name)} name="name" type="text" placeholder="Name" class="svelte-66bwi0"/> <input${attr("value", email)} name="email" type="email" placeholder="Email" class="svelte-66bwi0"/> <input${attr("value", code)} name="code" type="number" placeholder="6 digit school code" class="svelte-66bwi0"/> <input${attr("value", subtotal)} name="subtotal" type="hidden" class="svelte-66bwi0"/> <input${attr("value", salesTax)} name="salesTax" type="hidden" class="svelte-66bwi0"/> <input${attr("value", grandTotal)} name="grandTotal" type="hidden" class="svelte-66bwi0"/> <input${attr("value", /* @__PURE__ */ new Date())} name="orderDate" type="hidden" class="svelte-66bwi0"/> <input${attr("value", store_get($$store_subs ??= {}, "$page", page).params.school)} name="school" type="hidden" class="svelte-66bwi0"/> <input${attr("value", JSON.stringify(items))} name="cart" type="hidden" class="svelte-66bwi0"/> <button type="submit"${attr("disabled", !isFormValid || processing, true)}>Confirm order</button></form>`);
        }
        $$payload.out.push(`<!--]-->`);
      }
      $$payload.out.push(`<!--]--></div>`);
    } else {
      $$payload.out.push("<!--[!-->");
      $$payload.out.push(`<p>Your cart is empty</p>`);
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]--></main>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { taxRate, readonly, items, order });
  pop();
}
export {
  ShoppingCart as S
};
