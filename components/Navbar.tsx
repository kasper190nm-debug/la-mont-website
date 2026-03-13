"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "O nama", href: "#o-nama" },
  { label: "Usluge", href: "#usluge" },
  { label: "Galerija", href: "#galerija" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-xl" : ""
      }`}
    >
      {/* Top bar */}
      <div className="bg-[#141414] text-white text-xs py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-stone-400 tracking-wide">
            Besplatna procjena&nbsp;&nbsp;|&nbsp;&nbsp;Pozovite nas
          </span>
          <div className="hidden sm:flex gap-6 text-stone-300">
            <a
              href="tel:+38765000000"
              className="hover:text-[#C8A96E] transition-colors"
            >
              +387 65 000 000
            </a>
            <span className="text-stone-600">|</span>
            <a
              href="mailto:info@lamont.ba"
              className="hover:text-[#C8A96E] transition-colors"
            >
              info@lamont.ba
            </a>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold tracking-[0.2em] text-[#141414] font-playfair select-none"
          >
            LA MONT
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#1A1A1A] hover:text-[#C8A96E] transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="bg-[#C8A96E] text-white text-sm font-medium px-6 py-2.5 hover:bg-[#b8995e] transition-colors tracking-wide"
            >
              Zatraži ponudu
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#141414] transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#141414] transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#141414] transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col border-t border-stone-100 px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#1A1A1A] hover:text-[#C8A96E] transition-colors py-3 border-b border-stone-50"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="mt-3 bg-[#C8A96E] text-white text-sm font-medium px-6 py-3 text-center hover:bg-[#b8995e] transition-colors tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              Zatraži ponudu
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
