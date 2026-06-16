import { motion } from 'framer-motion';

const benefits = [
  {
    icon: '⚡',
    title: 'Screening 10× Lebih Cepat',
    desc: 'Proses yang biasanya memakan waktu berhari-hari kini selesai dalam hitungan menit. AI membaca dan menilai ratusan CV sekaligus tanpa kelelahan.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: '🎯',
    title: 'Penilaian Objektif & Konsisten',
    desc: 'Setiap CV dinilai dengan kriteria yang sama persis berdasarkan persyaratan posisi yang Anda tetapkan — bebas dari bias subjektif maupun kelelahan manusia.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: '📊',
    title: 'Laporan Terstruktur per Kandidat',
    desc: 'Dapatkan ringkasan profil, alasan kesesuaian, daftar keahlian, dan gap analysis untuk setiap kandidat — semuanya siap untuk digunakan dalam pengambilan keputusan.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: '🔒',
    title: 'Data Aman & Terisolasi',
    desc: 'Setiap akun rekruter memiliki ruang data tersendiri. CV kandidat disimpan secara terenkripsi dan tidak dapat diakses oleh pengguna lain.',
    color: 'bg-rose-50 text-rose-600',
  },
];

const stats = [
  { value: '10×', label: 'Lebih cepat dari screening manual' },
  { value: '95%', label: 'Akurasi pencocokan kandidat' },
  { value: '<5 mnt', label: 'Waktu analisis per batch CV' },
  { value: '0 bias', label: 'Penilaian objektif berbasis AI' },
];

const AboutSection = () => {
  return (
    <section id="tentang" className="py-24 px-6 bg-white" aria-labelledby="about-heading">
      <div className="max-w-5xl mx-auto">

        {/* headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            🗒️ Tentang TemanHR
          </span>
          <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Rekrutmen yang Lebih Cerdas,<br className="hidden md:block" /> Bukan Sekadar Lebih Cepat
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            TemanHR adalah platform berbasis kecerdasan buatan yang dirancang khusus untuk membantu tim HR dan rekruter Indonesia
            dalam menyaring CV kandidat secara otomatis, objektif, dan terukur. Tidak perlu lagi membuka ratusan PDF secara manual —
            cukup masukkan kriteria posisi, unggah file ZIP berisi CV, dan biarkan AI mengerjakan sisanya.
          </p>
        </motion.div>

        {/* two-column: problem vs solution */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-red-50 border border-red-100 rounded-2xl px-6 py-7"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-4">Tantangan Rekruter Saat Ini</p>
            <ul className="space-y-3">
              {[
                'Membaca puluhan hingga ratusan CV membutuhkan waktu dan tenaga yang besar',
                'Penilaian tidak konsisten karena dipengaruhi kelelahan dan bias tak disadari',
                'Sulit menentukan kandidat mana yang benar-benar sesuai dengan persyaratan teknis',
                'Tidak ada sistem yang merangkum profil kandidat secara terstruktur dan cepat',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-emerald-50 border border-emerald-100 rounded-2xl px-6 py-7"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-4">Solusi TemanHR</p>
            <ul className="space-y-3">
              {[
                'AI memproses seluruh CV dalam satu batch — selesai dalam hitungan menit',
                'Setiap CV dinilai dengan rubrik yang sama berdasarkan kriteria yang Anda tetapkan',
                'Sistem memberi skor 0–100 dan menampilkan hanya kandidat yang memenuhi threshold',
                'Laporan detail per kandidat tersedia seketika, siap untuk pengambilan keputusan',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center bg-gray-50 border border-gray-100 rounded-2xl px-4 py-5">
              <p className="text-2xl font-extrabold text-indigo-600 mb-1">{s.value}</p>
              <p className="text-xs text-gray-500 leading-snug">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* benefit cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl px-6 py-5 hover:shadow-md transition-shadow"
            >
              <div className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xl ${b.color}`}>
                {b.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
