import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CuNeil3z.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_O8TgNt76.mjs';
import { useState } from 'preact/hooks';
import { jsx, jsxs } from 'preact/jsx-runtime';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

function AccountForm() {
  const [formStatus, setFormStatus] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch("/api/account", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      setFormStatus({
        success: data.success,
        message: data.message,
        data: data.data
      });
    } catch (error) {
      setFormStatus({
        success: false,
        message: error instanceof Error ? error.message : "An error occurred"
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  if (formStatus.success && formStatus.data) {
    return jsx(UserProfileDisplay, {
      profile: formStatus.data
    });
  }
  return jsxs("div", {
    className: "mt-8",
    children: [jsxs("form", {
      onSubmit: handleSubmit,
      className: "flex flex-col gap-4 max-w-md mx-auto",
      children: [jsx("div", {
        className: "flex flex-col",
        children: jsxs("label", {
          className: "text-zinc-300 font-medium mb-1",
          children: ["League Username:", jsx("input", {
            type: "text",
            name: "username",
            className: "mt-1 w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white",
            required: true
          })]
        })
      }), jsx("div", {
        className: "flex flex-col",
        children: jsxs("label", {
          className: "text-zinc-300 font-medium mb-1",
          children: ["Tag Line:", jsx("input", {
            type: "text",
            name: "tagLine",
            className: "mt-1 w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white",
            required: true,
            placeholder: "e.g. NA1"
          })]
        })
      }), jsx("button", {
        className: `mt-2 py-2 px-4 rounded-md transition-all duration-300 ${isSubmitting ? "bg-zinc-700 text-zinc-400" : "bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700"}`,
        disabled: isSubmitting,
        children: isSubmitting ? "Searching..." : "Find Profile"
      })]
    }), formStatus.message && !formStatus.success && jsx("div", {
      className: "mt-4 p-3 rounded-md bg-zinc-800 border border-red-800 text-red-400 max-w-md mx-auto",
      children: jsx("p", {
        children: formStatus.message
      })
    })]
  });
}
function UserProfileDisplay({
  profile
}) {
  return jsxs("div", {
    className: "mt-8 max-w-4xl mx-auto",
    children: [jsxs("div", {
      className: "relative w-full h-64 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-t-lg overflow-hidden",
      children: [jsx("div", {
        className: "absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10"
      }), jsx("div", {
        className: "absolute bottom-0 left-0 right-0 p-6 z-20",
        children: jsxs("div", {
          className: "flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-center",
          children: [jsx("div", {
            className: "flex-shrink-0",
            children: jsx("img", {
              src: profile.profilePicture,
              alt: "Profile Icon",
              className: "h-24 w-24 rounded-full border-2 border-zinc-700"
            })
          }), jsxs("div", {
            className: "lg:ml-6",
            children: [jsxs("h2", {
              className: "text-3xl font-bold text-white",
              children: [profile.gameName, jsxs("span", {
                className: "text-zinc-400 text-xl ml-2",
                children: ["#", profile.tagLine]
              })]
            }), jsx("div", {
              className: "mt-2 flex items-center",
              children: jsxs("div", {
                className: "bg-zinc-800 text-zinc-300 border border-zinc-700 px-3 py-0.5 rounded-md text-sm font-medium",
                children: ["Level ", profile.level]
              })
            })]
          })]
        })
      })]
    }), jsx("div", {
      className: "bg-zinc-900 border border-zinc-800 rounded-none p-6",
      children: jsxs("div", {
        className: "border-t border-zinc-800 pt-4 mt-2",
        children: [jsx("h3", {
          className: "text-lg font-medium text-zinc-300 mb-4",
          children: "Champion Mastery"
        }), profile.top3Masteries && profile.top3Masteries.length > 0 ? jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-4",
          children: profile.top3Masteries.map((mastery, index) => jsx(ChampionMasteryCard, {
            mastery,
            rank: index + 1
          }, index))
        }) : jsx("p", {
          className: "text-zinc-500",
          children: "No champion mastery data available."
        })]
      })
    }), jsx("div", {
      className: "bg-zinc-900 border border-zinc-800 border-t-0 rounded-b-lg p-6",
      children: jsxs("div", {
        className: "border-t border-zinc-800 pt-4 mt-2",
        children: [jsx("h3", {
          className: "text-lg font-medium text-zinc-300 mb-4",
          children: "Recent Matches"
        }), profile.matchHistory && profile.matchHistory.length > 0 ? jsx("div", {
          className: "flex flex-col gap-4",
          children: profile.matchHistory.map((match, index) => jsx(MatchHistoryCard, {
            match
          }, match.matchId))
        }) : jsx("p", {
          className: "text-zinc-500",
          children: "No match history data available."
        })]
      })
    })]
  });
}
function ChampionMasteryCard({
  mastery,
  rank
}) {
  const formattedPoints = mastery.championPoints.toLocaleString();
  const lastPlayed = new Date(mastery.lastPlayTime).toLocaleDateString();
  const masteryPercentage = Math.min(mastery.championPointsSinceLastLevel / (mastery.championPointsUntilNextLevel + mastery.championPointsSinceLastLevel) * 100, 100);
  return jsxs("div", {
    className: "bg-zinc-800 border border-zinc-700 rounded-lg overflow-hidden flex flex-col",
    children: [jsx("div", {
      className: "relative",
      children: jsxs("div", {
        className: "w-full h-40 bg-zinc-800 overflow-hidden relative",
        children: [jsx("img", {
          src: mastery.championImage || `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg`,
          alt: mastery.championName || `Champion ${mastery.championId}`,
          className: "w-full h-full object-cover opacity-60",
          onError: (e) => {
            const target = e.currentTarget;
            target.src = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg";
            target.className = "w-full h-full object-cover opacity-40";
          }
        }), jsx("div", {
          className: "absolute bottom-2 right-2 bg-zinc-900/80 border border-zinc-700 rounded-full p-1 flex items-center justify-center w-14 h-14",
          children: jsxs("div", {
            className: "text-center",
            children: [jsx("div", {
              className: "text-amber-400 font-bold text-xl",
              children: mastery.championLevel
            }), jsx("div", {
              className: "text-zinc-300 text-xs",
              children: "Level"
            })]
          })
        }), jsxs("div", {
          className: "absolute top-2 left-2 bg-zinc-900/80 text-zinc-300 border border-zinc-700 px-2 py-0.5 rounded text-sm",
          children: ["#", rank]
        }), mastery.tokensEarned > 0 && jsxs("div", {
          className: "absolute top-2 right-2 bg-zinc-900/80 text-amber-400 border border-amber-700 px-2 py-0.5 rounded text-sm",
          children: [mastery.tokensEarned, " tokens"]
        })]
      })
    }), jsxs("div", {
      className: "p-4",
      children: [jsx("div", {
        className: "flex justify-between",
        children: jsxs("div", {
          children: [jsx("div", {
            className: "text-white font-semibold",
            children: mastery.championName || `Champion ${mastery.championId}`
          }), jsxs("div", {
            className: "text-amber-400 font-medium",
            children: [formattedPoints, " points"]
          })]
        })
      }), mastery.championLevel < 7 && jsxs("div", {
        className: "mt-3",
        children: [jsxs("div", {
          className: "flex justify-between text-xs text-zinc-400 mb-1",
          children: [jsx("span", {
            children: "Mastery Progress"
          }), jsxs("span", {
            children: [mastery.championPointsSinceLastLevel, " /", " ", mastery.championPointsUntilNextLevel + mastery.championPointsSinceLastLevel]
          })]
        }), jsx("div", {
          className: "h-2 w-full bg-zinc-700 rounded-full overflow-hidden",
          children: jsx("div", {
            className: "h-full bg-amber-600",
            style: {
              width: `${masteryPercentage}%`
            }
          })
        })]
      }), jsxs("div", {
        className: "text-zinc-400 text-xs mt-3",
        children: ["Last played: ", lastPlayed]
      })]
    })]
  });
}
function MatchHistoryCard({
  match
}) {
  const formatGameDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  const formatGameDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };
  const kda = ((match.playerData.kills + match.playerData.assists) / (match.playerData.deaths || 1)).toFixed(2);
  const totalCS = match.playerData.totalMinionsKilled + match.playerData.neutralMinionsKilled;
  const csPerMin = (totalCS / (match.gameDuration / 60)).toFixed(1);
  const resultColor = match.playerData.win ? "text-emerald-500" : "text-red-500";
  const resultBg = match.playerData.win ? "bg-emerald-900/20" : "bg-red-900/20";
  const resultBorder = match.playerData.win ? "border-emerald-800" : "border-red-800";
  const getGameModeName = (mode, queueId) => {
    if (mode === "CLASSIC") {
      if (queueId === 420) return "Ranked Solo";
      if (queueId === 440) return "Ranked Flex";
      if (queueId === 400) return "Normal Draft";
      if (queueId === 430) return "Normal Blind";
    }
    if (mode === "ARAM") return "ARAM";
    if (mode === "URF" || mode === "ARURF") return "URF";
    return mode;
  };
  return jsx("div", {
    className: `bg-zinc-800 border ${resultBorder} rounded-lg overflow-hidden`,
    children: jsxs("div", {
      className: "flex flex-col md:flex-row",
      children: [jsxs("div", {
        className: `p-4 ${resultBg} flex flex-col justify-center items-center md:w-1/5`,
        children: [jsx("div", {
          className: `text-sm uppercase font-bold ${resultColor}`,
          children: match.playerData.win ? "Victory" : "Defeat"
        }), jsx("div", {
          className: "text-zinc-400 text-xs mt-1",
          children: getGameModeName(match.gameMode, match.queueId)
        }), jsx("div", {
          className: "text-zinc-400 text-xs mt-1",
          children: formatGameDuration(match.gameDuration)
        }), jsx("div", {
          className: "text-zinc-500 text-xs mt-1",
          children: formatGameDate(match.gameCreation)
        })]
      }), jsxs("div", {
        className: "p-4 flex flex-1 flex-col md:flex-row",
        children: [jsxs("div", {
          className: "flex items-center md:w-1/4",
          children: [jsxs("div", {
            className: "relative",
            children: [jsx("img", {
              src: `https://ddragon.leagueoflegends.com/cdn/15.7.1/img/champion/${match.playerData.championName}.png`,
              alt: match.playerData.championName,
              className: "w-16 h-16 rounded-md border border-zinc-700",
              onError: (e) => {
                const target = e.currentTarget;
                target.src = "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/default.png";
                target.className = "w-16 h-16 rounded-md border border-zinc-700 opacity-50";
              }
            }), jsx("div", {
              className: "absolute bottom-0 right-0 bg-zinc-900/80 text-xs text-white px-1 rounded-tl-sm border border-zinc-700",
              children: match.playerData.champLevel
            })]
          }), jsxs("div", {
            className: "ml-3",
            children: [jsx("div", {
              className: "text-white",
              children: match.playerData.championName
            }), jsx("div", {
              className: "text-zinc-400 text-xs",
              children: match.playerData.position
            })]
          })]
        }), jsxs("div", {
          className: "mt-4 md:mt-0 md:ml-6 flex flex-col justify-center md:w-1/4",
          children: [jsxs("div", {
            className: "flex items-center",
            children: [jsx("span", {
              className: "text-white",
              children: match.playerData.kills
            }), jsx("span", {
              className: "text-zinc-600 mx-1",
              children: "/"
            }), jsx("span", {
              className: "text-red-500",
              children: match.playerData.deaths
            }), jsx("span", {
              className: "text-zinc-600 mx-1",
              children: "/"
            }), jsx("span", {
              className: "text-blue-400",
              children: match.playerData.assists
            })]
          }), jsxs("div", {
            className: "text-zinc-400 text-xs mt-1",
            children: [jsx("span", {
              className: "text-amber-400",
              children: kda
            }), " KDA"]
          }), jsxs("div", {
            className: "text-zinc-400 text-xs mt-1",
            children: [totalCS, " CS (", csPerMin, "/min)"]
          })]
        }), jsxs("div", {
          className: "mt-4 md:mt-0 md:ml-auto flex flex-wrap gap-1 items-center justify-end",
          children: [match.playerData.items.filter((item) => item > 0).map((itemId, idx) => jsx("div", {
            className: "relative",
            children: jsx("img", {
              src: `https://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${itemId}.png`,
              alt: `Item ${itemId}`,
              className: "w-8 h-8 rounded-sm border border-zinc-700",
              onError: (e) => {
                const target = e.currentTarget;
                target.className = "w-8 h-8 rounded-sm border border-zinc-700 bg-zinc-700";
                target.src = "";
              }
            })
          }, idx)), match.playerData.items.filter((item) => item > 0).length === 0 && jsx("div", {
            className: "text-zinc-500 text-xs",
            children: "No items"
          })]
        })]
      })]
    })
  });
}

const $$Account = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "League Profile" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-4 pt-20"> <div class="mb-8 max-w-4xl mx-auto"> <h1 class="text-3xl font-bold text-white">League of Legends Profile</h1> <p class="text-zinc-400 font-thin mt-2">
Enter your League of Legends username and tag line to view your profile information.
</p> </div> ${renderComponent($$result2, "AccountForm", AccountForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/components/AccountForm", "client:component-export": "default" })} </div> ` })}`;
}, "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/pages/account.astro", void 0);

const $$file = "/Users/dimitar/Desktop/Software_Dev/astro-projects/league-discovery-apis/src/pages/account.astro";
const $$url = "/account";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Account,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
