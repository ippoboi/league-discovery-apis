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

export async function getAccountMatchHistory(puuid: string, count: number = 10) {
  console.log(puuid);
  const response = await fetch(
    `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=${count}&api_key=${apiKey}`
  );

  const data = await response.json();
  console.log(data);
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

export async function getMatchDetails(matchId: string) {
  const response = await fetch(
    `https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${apiKey}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch match details: ${response.statusText}`);
  }

  return await response.json();
}

// Match data types
export type MatchMetadata = {
  dataVersion: string;
  matchId: string;
  participants: string[]; // Array of puuids
};

export type MatchInfo = {
  endOfGameResult: string;
  gameCreation: number;
  gameDuration: number;
  gameEndTimestamp: number;
  gameId: number;
  gameMode: string;
  gameName: string;
  gameStartTimestamp: number;
  gameType: string;
  gameVersion: string;
  mapId: number;
  participants: MatchParticipant[];
  platformId: string;
  queueId: number;
  teams: MatchTeam[];
  tournamentCode: string;
};

export type MatchParticipant = {
  puuid: string;
  championId: number;
  championName: string;
  kills: number;
  deaths: number;
  assists: number;
  win: boolean;
  teamPosition?: string;
  lane?: string;
  champLevel: number;
  totalMinionsKilled: number;
  neutralMinionsKilled: number;
  goldEarned: number;
  visionScore: number;
  summoner1Id: number;
  summoner2Id: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  totalDamageDealtToChampions: number;
  challenges?: Record<string, number>;
};

export type MatchTeam = {
  teamId: number;
  win: boolean;
  bans: any[];
  objectives: any;
};

export type MatchData = {
  metadata: MatchMetadata;
  info: MatchInfo;
};

export type ProcessedMatch = {
  matchId: string;
  gameCreation: number;
  gameDuration: number;
  gameMode: string;
  queueId: number;
  playerData: {
    championId: number;
    championName: string;
    kills: number;
    deaths: number;
    assists: number;
    win: boolean;
    position: string;
    champLevel: number;
    totalMinionsKilled: number;
    neutralMinionsKilled: number;
    goldEarned: number;
    visionScore: number;
    totalDamageDealtToChampions: number;
    summoner1Id: number;
    summoner2Id: number;
    items: number[];
  };
  teams: {
    teamId: number;
    win: boolean;
    bans: any[];
  }[];
};

export async function getMatchesWithDetails(
  puuid: string,
  count: number = 10
): Promise<ProcessedMatch[]> {
  const matchIds = await getAccountMatchHistory(puuid, count);
  console.log('match ids', matchIds);

  // Fetch match details for each match ID
  const matchDetailsPromises = matchIds.map((matchId: string) => getMatchDetails(matchId));

  // Wait for all promises to resolve
  const matchesData = await Promise.all(matchDetailsPromises);
  console.log('matches data', matchesData);

  // Process match data to extract relevant information
  const processedMatches = matchesData
    .map((match: MatchData) => {
      // Find the participant that matches the puuid
      const participant = match.info.participants.find((p) => p.puuid === puuid);

      if (!participant) {
        console.warn(
          `Participant with puuid ${puuid} not found in match ${match.metadata.matchId}`
        );
        return null;
      }

      return {
        matchId: match.metadata.matchId,
        gameCreation: match.info.gameCreation,
        gameDuration: match.info.gameDuration,
        gameMode: match.info.gameMode,
        queueId: match.info.queueId,
        playerData: {
          championId: participant.championId,
          championName: participant.championName,
          kills: participant.kills,
          deaths: participant.deaths,
          assists: participant.assists,
          win: participant.win,
          position: participant.teamPosition || participant.lane || 'UNKNOWN',
          champLevel: participant.champLevel,
          totalMinionsKilled: participant.totalMinionsKilled,
          neutralMinionsKilled: participant.neutralMinionsKilled,
          goldEarned: participant.goldEarned,
          visionScore: participant.visionScore,
          totalDamageDealtToChampions: participant.totalDamageDealtToChampions,
          summoner1Id: participant.summoner1Id,
          summoner2Id: participant.summoner2Id,
          items: [
            participant.item0,
            participant.item1,
            participant.item2,
            participant.item3,
            participant.item4,
            participant.item5,
            participant.item6,
          ],
        },
        teams: match.info.teams.map((team) => ({
          teamId: team.teamId,
          win: team.win,
          bans: team.bans,
        })),
      };
    })
    .filter((match): match is ProcessedMatch => match !== null);

  return processedMatches;
}
