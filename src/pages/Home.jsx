import React from 'react';
import { LangProvider } from '@/lib/i18n';
import Navigation from '@/components/site/Navigation';
import HeroSection from '@/components/site/HeroSection';
import EngravingSection from '@/components/site/EngravingSection';
import ComposerSection from '@/components/site/ComposerSection';
import AboutSection from '@/components/site/AboutSection';
import ContactSection from '@/components/site/ContactSection';
import FooterSection from '@/components/site/FooterSection';

const IMAGES = {
  score: 'https://media.base44.com/images/public/6a3a552e1ed6a9c0b58f27f5/16ad7e7e3_generated_d8b54630.png',
  wave: 'https://media.base44.com/images/public/6a3a552e1ed6a9c0b58f27f5/c63ce6b9b_generated_e2b47b4d.png',
  composer: 'https://media.base44.com/images/public/6a3a552e1ed6a9c0b58f27f5/77032a509_generated_9990729a.png',
  engraving: 'https://media.base44.com/images/public/6a3a552e1ed6a9c0b58f27f5/0f03431ce_generated_d77f4014.png',
};

export default function Home() {
  return (
    <LangProvider>
      <div className="bg-background min-h-screen">
        <Navigation />
        <HeroSection scoreImage={IMAGES.score} waveImage={IMAGES.wave} />
        <ComposerSection />
        <EngravingSection engravingImage={IMAGES.engraving} />
        <AboutSection composerImage={IMAGES.composer} />
        <ContactSection />
        <FooterSection />
      </div>
    </LangProvider>
  );
}