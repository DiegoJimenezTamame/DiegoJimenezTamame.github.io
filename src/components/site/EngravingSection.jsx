import React from 'react';
import { useLang } from '@/lib/i18n';
import { motion } from 'framer-motion';

const engravingProjects = [
  { client: 'Danny L Harle', project: 'Orchestra Arrangement', type: 'Arranging', year: '2023' },
  { client: 'Festival Grec Barcelona', project: 'Full Score Preparation', type: 'Engraving', year: '2023' },
  { client: 'Various Publishers', project: 'Contemporary Scores', type: 'Engraving & Parts', year: '2022–present' },
  { client: 'Independent Composers', project: 'Score Preparation', type: 'Engraving', year: 'Ongoing' },
  { client: 'Ensemble Commissions', project: 'Arrangements & Transcriptions', type: 'Arranging', year: 'Ongoing' },
];

export default function EngravingSection({ engravingImage }) {
  const { t } = useLang();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="engraving" className="relative py-24 sm:py-32 bg-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section header */}
        <p className="font-mono text-[10px] tracking-[0.3em] text-white/25 mb-6">
          {t.engraving.section}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          <div>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-8">
              {t.engraving.title}
            </h2>
            <p className="font-mono text-[13px] leading-relaxed text-white/40 mb-10">
              {t.engraving.desc}
            </p>

            {/* Services list */}
            <div className="space-y-3 mb-10">
              {t.engraving.services.map((service, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-mono text-[10px] text-white/20 mt-0.5 w-6 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-[13px] text-white/60">{service}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollTo('contact')}
              className="font-mono text-xs tracking-[0.15em] text-black bg-white px-6 py-3 hover:bg-white/90 transition-colors"
            >
              {t.engraving.cta}
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden border border-white/[0.06]">
              <img
                src={engravingImage}
                alt="Music engraving detail — pen on staff paper"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <p className="font-mono text-[9px] tracking-[0.2em] text-white/15 mt-3 text-right">
              FIG_01 // NOTATION DETAIL
            </p>
          </div>
        </div>

        {/* Projects ledger */}
        <div className="border-t border-white/[0.06] pt-12">
          <p className="font-mono text-[10px] tracking-[0.3em] text-white/25 mb-8">
            SELECTED CLIENTS & PROJECTS
          </p>

          {/* Table header */}
          <div className="hidden sm:grid grid-cols-4 gap-4 pb-3 border-b border-white/[0.08] mb-1">
            <span className="font-mono text-[10px] tracking-wider text-white/30 uppercase">{t.engraving.client}</span>
            <span className="font-mono text-[10px] tracking-wider text-white/30 uppercase">{t.engraving.project}</span>
            <span className="font-mono text-[10px] tracking-wider text-white/30 uppercase">{t.engraving.type}</span>
            <span className="font-mono text-[10px] tracking-wider text-white/30 uppercase text-right">{t.engraving.year}</span>
          </div>

          {/* Table rows */}
          {engravingProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid grid-cols-1 sm:grid-cols-4 gap-1 sm:gap-4 py-3 border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors group"
            >
              <span className="font-mono text-[13px] text-white/80 group-hover:text-white transition-colors">{project.client}</span>
              <span className="font-mono text-[13px] text-white/40">{project.project}</span>
              <span className="font-mono text-[11px] text-white/25 uppercase tracking-wider">{project.type}</span>
              <span className="font-mono text-[13px] text-white/25 sm:text-right">{project.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}