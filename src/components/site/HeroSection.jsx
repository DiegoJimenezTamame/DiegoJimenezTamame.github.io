import React from 'react';
import { useLang } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function HeroSection({ scoreImage, waveImage }) {
  const { t } = useLang();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background border-b border-border">
      {/* Background grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-black/[0.03]" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-black/[0.05]" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-black/[0.03]" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-black/[0.03]" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-black/[0.03]" />
      </div>

      {/* Split images */}
      <div className="absolute inset-0 flex pointer-events-none">
        <div className="w-1/2 h-full relative overflow-hidden">
          <img src={scoreImage} alt="Music score detail" className="absolute inset-0 w-full h-full object-cover opacity-[0.05] grayscale" />
        </div>
        <div className="w-1/2 h-full relative overflow-hidden">
          <img src={waveImage} alt="Sound wave visualization" className="absolute inset-0 w-full h-full object-cover opacity-[0.05] grayscale" />
        </div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          {/* Left: Name + roles + tagline */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-foreground/25 mb-6">
              000 // INTERFACE
            </p>

            <h1 className="font-display font-bold text-foreground leading-[0.9] tracking-tight mb-8" style={{ fontSize: 'clamp(1.8rem, 5vw, 5rem)' }}>
              DIEGO<br />JIMÉNEZ<br />TAMAME
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mb-10">
              <button
                onClick={() => scrollTo('composer')}
                className="group flex items-center gap-3 text-left"
              >
                <span className="w-2 h-2 bg-foreground/40 group-hover:bg-foreground transition-colors" />
                <span className="font-mono text-xs tracking-[0.2em] text-foreground/50 group-hover:text-foreground transition-colors">
                  {t.hero.subtitle_composer}
                </span>
              </button>
              <button
                onClick={() => scrollTo('engraving')}
                className="group flex items-center gap-3 text-left"
              >
                <span className="w-2 h-2 bg-foreground/40 group-hover:bg-foreground transition-colors" />
                <span className="font-mono text-xs tracking-[0.2em] text-foreground/50 group-hover:text-foreground transition-colors">
                  {t.hero.subtitle_engraver}
                </span>
              </button>
            </div>

            <p className="font-mono text-[13px] leading-relaxed text-foreground/35 max-w-md">
              {t.hero.tagline}
            </p>
          </div>

          {/* Right: About bio */}
          <div className="border-l border-border pl-8 lg:pl-12">
            <p className="font-mono text-[10px] tracking-[0.3em] text-foreground/25 mb-6 uppercase">
              {t.about.section}
            </p>
            <div className="space-y-4">
              {t.about.bio.split('\n\n').slice(0, 3).map((paragraph, i) => (
                <p key={i} className="font-mono text-[12px] leading-[1.8] text-foreground/45">
                  {paragraph}
                </p>
              ))}
            </div>
            <button
              onClick={() => scrollTo('about')}
              className="mt-6 font-mono text-[11px] tracking-[0.15em] text-foreground/40 hover:text-foreground transition-colors"
            >
              READ MORE →
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-foreground/30 to-transparent" />
      </motion.div>
    </section>
  );
}