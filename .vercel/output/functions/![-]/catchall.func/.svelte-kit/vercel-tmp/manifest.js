export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.CBFgFI2G.js",app:"_app/immutable/entry/app.DVjp2FHT.js",imports:["_app/immutable/entry/start.CBFgFI2G.js","_app/immutable/chunks/CdJzllzT.js","_app/immutable/chunks/Bg6t5N8x.js","_app/immutable/entry/app.DVjp2FHT.js","_app/immutable/chunks/Bg6t5N8x.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/g4b5VIZf.js","_app/immutable/chunks/hTM7ewlf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/[school]/cart",
				pattern: /^\/([^/]+?)\/cart\/?$/,
				params: [{"name":"school","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[school]/cart/team",
				pattern: /^\/([^/]+?)\/cart\/team\/?$/,
				params: [{"name":"school","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/[school]/order",
				pattern: /^\/([^/]+?)\/order\/?$/,
				params: [{"name":"school","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/[school]/order/[orderId]",
				pattern: /^\/([^/]+?)\/order\/([^/]+?)\/?$/,
				params: [{"name":"school","optional":false,"rest":false,"chained":false},{"name":"orderId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {"_app/immutable/assets/st350_white_front.Cdv7_XkO.png":84347,"_app/immutable/assets/st350_white_back.f55SdIiE.png":103470,"_app/immutable/assets/dt6100_grey_front.X4RhaFXG.png":815457,"_app/immutable/assets/dt6100_grey_back.Bgl8np52.png":188765,"_app/immutable/assets/logo2023.e0-2FLEP.png":1461016,"_app/immutable/assets/lpc54front.DoCuhtF3.png":303848,"_app/immutable/assets/lpc54back.BKAT23k3.png":254090,"_app/immutable/assets/lst350front.DwqT3rVV.png":225441,"_app/immutable/assets/lst350back.CaHlVTru.png":245576,"_app/immutable/assets/lst356front.BnrsOAda.png":499600,"_app/immutable/assets/lst356back.B3EZVgrk.png":474362,"_app/immutable/assets/pc78qfront.C1mxLveA.png":694769,"_app/immutable/assets/pc78qback.DofgrlO2.png":652687,"_app/immutable/assets/logo2023.CkMjrwO0.png":177281,"_app/immutable/assets/holloway222777-green.Cg2ufzT3.png":188418,"_app/immutable/assets/holloway222777-black.Dtf8KCNZ.png":115494,"_app/immutable/assets/augusta1732-green.DqwpOuLy.png":363708,"_app/immutable/assets/holloway221335-black.DCASMxDH.png":129885,"_app/immutable/assets/dt6100-black.q4CZiuyP.png":343816,"_app/immutable/assets/dt6100-green.BiE-5Ty1.png":273313,"_app/immutable/assets/augusta1790-green.DSbviY_4.png":229958,"_app/immutable/assets/augusta1790-black.DmRyreD9.png":170567,"_app/immutable/assets/augusta2797-black.DhBsvc5v.png":148130,"_app/immutable/assets/logo2023.CDDALYnF.png":49357,"_app/immutable/assets/st350_black_front.DvXlu9XK.png":227178,"_app/immutable/assets/pc78h_dark-heather-grey_front.Dr1Vygr8.png":296012,"_app/immutable/assets/logo.B-hLJtje.png":181763,"_app/immutable/assets/logo2023.BzCmDs4a.jpg":49632,"_app/immutable/assets/st350_purple_front.DnSJveWf.jpg":91470,"_app/immutable/assets/logo2023.FVzZ9xin.png":47649,"_app/immutable/assets/team365-tt11-front.CmdjKnOk.jpg":97080,"_app/immutable/assets/jerzees-996-front.D2RrDiy9.jpg":101486,"_app/immutable/assets/logo.Bp85TCpk.png":99111,"_app/immutable/assets/lst350front.MqSdiAFW.png":41230,"_app/immutable/assets/lst350back.Da-1fIBR.png":42128,"_app/immutable/assets/st350front.CrMsBx6X.png":35052,"_app/immutable/assets/st350back.hsMXNQdM.png":44798,"_app/immutable/assets/pc78h.V9aRp4Bs.png":57868,"_app/immutable/assets/augusta987.BKTplGlo.png":229538,"_app/immutable/assets/augusta988.C6V67gMV.png":229285,"_app/immutable/assets/holloway222784.BZsLvWx0.png":164530}
	}
}
})();
