import React from 'react';
import { useLang } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function AboutSection({ composerImage }) {
  const { t } = useLang();

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <p className="font-mono text-[10px] tracking-[0.3em] text-white/25 mb-6">
          {t.about.section}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">
          {/* Image column */}
          <div className="lg:col-span-1">
            <div className="aspect-[3/4] overflow-hidden border border-white/[0.06] mb-3">
              <img
                src={composerImage}
                alt="Diego Jiménez Tamame — composer portrait"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <p className="font-mono text-[9px] tracking-[0.2em] text-white/15">
              FIG_02 // PORTRAIT
            </p>
          </div>

          {/* Bio column */}
          <div className="lg:col-span-2">
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl tracking-tight mb-10">
              {t.about.title}
            </h2>

            <div className="space-y-5">
              {t.about.bio.split('\n\n').map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="font-mono text-[13px] leading-[1.8] text-white/45"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Press */}
            <div className="mt-16 pt-10 border-t border-white/[0.06]">
              <p className="font-mono text-[10px] tracking-[0.3em] text-white/25 mb-6 uppercase">
                {t.about.press_title}
              </p>
              <div className="space-y-4">
                {t.about.press.map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                    <span className="font-mono text-[11px] text-white/30 shrink-0 w-auto sm:w-72">
                      {item.source}
                    </span>
                    <span className="font-mono text-[12px] text-white/50 flex-1">
                      {item.text}
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 ml-2 text-white/30 hover:text-white/60 transition-colors"
                        >
                          <ExternalLink size={10} />
                        </a>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}