import React from 'react';
import { useLang } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function HeroSection({ scoreImage, waveImage }) {
  const { t } = useLang();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">
      {/* Background grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white/[0.03]" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-white/[0.05]" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-white/[0.03]" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-white/[0.03]" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-white/[0.03]" />
      </div>

      {/* Split images - very subtle background */}
      <div className="absolute inset-0 flex pointer-events-none">
        <div className="w-1/2 h-full relative overflow-hidden">
          <img src={scoreImage} alt="Music score detail" className="absolute inset-0 w-full h-full object-cover opacity-[0.07]" />
        </div>
        <div className="w-1/2 h-full relative overflow-hidden">
          <img src={waveImage} alt="Sound wave visualization" className="absolute inset-0 w-full h-full object-cover opacity-[0.07]" />
        </div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-white/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Index tag */}
          <p className="font-mono text-[10px] tracking-[0.3em] text-white/25 mb-8">
            000 // INTERFACE
          </p>

          {/* Name */}
          <h1 className="font-display font-bold text-white leading-[0.9] tracking-tight mb-8" style={{ fontSize: 'clamp(2.5rem, 8vw, 8rem)' }}>
            DIEGO<br />JIMÉNEZ<br />TAMAME
          </h1>

          {/* Split roles */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 mb-12">
            <button
              onClick={() => scrollTo('composer')}
              className="group flex items-center gap-3 text-left"
            >
              <span className="w-2 h-2 bg-white/40 group-hover:bg-white transition-colors" />
              <span className="font-mono text-sm tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">
                {t.hero.subtitle_composer}
              </span>
            </button>
            <button
              onClick={() => scrollTo('engraving')}
              className="group flex items-center gap-3 text-left"
            >
              <span className="w-2 h-2 bg-white/40 group-hover:bg-white transition-colors" />
              <span className="font-mono text-sm tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">
                {t.hero.subtitle_engraver}
              </span>
            </button>
          </div>

          {/* Tagline */}
          <p className="font-mono text-[13px] leading-relaxed text-white/35 max-w-xl">
            {t.hero.tagline}
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}