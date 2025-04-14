import { useState } from 'preact/hooks';
import type { ChampionMastery, ProcessedMatch } from '../utils/accountUtils';

type UserProfile = {
  puuid: string;
  gameName: string;
  tagLine: string;
  level: number;
  profilePicture: string;
  top3Masteries: (ChampionMastery & {
    championName?: string;
    championImage?: string;
  })[];
  matchHistory?: ProcessedMatch[];
};

export default function AccountForm() {
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
    data?: UserProfile;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: Event) {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/account', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      setFormStatus({
        success: data.success,
        message: data.message,
        data: data.data,
      });
    } catch (error) {
      setFormStatus({
        success: false,
        message: error instanceof Error ? error.message : 'An error occurred',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // If we have successfully fetched profile data, display the profile instead of the form
  if (formStatus.success && formStatus.data) {
    return <UserProfileDisplay profile={formStatus.data} />;
  }

  return (
    <div className="mt-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
        <div className="flex flex-col">
          <label className="text-zinc-300 font-medium mb-1">
            League Username:
            <input
              type="text"
              name="username"
              className="mt-1 w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white"
              required
            />
          </label>
        </div>

        <div className="flex flex-col">
          <label className="text-zinc-300 font-medium mb-1">
            Tag Line:
            <input
              type="text"
              name="tagLine"
              className="mt-1 w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white"
              required
              placeholder="e.g. NA1"
            />
          </label>
        </div>

        <button
          className={`mt-2 py-2 px-4 rounded-md transition-all duration-300 ${
            isSubmitting
              ? 'bg-zinc-700 text-zinc-400'
              : 'bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700'
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Searching...' : 'Find Profile'}
        </button>
      </form>

      {formStatus.message && !formStatus.success && (
        <div className="mt-4 p-3 rounded-md bg-zinc-800 border border-red-800 text-red-400 max-w-md mx-auto">
          <p>{formStatus.message}</p>
        </div>
      )}
    </div>
  );
}

function UserProfileDisplay({ profile }: { profile: UserProfile }) {
  return (
    <div className="mt-8 max-w-4xl mx-auto">
      {/* Banner/Header */}
      <div className="relative w-full h-64 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-t-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-center">
            <div className="flex-shrink-0">
              <img
                src={profile.profilePicture}
                alt="Profile Icon"
                className="h-24 w-24 rounded-full border-2 border-zinc-700"
              />
            </div>
            <div className="lg:ml-6">
              <h2 className="text-3xl font-bold text-white">
                {profile.gameName}
                <span className="text-zinc-400 text-xl ml-2">#{profile.tagLine}</span>
              </h2>
              <div className="mt-2 flex items-center">
                <div className="bg-zinc-800 text-zinc-300 border border-zinc-700 px-3 py-0.5 rounded-md text-sm font-medium">
                  Level {profile.level}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Champion Masteries */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-none p-6">
        <div className="border-t border-zinc-800 pt-4 mt-2">
          <h3 className="text-lg font-medium text-zinc-300 mb-4">Champion Mastery</h3>

          {profile.top3Masteries && profile.top3Masteries.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {profile.top3Masteries.map((mastery, index) => (
                <ChampionMasteryCard key={index} mastery={mastery} rank={index + 1} />
              ))}
            </div>
          ) : (
            <p className="text-zinc-500">No champion mastery data available.</p>
          )}
        </div>
      </div>

      {/* Match History */}
      <div className="bg-zinc-900 border border-zinc-800 border-t-0 rounded-b-lg p-6">
        <div className="border-t border-zinc-800 pt-4 mt-2">
          <h3 className="text-lg font-medium text-zinc-300 mb-4">Recent Matches</h3>

          {profile.matchHistory && profile.matchHistory.length > 0 ? (
            <div className="flex flex-col gap-4">
              {profile.matchHistory.map((match, index) => (
                <MatchHistoryCard key={match.matchId} match={match} />
              ))}
            </div>
          ) : (
            <p className="text-zinc-500">No match history data available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function ChampionMasteryCard({
  mastery,
  rank,
}: {
  mastery: ChampionMastery & { championName?: string; championImage?: string };
  rank: number;
}) {
  // Format champion points with commas
  const formattedPoints = mastery.championPoints.toLocaleString();

  // Convert last play time to readable date
  const lastPlayed = new Date(mastery.lastPlayTime).toLocaleDateString();

  // Calculate mastery percentage for progress bar
  const masteryPercentage = Math.min(
    (mastery.championPointsSinceLastLevel /
      (mastery.championPointsUntilNextLevel + mastery.championPointsSinceLastLevel)) *
      100,
    100
  );

  return (
    <div className="bg-zinc-800 border border-zinc-700 rounded-lg overflow-hidden flex flex-col">
      <div className="relative">
        {/* Champion background image */}
        <div className="w-full h-40 bg-zinc-800 overflow-hidden relative">
          <img
            src={
              mastery.championImage ||
              `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg`
            }
            alt={mastery.championName || `Champion ${mastery.championId}`}
            className="w-full h-full object-cover opacity-60"
            onError={(e) => {
              // If image fails to load, set a fallback
              const target = e.currentTarget as HTMLImageElement;
              target.src =
                'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg';
              target.className = 'w-full h-full object-cover opacity-40';
            }}
          />

          {/* Mastery level badge */}
          <div className="absolute bottom-2 right-2 bg-zinc-900/80 border border-zinc-700 rounded-full p-1 flex items-center justify-center w-14 h-14">
            <div className="text-center">
              <div className="text-amber-400 font-bold text-xl">{mastery.championLevel}</div>
              <div className="text-zinc-300 text-xs">Level</div>
            </div>
          </div>

          {/* Rank badge */}
          <div className="absolute top-2 left-2 bg-zinc-900/80 text-zinc-300 border border-zinc-700 px-2 py-0.5 rounded text-sm">
            #{rank}
          </div>

          {/* Tokens earned (if any) */}
          {mastery.tokensEarned > 0 && (
            <div className="absolute top-2 right-2 bg-zinc-900/80 text-amber-400 border border-amber-700 px-2 py-0.5 rounded text-sm">
              {mastery.tokensEarned} tokens
            </div>
          )}
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between">
          <div>
            <div className="text-white font-semibold">
              {mastery.championName || `Champion ${mastery.championId}`}
            </div>
            <div className="text-amber-400 font-medium">{formattedPoints} points</div>
          </div>
        </div>

        {/* Mastery progress bar */}
        {mastery.championLevel < 7 && (
          <div className="mt-3">
            <div className="flex justify-between text-xs text-zinc-400 mb-1">
              <span>Mastery Progress</span>
              <span>
                {mastery.championPointsSinceLastLevel} /{' '}
                {mastery.championPointsUntilNextLevel + mastery.championPointsSinceLastLevel}
              </span>
            </div>
            <div className="h-2 w-full bg-zinc-700 rounded-full overflow-hidden">
              <div className="h-full bg-amber-600" style={{ width: `${masteryPercentage}%` }}></div>
            </div>
          </div>
        )}

        <div className="text-zinc-400 text-xs mt-3">Last played: {lastPlayed}</div>
      </div>
    </div>
  );
}

function MatchHistoryCard({ match }: { match: ProcessedMatch }) {
  // Format game duration from seconds to minutes:seconds
  const formatGameDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  // Format date
  const formatGameDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };

  // Calculate KDA
  const kda = (
    (match.playerData.kills + match.playerData.assists) /
    (match.playerData.deaths || 1)
  ).toFixed(2);

  // Calculate CS per minute
  const totalCS = match.playerData.totalMinionsKilled + match.playerData.neutralMinionsKilled;
  const csPerMin = (totalCS / (match.gameDuration / 60)).toFixed(1);

  // Game result color
  const resultColor = match.playerData.win ? 'text-emerald-500' : 'text-red-500';
  const resultBg = match.playerData.win ? 'bg-emerald-900/20' : 'bg-red-900/20';
  const resultBorder = match.playerData.win ? 'border-emerald-800' : 'border-red-800';

  // Determine game mode display name
  const getGameModeName = (mode: string, queueId: number) => {
    if (mode === 'CLASSIC') {
      if (queueId === 420) return 'Ranked Solo';
      if (queueId === 440) return 'Ranked Flex';
      if (queueId === 400) return 'Normal Draft';
      if (queueId === 430) return 'Normal Blind';
    }
    if (mode === 'ARAM') return 'ARAM';
    if (mode === 'URF' || mode === 'ARURF') return 'URF';
    return mode;
  };

  return (
    <div className={`bg-zinc-800 border ${resultBorder} rounded-lg overflow-hidden`}>
      <div className="flex flex-col md:flex-row">
        {/* Game info section */}
        <div className={`p-4 ${resultBg} flex flex-col justify-center items-center md:w-1/5`}>
          <div className={`text-sm uppercase font-bold ${resultColor}`}>
            {match.playerData.win ? 'Victory' : 'Defeat'}
          </div>
          <div className="text-zinc-400 text-xs mt-1">
            {getGameModeName(match.gameMode, match.queueId)}
          </div>
          <div className="text-zinc-400 text-xs mt-1">{formatGameDuration(match.gameDuration)}</div>
          <div className="text-zinc-500 text-xs mt-1">{formatGameDate(match.gameCreation)}</div>
        </div>

        {/* Champion and stats section */}
        <div className="p-4 flex flex-1 flex-col md:flex-row">
          {/* Champion info */}
          <div className="flex items-center md:w-1/4">
            <div className="relative">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/15.7.1/img/champion/${match.playerData.championName}.png`}
                alt={match.playerData.championName}
                className="w-16 h-16 rounded-md border border-zinc-700"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.src =
                    'https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/default.png';
                  target.className = 'w-16 h-16 rounded-md border border-zinc-700 opacity-50';
                }}
              />
              <div className="absolute bottom-0 right-0 bg-zinc-900/80 text-xs text-white px-1 rounded-tl-sm border border-zinc-700">
                {match.playerData.champLevel}
              </div>
            </div>
            <div className="ml-3">
              <div className="text-white">{match.playerData.championName}</div>
              <div className="text-zinc-400 text-xs">{match.playerData.position}</div>
            </div>
          </div>

          {/* KDA stats */}
          <div className="mt-4 md:mt-0 md:ml-6 flex flex-col justify-center md:w-1/4">
            <div className="flex items-center">
              <span className="text-white">{match.playerData.kills}</span>
              <span className="text-zinc-600 mx-1">/</span>
              <span className="text-red-500">{match.playerData.deaths}</span>
              <span className="text-zinc-600 mx-1">/</span>
              <span className="text-blue-400">{match.playerData.assists}</span>
            </div>
            <div className="text-zinc-400 text-xs mt-1">
              <span className="text-amber-400">{kda}</span> KDA
            </div>
            <div className="text-zinc-400 text-xs mt-1">
              {totalCS} CS ({csPerMin}/min)
            </div>
          </div>

          {/* Items */}
          <div className="mt-4 md:mt-0 md:ml-auto flex flex-wrap gap-1 items-center justify-end">
            {match.playerData.items
              .filter((item) => item > 0)
              .map((itemId, idx) => (
                <div key={idx} className="relative">
                  <img
                    src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${itemId}.png`}
                    alt={`Item ${itemId}`}
                    className="w-8 h-8 rounded-sm border border-zinc-700"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.className = 'w-8 h-8 rounded-sm border border-zinc-700 bg-zinc-700';
                      target.src = '';
                    }}
                  />
                </div>
              ))}
            {match.playerData.items.filter((item) => item > 0).length === 0 && (
              <div className="text-zinc-500 text-xs">No items</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
