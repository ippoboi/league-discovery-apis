import { getLatestVersion } from './latestVersion';

let itemDataCache: any | null = null;

/**
 * Retrieves the item data from Data Dragon.
 * Caches the result for subsequent calls.
 */
export async function getItemData(): Promise<any> {
  if (itemDataCache) {
    return itemDataCache;
  }
  const version = await getLatestVersion();
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/item.json`
  );
  const data = await response.json();
  itemDataCache = data;
  return itemDataCache;
}

/**
 * Fetches data for a specific item by its ID.
 * @param itemId - The ID of the item to retrieve.
 */
export async function getItemDataById(itemId: string): Promise<any | null> {
  const itemData = await getItemData();

  if (!itemData || !itemData.data || !itemData.data[itemId]) {
    return null;
  }

  return itemData.data[itemId];
}
