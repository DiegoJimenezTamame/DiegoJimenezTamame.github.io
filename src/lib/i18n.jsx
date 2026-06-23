import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    nav: { composer: 'Composer', engraver: 'Engraver', about: 'About', contact: 'Contact' },
    hero: {
      title: 'DIEGO JIMÉNEZ TAMAME',
      subtitle_composer: 'COMPOSER',
      subtitle_engraver: 'ENGRAVER // ARRANGER',
      tagline: 'Contemporary music composition, professional music engraving and arranging services — based in Graz, Austria.'
    },
    engraving: {
      section: 'SECTION_02 // ENGRAVER & ARRANGER',
      title: 'Music Engraving & Arranging',
      desc: 'Professional music engraving, score preparation, and arranging services for composers, ensembles, publishers, and recording sessions. High-quality, publication-ready scores using industry-standard notation software. Available for international commissions.',
      services: [
        'Full score engraving & typesetting',
        'Part extraction & formatting',
        'Orchestral & chamber music arranging',
        'Transcription from manuscript or audio',
        'Score proofreading & editing',
        'Format conversion & digital archiving'
      ],
      cta: 'REQUEST A QUOTE →',
      client: 'CLIENT',
      project: 'PROJECT',
      type: 'TYPE',
      year: 'YEAR'
    },
    composer: {
      section: 'SECTION_01 // COMPOSER',
      title: 'Compositions',
      desc: 'Selected works for ensemble, electronics, and multimedia. Contemporary music exploring the boundaries between acoustic and digital sound, technology and performance.',
      watch: 'WATCH',
      listen: 'LISTEN'
    },
    about: {
      section: 'SECTION_03 // ABOUT',
      title: 'About',
      bio: `Diego Jiménez Tamame (b. 1994, Spain) is a composer, music engraver and arranger based in Graz, Austria. His work explores the intersection of acoustic instruments, live electronics, multimedia, and the cultural artifacts of digital communication.

He studied composition at the Kunstuniversität Graz with Beat Furrer and Clemens Gadenstätter, and has participated in programs at IRCAM (ManiFeste Academy, Paris), Fondation Royaumont (Voix Nouvelles), and impuls Academy Graz.

His music has been performed by ensembles including Ensemble Linea, Schallfeld Ensemble, Pulso Ensemble, and the Orchestre Philharmonique de Radio France under conductors such as Peter Rundel. His work has been broadcast on Radio France ("Création Mondiale" with Anne Montaron) and ORF.

He has received commissions and support from Schallfeld Ensemble, IRCAM, Fondation Royaumont, impuls, SKE Fonds, and the Stadt Graz.

Alongside his compositional work, Diego works professionally as a music engraver and arranger, preparing scores and parts for composers, publishers, and ensembles internationally.`,
      press_title: 'Press & Broadcasts',
      press: [
        { source: 'Radio France — Création Mondiale', text: 'Portrait of the composer and integral broadcast of "[to be enveloped by] BLACK"', link: 'https://www.francemusique.fr/emissions/creation-mondiale-l-integrale/be-enveloped-black-de-diego-jimenez-tamame-diffusion-integrale-et-portrait-du-compositeur-72438' },
        { source: 'ORF', text: 'Recording broadcast of "Thin Film Interference" with Schallfeld Ensemble' }
      ]
    },
    contact: {
      section: 'SECTION_04 // CONTACT',
      title: 'Get in Touch',
      desc: 'For composition commissions, engraving & arranging inquiries, or any other questions.',
      name: 'NAME_',
      email: 'EMAIL_',
      subject: 'SUBJECT_',
      message: 'MESSAGE_',
      subjects: ['Engraving / Arranging Quote', 'Composition Commission', 'General Inquiry'],
      send: 'TRANSMIT →',
      sent: 'MESSAGE SENT. I WILL RESPOND SHORTLY.',
      sending: 'TRANSMITTING...'
    },
    footer: {
      rights: '© 2024 Diego Jiménez Tamame. All rights reserved.',
      location: 'Graz, Austria',
      status: 'SYSTEM ONLINE'
    }
  },
  es: {
    nav: { composer: 'Compositor', engraver: 'Grabador', about: 'Sobre mí', contact: 'Contacto' },
    hero: {
      title: 'DIEGO JIMÉNEZ TAMAME',
      subtitle_composer: 'COMPOSITOR',
      subtitle_engraver: 'GRABADOR // ARREGLISTA',
      tagline: 'Composición de música contemporánea, servicios profesionales de grabado musical y arreglos — con base en Graz, Austria.'
    },
    engraving: {
      section: 'SECCIÓN_02 // GRABADOR Y ARREGLISTA',
      title: 'Grabado Musical y Arreglos',
      desc: 'Servicios profesionales de grabado musical, preparación de partituras y arreglos para compositores, ensembles, editoriales y sesiones de grabación. Partituras de alta calidad listas para publicación. Disponible para encargos internacionales.',
      services: [
        'Grabado y maquetación de partituras completas',
        'Extracción y formateo de partes',
        'Arreglos orquestales y de cámara',
        'Transcripción de manuscritos o audio',
        'Corrección y edición de partituras',
        'Conversión de formatos y archivado digital'
      ],
      cta: 'SOLICITAR PRESUPUESTO →',
      client: 'CLIENTE',
      project: 'PROYECTO',
      type: 'TIPO',
      year: 'AÑO'
    },
    composer: {
      section: 'SECCIÓN_01 // COMPOSITOR',
      title: 'Composiciones',
      desc: 'Obras seleccionadas para ensemble, electrónica y multimedia. Música contemporánea que explora los límites entre el sonido acústico y digital, la tecnología y la interpretación.',
      watch: 'VER',
      listen: 'ESCUCHAR'
    },
    about: {
      section: 'SECCIÓN_03 // SOBRE MÍ',
      title: 'Sobre mí',
      bio: `Diego Jiménez Tamame (n. 1994, España) es compositor, grabador musical y arreglista con base en Graz, Austria. Su trabajo explora la intersección entre instrumentos acústicos, electrónica en vivo, multimedia y los artefactos culturales de la comunicación digital.

Estudió composición en la Kunstuniversität Graz con Beat Furrer y Clemens Gadenstätter, y ha participado en programas del IRCAM (ManiFeste Academy, París), Fondation Royaumont (Voix Nouvelles) e impuls Academy Graz.

Su música ha sido interpretada por ensembles como Ensemble Linea, Schallfeld Ensemble, Pulso Ensemble y la Orchestre Philharmonique de Radio France bajo la dirección de Peter Rundel. Su obra ha sido emitida en Radio France ("Création Mondiale" con Anne Montaron) y ORF.

Ha recibido encargos y apoyo de Schallfeld Ensemble, IRCAM, Fondation Royaumont, impuls, SKE Fonds y la Stadt Graz.

Paralelamente a su trabajo compositivo, Diego trabaja profesionalmente como grabador musical y arreglista, preparando partituras y partes para compositores, editoriales y ensembles a nivel internacional.`,
      press_title: 'Prensa y Emisiones',
      press: [
        { source: 'Radio France — Création Mondiale', text: 'Retrato del compositor y emisión integral de "[to be enveloped by] BLACK"', link: 'https://www.francemusique.fr/emissions/creation-mondiale-l-integrale/be-enveloped-black-de-diego-jimenez-tamame-diffusion-integrale-et-portrait-du-compositeur-72438' },
        { source: 'ORF', text: 'Emisión de la grabación de "Thin Film Interference" con Schallfeld Ensemble' }
      ]
    },
    contact: {
      section: 'SECCIÓN_04 // CONTACTO',
      title: 'Contacto',
      desc: 'Para encargos de composición, consultas sobre grabado y arreglos, o cualquier otra pregunta.',
      name: 'NOMBRE_',
      email: 'EMAIL_',
      subject: 'ASUNTO_',
      message: 'MENSAJE_',
      subjects: ['Presupuesto Grabado / Arreglos', 'Encargo de Composición', 'Consulta General'],
      send: 'TRANSMITIR →',
      sent: 'MENSAJE ENVIADO. RESPONDERÉ EN BREVE.',
      sending: 'TRANSMITIENDO...'
    },
    footer: {
      rights: '© 2024 Diego Jiménez Tamame. Todos los derechos reservados.',
      location: 'Graz, Austria',
      status: 'SISTEMA EN LÍNEA'
    }
  },
  de: {
    nav: { composer: 'Komponist', engraver: 'Notensetzer', about: 'Über mich', contact: 'Kontakt' },
    hero: {
      title: 'DIEGO JIMÉNEZ TAMAME',
      subtitle_composer: 'KOMPONIST',
      subtitle_engraver: 'NOTENSETZER // ARRANGEUR',
      tagline: 'Zeitgenössische Musikkomposition, professioneller Notensatz und Arrangement-Services — ansässig in Graz, Österreich.'
    },
    engraving: {
      section: 'SEKTION_02 // NOTENSETZER & ARRANGEUR',
      title: 'Notensatz & Arrangement',
      desc: 'Professioneller Notensatz, Partiturvorbereitung und Arrangement-Services für Komponisten, Ensembles, Verlage und Aufnahmesitzungen. Hochwertige, druckfertige Partituren mit branchenüblicher Notationssoftware. Für internationale Aufträge verfügbar.',
      services: [
        'Vollständiger Partitursatz & Layout',
        'Stimmenextraktion & Formatierung',
        'Orchester- & Kammermusik-Arrangements',
        'Transkription von Manuskript oder Audio',
        'Partiturkorrektur & Lektorat',
        'Formatkonvertierung & digitale Archivierung'
      ],
      cta: 'ANGEBOT ANFRAGEN →',
      client: 'AUFTRAGGEBER',
      project: 'PROJEKT',
      type: 'TYP',
      year: 'JAHR'
    },
    composer: {
      section: 'SEKTION_01 // KOMPONIST',
      title: 'Kompositionen',
      desc: 'Ausgewählte Werke für Ensemble, Elektronik und Multimedia. Zeitgenössische Musik, die die Grenzen zwischen akustischem und digitalem Klang, Technologie und Aufführung erforscht.',
      watch: 'ANSEHEN',
      listen: 'ANHÖREN'
    },
    about: {
      section: 'SEKTION_03 // ÜBER MICH',
      title: 'Über mich',
      bio: `Diego Jiménez Tamame (geb. 1994, Spanien) ist Komponist, Notensetzer und Arrangeur mit Sitz in Graz, Österreich. Seine Arbeit erforscht die Schnittstelle zwischen akustischen Instrumenten, Live-Elektronik, Multimedia und den kulturellen Artefakten digitaler Kommunikation.

Er studierte Komposition an der Kunstuniversität Graz bei Beat Furrer und Clemens Gadenstätter und nahm an Programmen des IRCAM (ManiFeste Academy, Paris), der Fondation Royaumont (Voix Nouvelles) und der impuls Academy Graz teil.

Seine Musik wurde von Ensembles wie Ensemble Linea, Schallfeld Ensemble, Pulso Ensemble und dem Orchestre Philharmonique de Radio France unter der Leitung von Peter Rundel aufgeführt. Sein Werk wurde auf Radio France („Création Mondiale" mit Anne Montaron) und ORF gesendet.

Er erhielt Aufträge und Förderungen von Schallfeld Ensemble, IRCAM, Fondation Royaumont, impuls, SKE Fonds und der Stadt Graz.

Neben seiner kompositorischen Tätigkeit arbeitet Diego professionell als Notensetzer und Arrangeur und bereitet Partituren und Stimmen für Komponisten, Verlage und Ensembles international vor.`,
      press_title: 'Presse & Sendungen',
      press: [
        { source: 'Radio France — Création Mondiale', text: 'Portrait des Komponisten und Gesamtausstrahlung von „[to be enveloped by] BLACK"', link: 'https://www.francemusique.fr/emissions/creation-mondiale-l-integrale/be-enveloped-black-de-diego-jimenez-tamame-diffusion-integrale-et-portrait-du-compositeur-72438' },
        { source: 'ORF', text: 'Sendung der Aufnahme von „Thin Film Interference" mit Schallfeld Ensemble' }
      ]
    },
    contact: {
      section: 'SEKTION_04 // KONTAKT',
      title: 'Kontakt',
      desc: 'Für Kompositionsaufträge, Anfragen zu Notensatz & Arrangement oder sonstige Fragen.',
      name: 'NAME_',
      email: 'EMAIL_',
      subject: 'BETREFF_',
      message: 'NACHRICHT_',
      subjects: ['Angebot Notensatz / Arrangement', 'Kompositionsauftrag', 'Allgemeine Anfrage'],
      send: 'ÜBERMITTELN →',
      sent: 'NACHRICHT GESENDET. ICH MELDE MICH IN KÜRZE.',
      sending: 'WIRD ÜBERMITTELT...'
    },
    footer: {
      rights: '© 2024 Diego Jiménez Tamame. Alle Rechte vorbehalten.',
      location: 'Graz, Österreich',
      status: 'SYSTEM ONLINE'
    }
  }
};

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en');
  const t = translations[lang];
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}