import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16 relative overflow-hidden bg-white">
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #e0e7ff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.5,
        }}
      />

      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: content centered */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-600 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
            <span>✦</span>
            <span>Powered by Google Gemini AI</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Teman<span className="text-indigo-600">HR</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-indigo-600 mb-5">
            Screening CV Kandidat — Otomatis.
          </p>
          <p className="text-gray-500 text-base leading-relaxed max-w-md mx-auto md:mx-0 mb-8">
            Platform berbasis AI untuk membantu rekruter menyaring CV kandidat secara otomatis.
            Upload ZIP, isi form posisi, dan dapatkan ranking kandidat terbaik — semua dalam satu tempat.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-4 justify-center md:justify-start mb-8">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full text-sm shadow-md shadow-indigo-200 transition-colors flex items-center gap-2"
            >
              🚀 Mulai Sekarang
            </motion.button>
            <a href="#simulasi" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors font-medium">
              Lihat Fitur →
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-5 justify-center md:justify-start text-xs text-gray-400">
            <span>✓ Hasil instan</span>
            <span>✓ Laporan lengkap</span>
            <span>✓ Akses 24 jam</span>
          </div>
        </motion.div>

        {/* Right: mascot */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex-shrink-0 flex justify-center"
        >
          <motion.img
            src="/mascot-placeholder.svg"
            alt="TemanHR mascot"
            className="w-72 md:w-96 drop-shadow-xl"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
