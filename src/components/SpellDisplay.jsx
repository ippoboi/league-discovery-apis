import { useState } from 'preact/hooks';

export default function SpellDisplay({ spells, passive }) {
  // Default to showing passive ability first
  const [activeSpell, setActiveSpell] = useState('passive');
  const [currentSpell, setCurrentSpell] = useState(passive);

  // Handle spell selection
  const handleSpellSelect = (spellType, spellData) => {
    setActiveSpell(spellType);
    setCurrentSpell(spellData);
  };

  // Get image URL for spell
  const getSpellImageUrl = (spell) => {
    if (spell === passive) {
      return `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/passive/${passive.image.full}`;
    } else {
      return `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/${spell.image.full}`;
    }
  };

  return (
    <div class="max-w-4xl mx-auto">
      <h2 class="text-xl font-medium mb-4">Champion Abilities</h2>

      {/* Spell selection buttons */}
      <div class="flex gap-2 mb-6 overflow-x-auto pb-2">
        <button
          onClick={() => handleSpellSelect('passive', passive)}
          class={`flex-shrink-0 border ${activeSpell === 'passive' ? 'border-white grayscale-0' : 'border-zinc-800 grayscale-75'} rounded-md transition-all duration-200 hover:grayscale-0`}
        >
          <img
            src={getSpellImageUrl(passive)}
            alt={passive.name}
            class="w-12 h-12 sm:w-14 sm:h-14 rounded-md"
          />
        </button>

        {spells.map((spell, index) => (
          <button
            key={spell.id}
            onClick={() => handleSpellSelect(`spell${index}`, spell)}
            class={`flex-shrink-0 border ${activeSpell === `spell${index}` ? 'border-white grayscale-0' : 'border-zinc-800 grayscale-75'} rounded-md transition-all duration-200 hover:grayscale-0`}
          >
            <img
              src={getSpellImageUrl(spell)}
              alt={spell.name}
              class="w-12 h-12 sm:w-14 sm:h-14 rounded-md"
            />
          </button>
        ))}
      </div>

      {/* Spell details */}
      <div class="bg-zinc-900/40 border border-zinc-800 rounded-lg mb-8">
        <div class="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6">
          <img
            src={getSpellImageUrl(currentSpell)}
            alt={currentSpell.name}
            class="w-14 h-14 sm:w-16 sm:h-16 rounded-md"
          />

          <div class="w-full">
            <div class="flex gap-2 items-baseline mb-2">
              <h3 class="text-xl font-bold break-words">{currentSpell.name}</h3>
              {activeSpell !== 'passive' && (
                <span class="text-zinc-400 text-sm">{currentSpell.id}</span>
              )}
            </div>
            <p class="text-zinc-400 font-thin mb-4 break-words">{currentSpell.description}</p>

            {/* Only show these fields for active spells, not passive */}
            {activeSpell !== 'passive' && (
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div class="flex gap-2">
                  <span class="text-zinc-500">Cooldown:</span>
                  <span class="text-zinc-300">
                    {Array.isArray(currentSpell.cooldown)
                      ? currentSpell.cooldown.join('/')
                      : currentSpell.cooldown}
                  </span>
                </div>
                <div class="flex gap-2">
                  <span class="text-zinc-500">Range:</span>
                  <span class="text-zinc-300">
                    {Array.isArray(currentSpell.range)
                      ? currentSpell.range.join('/')
                      : currentSpell.range}
                  </span>
                </div>
                <div class="flex gap-2">
                  <span class="text-zinc-500">Cost:</span>
                  <span class="text-zinc-300">{currentSpell.costBurn}</span>
                </div>
                <div class="flex gap-2">
                  <span class="text-zinc-500">Resource:</span>
                  <span class="text-zinc-300">{currentSpell.resource}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
