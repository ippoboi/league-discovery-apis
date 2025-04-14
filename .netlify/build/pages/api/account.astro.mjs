import { g as getLatestVersion } from '../../chunks/latestVersion_BLHnsCJL.mjs';
import { g as getChampionData } from '../../chunks/championUtils_BJNrzxS7.mjs';
export { renderers } from '../../renderers.mjs';

let _getEnv = (key) => process.env[key];
function getEnv$1(...args) {
  return _getEnv(...args);
}

// @ts-check

// @ts-expect-error
/** @returns {string} */
// used while generating the virtual module
// biome-ignore lint/correctness/noUnusedFunctionParameters: `key` is used by the generated code
// biome-ignore lint/correctness/noUnusedVariables: `key` is used by the generated code
const getEnv = (key) => {
	return getEnv$1(key);
};

const getSecret = (key) => {
	return getEnv(key);
};

const apiKey = getSecret("RIOT_API_KEY");
async function getAccountData(username, tagLine) {
  console.log(username, tagLine);
  const response = await fetch(`https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${username}/${tagLine}?api_key=${apiKey}`);
  const data = await response.json();
  const profileDetails = await getProfileDetails(data.puuid);
  const top3Masteries = await getTop3Masteries(data.puuid);
  const userData = {
    puuid: data.puuid,
    gameName: data.gameName,
    tagLine: data.tagLine,
    level: profileDetails.level,
    profilePicture: profileDetails.profilePicture,
    top3Masteries
  };
  return userData;
}
async function getProfileDetails(puuid) {
  const latestVersion = await getLatestVersion();
  const response = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${apiKey}`);
  const data = await response.json();
  const pictureUrl = `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/profileicon/${data.profileIconId}.png`;
  return {
    level: data.summonerLevel,
    profilePicture: pictureUrl
  };
}
async function getTop3Masteries(puuid) {
  const latestVersion = await getLatestVersion();
  const response = await fetch(`https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/top?api_key=${apiKey}`);
  const data = await response.json();
  const top3Ids = new Set(data.map((mastery) => mastery.championId));
  const championData = await getChampionData();
  const championsData = championData.data;
  const top3Champions = Object.values(championsData).filter((champion) => top3Ids.has(parseInt(champion.key)));
  const top3ChampionsWithMastery = data.map((mastery) => {
    const champion = top3Champions.find((champion2) => parseInt(champion2.key) === mastery.championId);
    return {
      ...mastery,
      championName: champion?.name,
      championImage: champion ? `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${champion.image.full}` : void 0
    };
  });
  return top3ChampionsWithMastery;
}

const prerender = false;
const POST = async ({
  request
}) => {
  try {
    const data = await request.formData();
    const username = data.get("username");
    const tagLine = data.get("tagLine");
    if (!username || !tagLine) {
      return new Response(JSON.stringify({
        success: false,
        message: "Username and tag line are required"
      }), {
        status: 400
      });
    }
    const accountData = await getAccountData(username, tagLine);
    return new Response(JSON.stringify({
      success: true,
      message: "Account information processed successfully",
      data: accountData
    }), {
      status: 200
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      message: error instanceof Error ? error.message : "An unknown error occurred"
    }), {
      status: 500
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
