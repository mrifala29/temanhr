import { motion } from 'framer-motion';

const workflowSteps = [
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

const comingSoon = [
  {
    icon: '💬',
    color: 'indigo',
    title: 'Interview Question Generator',
    description:
      'AI membaca CV setiap kandidat dan menghasilkan daftar pertanyaan interview yang spesifik, kontekstual, dan terstruktur — siap digunakan oleh rekruter sebelum sesi wawancara dimulai. Tidak perlu riset manual lagi.',
    highlights: ['Pertanyaan per kandidat', 'Berdasarkan CV & posisi', 'Export ke PDF / Word'],
  },
  {
    icon: '📧',
    color: 'emerald',
    title: 'Blast Email ke Kandidat',
    description:
      'Kirim email undangan interview ke semua kandidat terpilih sekaligus langsung dari dashboard TemanHR. Gunakan template bawaan atau buat sendiri, lengkap dengan jadwal, lokasi, dan instruksi.',
    highlights: ['Template profesional', 'Kirim massal 1 klik', 'Tracking status baca'],
  },
  {
    icon: '📈',
    color: 'amber',
    title: 'Analytics & Recruitment Dashboard',
    description:
      'Pantau performa rekrutmen secara real-time: rata-rata score per batch, distribusi skill kandidat, tren sumber kandidat terbaik, dan waktu rata-rata proses screening. Cocok untuk laporan tim HR.',
    highlights: ['Grafik & visualisasi data', 'Laporan per periode', 'Export CSV / Excel'],
  },
];

const colorMap: Record<string, { bg: string; border: string; badge: string; tag: string; icon: string; highlight: string }> = {
  indigo: {
    bg: 'from-indigo-50/60 to-white',
    border: 'border-indigo-100 hover:border-indigo-300',
    badge: 'bg-indigo-600',
    tag: 'bg-indigo-50 border-indigo-200 text-indigo-700',
    icon: 'bg-indigo-100 text-indigo-600',
    highlight: 'text-indigo-600',
  },
  emerald: {
    bg: 'from-emerald-50/60 to-white',
    border: 'border-emerald-100 hover:border-emerald-300',
    badge: 'bg-emerald-600',
    tag: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    icon: 'bg-emerald-100 text-emerald-600',
    highlight: 'text-emerald-600',
  },
  amber: {
    bg: 'from-amber-50/60 to-white',
    border: 'border-amber-100 hover:border-amber-300',
    badge: 'bg-amber-500',
    tag: 'bg-amber-50 border-amber-200 text-amber-700',
    icon: 'bg-amber-100 text-amber-600',
    highlight: 'text-amber-600',
  },
};

const FeaturesSection = () => {
  return (
    <>
      {/* ── WORKFLOW STEPS ── */}
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
            {workflowSteps.map((f, i) => (
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

      {/* ── COMING SOON FEATURES ── */}
      <section id="coming-soon" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              🚀 Segera Hadir
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Fitur yang Akan Datang</h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              Kami terus mengembangkan TemanHR agar rekruter bisa mengelola seluruh proses rekrutmen dari satu tempat.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {comingSoon.map((f, i) => {
              const c = colorMap[f.color];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative bg-gradient-to-b ${c.bg} border ${c.border} rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                >
                  {/* Coming Soon badge */}
                  <span className="absolute top-4 right-4 text-[10px] font-bold bg-gray-900 text-white px-2.5 py-1 rounded-full tracking-wide">
                    Coming Soon
                  </span>

                  {/* Icon */}
                  <div className={`w-12 h-12 ${c.icon} rounded-xl flex items-center justify-center text-2xl`}>
                    {f.icon}
                  </div>

                  {/* Title & desc */}
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2 pr-20">{f.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
                  </div>

                  {/* Highlights */}
                  <ul className="flex flex-col gap-1.5 mt-auto">
                    {f.highlights.map((h, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-gray-500">
                        <span className={`font-bold ${c.highlight}`}>✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-xs text-gray-400 mt-10"
          >
            Ingin fitur ini lebih cepat hadir? <a href="#" className="text-indigo-600 font-medium hover:underline">Beritahu kami</a> atau <a href="#harga" className="text-indigo-600 font-medium hover:underline">upgrade ke Pro</a> untuk akses early.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
