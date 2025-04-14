import { useState } from 'preact/hooks';

export default function SkinCarousel({ skins, champion }) {
  const [currentSkin, setCurrentSkin] = useState(skins[0]);
  return (
    <div>
      <div class="relative mb-4">
        <img
          src={currentSkin.splash}
          alt={currentSkin.name}
          width={2440}
          height={1373}
          class="block w-full h-auto object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/50 to-transparent"></div>

        <div class="absolute bottom-28 left-10 flex gap-2 items-baseline">
          <h1 class="text-xl font-bold">{champion.name}</h1>
          <p class="text-zinc-300">{champion.title}</p>
        </div>
        <div class="absolute bottom-10 mx-auto flex gap-2 items-end overflow-x-auto w-full px-10 no-scrollbar">
          {skins.map((skin) => (
            <div
              class={`flex gap-2 rounded-md hover:grayscale-0 border border-transparent transition-all duration-300 items-baseline ${currentSkin.name === skin.name ? 'grayscale-0 border-white' : 'grayscale-75'}`}
            >
              <img
                src={skin.splash}
                alt={skin.name}
                width={100}
                height={100}
                class="rounded-md  min-w-[100px]"
                onClick={() => setCurrentSkin(skin)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
