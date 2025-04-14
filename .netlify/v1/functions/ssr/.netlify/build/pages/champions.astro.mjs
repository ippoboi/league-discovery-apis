import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_CuNeil3z.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_wMTGbqVO.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Bvjw-BrD.mjs';
/* empty css                                  */
import { g as getChampionData } from '../chunks/championUtils_BJNrzxS7.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://league-discovery-apis.netlify.app");
const $$ChampionCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ChampionCard;
  const { data, index = 0 } = Astro2.props;
  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data.id}_0.jpg`;
  const loadingStrategy = index < 16 ? "eager" : "lazy";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/champions/${data.name}`, "href")} class="relative overflow-hidden rounded-lg border border-zinc-900"> <p class="absolute bottom-1 left-1 text-white bg-zinc-900/80 border border-zinc-700 rounded-md px-2 py-0.5 z-10"> ${data.name} </p> ${renderComponent($$result, "Image", $$Image, { "src": imageUrl, "alt": data.name + " splash art", "height": 720, "width": 540, "class": "lg:hover:scale-105 lg:transition-all lg:duration-300 lg:grayscale-75 lg:hover:grayscale-0", "loading": loadingStrategy })} </a>`;
}, "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/components/ChampionCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const pageTitle = "Champions";
  const championsData = await getChampionData();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 pt-22 p-4"> ${Object.values(championsData.data).map((champion, index) => renderTemplate`${renderComponent($$result2, "ChampionCard", $$ChampionCard, { "data": champion, "index": index })}`)} </div> ` })}`;
}, "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/pages/champions/index.astro", void 0);

const $$file = "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/pages/champions/index.astro";
const $$url = "/champions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
