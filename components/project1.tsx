"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CardData {
  title: string;
  desc: string;
  img: string;
}

const cards: CardData[] = [
  {
    title: "Sea & Rocks",
    desc: "A calm seascape",
    img: "https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Golden Forest",
    desc: "Sunlight through trees",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "City Sunset",
    desc: "Skyline in warm tones",
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Waves",
    desc: "Powerful coastal waves",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function CardsParallax() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const activeCard = cards[activeIndex];

  return (
    <div className="min-h-screen bg-[#0f1724] text-slate-100">
      <header className="py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Cards Parallax Demo</h1>
        <p className="opacity-80 mt-2 text-sm md:text-base">
          Features: sticky card area, on-scroll scaling, parallax, smooth scroll
        </p>
      </header>

      <main className="flex justify-center px-4 pb-48">
        <div className="w-full max-w-5xl">
          <section className="relative py-20">
            <div className="grid md:grid-cols-2 gap-7">
              {/* Sticky active card */}
              <div className="sticky top-7 h-[520px] flex items-center justify-center z-10">
                <motion.div
                  key={activeIndex}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-[520px] rounded-2xl overflow-hidden shadow-xl bg-white/5 backdrop-blur-md"
                >
                  <Image
                    src={activeCard.img}
                    alt={activeCard.title}
                    fill
                    className="object-cover scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-xl font-semibold">
                      {activeCard.title}
                    </h3>
                    <p className="text-sm opacity-90">{activeCard.desc}</p>
                  </div>
                </motion.div>
              </div>

              {/* Thumbnails list */}
              <div className="flex flex-col gap-4 md:gap-5 overflow-auto md:overflow-visible">
                {cards.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      document.getElementById("stickyCard")?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                      setActiveIndex(i);
                    }}
                    className={`relative w-full h-28 rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.03] focus:outline-none ${
                      activeIndex === i ? "ring-2 ring-sky-300" : ""
                    }`}
                  >
                    <Image
                      src={c.img}
                      alt={c.title}
                      fill
                      className="object-cover brightness-90"
                    />
                    <div className="absolute bottom-2 left-2 text-white font-semibold drop-shadow">
                      {c.title}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>
          <div className="h-[900px]" /> {/* spacer for scrolling */}
        </div>
      </main>
    </div>
  );
}
