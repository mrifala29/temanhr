import { motion } from 'framer-motion';

const features = [
  {
    icon: '📋',
    title: 'Isi Detail Posisi Pekerjaan',
    description: 'Masukkan nama posisi, deskripsi, tanggung jawab, persyaratan skill/pengalaman, dan sertifikasi yang dibutuhkan.',
    accent: 'bg-indigo-50 text-indigo-500',
    badge: 'bg-indigo-600',
  },
  {
    icon: '📦',
    title: 'Upload ZIP Berisi CV Kandidat',
    description: 'Upload satu file ZIP berisi semua CV dalam format PDF. Sistem otomatis mengekstrak dan memvalidasi setiap file.',
    accent: 'bg-emerald-50 text-emerald-500',
    badge: 'bg-emerald-600',
  },
  {
    icon: '🤖',
    title: 'AI Menganalisis Setiap CV',
    description: 'Google Gemini AI membandingkan konten setiap CV dengan persyaratan posisi dan memberi score 0–100 per kandidat.',
    accent: 'bg-amber-50 text-amber-500',
    badge: 'bg-amber-500',
  },
  {
    icon: '🏆',
    title: 'Kandidat Diranking Otomatis',
    description: 'Hasil diurutkan dari score tertinggi. Hanya kandidat dengan score ≥ 60 yang ditampilkan, dibatasi sesuai ranking yang kamu tentukan.',
    accent: 'bg-indigo-50 text-indigo-500',
    badge: 'bg-indigo-600',
  },
  {
    icon: '📊',
    title: 'Laporan Detail per Kandidat',
    description: 'Lihat ringkasan profil, alasan kecocokan, daftar skill, dan gap analysis. Download CV asli langsung dari platform.',
    accent: 'bg-emerald-50 text-emerald-500',
    badge: 'bg-emerald-600',
  },
];

const FeaturesSection = () => {
  return (
    <section id="fitur" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Alur Kerja TemanHR</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Dari upload hingga hasil ranking — 5 langkah yang terjadi otomatis.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="flex items-start gap-5 bg-white hover:bg-gray-50 transition-colors rounded-2xl px-6 py-5 border border-gray-100 hover:shadow-md"
            >
              <div className={`relative flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${f.accent}`}>
                <span className="text-2xl">{f.icon}</span>
                <span className={`absolute -top-2 -left-2 w-5 h-5 ${f.badge} text-white text-[10px] font-bold rounded-full flex items-center justify-center`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
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
