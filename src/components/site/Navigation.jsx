import React, { useState, useEffect } from 'react';
import { useLang } from '@/lib/i18n';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const langs = ['EN', 'ES', 'DE'];
  const langMap = { EN: 'en', ES: 'es', DE: 'de' };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <button onClick={() => scrollTo('hero')} className="font-mono text-xs tracking-widest text-white hover:text-white/70 transition-colors">
            DJT_
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('engraving')} className="font-mono text-[11px] tracking-wider text-white/60 hover:text-white transition-colors uppercase">
              {t.nav.engraver}
            </button>
            <button onClick={() => scrollTo('composer')} className="font-mono text-[11px] tracking-wider text-white/60 hover:text-white transition-colors uppercase">
              {t.nav.composer}
            </button>
            <button onClick={() => scrollTo('about')} className="font-mono text-[11px] tracking-wider text-white/60 hover:text-white transition-colors uppercase">
              {t.nav.about}
            </button>
            <button onClick={() => scrollTo('contact')} className="font-mono text-[11px] tracking-wider text-white/60 hover:text-white transition-colors uppercase">
              {t.nav.contact}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center border-l border-white/10 pl-6 ml-2">
              {langs.map((l, i) => (
                <React.Fragment key={l}>
                  <button
                    onClick={() => setLang(langMap[l])}
                    className={`font-mono text-[11px] tracking-wider transition-colors ${lang === langMap[l] ? 'text-white' : 'text-white/30 hover:text-white/60'}`}
                  >
                    {l}
                  </button>
                  {i < langs.length - 1 && <span className="text-white/15 mx-2 font-mono text-[11px]">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white p-1">
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            <button onClick={() => scrollTo('engraving')} className="block w-full text-left font-mono text-xs tracking-wider text-white/60 hover:text-white uppercase">
              {t.nav.engraver}
            </button>
            <button onClick={() => scrollTo('composer')} className="block w-full text-left font-mono text-xs tracking-wider text-white/60 hover:text-white uppercase">
              {t.nav.composer}
            </button>
            <button onClick={() => scrollTo('about')} className="block w-full text-left font-mono text-xs tracking-wider text-white/60 hover:text-white uppercase">
              {t.nav.about}
            </button>
            <button onClick={() => scrollTo('contact')} className="block w-full text-left font-mono text-xs tracking-wider text-white/60 hover:text-white uppercase">
              {t.nav.contact}
            </button>
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              {langs.map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(langMap[l]); setMobileOpen(false); }}
                  className={`font-mono text-xs tracking-wider ${lang === langMap[l] ? 'text-white' : 'text-white/30'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}