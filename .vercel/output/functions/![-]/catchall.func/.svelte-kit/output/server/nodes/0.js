import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BPOV8EKu.js","_app/immutable/chunks/-IAPk5y9.js","_app/immutable/chunks/Bg6t5N8x.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/pEzoLNAv.js","_app/immutable/chunks/g4b5VIZf.js","_app/immutable/chunks/C5brnsFq.js","_app/immutable/chunks/D0Zpy5mZ.js","_app/immutable/chunks/CdJzllzT.js","_app/immutable/chunks/D7M2DxYg.js","_app/immutable/chunks/DkxjY8fG.js","_app/immutable/chunks/hTM7ewlf.js"];
export const stylesheets = ["_app/immutable/assets/0.BURu2Y3l.css"];
export const fonts = [];
