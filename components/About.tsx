"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const stats = [
  { value: "150+", label: "Projekata završeno" },
  { value: "10+", label: "Godina iskustva" },
  { value: "100%", label: "Zadovoljnih klijenata" },
];

function useFadeIn(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = ref.current?.querySelectorAll(".fade-in");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ref]);
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  useFadeIn(sectionRef);

  return (
    <section id="o-nama" className="py-24 lg:py-32 bg-[#F8F8F6]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left column */}
          <div className="fade-in">
            <p className="text-[#C8A96E] text-xs font-medium tracking-[0.4em] uppercase mb-5">
              O nama
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-8">
              Više od 10 godina iskustva u građevinarstvu
            </h2>
            <p className="text-stone-500 leading-relaxed mb-5 text-base">
              La Mont d.o.o. je pouzdana građevinska kompanija sa sjedištem u
              Bosni i Hercegovini. Specijalizovani smo za kompletan spektar
              građevinskih usluga — od pripreme temelja i konstruktivnih radova
              do završnih enterijera i fasada. Svaki projekat realizujemo uz
              maksimalnu posvećenost kvalitetu i dogovorenim rokovima.
            </p>
            <p className="text-stone-500 leading-relaxed mb-12 text-base">
              Naš tim iskusnih inženjera i majstora koristi najsavremeniju opremu
              i certificirane materijale kako bi osigurali da svaki objekat bude
              izgrađen prema najvišim standardima struke. Zadovoljstvo naših
              klijenata je naša mjera uspjeha.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-stone-200">
              {stats.map((stat, i) => (
                <div key={stat.label} className={`fade-in delay-${(i + 1) * 100}`}>
                  <div className="font-playfair text-3xl lg:text-4xl font-bold text-[#C8A96E] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-stone-500 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — image placeholder */}
          <div className="fade-in delay-200">
            <div className="relative">
              {/* Main image block */}
              <div className="w-full aspect-[4/5] relative overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/building/800/1000"
                  alt="La Mont građevinski tim na projektu"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Gold accent border offset */}
              <div className="absolute -bottom-5 -right-5 w-full h-full border-2 border-[#C8A96E] -z-10 pointer-events-none" />

              {/* Small gold badge */}
              <div className="absolute -top-4 -left-4 bg-[#C8A96E] text-white px-4 py-3">
                <div className="font-playfair text-2xl font-bold leading-none">10+</div>
                <div className="text-[10px] tracking-widest uppercase mt-0.5">godina</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
