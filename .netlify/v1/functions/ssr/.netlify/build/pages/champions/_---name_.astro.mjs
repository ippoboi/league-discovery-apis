import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CuNeil3z.mjs';
import { useState } from 'preact/hooks';
import { jsx, jsxs } from 'preact/jsx-runtime';
import { $ as $$MarkdownPostLayout } from '../../chunks/MarkdownPostLayout_CKvRAqe1.mjs';
import { a as getChampionDataByChampionName, g as getChampionData } from '../../chunks/championUtils_BJNrzxS7.mjs';
export { renderers } from '../../renderers.mjs';

function SkinCarousel({
  skins,
  champion
}) {
  const [currentSkin, setCurrentSkin] = useState(skins[0]);
  return jsx("div", {
    children: jsxs("div", {
      class: "relative",
      children: [jsx("img", {
        src: currentSkin.splash,
        alt: currentSkin.name,
        width: 3e3,
        height: 2250,
        class: "block w-full h-[400px] lg:h-auto object-cover"
      }), jsx("div", {
        class: "absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/50 to-transparent"
      }), jsxs("div", {
        class: "absolute bottom-20 left-4 right-4 lg:left-0 lg:right-0 flex flex-col flex-start gap-2 overflow-hidden max-w-4xl mx-auto",
        children: [jsxs("div", {
          class: "flex gap-2 items-baseline",
          children: [jsx("h1", {
            class: "text-xl font-bold",
            children: champion.name
          }), jsx("p", {
            class: "text-zinc-300",
            children: champion.title
          })]
        }), jsx("div", {
          class: "max-w-4xl mx-auto flex gap-2 items-end overflow-x-auto no-scrollbar",
          children: skins.map((skin) => jsx("div", {
            class: `flex gap-2 rounded-md hover:grayscale-0 border border-transparent transition-all duration-300 items-baseline ${currentSkin.name === skin.name ? "grayscale-0 border-white" : "grayscale-75"}`,
            children: jsx("img", {
              src: skin.splash,
              alt: skin.name,
              width: 100,
              height: 100,
              class: "rounded-md min-w-[100px] max-h-[75px] lg:min-w-[150px] lg:max-h-[100px] object-cover",
              onClick: () => setCurrentSkin(skin)
            })
          }))
        })]
      })]
    })
  });
}

