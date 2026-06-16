import { motion } from 'framer-motion';

/* ── Data ── */
const features = [
  {
    id: 'screening',
    icon: '🏆',
    color: 'indigo',
    tag: 'Tersedia Sekarang',
    tagStyle: 'bg-indigo-600 text-white',
    title: 'Screening CV Otomatis berbasis AI',
    desc: 'Unggah file ZIP berisi CV kandidat dalam format PDF, tentukan kriteria posisi secara detail, dan biarkan AI menganalisis serta memberikan peringkat kandidat secara otomatis. Sistem mengeluarkan skor 0–100 per kandidat beserta ringkasan profil, alasan kesesuaian, daftar keahlian, dan gap analysis — hanya dalam hitungan menit.',
    highlights: [
      'Skor 0–100 per kandidat',
      'Ranking otomatis berdasarkan kesesuaian',
      'Gap analysis & review points',
      'Download CV asli langsung dari platform',
    ],
    border: 'border-indigo-100 hover:border-indigo-300',
    iconBg: 'bg-indigo-50',
    iconText: 'text-indigo-600',
    checkColor: 'text-indigo-500',
  },
  {
    id: 'interview-gen',
    icon: '💬',
    color: 'emerald',
    tag: 'Coming Soon',
    tagStyle: 'bg-gray-800 text-white',
    title: 'Generate Pertanyaan Interview per Kandidat',
    desc: 'AI membaca CV setiap kandidat yang lolos screening dan menghasilkan daftar pertanyaan interview yang spesifik, kontekstual, dan terstruktur. Rekruter dapat memvalidasi kandidat secara lebih dalam sebelum atau selama sesi wawancara, sehingga waktu interview menjadi lebih efisien dan terarah.',
    highlights: [
      'Pertanyaan didasarkan pada isi CV dan posisi',
      'Terstruktur per aspek: teknis, pengalaman, soft skill',
      'Membantu memangkas kandidat yang meragukan',
      'Export pertanyaan ke PDF atau Word',
    ],
    border: 'border-emerald-100 hover:border-emerald-200',
    iconBg: 'bg-emerald-50',
    iconText: 'text-emerald-600',
    checkColor: 'text-emerald-500',
  },
  {
    id: 'chatbot',
    icon: '🤖',
    color: 'amber',
    tag: 'Coming Soon',
    tagStyle: 'bg-gray-800 text-white',
    title: 'Chatbot Asisten Rekrutmen',
    desc: 'Asisten AI yang memiliki pengetahuan penuh atas seluruh CV yang telah diunggah dan lowongan yang sedang aktif. Rekruter dapat bertanya secara natural — misalnya "siapa kandidat dengan pengalaman Python terbanyak?" — dan mendapatkan jawaban instan. Fitur ini juga mencakup kemampuan menyiapkan draf balasan email interview atau blast notifikasi ke kandidat terpilih.',
    highlights: [
      'Tanya-jawab bebas seputar kandidat & lowongan',
      'Pembuatan draf balasan email interview otomatis',
      'Blast notifikasi ke kandidat terpilih',
      'Riwayat percakapan tersimpan per sesi rekrutmen',
    ],
    border: 'border-amber-100 hover:border-amber-200',
    iconBg: 'bg-amber-50',
    iconText: 'text-amber-600',
    checkColor: 'text-amber-500',
  },
];

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
    description: 'Google Gemini AI membandingkan konten setiap CV dengan persyaratan posisi dan memberi skor 0–100 per kandidat.',
    accent: 'bg-amber-50 text-amber-500',
    badge: 'bg-amber-500',
  },
  {
    icon: '🏆',
    title: 'Kandidat Diranking Otomatis',
    description: 'Hasil diurutkan dari skor tertinggi. Hanya kandidat dengan skor ≥ 60 yang ditampilkan, dibatasi sesuai ranking yang Anda tentukan.',
    accent: 'bg-indigo-50 text-indigo-500',
    badge: 'bg-indigo-600',
  },
  {
    icon: '📊',
    title: 'Laporan Detail per Kandidat',
    description: 'Lihat ringkasan profil, alasan kecocokan, daftar keahlian, dan gap analysis. Unduh CV asli langsung dari platform.',
    accent: 'bg-emerald-50 text-emerald-500',
    badge: 'bg-emerald-600',
  },
];

const FeaturesSection = () => {
  return (
    <>
      {/* ── FITUR TEMANHR ── */}
      <section id="fitur" className="py-24 px-6 bg-gray-50" aria-labelledby="features-heading">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              ✦ Fitur Platform
            </span>
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Fitur TemanHR
            </h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              Dari screening CV hingga persiapan interview — semua dirancang untuk memangkas waktu rekrutmen tanpa mengorbankan kualitas.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-white border ${f.border} rounded-2xl p-7 flex flex-col md:flex-row gap-6 transition-all duration-300 hover:shadow-lg`}
              >
                {/* tag */}
                <span className={`absolute top-5 right-5 text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide ${f.tagStyle}`}>
                  {f.tag}
                </span>

                {/* icon */}
                <div className={`flex-shrink-0 w-14 h-14 ${f.iconBg} rounded-2xl flex items-center justify-center text-3xl self-start`}>
                  {f.icon}
                </div>

                {/* content */}
                <div className="flex-1 pr-16 md:pr-0">
                  <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{f.desc}</p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                    {f.highlights.map((h, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-gray-500">
                        <span className={`font-bold flex-shrink-0 ${f.checkColor}`}>✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALUR KERJA ── */}
      <section id="cara-kerja" className="py-24 px-6 bg-white" aria-labelledby="workflow-heading">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 id="workflow-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Alur Kerja TemanHR
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Dari unggah CV hingga hasil ranking — 5 langkah yang terjadi secara otomatis.
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
    </>
  );
};

export default FeaturesSection;
