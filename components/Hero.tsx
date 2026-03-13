"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      contentRef.current?.classList.add("visible");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background photo — construction site aerial */}
      <Image
        src="https://picsum.photos/seed/construction/1920/1080"
        alt="Građevinski projekat La Mont"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C8A96E]" />

      {/* Content */}
      <div
        ref={contentRef}
        className="fade-in relative z-10 text-center text-white max-w-5xl mx-auto px-6"
      >
        <p className="text-[#C8A96E] text-xs font-medium tracking-[0.4em] uppercase mb-8">
          La Mont d.o.o. — Banja Luka, BiH
        </p>

        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
          Gradimo vašu viziju —<br />
          <span className="text-[#C8A96E]">od temelja do krova</span>
        </h1>

        <p className="text-lg md:text-xl text-stone-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          La Mont d.o.o. pruža kompletne građevinske usluge najvišeg kvaliteta.
          Pouzdanost, preciznost i stručnost na svakom projektu.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#kontakt"
            className="bg-[#C8A96E] text-white font-medium px-8 py-4 hover:bg-[#b8995e] transition-colors tracking-wide text-sm"
          >
            Zatraži besplatnu procjenu
          </a>
          <a
            href="#galerija"
            className="border border-white/60 text-white font-medium px-8 py-4 hover:bg-white/10 hover:border-white transition-colors tracking-wide text-sm"
          >
            Pogledaj projekte
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-[10px] tracking-[0.3em] uppercase">Skrolaj</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
