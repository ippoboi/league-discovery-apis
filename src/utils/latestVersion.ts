let latestVersionCache: string | null = null;

/**
 * Fetches the latest Data Dragon version.
 * Utilizes caching to prevent redundant network requests.
 */
export async function getLatestVersion() {
  // Check cache first
  if (latestVersionCache) {
    return latestVersionCache;
  }
  const response = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
  const versions = await response.json();
  latestVersionCache = versions[0]; // Store in cache
  return latestVersionCache;
}
