import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CuNeil3z.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Bvjw-BrD.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "League of Legends Champion Discovery";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto pt-32"> <div class="p-6 mb-8"> <h1 class="text-3xl font-bold mb-3">Welcome to League Discovery</h1> <p class="text-zinc-400 mb-6">
Explore League of Legends champions, abilities, and stats through our simple and clean
        interface.
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"> <div class="bg-zinc-900/60 border border-zinc-800 rounded-lg p-4"> <h2 class="text-xl font-bold mb-2">Champion Abilities</h2> <p class="text-zinc-400">
Discover detailed information about champion abilities, cooldowns, and resources.
</p> </div> <div class="bg-zinc-900/60 border border-zinc-800 rounded-lg p-4"> <h2 class="text-xl font-bold mb-2">Champion Stats</h2> <p class="text-zinc-400">View champion statistics, roles, and gameplay information.</p> </div> </div> <a href="/champions" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
Explore Champions
</a> </div> </div> ` })}`;
}, "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/pages/index.astro", void 0);

const $$file = "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
