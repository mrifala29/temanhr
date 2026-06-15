import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

type Tab = 'input' | 'output' | 'detail';

const tabs: { id: Tab; label: string; active: string; dot: string }[] = [
  { id: 'input', label: '📝 Input Posisi', active: 'bg-indigo-600 text-white border-indigo-600', dot: 'indigo' },
  { id: 'output', label: '🏆 Hasil Ranking', active: 'bg-emerald-600 text-white border-emerald-600', dot: 'emerald' },
  { id: 'detail', label: '🔍 Detail Kandidat', active: 'bg-amber-500 text-white border-amber-500', dot: 'amber' },
];

/* ── INPUT ── */
const InputPreview = () => (
  <div className="grid md:grid-cols-2 gap-4">
    {[
      { label: 'Nama Posisi', ph: 'Senior Frontend Developer', req: true },
      { label: 'Ranking (Top N)', ph: '10', req: true },
      { label: 'Deskripsi Posisi', ph: 'Deskripsi singkat tentang posisi...', req: true, full: true },
      { label: 'Tanggung Jawab', ph: 'Detail tanggung jawab kandidat...', req: true, full: true },
      { label: 'Persyaratan', ph: 'Pendidikan, pengalaman, skill...', req: true, full: true },
      { label: 'Sertifikasi', ph: 'Opsional — sertifikasi yang dibutuhkan', req: false, full: true },
    ].map((f, i) => (
      <div key={i} className={f.full ? 'md:col-span-2' : ''}>
        <label className="block text-xs font-medium text-gray-600 mb-1">
          {f.label}{f.req && <span className="text-red-400 ml-0.5">*</span>}
        </label>
        {f.full ? (
          <textarea rows={2} placeholder={f.ph} disabled
            className="w-full bg-gray-50 text-sm text-gray-400 rounded-xl px-4 py-2.5 resize-none outline-none border border-gray-100" />
        ) : (
          <input type="text" placeholder={f.ph} disabled
            className="w-full bg-gray-50 text-sm text-gray-400 rounded-xl px-4 py-2.5 outline-none border border-gray-100" />
        )}
      </div>
    ))}
    <div className="md:col-span-2">
      <label className="block text-xs font-medium text-gray-600 mb-1">Upload CV <span className="text-red-400">*</span></label>
      <div className="w-full bg-indigo-50/50 border-2 border-dashed border-indigo-200 rounded-xl px-4 py-6 flex flex-col items-center gap-1 text-indigo-400">
        <span className="text-3xl">📦</span>
        <p className="text-sm font-medium text-indigo-500">Drag & drop file ZIP</p>
        <p className="text-xs">Hanya .zip berisi .pdf</p>
      </div>
    </div>
    <div className="md:col-span-2 flex justify-end">
      <span className="bg-indigo-600 text-white text-sm font-semibold px-6 py-2.5 rounded-xl flex items-center gap-2 shadow-md shadow-indigo-200">
        🔍 Analyze CV
      </span>
    </div>
  </div>
);

/* ── OUTPUT ── */
const candidates = [
  { name: 'Budi Santoso', edu: 'S1 Teknik Informatika — UI', exp: '5 tahun', score: 92, status: 'Priority' },
  { name: 'Sari Dewi', edu: 'S1 Sistem Informasi — ITS', exp: '4 tahun', score: 85, status: 'Priority' },
  { name: 'Raka Pratama', edu: 'S1 Ilmu Komputer — UGM', exp: '3 tahun', score: 74, status: 'Good Chance' },
  { name: 'Anisa Putri', edu: 'S1 Teknik Elektro — ITB', exp: '2 tahun', score: 66, status: 'Good Chance' },
];

const OutputPreview = () => (
  <div className="flex flex-col gap-3">
    <p className="text-xs text-gray-400 mb-1">Top 4 dari 12 kandidat · diurutkan berdasarkan score (≥ 60)</p>
    {candidates.map((c, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.08 }}
        className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 gap-4"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 ${c.score >= 80 ? 'bg-emerald-500' : 'bg-amber-400'}`}>
            {c.score}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-gray-900 truncate">{c.name}</p>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${c.status === 'Priority' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                {c.status}
              </span>
            </div>
            <p className="text-xs text-gray-500 truncate">{c.edu} · {c.exp}</p>
          </div>
        </div>
        <span className="text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full flex-shrink-0">Detail</span>
      </motion.div>
    ))}
  </div>
);

/* ── DETAIL ── */
const DetailPreview = () => (
  <div className="space-y-5">
    <div className="flex items-center justify-between bg-amber-50 border border-amber-100 rounded-2xl px-5 py-4">
      <div>
        <h3 className="text-base font-bold text-gray-900">Budi Santoso</h3>
        <p className="text-xs text-gray-500">S1 Teknik Informatika — UI · 5 tahun</p>
      </div>
      <span className="text-3xl font-extrabold text-emerald-600">92<span className="text-sm font-normal text-gray-400">/100</span></span>
    </div>

    {[
      { t: 'Mengapa Kandidat Ini Cocok', c: 'text-indigo-600', body: 'Pengalaman 5 tahun di frontend dengan keahlian React & TypeScript yang kuat. Pendidikan sesuai persyaratan utama, sertifikasi AWS jadi nilai tambah.' },
      { t: 'Ringkasan Profil', c: 'text-emerald-600', body: 'Senior developer di startup teknologi, terbiasa kerja tim agile, portofolio project e-commerce dan fintech.' },
    ].map((s, i) => (
      <div key={i}>
        <p className={`text-xs font-semibold uppercase tracking-wide mb-2 ${s.c}`}>{s.t}</p>
        <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">{s.body}</p>
      </div>
    ))}

    <div>
      <p className="text-xs font-semibold uppercase tracking-wide mb-2 text-amber-600">Skills & Tools</p>
      <div className="flex flex-wrap gap-2">
        {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Git'].map(s => (
          <span key={s} className="text-xs bg-indigo-50 border border-indigo-100 text-indigo-700 px-3 py-1 rounded-full">{s}</span>
        ))}
      </div>
    </div>

    <div>
      <p className="text-xs font-semibold uppercase tracking-wide mb-2 text-red-500">Review Points</p>
      <ul className="space-y-1.5">
        <li className="flex items-start gap-2 text-sm text-gray-500"><span className="text-amber-400 mt-0.5">⚠</span> Belum berpengalaman dengan Kubernetes (opsional)</li>
        <li className="flex items-start gap-2 text-sm text-gray-500"><span className="text-amber-400 mt-0.5">⚠</span> Pengalaman mobile terbatas (React Native)</li>
      </ul>
    </div>

    <span className="w-full bg-indigo-600 text-white text-sm font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-indigo-200">
      📥 Download CV
    </span>
  </div>
);

const SimulasiSection = () => {
  const [active, setActive] = useState<Tab>('input');

  return (
    <section id="simulasi" className="py-24 px-6 bg-gray-50 relative overflow-hidden">
      {/* soft colored blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
            Demo Interaktif
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Simulasi Screening CV</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Lihat langsung bagaimana TemanHR bekerja — dari input posisi, hasil ranking, hingga detail analisis kandidat.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                active === t.id ? t.active + ' shadow-sm' : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content with left-right slide */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-xl p-6"
          >
            {active === 'input' && <InputPreview />}
            {active === 'output' && <OutputPreview />}
            {active === 'detail' && <DetailPreview />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SimulasiSection;
