// Add cache variables at the top

import { getLatestVersion } from './latestVersion';

let championDataCache: any | null = null;

export async function getChampionData() {
  // Check cache first
  if (championDataCache) {
    return championDataCache;
  }
  const version = await getLatestVersion(); // This will now use the version cache after the first call
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`
  );
  const data = await response.json();
  championDataCache = data; // Store in cache
  return championDataCache;
}

export async function getChampionDataByChampionName(championName: string) {
  const version = await getLatestVersion();
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${championName}.json`
  );
  const data = await response.json();
  return data;
}
