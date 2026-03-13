"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M2 20h20M4 20V10l8-7 8 7v10" />
        <rect x="9" y="14" width="6" height="6" />
      </svg>
    ),
    title: "Temeljni radovi",
    description:
      "Iskopavanja, betoniranje i ojačavanje temelja za sve vrste stambenih i poslovnih objekata.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="2" y="3" width="20" height="14" rx="1" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 7h10M7 11h7" />
      </svg>
    ),
    title: "Konstruktivni radovi",
    description:
      "Izgradnja armiranobetonskih konstrukcija, nosivih zidova i međuspratnih ploča prema projektu.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
    title: "Krovne konstrukcije",
    description:
      "Montaža drvenih i čeličnih krovnih konstrukcija, pokrivanje i potpuna hidroizolacija.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="2" y="2" width="20" height="20" rx="1" />
        <path d="M2 8h20M8 8v14" />
      </svg>
    ),
    title: "Enterijeri i završni radovi",
    description:
      "Žbukanje, gletovanje, postavljanje keramike, parketa i svi unutrašnji završni radovi.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" />
        <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
      </svg>
    ),
    title: "Fasade i izolacija",
    description:
      "Termoizolacione fasade, dekorativne obloge, sistemi zaštite od vlage i toplotni omotač.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "Upravljanje projektima",
    description:
      "Kompletan nadzor, koordinacija izvođača i kontrola kvalitete svih faza građevinskog projekta.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-in");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="usluge" className="py-24 lg:py-32 bg-[#141414]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <p className="text-[#C8A96E] text-xs font-medium tracking-[0.4em] uppercase mb-5">
            Naše usluge
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white leading-tight">
            Kompletan spektar<br />
            građevinskih radova
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`fade-in delay-${Math.min(index * 100, 500)} bg-[#141414] p-8 lg:p-10 border border-white/5 hover:border-[#C8A96E]/40 group transition-colors duration-300 cursor-default`}
            >
              <div className="text-[#C8A96E] mb-6 group-hover:scale-110 transition-transform duration-300 w-fit">
                {service.icon}
              </div>
              <h3 className="text-white text-lg font-semibold mb-3 group-hover:text-[#C8A96E] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-stone-500 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
