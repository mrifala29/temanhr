import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import mascot from '../assets/mascot.png';

const ROTATING_TEXTS = [
  'Siap Menghadapi Rekrutmen?',
  'Screening CV Otomatis dengan AI.',
  'Temukan Kandidat Terbaik, Lebih Cepat.',
  'Hemat Waktu Rekrutmenmu.',
];

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTextIndex((i) => (i + 1) % ROTATING_TEXTS.length), 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-28 px-6 min-h-[88vh] flex items-center">
      {/* Constellation background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <line x1="8%" y1="12%" x2="22%" y2="28%" stroke="rgba(99,102,241,0.12)" strokeWidth="1" />
        <line x1="22%" y1="28%" x2="14%" y2="55%" stroke="rgba(99,102,241,0.10)" strokeWidth="1" />
        <line x1="14%" y1="55%" x2="28%" y2="72%" stroke="rgba(99,102,241,0.12)" strokeWidth="1" />
        <line x1="22%" y1="28%" x2="38%" y2="18%" stroke="rgba(99,102,241,0.10)" strokeWidth="1" />
        <line x1="38%" y1="18%" x2="52%" y2="32%" stroke="rgba(99,102,241,0.10)" strokeWidth="1" />
        <line x1="52%" y1="32%" x2="48%" y2="52%" stroke="rgba(99,102,241,0.08)" strokeWidth="1" />
        <line x1="48%" y1="52%" x2="62%" y2="65%" stroke="rgba(99,102,241,0.10)" strokeWidth="1" />
        <line x1="62%" y1="65%" x2="75%" y2="58%" stroke="rgba(99,102,241,0.10)" strokeWidth="1" />
        <line x1="88%" y1="15%" x2="75%" y2="32%" stroke="rgba(99,102,241,0.10)" strokeWidth="1" />
        <line x1="75%" y1="32%" x2="88%" y2="48%" stroke="rgba(99,102,241,0.08)" strokeWidth="1" />
        <line x1="52%" y1="32%" x2="68%" y2="22%" stroke="rgba(99,102,241,0.10)" strokeWidth="1" />
        <line x1="68%" y1="22%" x2="75%" y2="32%" stroke="rgba(99,102,241,0.10)" strokeWidth="1" />
        <circle cx="8%" cy="12%" r="3" fill="rgba(99,102,241,0.25)" />
        <circle cx="22%" cy="28%" r="4" fill="rgba(99,102,241,0.28)" />
        <circle cx="38%" cy="18%" r="3.5" fill="rgba(99,102,241,0.22)" />
        <circle cx="52%" cy="32%" r="4" fill="rgba(99,102,241,0.25)" />
        <circle cx="48%" cy="52%" r="3" fill="rgba(99,102,241,0.20)" />
        <circle cx="62%" cy="65%" r="4" fill="rgba(99,102,241,0.25)" />
        <circle cx="75%" cy="32%" r="3.5" fill="rgba(99,102,241,0.22)" />
        <circle cx="75%" cy="58%" r="3.5" fill="rgba(99,102,241,0.22)" />
        <circle cx="88%" cy="15%" r="3" fill="rgba(99,102,241,0.20)" />
        <circle cx="88%" cy="48%" r="3" fill="rgba(99,102,241,0.18)" />
      </svg>

      {/* Mascot floating right side */}
      <div className="absolute right-8 lg:right-12 xl:right-16 bottom-0 w-52 lg:w-64 xl:w-[300px] pointer-events-none select-none">
        <motion.div
          animate={{ y: [0, -22, 0], rotate: [-3, 2.5, -3] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <img
            src={mascot}
            alt="Maskot TemanHR"
            width={400}
            height={400}
            className="w-full select-none"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
            Powered by Google Gemini AI
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl lg:text-7xl font-extrabold text-gray-900 mb-3 leading-tight tracking-tight"
        >
          Teman<span className="text-indigo-600">HR</span>
        </motion.h1>

        <div className="h-9 flex items-center justify-center mb-5">
          <AnimatePresence mode="wait">
            <motion.p
              key={textIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="text-xl lg:text-2xl font-semibold text-indigo-600 text-center"
            >
              {ROTATING_TEXTS[textIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Platform berbasis AI untuk membantu rekruter menyaring CV kandidat secara otomatis.
          Isi detail posisi, upload CV dalam ZIP, dan dapatkan ranking kandidat terbaik —
          semua dalam satu tempat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-xl font-semibold text-base transition-all hover:scale-105 shadow-md shadow-indigo-200">
            🚀 Mulai Sekarang
          </button>
          <a
            href="#fitur"
            className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 px-8 py-3.5 rounded-xl font-medium text-base transition-all"
          >
            Lihat Fitur →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-5 mt-8 justify-center"
        >
          {['✓ Hasil instan', '✓ Laporan lengkap', '✓ Akses 24 jam'].map((t, i) => (
            <span key={i} className="text-xs text-gray-400 font-medium">{t}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
