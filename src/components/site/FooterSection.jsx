import React from 'react';
import { useLang } from '@/lib/i18n';

export default function FooterSection() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <p className="font-display font-bold text-foreground text-xl tracking-tight mb-3">
              DIEGO JIMÉNEZ TAMAME
            </p>
            <p className="font-mono text-[11px] text-foreground/30 leading-relaxed max-w-sm">
              {t.hero.tagline}
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-foreground/20 uppercase mb-4">SITEMAP_</p>
            <div className="space-y-2">
              {['composer', 'engraving', 'about', 'contact'].map((id) => (
                <button key={id} onClick={() => scrollTo(id)}
                  className="block font-mono text-[11px] text-foreground/40 hover:text-foreground/70 transition-colors capitalize">
                  {t.nav[id === 'engraving' ? 'engraver' : id]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-foreground/20 uppercase mb-4">LINKS_</p>
            <div className="space-y-2">
              <a href="https://www.youtube.com/channel/UC7gvIlph1ClFRMz-wQ0sqSw" target="_blank" rel="noopener noreferrer"
                className="block font-mono text-[11px] text-foreground/40 hover:text-foreground/70 transition-colors">YouTube</a>
              <a href="mailto:diego.jimenez.tamame@gmail.com"
                className="block font-mono text-[11px] text-foreground/40 hover:text-foreground/70 transition-colors">Email</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.2em] text-foreground/25">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
              {t.footer.status}
            </span>
            <span className="font-mono text-[9px] text-foreground/20">{t.footer.location}</span>
          </div>
          <p className="font-mono text-[9px] text-foreground/20">© {year} Diego Jiménez Tamame</p>
        </div>
      </div>
    </footer>
  );
}