function SpellDisplay({
  spells,
  passive
}) {
  const [activeSpell, setActiveSpell] = useState("passive");
  const [currentSpell, setCurrentSpell] = useState(passive);
  const handleSpellSelect = (spellType, spellData) => {
    setActiveSpell(spellType);
    setCurrentSpell(spellData);
  };
  const getSpellImageUrl = (spell) => {
    if (spell === passive) {
      return `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/passive/${passive.image.full}`;
    } else {
      return `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/${spell.image.full}`;
    }
  };
  return jsxs("div", {
    class: "max-w-4xl mx-auto",
    children: [jsx("h2", {
      class: "text-xl font-medium mb-4",
      children: "Champion Abilities"
    }), jsxs("div", {
      class: "flex gap-2 mb-6 overflow-x-auto pb-2",
      children: [jsx("button", {
        onClick: () => handleSpellSelect("passive", passive),
        class: `flex-shrink-0 border ${activeSpell === "passive" ? "border-white grayscale-0" : "border-zinc-800 grayscale-75"} rounded-md transition-all duration-200 hover:grayscale-0`,
        children: jsx("img", {
          src: getSpellImageUrl(passive),
          alt: passive.name,
          class: "w-12 h-12 sm:w-14 sm:h-14 rounded-md"
        })
      }), spells.map((spell, index) => jsx("button", {
        onClick: () => handleSpellSelect(`spell${index}`, spell),
        class: `flex-shrink-0 border ${activeSpell === `spell${index}` ? "border-white grayscale-0" : "border-zinc-800 grayscale-75"} rounded-md transition-all duration-200 hover:grayscale-0`,
        children: jsx("img", {
          src: getSpellImageUrl(spell),
          alt: spell.name,
          class: "w-12 h-12 sm:w-14 sm:h-14 rounded-md"
        })
      }, spell.id))]
    }), jsx("div", {
      class: "bg-zinc-900/40 border border-zinc-800 rounded-lg mb-8",
      children: jsxs("div", {
        class: "flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6",
        children: [jsx("img", {
          src: getSpellImageUrl(currentSpell),
          alt: currentSpell.name,
          class: "w-14 h-14 sm:w-16 sm:h-16 rounded-md"
        }), jsxs("div", {
          class: "w-full",
          children: [jsxs("div", {
            class: "flex gap-2 items-baseline mb-2",
            children: [jsx("h3", {
              class: "text-xl font-bold break-words",
              children: currentSpell.name
            }), activeSpell !== "passive" && jsx("span", {
              class: "text-zinc-400 text-sm",
              children: currentSpell.id
            })]
          }), jsx("p", {
            class: "text-zinc-400 font-thin mb-4 break-words",
            children: currentSpell.description
          }), activeSpell !== "passive" && jsxs("div", {
            class: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",
            children: [jsxs("div", {
              class: "flex gap-2",
              children: [jsx("span", {
                class: "text-zinc-500",
                children: "Cooldown:"
              }), jsx("span", {
                class: "text-zinc-300",
                children: Array.isArray(currentSpell.cooldown) ? currentSpell.cooldown.join("/") : currentSpell.cooldown
              })]
            }), jsxs("div", {
              class: "flex gap-2",
              children: [jsx("span", {
                class: "text-zinc-500",
                children: "Range:"
              }), jsx("span", {
                class: "text-zinc-300",
                children: Array.isArray(currentSpell.range) ? currentSpell.range.join("/") : currentSpell.range
              })]
            }), jsxs("div", {
              class: "flex gap-2",
              children: [jsx("span", {
                class: "text-zinc-500",
                children: "Cost:"
              }), jsx("span", {
                class: "text-zinc-300",
                children: currentSpell.costBurn
              })]
            }), jsxs("div", {
              class: "flex gap-2",
              children: [jsx("span", {
                class: "text-zinc-500",
                children: "Resource:"
              }), jsx("span", {
                class: "text-zinc-300",
                children: currentSpell.resource
              })]
            })]
          })]
        })]
      })
    })]
  });
}

const $$Astro = createAstro("https://league-discovery-apis.netlify.app");
async function getStaticPaths() {
  const allChampionsData = await getChampionData();
  return Object.values(allChampionsData.data).map((champion) => ({
    params: { name: champion.id }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const championName = Astro2.params.name;
  const championData = await getChampionDataByChampionName(championName);
  const champion = championData.data[championName];
  const skins = champion.skins.map((skin) => ({
    splash: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${skin.num}.jpg`,
    name: skin.name
  }));
  return renderTemplate`${renderComponent($$result, "MarkdownPostLayout", $$MarkdownPostLayout, { "frontmatter": champion }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "SkinCarousel", SkinCarousel, { "client:visible": true, "skins": skins, "champion": champion, "client:component-hydration": "visible", "client:component-path": "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/components/SkinCarousel", "client:component-export": "default" })} ${maybeRenderHead()}<div class="flex flex-col gap-10 px-4"> <div class="max-w-4xl mx-auto"> <p class="text-zinc-400 font-thin">${champion.lore}</p> </div> ${renderComponent($$result2, "SpellDisplay", SpellDisplay, { "client:visible": true, "spells": champion.spells, "passive": champion.passive, "client:component-hydration": "visible", "client:component-path": "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/components/SpellDisplay", "client:component-export": "default" })} </div> ` })}`;
}, "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/pages/champions/[...name].astro", void 0);

const $$file = "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/pages/champions/[...name].astro";
const $$url = "/champions/[...name]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
