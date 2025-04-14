import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_CuNeil3z.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_wMTGbqVO.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Bvjw-BrD.mjs';
/* empty css                                  */
import { getItemData } from '../chunks/itemsUtils_Cm6q1r7X.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://league-discovery-apis.netlify.app");
const $$ItemsCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ItemsCard;
  const { data, index = 0 } = Astro2.props;
  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/15.7.1/img/item/${data.image.full}`;
  const loadingStrategy = index < 200 ? "eager" : "lazy";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/items/${data.id}`, "href")} class="relative overflow-hidden rounded-lg border border-zinc-900"> ${renderComponent($$result, "Image", $$Image, { "src": imageUrl, "alt": data.name + " splash art", "height": 1e3, "width": 1e3, "class": "hover:scale-105 transition-all duration-300 grayscale-75 hover:grayscale-0", "loading": loadingStrategy })} </a>`;
}, "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/components/ItemsCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const pageTitle = "Items";
  const itemsData = await getItemData();
  const processedItems = Object.entries(itemsData.data).map(([id, item]) => {
    return {
      ...item,
      id
    };
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-4 md:grid-cols-12 lg:grid-cols-16 xl:grid-cols-16 gap-2 p-4 xl:p-32 pt-24"> ${processedItems.map((item, index) => renderTemplate`${renderComponent($$result2, "ItemsCard", $$ItemsCard, { "data": item, "index": index })}`)} </div> ` })}`;
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
