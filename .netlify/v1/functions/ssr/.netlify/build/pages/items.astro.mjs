import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_Cx1c5JER.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BUW8d9dh.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B-DF7i6r.mjs';
/* empty css                                  */
import { g as getItemData } from '../chunks/itemsUtils_C636TZdS.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://league-discovery-apis.netlify.app");
const $$ItemsCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ItemsCard;
  const { data } = Astro2.props;
  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/15.7.1/img/item/${data.image.full}`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/items/${data.name}`, "href")} class="relative overflow-hidden rounded-lg border border-zinc-900"> <!-- <p
    class="absolute bottom-1 left-1 text-white bg-zinc-900/80 border border-zinc-700 rounded-md px-2 py-0.5 z-10"
  >
    {data.name}
  </p> --> ${renderComponent($$result, "Image", $$Image, { "src": imageUrl, "alt": data.name + " splash art", "height": 1e3, "width": 1e3, "class": "hover:scale-105 transition-all duration-300 grayscale-75 hover:grayscale-0" })} </a>`;
}, "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/components/ItemsCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const pageTitle = "Items";
  const itemsData = await getItemData();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-12 gap-2"> ${Object.values(itemsData.data).map((item) => renderTemplate`${renderComponent($$result2, "ItemsCard", $$ItemsCard, { "data": item })}`)} </div> ` })}`;
}, "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/pages/items/index.astro", void 0);

const $$file = "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/pages/items/index.astro";
const $$url = "/items";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
