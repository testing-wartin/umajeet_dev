"use client";

import { useEffect, useState } from "react";
import b3 from "@/assets/buildings3.jpg";
import b6 from "@/assets/buildings6.jpg";
import b7 from "@/assets/buildings7.jpg";
import b8 from "@/assets/buildings8.jpg";

const slides = [
  { title: "Build Dreams Into Reality", subtitle: "With trusted real estate solutions", image: b3 },
  { title: "Engineering Tomorrow's Skylines", subtitle: "End-to-end construction expertise", image: b6 },
  { title: "Crafted With Precision", subtitle: "Quality that stands the test of time", image: b7 },
  { title: "Your Vision, Our Foundation", subtitle: "Partner with industry leaders", image: b8 },
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="h-[700px] w-full relative overflow-hidden">
      <img
        src={slides[i].image.src}
        alt="Construction skyline"
        width={1920}
        height={700}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
      <div className="absolute bottom-0 left-0 w-full px-16 pb-12 md:pb-16">
        <div className="max-w-[900px]">
          <h1 className="text-[64px] md:text-[72px] font-black leading-[1.2] text-white">
            {slides[i].title}
          </h1>
          <p className="text-[24px] md:text-[32px] font-bold leading-[1.5] text-white mt-4">
            {slides[i].subtitle}
          </p>
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`rounded-full transition-all ${
                idx === i
                  ? "h-4 w-14 bg-white"
                  : "h-4 w-4 border-2 border-white bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
