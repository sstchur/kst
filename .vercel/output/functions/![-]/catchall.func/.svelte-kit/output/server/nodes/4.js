import * as server from '../entries/pages/_school_/cart/team/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_school_/cart/team/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[school]/cart/team/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.B3IzVj_v.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/pEzoLNAv.js","_app/immutable/chunks/Bg6t5N8x.js","_app/immutable/chunks/g4b5VIZf.js","_app/immutable/chunks/-IAPk5y9.js","_app/immutable/chunks/D0Zpy5mZ.js","_app/immutable/chunks/CdJzllzT.js"];
export const stylesheets = ["_app/immutable/assets/4.gcBrACKQ.css"];
export const fonts = [];
