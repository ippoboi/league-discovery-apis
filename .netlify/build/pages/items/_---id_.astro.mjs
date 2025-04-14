import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_CuNeil3z.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_wMTGbqVO.mjs';
import { $ as $$MarkdownPostLayout } from '../../chunks/MarkdownPostLayout_BqcjCeKD.mjs';
import { getItemDataById } from '../../chunks/itemsUtils_Cm6q1r7X.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://league-discovery-apis.netlify.app");
async function getStaticPaths() {
  const { getItemData } = await import('../../chunks/itemsUtils_Cm6q1r7X.mjs');
  const allItemsData = await getItemData();
  return Object.keys(allItemsData.data).map((itemId) => ({
    params: { id: itemId }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { id } = Astro2.params;
  const item = await getItemDataById(id);
  if (!item) {
    throw new Error(`Item with ID ${id} not found`);
  }
  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/15.7.1/img/item/${item.image.full}`;
  return renderTemplate`${renderComponent($$result, "MarkdownPostLayout", $$MarkdownPostLayout, { "frontmatter": { title: item.name } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto pt-24 pb-12 px-4"> <div class="bg-zinc-900/70 border border-zinc-800 rounded-lg p-4 md:p-6"> <div class="flex flex-col md:flex-row gap-6 items-start md:items-center mb-6"> <div class="bg-zinc-800/50 p-2 rounded-lg border border-zinc-700"> ${renderComponent($$result2, "Image", $$Image, { "src": imageUrl, "alt": item.name, "width": 64, "height": 64, "class": "rounded" })} </div> <div> <h1 class="text-2xl font-bold text-white">${item.name}</h1> <p class="text-sm text-zinc-400">Item ID: ${id}</p> </div> </div> <div class="border-t border-zinc-800 pt-6 mb-6"> <h2 class="text-lg font-medium text-zinc-300 mb-3">Description</h2> <div class="text-zinc-400 prose prose-invert prose-sm max-w-none">${unescapeHTML(item.description)}</div> </div> ${item.gold && renderTemplate`<div class="border-t border-zinc-800 pt-6 mb-6"> <h2 class="text-lg font-medium text-zinc-300 mb-3">Gold</h2> <div class="bg-zinc-800/30 rounded-lg p-4 border border-zinc-700/50"> <ul class="grid grid-cols-1 md:grid-cols-3 gap-4"> <li class="flex flex-col"> <span class="text-zinc-500 text-sm">Base</span> <span class="text-amber-400 font-medium">${item.gold.base}</span> </li> <li class="flex flex-col"> <span class="text-zinc-500 text-sm">Total</span> <span class="text-amber-400 font-medium">${item.gold.total}</span> </li> <li class="flex flex-col"> <span class="text-zinc-500 text-sm">Sell</span> <span class="text-amber-400 font-medium">${item.gold.sell}</span> </li> </ul> </div> </div>`} ${item.tags && item.tags.length > 0 && renderTemplate`<div class="border-t border-zinc-800 pt-6"> <h2 class="text-lg font-medium text-zinc-300 mb-3">Tags</h2> <div class="flex flex-wrap gap-2"> ${item.tags.map((tag) => renderTemplate`<span class="bg-blue-900/30 text-blue-300 border border-blue-800/50 px-3 py-1 rounded-md text-sm"> ${tag} </span>`)} </div> </div>`} </div> </div> ` })}`;
}, "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/pages/items/[...id].astro", void 0);

const $$file = "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/pages/items/[...id].astro";
const $$url = "/items/[...id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
