"use client";

import { useEffect, useRef, useState } from "react";

const contactInfo = [
  {
    label: "Adresa",
    value: "Banja Luka, Bosnia and Herzegovina",
    href: null,
  },
  {
    label: "Telefon",
    value: "+387 65 000 000",
    href: "tel:+38765000000",
  },
  {
    label: "Email",
    value: "info@lamont.ba",
    href: "mailto:info@lamont.ba",
  },
  {
    label: "Radno vrijeme",
    value: "Pon–Pet: 08:00–17:00\nSub: 09:00–13:00",
    href: null,
  },
];

const serviceOptions = [
  "Temeljni radovi",
  "Konstruktivni radovi",
  "Krovne konstrukcije",
  "Enterijeri",
  "Fasade",
  "Ostalo",
];

const inputClass =
  "w-full border border-stone-200 px-4 py-3 text-sm text-[#1A1A1A] placeholder-stone-400 focus:outline-none focus:border-[#C8A96E] transition-colors bg-white";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="bg-[#F8F8F6]" ref={sectionRef}>
      {/* Section header above the two-col block */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 text-center fade-in">
        <p className="text-[#C8A96E] text-xs font-medium tracking-[0.4em] uppercase mb-5">
          Kontakt
        </p>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
          Kontaktirajte nas
        </h2>
      </div>

      {/* Two-column block */}
      <div className="max-w-7xl mx-auto px-6 pb-0">
        <div className="grid md:grid-cols-2 border border-stone-200">
          {/* Left — dark info panel */}
          <div className="bg-[#141414] p-10 lg:p-14 fade-in">
            <p className="text-white font-semibold text-lg mb-8">
              Informacije
            </p>

            <div className="space-y-8">
              {contactInfo.map((item) => (
                <div key={item.label}>
                  <div className="text-[#C8A96E] text-[10px] tracking-[0.3em] uppercase mb-1.5">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-stone-300 hover:text-white transition-colors text-sm leading-relaxed"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-stone-300 text-sm leading-relaxed whitespace-pre-line">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-stone-500 text-sm leading-relaxed">
                Odgovaramo u roku od 24 sata na svaki upit.
                Besplatna procjena za sve projekte.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white p-10 lg:p-14 fade-in delay-200">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="w-16 h-16 border-2 border-[#C8A96E] flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-[#C8A96E]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-3">
                  Upit poslan!
                </h3>
                <p className="text-stone-500 text-sm">
                  Kontaktiraćemo vas u roku od 24 sata.
                </p>
              </div>
            ) : (
              <>
                <p className="text-[#1A1A1A] font-semibold text-lg mb-8">
                  Pošaljite upit
                </p>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-xs font-medium text-stone-500 tracking-wide mb-2 uppercase">
                      Ime i prezime *
                    </label>
                    <input
                      type="text"
                      required
                      className={inputClass}
                      placeholder="Vaše ime i prezime"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-500 tracking-wide mb-2 uppercase">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className={inputClass}
                        placeholder="vas@email.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-stone-500 tracking-wide mb-2 uppercase">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        className={inputClass}
                        placeholder="+387 ..."
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-500 tracking-wide mb-2 uppercase">
                      Vrsta radova
                    </label>
                    <select
                      className={inputClass}
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                    >
                      <option value="">Odaberite vrstu radova</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-500 tracking-wide mb-2 uppercase">
                      Poruka *
                    </label>
                    <textarea
                      rows={4}
                      required
                      className={`${inputClass} resize-none`}
                      placeholder="Opišite vaš projekat, lokaciju, željeni rok..."
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#C8A96E] text-white font-medium py-4 hover:bg-[#b8995e] transition-colors tracking-wide text-sm"
                  >
                    Pošalji upit
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
