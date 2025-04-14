import { g as getLatestVersion } from './latestVersion_BLHnsCJL.mjs';

let championDataCache = null;
async function getChampionData() {
  if (championDataCache) {
    return championDataCache;
  }
  const version = await getLatestVersion();
  const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`);
  const data = await response.json();
  championDataCache = data;
  return championDataCache;
}
async function getChampionDataByChampionName(championName) {
  const version = await getLatestVersion();
  const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${championName}.json`);
  const data = await response.json();
  return data;
}

export { getChampionDataByChampionName as a, getChampionData as g };
