import { g as getLatestVersion } from './latestVersion_BLHnsCJL.mjs';

let itemDataCache = null;
async function getItemData() {
  if (itemDataCache) {
    return itemDataCache;
  }
  const version = await getLatestVersion();
  const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/item.json`);
  const data = await response.json();
  itemDataCache = data;
  return itemDataCache;
}
async function getItemDataById(itemId) {
  const itemData = await getItemData();
  if (!itemData || !itemData.data || !itemData.data[itemId]) {
    return null;
  }
  return itemData.data[itemId];
}

export { getItemData, getItemDataById };
