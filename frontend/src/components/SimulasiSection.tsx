import { motion } from 'framer-motion';
import { useState } from 'react';

type Tab = 'input' | 'output' | 'detail';

const tabs: { id: Tab; label: string }[] = [
  { id: 'input', label: 'Input' },
  { id: 'output', label: 'Output' },
  { id: 'detail', label: 'Detail Kandidat' },
];

const InputPreview = () => (
  <div className="grid md:grid-cols-2 gap-4">
    {[
      { label: 'Nama Posisi', placeholder: 'contoh: Senior Frontend Developer', required: true },
      { label: 'Ranking (Top N)', placeholder: 'contoh: 10', required: true },
      { label: 'Deskripsi Posisi', placeholder: 'Deskripsi singkat tentang posisi...', required: true, full: true },
      { label: 'Tanggung Jawab', placeholder: 'Detail tanggung jawab kandidat...', required: true, full: true },
      { label: 'Persyaratan', placeholder: 'Pendidikan, pengalaman, skill yang dibutuhkan...', required: true, full: true },
      { label: 'Sertifikasi', placeholder: 'Opsional — sertifikasi yang dibutuhkan', required: false, full: true },
    ].map((field, i) => (
      <div key={i} className={field.full ? 'md:col-span-2' : ''}>
        <label className="block text-xs font-medium text-gray-600 mb-1">
          {field.label}
          {field.required && <span className="text-red-400 ml-0.5">*</span>}
        </label>
        {field.full ? (
          <textarea
            rows={2}
            placeholder={field.placeholder}
            className="w-full bg-gray-100 text-sm text-gray-400 rounded-xl px-4 py-2.5 resize-none outline-none border border-transparent focus:border-indigo-300 focus:bg-white transition cursor-not-allowed"
            disabled
          />
        ) : (
          <input
            type="text"
            placeholder={field.placeholder}
            className="w-full bg-gray-100 text-sm text-gray-400 rounded-xl px-4 py-2.5 outline-none border border-transparent focus:border-indigo-300 focus:bg-white transition cursor-not-allowed"
            disabled
          />
        )}
      </div>
    ))}

    {/* File upload */}
    <div className="md:col-span-2">
      <label className="block text-xs font-medium text-gray-600 mb-1">
        Upload CV <span className="text-red-400">*</span>
      </label>
      <div className="w-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl px-4 py-6 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-3xl">📦</span>
        <p className="text-sm font-medium">Drag & drop file ZIP di sini</p>
        <p className="text-xs">atau klik untuk memilih file · Hanya .zip berisi .pdf</p>
      </div>
    </div>

    <div className="md:col-span-2 flex justify-end">
      <button
        disabled
        className="bg-indigo-600 opacity-60 text-white text-sm font-semibold px-6 py-2.5 rounded-full flex items-center gap-2 cursor-not-allowed"
      >
        🔍 Analyze CV
      </button>
    </div>
  </div>
);

const candidates = [
  { name: 'Budi Santoso', edu: 'S1 Teknik Informatika — Universitas Indonesia', exp: '5 tahun', email: 'budi@email.com', wa: '0812-xxxx', score: 92, status: 'Priority' },
  { name: 'Sari Dewi', edu: 'S1 Sistem Informasi — ITS', exp: '4 tahun', email: 'sari@email.com', wa: '0813-xxxx', score: 85, status: 'Priority' },
  { name: 'Raka Pratama', edu: 'S1 Ilmu Komputer — UGM', exp: '3 tahun', email: 'raka@email.com', wa: '0857-xxxx', score: 74, status: 'Good Chance' },
  { name: 'Anisa Putri', edu: 'S1 Teknik Elektro — ITB', exp: '2 tahun', email: 'anisa@email.com', wa: '0878-xxxx', score: 66, status: 'Good Chance' },
];

