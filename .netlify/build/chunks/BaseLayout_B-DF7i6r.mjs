import { c as createComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro, d as addAttribute, r as renderComponent, j as renderHead, e as renderSlot, k as renderScript } from './astro/server_Cx1c5JER.mjs';
/* empty css                          */

const $$Hamburger = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col md:hidden gap-1"> <span class="w-4 h-0.5 bg-zinc-300 rounded-full"></span> <span class="w-4 h-0.5 bg-zinc-300 rounded-full"></span> <span class="w-4 h-0.5 bg-zinc-300 rounded-full"></span> </div>`;
}, "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/components/Hamburger.astro", void 0);

const $$Astro$1 = createAstro("https://league-discovery-apis.netlify.app");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navigation;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<div class="gap-4 hidden md:flex"> <a href="/"${addAttribute([
    "hover:text-zinc-100 transition-colors",
    currentPath === "/" ? "text-zinc-100 " : "text-zinc-400"
  ], "class:list")}>Home</a> <a href="/champions"${addAttribute([
    "hover:text-zinc-100 transition-colors",
    currentPath === "/champions" ? "text-zinc-100 " : "text-zinc-400"
  ], "class:list")}>Champions</a> <a href="/items"${addAttribute([
    "hover:text-zinc-100 transition-colors",
    currentPath === "/items" ? "text-zinc-100 " : "text-zinc-400"
  ], "class:list")}>Items</a> <a href="/account"${addAttribute([
    "hover:text-zinc-100 transition-colors",
    currentPath === "/account" ? "text-zinc-100 " : "text-zinc-400"
  ], "class:list")}>Account</a> </div>`;
}, "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/components/Navigation.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-4 min-w-3xl left-1/2 -translate-x-1/2 z-50"> <nav class="flex justify-end md:justify-between items-center bg-zinc-900/70 backdrop-blur-lg rounded-xl border border-zinc-800 p-4"> ${renderComponent($$result, "Navigation", $$Navigation, {})} <div class="flex items-center gap-2"> <!-- <ThemeIcon /> --> ${renderComponent($$result, "Hamburger", $$Hamburger, {})} </div> </nav> </header>`;
}, "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte></footer>`;
}, "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://league-discovery-apis.netlify.app");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <div class=""> <h1 class="text-2xl font-medium hidden">${pageTitle}</h1> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
