import * as server from '../entries/pages/_school_/cart/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_school_/cart/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[school]/cart/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.CyKHY__T.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/pEzoLNAv.js","_app/immutable/chunks/Bg6t5N8x.js","_app/immutable/chunks/g4b5VIZf.js","_app/immutable/chunks/C5brnsFq.js","_app/immutable/chunks/D0Zpy5mZ.js","_app/immutable/chunks/CdJzllzT.js","_app/immutable/chunks/D7M2DxYg.js","_app/immutable/chunks/BAVm6KHP.js","_app/immutable/chunks/-IAPk5y9.js","_app/immutable/chunks/Cr8OvZus.js"];
export const stylesheets = ["_app/immutable/assets/ShoppingCart.D_Mq6Sxn.css","_app/immutable/assets/3.D-wOwiou.css"];
export const fonts = [];
