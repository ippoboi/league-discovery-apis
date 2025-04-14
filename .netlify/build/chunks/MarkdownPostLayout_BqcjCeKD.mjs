import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, e as renderSlot } from './astro/server_CuNeil3z.mjs';
import { $ as $$BaseLayout } from './BaseLayout_Bvjw-BrD.mjs';
/* empty css                          */

const $$Astro = createAstro("https://league-discovery-apis.netlify.app");
const $$MarkdownPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.title, "data-astro-cid-5grsw2hi": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/layouts/MarkdownPostLayout.astro", void 0);

export { $$MarkdownPostLayout as $ };
