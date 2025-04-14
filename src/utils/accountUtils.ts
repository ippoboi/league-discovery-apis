import { getSecret } from 'astro:env/server';
import { getLatestVersion } from './latestVersion';
import { getChampionData } from './championUtils';

const apiKey = getSecret('RIOT_API_KEY');

export type AccountData = {
  puuid: string;
  gameName: string;
  tagLine: string;
};

export type ProfileDetails = {
  id: string;
  accountId: string;
  puuid: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
};

export type ChampionMastery = {
  puuid: string;
  championId: number;
  championLevel: number;
  championPoints: number;
  lastPlayTime: number;
  championPointsSinceLastLevel: number;
  championPointsUntilNextLevel: number;
  markRequiredForNextLevel: number;
  tokensEarned: number;
  championSeasonMilestone: number;
  nextSeasonMilestone: {
    requireGradeCounts: {
      [key: string]: number;
    };
    rewardMarks: number;
    bonus: boolean;
    totalGamesRequires: number;
  };
};

// Champion data type from Data Dragon API
type ChampionData = {
  id: string;
  key: string;
  name: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
};

export async function getAccountData(username: string, tagLine: string) {
  console.log(username, tagLine);
  const response = await fetch(
    `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${username}/${tagLine}?api_key=${apiKey}`
  );

  const data: AccountData = await response.json();

  const profileDetails = await getProfileDetails(data.puuid);
  const top3Masteries = await getTop3Masteries(data.puuid);

  const userData = {
    puuid: data.puuid,
    gameName: data.gameName,
    tagLine: data.tagLine,
    level: profileDetails.level,
    profilePicture: profileDetails.profilePicture,
    top3Masteries: top3Masteries,
  };

  return userData;
}

export async function getAccountMatchHistory(puuid: string) {
  console.log(puuid);
  const response = await fetch(
    `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?api_key=${apiKey}`
  );

  const data = await response.json();
  return data;
}

export async function getProfileDetails(puuid: string) {
  const latestVersion = await getLatestVersion();
  const response = await fetch(
    `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${apiKey}`
  );

  const data: ProfileDetails = await response.json();

  const pictureUrl = `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/profileicon/${data.profileIconId}.png`;

  return {
    level: data.summonerLevel,
    profilePicture: pictureUrl,
  };
}

export async function getTop3Masteries(
  puuid: string
): Promise<(ChampionMastery & { championName?: string; championImage?: string })[]> {
  const latestVersion = await getLatestVersion();
  const response = await fetch(
    `https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/top?api_key=${apiKey}`
  );

  const data: ChampionMastery[] = await response.json();

  const top3Ids = new Set(data.map((mastery) => mastery.championId));

  const championData = await getChampionData();

  // Get champion data with proper type casting
  const championsData = championData.data as Record<string, ChampionData>;

  // Extract champion information
  const top3Champions = Object.values(championsData).filter((champion) =>
    top3Ids.has(parseInt(champion.key))
  );

  const top3ChampionsWithMastery = data.map((mastery) => {
    const champion = top3Champions.find(
      (champion) => parseInt(champion.key) === mastery.championId
    );
    return {
      ...mastery,
      championName: champion?.name,
      championImage: champion
        ? `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${champion.image.full}`
        : undefined,
    };
  });

  return top3ChampionsWithMastery;
}
