import { E as ensure_array_like, U as attr_class, O as stringify, M as attr, J as escape_html, R as maybe_selected, S as bind_props, B as pop, z as push, T as store_set, I as store_get, K as unsubscribe_stores } from "../../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "clsx";
import "../../../../chunks/state.svelte.js";
import { a as createShoppingCart } from "../../../../chunks/shoppingCart.js";
import { c as catalogs } from "../../../../chunks/catalogs.js";
import { c as closeDate, t as timeLeft } from "../../../../chunks/timeLeft.js";
const Sizes = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large", "3X-Large", "4X-Large"];
function ProductDetails($$payload, $$props) {
  push();
  let xlCharge, calcPrice, dynamicPrice;
  let product = $$props["product"];
  let markup = $$props["markup"];
  let size;
  let quantity;
  let customization = "";
  let varsity = false;
  xlCharge = 0;
  calcPrice = (product2, xlCharge2, markup2) => {
    const nameCharge = 0;
    const varsityCharge = 0;
    return product2.price + markup2 + xlCharge2 + nameCharge + varsityCharge;
  };
  dynamicPrice = Number(calcPrice(product, xlCharge, markup)).toFixed(2);
  const each_array = ensure_array_like(product.images);
  const each_array_1 = ensure_array_like(Sizes.filter((s) => !product.restrictedSizes?.has(s)));
  const each_array_2 = ensure_array_like(Array(75));
  $$payload.out.push(`<fieldset class="svelte-q7fji4"><div${attr_class(`productDetails ${stringify(product.required ? "required" : "")}`, "svelte-q7fji4")}><div class="images svelte-q7fji4"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let image = each_array[$$index];
    $$payload.out.push(`<img${attr("src", image)} height="325"${attr("alt", product.title)} class="svelte-q7fji4"/>`);
  }
  $$payload.out.push(`<!--]--></div> <span class="title svelte-q7fji4">${escape_html(product.title)}</span> <p class="desc svelte-q7fji4">${escape_html(product.description)} `);
  if (product.model) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<span class="model svelte-q7fji4">(model: ${escape_html(product.model)})</span>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></p> <strong class="price svelte-q7fji4">$${escape_html(dynamicPrice)}</strong> <div class="options svelte-q7fji4"><div><div class="productOption svelte-q7fji4"><label for="size">Size:</label> <select id="size" class="svelte-q7fji4">`);
  $$payload.select_value = size;
  $$payload.out.push(`<!--[-->`);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let size2 = each_array_1[$$index_1];
    $$payload.out.push(`<option${attr("value", size2)}${maybe_selected($$payload, size2)}>${escape_html(size2)}</option>`);
  }
  $$payload.out.push(`<!--]-->`);
  $$payload.select_value = void 0;
  $$payload.out.push(`</select></div> <div class="productOption svelte-q7fji4"><label for="quantity">Quantity:</label> <select id="quantity" class="svelte-q7fji4">`);
  $$payload.select_value = quantity;
  $$payload.out.push(`<!--[-->`);
  for (let n = 0, $$length = each_array_2.length; n < $$length; n++) {
    each_array_2[n];
    $$payload.out.push(`<option${attr("value", n + 1)}${maybe_selected($$payload, n + 1)}>${escape_html(n + 1)}</option>`);
  }
  $$payload.out.push(`<!--]-->`);
  $$payload.select_value = void 0;
  $$payload.out.push(`</select></div> `);
  if (product.varsityEnabled) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="productOption svelte-q7fji4"><label for="varsity">VARSITY imprint?</label> <input name="varsity"${attr("checked", varsity, true)} type="checkbox" class="svelte-q7fji4"/></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  if (product.customizable) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="productOption svelte-q7fji4"><label for="customization" class="svelte-q7fji4">Name on back (optional):</label> <input name="customization"${attr("value", customization)} type="text" placeholder="Name" class="svelte-q7fji4"/></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div></div></div> <div class="actions svelte-q7fji4"><button class="svelte-q7fji4">+ Add to cart</button></div></fieldset>`);
  bind_props($$props, { product, markup });
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const { closed } = timeLeft;
  let data = $$props["data"];
  const { products, school } = data;
  createShoppingCart(school);
  store_set(closeDate, catalogs[school].closeDate);
  const markup = catalogs[school].markup;
  if (!store_get($$store_subs ??= {}, "$closed", closed)) {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(products);
    $$payload.out.push(`<div style="display: flex; flex-wrap: wrap; justify-content: center; position: relative; z-index: 0;"><!--[-->`);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let product = each_array[$$index];
      $$payload.out.push(`<div class="product">`);
      ProductDetails($$payload, { product, markup });
      $$payload.out.push(`<!----></div>`);
    }
    $$payload.out.push(`<!--]--></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
