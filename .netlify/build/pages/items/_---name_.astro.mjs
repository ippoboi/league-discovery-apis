import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Cx1c5JER.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_BUW8d9dh.mjs';
import { $ as $$MarkdownPostLayout } from '../../chunks/MarkdownPostLayout_LUMzz-BQ.mjs';
import { g as getItemData } from '../../chunks/itemsUtils_C636TZdS.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://league-discovery-apis.netlify.app");
async function getStaticPaths() {
  const allItemsData = await getItemData();
  return Object.values(allItemsData.data).map((item) => ({
    params: { name: item.id },
    props: { item }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { item } = Astro2.props;
  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/15.7.1/img/item/${item.image.full}`;
  return renderTemplate`${renderComponent($$result, "MarkdownPostLayout", $$MarkdownPostLayout, { "frontmatter": item }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": imageUrl, "alt": item.name, "width": 1920, "height": 1080 })} ${maybeRenderHead()}<div class="flex gap-2 items-baseline"> <h1 class="text-2xl font-bold">${item.name}</h1> <p class="text-gray-500">${item.description}</p> </div> <p>${item.description}</p> ` })}`;
}, "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/pages/items/[...name].astro", void 0);

const $$file = "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/pages/items/[...name].astro";
const $$url = "/items/[...name]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
