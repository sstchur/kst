import { B as pop, A as setContext, z as push, D as derived, E as ensure_array_like, F as await_block, G as spread_props, I as store_get, J as escape_html, K as unsubscribe_stores, M as attr, N as slot, O as stringify } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
import { c as cartCount } from "../../chunks/shoppingCart.js";
import "clsx";
import { s as shortCloseDate, t as timeLeft } from "../../chunks/timeLeft.js";
const key = Symbol("modal");
function setModal(modal) {
  setContext(key, modal);
}
function StackedModalContext($$payload, $$props) {
  push();
  const { modal, children } = $$props;
  setModal(modal);
  children($$payload);
  $$payload.out.push(`<!---->`);
  pop();
}
class StackedModal extends EventTarget {
  static _idCounter = 0;
  _props;
  result = createDeferredPromise();
  id;
  component;
  modals;
  exitBeforeEnter = false;
  constructor(modals2, { id, component, props }) {
    super();
    this.id = id || (StackedModal._idCounter++).toString();
    this.component = component;
    this._props = props ?? {};
    this.modals = modals2;
  }
  #isOpen = derived(() => {
    if (this.modals.stack.length === 0) {
      return false;
    }
    const isCurrent = this.modals.stack[this.modals.stack.length - 1].id === this.id;
    return isCurrent && !this.modals.transitioning;
  });
  get isOpen() {
    return this.#isOpen();
  }
  set isOpen($$value) {
    return this.#isOpen($$value);
  }
  get index() {
    return this.modals.stack.indexOf(this);
  }
  get props() {
    return {
      ...this._props,
      id: this.id,
      index: this.index,
      isOpen: this.isOpen,
      close: this.close
    };
  }
  close = (...args) => {
    if (this.onBeforeClose?.() === false) {
      return false;
    }
    const value = args[0];
    this.dispatchEvent(new CustomEvent("close", { detail: value }));
    this.result.resolve(value);
    return true;
  };
  get promise() {
    return this.result.promise;
  }
  onBeforeClose;
}
function createDeferredPromise() {
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}
class ModalStack {
  /**
   * The current stack of modals
   */
  stack = [];
  /**
   * The last action that was performed on the modals stack. This
   * can be useful for animations
   */
  action = null;
  /**
   * Whether we're currently waiting for transitions to finish
   * before opening the next modal
   */
  transitioning = false;
  /**
   * Opens a new modal
   */
  open = async (component, props, options) => {
    if (this.transitioning) {
      return;
    }
    if (options?.replace) {
      const closed = this.stack[this.stack.length - 1]?.close();
      if (!closed) {
        throw new Error("Current modal prevented closing");
      }
    }
    this.action = "push";
    const currentModal = this.stack[this.stack.length - 1];
    if (currentModal?.exitBeforeEnter) {
      this.transitioning = true;
    }
    const modal = new StackedModal(this, { id: options?.id, component, props });
    this.stack.push(modal);
    modal.addEventListener(
      "close",
      () => {
        if (modal.exitBeforeEnter) {
          this.transitioning = true;
        }
        if (this.stack.indexOf(modal) > -1) {
          this.stack.splice(this.stack.indexOf(modal), 1);
        }
        this.action = "pop";
      },
      { once: true }
    );
    return modal.promise;
  };
  /**
   * Closes the last `amount` of modals in the stack
   *
   * If closing was prevented by any modal it returns false
   */
  close = (amount = 1) => {
    if (typeof amount !== "number" || amount < 1) {
      throw new Error(`amount must be a number greater than 0. Received ${amount}`);
    }
    const closedModals = this.stack.slice(this.stack.length - amount).reverse();
    let closedAmount = 0;
    for (const modal of closedModals) {
      const closed = modal.close();
      if (!closed) {
        break;
      }
      closedAmount++;
    }
    return amount === closedAmount;
  };
  /**
   * Closes a modal by its id. Can be provided with `options.id` in modals.open(Comp, props, options)
   */
  closeById = (id) => {
    const modal = this.stack.find((modal2) => modal2.id === id);
    if (!modal) {
      return false;
    }
    return modal.close();
  };
  /**
   * Closes all modals in the stack.
   *
   * If closing was prevented by any modal, it returns false
   */
  closeAll = () => {
    return this.close(this.stack.length);
  };
}
const modals = new ModalStack();
function Modals($$payload, $$props) {
  push();
  function isLazyModal(component) {
    return typeof component.prototype === "undefined";
  }
  const { $$slots, $$events, ...props } = $$props;
  const each_array = ensure_array_like(modals.stack);
  if (modals.stack.length > 0) {
    $$payload.out.push("<!--[-->");
    props.backdrop?.($$payload, modals);
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <!--[-->`);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let m = each_array[i];
    StackedModalContext($$payload, {
      modal: m,
      children: ($$payload2) => {
        if (isLazyModal(m.component)) {
          $$payload2.out.push("<!--[-->");
          await_block(
            $$payload2,
            m.component(),
            () => {
              props.loading?.($$payload2, modals);
              $$payload2.out.push(`<!---->`);
            },
            (component) => {
              if (props.modal) {
                $$payload2.out.push("<!--[-->");
                props.modal($$payload2, { component: component.default, props: m.props }, modals);
                $$payload2.out.push(`<!---->`);
              } else {
                $$payload2.out.push("<!--[!-->");
                $$payload2.out.push(`<!---->`);
                component.default($$payload2, spread_props([m.props]));
                $$payload2.out.push(`<!---->`);
              }
              $$payload2.out.push(`<!--]-->`);
            }
          );
          $$payload2.out.push(`<!--]-->`);
        } else {
          $$payload2.out.push("<!--[!-->");
          if (props.modal) {
            $$payload2.out.push("<!--[-->");
            props.modal($$payload2, { component: m.component, props: m.props }, modals);
            $$payload2.out.push(`<!---->`);
          } else {
            $$payload2.out.push("<!--[!-->");
            $$payload2.out.push(`<!---->`);
            m.component($$payload2, spread_props([m.props]));
            $$payload2.out.push(`<!---->`);
          }
          $$payload2.out.push(`<!--]-->`);
        }
        $$payload2.out.push(`<!--]-->`);
      }
    });
  }
  $$payload.out.push(`<!--]-->`);
  pop();
}
function Timer($$payload) {
  var $$store_subs;
  const { daysLeft, hoursLeft, minLeft, secLeft } = timeLeft;
  if (store_get($$store_subs ??= {}, "$shortCloseDate", shortCloseDate)) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<h2 class="svelte-e8afiw">⚠️ Form closes ${escape_html(store_get($$store_subs ??= {}, "$shortCloseDate", shortCloseDate))} ${escape_html(~~store_get($$store_subs ??= {}, "$daysLeft", daysLeft))}D:${escape_html(~~store_get($$store_subs ??= {}, "$hoursLeft", hoursLeft))}H:${escape_html(~~store_get($$store_subs ??= {}, "$minLeft", minLeft))}M:${escape_html(~~store_get($$store_subs ??= {}, "$secLeft", secLeft).toFixed(2))}S</h2> <small>Something not working? <a href="mailto:info@kickserve.biz">info@kickserve.biz</a> for help.</small>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let school;
  const { closed } = timeLeft;
  school = store_get($$store_subs ??= {}, "$page", page).data.school;
  $$payload.out.push(`<nav class="svelte-1ijjmaq"><span id="kstText" class="svelte-1ijjmaq">Kick Serve Tennis</span> <span class="svelte-1ijjmaq">`);
  if (school) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<a${attr("href", `/${stringify(school)}/cart`)} class="svelte-1ijjmaq">Cart</a> <span class="svelte-1ijjmaq">(${escape_html(store_get($$store_subs ??= {}, "$cartCount", cartCount))})</span>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <svg height="30px" width="30px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#ffffff" class="svelte-1ijjmaq"><g id="SVGRepo_bgCarrier" stroke-width="0" class="svelte-1ijjmaq"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" class="svelte-1ijjmaq"></g><g id="SVGRepo_iconCarrier" class="svelte-1ijjmaq"><style type="text/css" class="svelte-1ijjmaq"> .st0{fill:#ffffff;} </style><g class="svelte-1ijjmaq"><path class="st0 svelte-1ijjmaq" d="M507.316,126.733L138.349,97.498l-5.612-31.861c-5.154-29.076-28.294-51.611-57.524-55.942L9.677,0 L4.684,33.717l65.544,9.72c14.676,2.165,26.342,13.504,28.919,28.134l52.95,300.107c4.969,28.168,29.431,48.69,58.044,48.698 h229.728l6.828-34.102H210.142c-12.049,0.017-22.373-8.662-24.454-20.522l-7.42-41.992h283.58L507.316,126.733z"></path><path class="st0 svelte-1ijjmaq" d="M223.148,438.658c-20.253,0-36.667,16.426-36.667,36.678c0,20.254,16.414,36.663,36.667,36.663 c20.258,0,36.675-16.409,36.675-36.663C259.823,455.084,243.405,438.658,223.148,438.658z"></path><path class="st0 svelte-1ijjmaq" d="M386.068,438.658c-20.257,0-36.666,16.426-36.666,36.678c0,20.254,16.409,36.663,36.666,36.663 c20.258,0,36.68-16.409,36.68-36.663C422.748,455.084,406.327,438.658,386.068,438.658z"></path></g></g></svg></span></nav> <a href="/" class="svelte-1ijjmaq"><img id="kstLogo" src="https://kickserve.biz/kstlogo.png" alt="Kick Serve Tennis logo" height="150" class="svelte-1ijjmaq"/></a> <div style="text-align: center">`);
  if (store_get($$store_subs ??= {}, "$closed", closed)) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<h2>Order form closed</h2>`);
  } else {
    $$payload.out.push("<!--[!-->");
    Timer($$payload);
  }
  $$payload.out.push(`<!--]--> `);
  if (store_get($$store_subs ??= {}, "$page", page).data.title) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<h2>${escape_html(store_get($$store_subs ??= {}, "$page", page).data.title)}</h2>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div> <!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!----> `);
  Modals($$payload, {
    $$slots: {
      backdrop: ($$payload2) => {
        $$payload2.out.push(`<div slot="backdrop" class="backdrop svelte-1ijjmaq"></div>`);
      }
    }
  });
  $$payload.out.push(`<!---->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
