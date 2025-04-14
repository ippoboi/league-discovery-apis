import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CS2z7IpO.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/account.astro.mjs');
const _page2 = () => import('./pages/api/account.astro.mjs');
const _page3 = () => import('./pages/champions.astro.mjs');
const _page4 = () => import('./pages/champions/_---name_.astro.mjs');
const _page5 = () => import('./pages/items.astro.mjs');
const _page6 = () => import('./pages/items/_---id_.astro.mjs');
const _page7 = () => import('./pages/rss.xml.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.6.2_@netlify+blobs@8.1.2_jiti@2.4.2_lightningcss@1.29.2_rollup@4.40.0_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/account.astro", _page1],
    ["src/pages/api/account.ts", _page2],
    ["src/pages/champions/index.astro", _page3],
    ["src/pages/champions/[...name].astro", _page4],
    ["src/pages/items/index.astro", _page5],
    ["src/pages/items/[...id].astro", _page6],
    ["src/pages/rss.xml.js", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "f2b0143d-5de0-4184-adf3-39aa09061d96"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
