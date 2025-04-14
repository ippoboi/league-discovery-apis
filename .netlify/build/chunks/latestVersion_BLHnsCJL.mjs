let latestVersionCache = null;
async function getLatestVersion() {
  if (latestVersionCache) {
    return latestVersionCache;
  }
  const response = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");
  const versions = await response.json();
  latestVersionCache = versions[0];
  return latestVersionCache;
}

export { getLatestVersion as g };
