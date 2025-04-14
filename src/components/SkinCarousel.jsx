import { useState } from 'preact/hooks';

export default function SkinCarousel({ skins, champion }) {
  const [currentSkin, setCurrentSkin] = useState(skins[0]);
  return (
    <div>
      <div class="relative">
        <img
          src={currentSkin.splash}
          alt={currentSkin.name}
          width={4000}
          height={2250}
          class="block w-full h-auto object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/50 to-transparent"></div>

        <div class="absolute bottom-20 left-0 right-0 flex flex-col flex-start gap-2 overflow-hidden max-w-4xl mx-auto">
          <div class="flex gap-2 items-baseline">
            <h1 class="text-xl font-bold">{champion.name}</h1>
            <p class="text-zinc-300">{champion.title}</p>
          </div>
          <div class="max-w-4xl mx-auto flex gap-2 items-end overflow-x-auto no-scrollbar">
            {skins.map((skin) => (
              <div
                class={`flex gap-2 rounded-md hover:grayscale-0 border border-transparent transition-all duration-300 items-baseline ${currentSkin.name === skin.name ? 'grayscale-0 border-white' : 'grayscale-75'}`}
              >
                <img
                  src={skin.splash}
                  alt={skin.name}
                  width={100}
                  height={100}
                  class="rounded-md min-w-[150px] max-h-[100px] object-cover"
                  onClick={() => setCurrentSkin(skin)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
