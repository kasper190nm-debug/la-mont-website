"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const projects = [
  { label: "Stambena zgrada — Banja Luka",  seed: "crane"        },
  { label: "Poslovna vila — Trebinje",       seed: "architecture" },
  { label: "Renovacija fasade — Sarajevo",   seed: "facade"       },
  { label: "Industrijska hala — Tuzla",      seed: "concrete"     },
  { label: "Obiteljska kuća — Mostar",       seed: "villa"        },
  { label: "Krovne konstrukcije — Zenica",   seed: "roofing"      },
  { label: "Enterijeri — Banja Luka",        seed: "interior"     },
  { label: "Temelji — Bijeljina",            seed: "foundation"   },
];

// Heights alternate to create masonry feel
const heights = ["h-56", "h-72", "h-64", "h-80", "h-72", "h-56", "h-80", "h-64"];

export default function Gallery() {
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
    <section id="galerija" className="py-24 lg:py-32 bg-[#F8F8F6]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <p className="text-[#C8A96E] text-xs font-medium tracking-[0.4em] uppercase mb-5">
            Portfolio
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
            Naši projekti
          </h2>
        </div>

        {/* Masonry grid — CSS columns approach */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`fade-in delay-${Math.min(index * 100, 500)} relative group overflow-hidden mb-4 break-inside-avoid ${heights[index]}`}
            >
              {/* Project photo */}
              <Image
                src={`https://picsum.photos/seed/${project.seed}/800/600`}
                alt={project.label}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#C8A96E]/0 group-hover:bg-[#C8A96E]/85 transition-all duration-300 flex flex-col items-center justify-center gap-2 p-4">
                <svg
                  className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
                <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wide text-xs text-center">
                  Pogledaj projekat
                </span>
                <span className="text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] text-center tracking-wide uppercase">
                  {project.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 fade-in">
          <a
            href="#kontakt"
            className="inline-block border border-[#C8A96E] text-[#C8A96E] font-medium px-10 py-4 hover:bg-[#C8A96E] hover:text-white transition-colors tracking-wide text-sm"
          >
            Zatraži ponudu za vaš projekat
          </a>
        </div>
      </div>
    </section>
  );
}
