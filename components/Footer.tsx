const navLinks = [
  { label: "O nama", href: "#o-nama" },
  { label: "Usluge", href: "#usluge" },
  { label: "Galerija", href: "#galerija" },
  { label: "Kontakt", href: "#kontakt" },
];

const FacebookIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socialLinks = [
  { icon: <FacebookIcon />, href: "#", label: "Facebook" },
  { icon: <InstagramIcon />, href: "#", label: "Instagram" },
  { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-[#141414] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Logo + tagline */}
          <div>
            <div className="font-playfair text-2xl font-bold tracking-[0.2em] mb-3">
              LA MONT
            </div>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
              Gradimo vašu viziju od temelja do krova. Pouzdanost i kvalitet na svakom projektu.
            </p>
          </div>

          {/* Nav links */}
          <nav className="md:text-center">
            <p className="text-stone-400 text-[10px] tracking-[0.3em] uppercase mb-5">
              Navigacija
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-stone-400 text-sm hover:text-[#C8A96E] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + Social */}
          <div className="md:text-right">
            <p className="text-stone-400 text-[10px] tracking-[0.3em] uppercase mb-5">
              Kontakt
            </p>
            <div className="space-y-2 text-stone-400 text-sm mb-8">
              <p>Banja Luka, Bosnia and Herzegovina</p>
              <a
                href="tel:+38765000000"
                className="block hover:text-[#C8A96E] transition-colors"
              >
                +387 65 000 000
              </a>
              <a
                href="mailto:info@lamont.ba"
                className="block hover:text-[#C8A96E] transition-colors"
              >
                info@lamont.ba
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 md:justify-end">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 border border-white/15 flex items-center justify-center text-stone-500 hover:border-[#C8A96E] hover:text-[#C8A96E] transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-stone-600 text-xs">
            © 2025 La Mont d.o.o. Sva prava zadržana.
          </p>
          <p className="text-stone-700 text-xs">
            Banja Luka, Bosnia and Herzegovina
          </p>
        </div>
      </div>
    </footer>
  );
}
