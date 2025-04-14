import { useState } from 'preact/hooks';

export default function SkinCarousel({ skins }) {
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
      </div>
      <div class="flex gap-2 items-end">
        {skins.map((skin) => (
          <div
            class={`flex gap-2 hover:scale-105 rounded-md items-baseline ${currentSkin.name === skin.name ? 'border scale-105 transition-all duration-300 border-white' : ''}`}
          >
            <img
              src={skin.splash}
              alt={skin.name}
              width={100}
              height={100}
              class="rounded-md"
              onClick={() => setCurrentSkin(skin)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
