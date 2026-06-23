import React, { useState } from 'react';
import { useLang } from '@/lib/i18n';
import { motion } from 'framer-motion';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

export default function ContactSection() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          _subject: `[Website] ${form.subject || 'Contact Form'} — ${form.name}`,
        }),
      });
      if (!res.ok) throw new Error('Submission failed');
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <p className="font-mono text-[10px] tracking-[0.3em] text-foreground/25 mb-6">
          {t.contact.section}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl tracking-tight mb-6">
              {t.contact.title}
            </h2>
            <p className="font-mono text-[13px] leading-relaxed text-foreground/40 mb-10">
              {t.contact.desc}
            </p>
            <div className="space-y-3 font-mono text-[12px] text-foreground/40">
              <p>EMAIL_ <a href="mailto:diego.jimenez.tamame@gmail.com" className="text-foreground/60 hover:text-foreground transition-colors">diego.jimenez.tamame@gmail.com</a></p>
              <p>LOCATION_ Graz, Austria</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="font-mono text-[10px] tracking-[0.2em] text-foreground/35 uppercase block mb-2">{t.contact.name}</label>
              <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-border focus:border-foreground/50 outline-none py-2 font-mono text-[13px] text-foreground/80 transition-colors" />
            </div>
            <div>
              <label className="font-mono text-[10px] tracking-[0.2em] text-foreground/35 uppercase block mb-2">{t.contact.email}</label>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-border focus:border-foreground/50 outline-none py-2 font-mono text-[13px] text-foreground/80 transition-colors" />
            </div>
            <div>
              <label className="font-mono text-[10px] tracking-[0.2em] text-foreground/35 uppercase block mb-2">{t.contact.subject}</label>
              <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-transparent border-b border-border focus:border-foreground/50 outline-none py-2 font-mono text-[13px] text-foreground/80 transition-colors appearance-none cursor-pointer">
                <option value="" className="bg-background">—</option>
                {t.contact.subjects.map((s) => (<option key={s} value={s} className="bg-background">{s}</option>))}
              </select>
            </div>
            <div>
              <label className="font-mono text-[10px] tracking-[0.2em] text-foreground/35 uppercase block mb-2">{t.contact.message}</label>
              <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-b border-border focus:border-foreground/50 outline-none py-2 font-mono text-[13px] text-foreground/80 transition-colors resize-none" />
            </div>
            {status === 'sent' ? (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono text-[11px] tracking-wider text-foreground/60">
                {t.contact.sent}
              </motion.p>
            ) : (
              <button type="submit" disabled={status === 'sending'}
                className="font-mono text-xs tracking-[0.15em] text-primary-foreground bg-primary px-6 py-3 hover:bg-primary/90 transition-colors disabled:opacity-50">
                {status === 'sending' ? t.contact.sending : t.contact.send}
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}