const OutputPreview = () => (
  <div className="flex flex-col gap-3">
    <p className="text-xs text-gray-400 mb-1">Menampilkan top 4 dari 12 kandidat · Diurutkan berdasarkan score</p>
    {candidates.map((c, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.07 }}
        className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 gap-4"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <p className="text-sm font-semibold text-gray-900 truncate">{c.name}</p>
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${c.status === 'Priority' ? 'bg-indigo-100 text-indigo-700' : 'bg-amber-100 text-amber-700'}`}>
              {c.status}
            </span>
          </div>
          <p className="text-xs text-gray-500 truncate">{c.edu}</p>
          <p className="text-xs text-gray-400">Pengalaman: {c.exp} · {c.email} · {c.wa}</p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="text-right">
            <p className="text-2xl font-extrabold text-indigo-600">{c.score}</p>
            <p className="text-[10px] text-gray-400">/ 100</p>
          </div>
          <button className="text-xs bg-white border border-gray-200 text-gray-600 hover:border-indigo-400 hover:text-indigo-600 px-3 py-1.5 rounded-full transition-colors">
            Detail
          </button>
        </div>
      </motion.div>
    ))}
  </div>
);

const DetailPreview = () => (
  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-5">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-base font-bold text-gray-900">Budi Santoso</h3>
        <p className="text-xs text-gray-400">S1 Teknik Informatika — UI · 5 tahun pengalaman</p>
      </div>
      <span className="text-2xl font-extrabold text-indigo-600">92 <span className="text-sm font-normal text-gray-400">/ 100</span></span>
    </div>

    <div>
      <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">Mengapa Kandidat Ini Cocok</p>
      <p className="text-sm text-gray-600 leading-relaxed bg-white rounded-xl px-4 py-3 border border-gray-100">
        Budi memiliki pengalaman 5 tahun di bidang frontend development dengan keahlian React dan TypeScript yang kuat. Latar belakang pendidikan sesuai dengan persyaratan utama, dan sertifikasi AWS yang dimiliki menjadi nilai tambah signifikan.
      </p>
    </div>

    <div>
      <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">Ringkasan Profil</p>
      <p className="text-sm text-gray-600 leading-relaxed bg-white rounded-xl px-4 py-3 border border-gray-100">
        Senior developer berpengalaman di startup teknologi. Terbiasa bekerja dalam tim agile, memiliki portofolio project e-commerce dan fintech.
      </p>
    </div>

    <div>
      <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">Skills & Tools</p>
      <div className="flex flex-wrap gap-2">
        {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Git', 'Figma'].map(s => (
          <span key={s} className="text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded-full">{s}</span>
        ))}
      </div>
    </div>

    <div>
      <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">Review Points</p>
      <ul className="space-y-1.5">
        <li className="flex items-start gap-2 text-sm text-gray-500">
          <span className="text-amber-400 mt-0.5">⚠</span> Belum memiliki pengalaman langsung dengan Kubernetes (persyaratan opsional)
        </li>
        <li className="flex items-start gap-2 text-sm text-gray-500">
          <span className="text-amber-400 mt-0.5">⚠</span> Pengalaman mobile development terbatas, hanya React Native
        </li>
      </ul>
    </div>

    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
      📥 Download CV
    </button>
  </div>
);

const SimulasiSection = () => {
  const [active, setActive] = useState<Tab>('input');

  return (
    <section id="simulasi" className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Lihat Cara Kerjanya
          </h2>
          <p className="text-gray-500 text-sm">
            Preview tampilan input, output ranking, dan detail analisis kandidat.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex bg-white border border-gray-200 rounded-full p-1 gap-1 w-fit mx-auto mb-8">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`text-sm font-medium px-5 py-2 rounded-full transition-all ${
                active === t.id
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
        >
          {active === 'input' && <InputPreview />}
          {active === 'output' && <OutputPreview />}
          {active === 'detail' && <DetailPreview />}
        </motion.div>
      </div>
    </section>
  );
};

export default SimulasiSection;
