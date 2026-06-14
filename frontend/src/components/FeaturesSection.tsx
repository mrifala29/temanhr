import { motion } from 'framer-motion';

const features = [
  {
    icon: '📋',
    title: 'Isi Detail Posisi Pekerjaan',
    description: 'Masukkan nama posisi, deskripsi, tanggung jawab, persyaratan skill/pengalaman, dan sertifikasi yang dibutuhkan.',
  },
  {
    icon: '📦',
    title: 'Upload ZIP Berisi CV Kandidat',
    description: 'Upload satu file ZIP yang berisi semua CV dalam format PDF. Sistem otomatis mengekstrak dan memvalidasi setiap file.',
  },
  {
    icon: '🤖',
    title: 'AI Menganalisis Setiap CV',
    description: 'Google Gemini AI membandingkan konten setiap CV dengan persyaratan posisi dan memberikan score 0–100 per kandidat.',
  },
  {
    icon: '🏆',
    title: 'Kandidat Diranking Otomatis',
    description: 'Hasil diurutkan dari score tertinggi. Hanya kandidat dengan score ≥ 60 yang ditampilkan, dibatasi sesuai ranking yang kamu tentukan.',
  },
  {
    icon: '📊',
    title: 'Laporan Detail per Kandidat',
    description: 'Lihat ringkasan profil, alasan kecocokan, daftar skill, dan gap analysis. Download CV asli langsung dari platform.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="fitur" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Alur Kerja TemanHR
          </h2>
          <p className="text-gray-500 text-sm">
            Dari upload hingga hasil ranking — 5 langkah yang terjadi otomatis.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-start gap-5 bg-gray-50 hover:bg-indigo-50 transition-colors rounded-2xl px-6 py-5 border border-gray-100"
            >
              {/* Icon + number */}
              <div className="relative flex-shrink-0 w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-2xl">{f.icon}</span>
                <span className="absolute -top-2 -left-2 w-5 h-5 bg-indigo-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
