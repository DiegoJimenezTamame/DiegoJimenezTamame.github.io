import React, { useState } from 'react';
import { useLang } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';

const works = [
  {
    title: 'Vaporwave, deadly lasers and crab raves',
    year: '2022',
    instrumentation: 'ALESIS Wireless Vortex 2, Live Electronics (Ableton Live) & Live Video (Max/MSP—Jitter)',
    detail: 'Written for María Domínguez Pérez. Supported by SKE Kompositionsförderung.',
    premiere: 'Xornadas de Música Contemporánea, CGAC, Santiago de Compostela',
    videoId: '7eWrGPJ1Cjw',
    type: 'video'
  },
  {
    title: 'Glacial Chasm: Three Visions of Ice',
    year: '2021',
    instrumentation: 'Sheng, Accordion, Violin, Viola & Violoncello',
    detail: 'Written for Ensemble Linea. Académie Voix Nouvelles, Fondation Royaumont.',
    premiere: 'Fondation Royaumont, France',
    videoId: 'c1wHX6cCBl4',
    type: 'video'
  },
  {
    title: 'L.H.O.H.Q.',
    year: '2020/21',
    instrumentation: 'Ensemble, Live Video & Live Electronics (Max/MSP + Ableton Live 11)',
    detail: 'Pulso Ensemble. EWI USB, Novation Launchpad X, MIDI Keyboard, Amplified Violin.',
    premiere: 'RESIS Festival',
    videoId: '7GnYqJtptDY',
    type: 'video'
  },
  {
    title: 'Thin Film Interference',
    year: '2019/20',
    instrumentation: 'Ensemble (10 players) & Live Electronics (Max/MSP, Ableton Live 10)',
    detail: 'Commissioned by Schallfeld Ensemble, funded by SKE Fonds.',
    premiere: 'Theater Im Palais, Kunstuniversität Graz',
    videoId: '3TxmW7aKhJs',
    type: 'video'
  },
  {
    title: 'Rückstoß/Rückschlag',
    year: '2019',
    instrumentation: 'Solo Spring Drum',
    detail: 'Written for/performed by Manuel Alcaraz Clemente.',
    premiere: 'Graz',
    videoId: '7yDIGW1jU5A',
    type: 'video'
  },
  {
    title: "…and they've got us in their cage, ruined of grace and senses…",
    year: '2016/17',
    instrumentation: 'Bass Clarinet & Violoncello',
    detail: 'After a text by C. Bukowski. Written for Ensemble BCN 216.',
    premiere: 'MUMUTH, Kunstuniversität Graz',
    videoId: '09Y5yVM5EGI',
    type: 'video'
  },
  {
    title: '[to be enveloped by] BLACK — Talking to Aldo Tambellini',
    year: '2018/19',
    instrumentation: 'Bass Flute, Bass Clarinet, Percussion, Piano, Violoncello & Contrabass',
    detail: 'Collaboration with Radio France, "Création Mondiale" Program. Five short pieces on poems and paintings by Aldo Tambellini.',
    premiere: 'Broadcast on Radio France, May–June 2019',
    type: 'audio'
  },
  {
    title: 'IMPACT / TREMORS / SHIFTING',
    year: '2017/18',
    instrumentation: 'Symphony Orchestra: 3.3.3.3. — 6.3.3.2. — 2 Perc., Timp. — 8.8.6.6.6.',
    detail: 'Written for the Orchestre Philharmonique de Radio France and Ulysses Ensemble. Conducted by Peter Rundel.',
    premiere: 'IRCAM ManiFeste Academy, Centquatre Paris',
    type: 'audio'
  },
  {
    title: '…in jeder Hinsicht indirekt…',
    year: '2017/18',
    instrumentation: 'Baritone Saxophone, Percussion, Piano, Double Bass & Live Electronics',
    detail: 'IMPULS Kompositionsauftrag, Text im Klang #3. Ensemble Schallfeld.',
    premiere: 'Großer Minoritensaal, Graz',
    type: 'audio'
  },
  {
    title: 'Trilogue',
    year: '2016/17',
    instrumentation: 'Multimedia Performance: Choreography, Live Electronics (Myo Armband) & Live Video 3D Mapping (Xbox Kinect)',
    detail: 'Trilogue Collective — Ursula Graber (choreography), Pol Monsó (video).',
    premiere: 'Ligetisaal, MUMUTH, Kunstuniversität Graz',
    videoId: 'Gb6J0_90GMg',
    type: 'video'
  },
];

export default function ComposerSection() {
  const { t } = useLang();
  const [expandedWork, setExpandedWork] = useState(null);

  return (
    <section id="composer" className="relative py-24 sm:py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <p className="font-mono text-[10px] tracking-[0.3em] text-foreground/25 mb-6">
          {t.composer.section}
        </p>

        <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6">
          {t.composer.title}
        </h2>
        <p className="font-mono text-[13px] leading-relaxed text-foreground/40 max-w-2xl mb-16">
          {t.composer.desc}
        </p>

        <div className="space-y-0">
          {works.map((work, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="border-t border-border group"
            >
              <button
                onClick={() => setExpandedWork(expandedWork === i ? null : i)}
                className="w-full text-left py-5 sm:py-6 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6"
              >
                <span className="font-mono text-[10px] text-foreground/30 shrink-0 w-16">
                  {work.year}
                </span>
                <span className="font-display text-base sm:text-lg text-foreground/70 group-hover:text-foreground transition-colors flex-1">
                  {work.title}
                </span>
                <span className="font-mono text-[10px] tracking-wider text-foreground/30 uppercase shrink-0">
                  {work.type === 'video' ? t.composer.watch : t.composer.listen}
                </span>
              </button>

              {expandedWork === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pb-8 pl-0 sm:pl-[88px]"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div>
                        <p className="font-mono text-[10px] tracking-wider text-foreground/30 uppercase mb-1">Instrumentation</p>
                        <p className="font-mono text-[12px] text-foreground/50 leading-relaxed">{work.instrumentation}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] tracking-wider text-foreground/30 uppercase mb-1">Details</p>
                        <p className="font-mono text-[12px] text-foreground/50 leading-relaxed">{work.detail}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] tracking-wider text-foreground/30 uppercase mb-1">Premiere</p>
                        <p className="font-mono text-[12px] text-foreground/50">{work.premiere}</p>
                      </div>
                      {work.videoId && (
                        <a
                          href={`https://www.youtube.com/watch?v=${work.videoId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-foreground/60 hover:text-foreground transition-colors mt-2"
                        >
                          <Play size={12} />
                          {work.type === 'video' ? 'WATCH ON YOUTUBE' : 'LISTEN'} <ExternalLink size={10} />
                        </a>
                      )}
                    </div>

                    {work.videoId && (
                      <div className="aspect-video bg-muted border border-border overflow-hidden">
                        <iframe
                          src={`https://www.youtube.com/embed/${work.videoId}`}
                          title={work.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}