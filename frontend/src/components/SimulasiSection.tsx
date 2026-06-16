import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';

type Tab = 'input' | 'output' | 'detail';

const tabs: { id: Tab; label: string; active: string }[] = [
  { id: 'input',  label: '📝 Input Posisi',    active: 'bg-indigo-600 text-white border-indigo-600' },
  { id: 'output', label: '🏆 Hasil Ranking',   active: 'bg-emerald-600 text-white border-emerald-600' },
  { id: 'detail', label: '🔍 Detail Kandidat', active: 'bg-amber-500 text-white border-amber-500' },
];

/* ── INPUT (filled dummy, read-only) ── */
const InputPreview = () => (
  <div className="grid md:grid-cols-2 gap-4">
    {[
      { label: 'Nama Posisi',     value: 'Senior Frontend Developer',  full: false, req: true  },
      { label: 'Ranking (Top N)', value: '10',                          full: false, req: true  },
      { label: 'Deskripsi Posisi',
        value: 'Kami mencari Senior Frontend Developer yang berpengalaman untuk bergabung dengan tim produk kami dalam membangun aplikasi web skala enterprise.',
        full: true, req: true },
      { label: 'Tanggung Jawab',
        value: 'Memimpin pengembangan UI/UX komponen React, melakukan code review, berkolaborasi dengan tim backend & desainer, serta menjaga performa dan kualitas kode.',
        full: true, req: true },
      { label: 'Persyaratan',
        value: 'Minimal S1 Teknik Informatika / Ilmu Komputer. Pengalaman ≥ 3 tahun dengan React & TypeScript. Menguasai state management (Redux/Zustand), REST API, dan Git.',
        full: true, req: true },
      { label: 'Sertifikasi',
        value: 'AWS Certified Developer (lebih disukai) atau Google Professional Cloud Developer.',
        full: true, req: false },
    ].map((f, i) => (
      <div key={i} className={f.full ? 'md:col-span-2' : ''}>
        <label className="block text-xs font-medium text-gray-600 mb-1">
          {f.label}{f.req && <span className="text-red-400 ml-0.5">*</span>}
        </label>
        {f.full ? (
          <textarea rows={2} value={f.value} readOnly
            className="w-full bg-gray-50 text-sm text-gray-700 rounded-xl px-4 py-2.5 resize-none outline-none border border-gray-100 cursor-default" />
        ) : (
          <input type="text" value={f.value} readOnly
            className="w-full bg-gray-50 text-sm text-gray-700 rounded-xl px-4 py-2.5 outline-none border border-gray-100 cursor-default" />
        )}
      </div>
    ))}
    <div className="md:col-span-2">
      <label className="block text-xs font-medium text-gray-600 mb-1">
        Upload CV <span className="text-red-400">*</span>
      </label>
      <div className="w-full bg-indigo-50/60 border-2 border-dashed border-indigo-200 rounded-xl px-4 py-5 flex items-center gap-4">
        <span className="text-3xl">📦</span>
        <div>
          <p className="text-sm font-semibold text-indigo-600">cv-kandidat-batch-03.zip</p>
          <p className="text-xs text-gray-400">12 file PDF · 8.4 MB · Tervalidasi ✓</p>
        </div>
        <span className="ml-auto text-xs bg-emerald-100 text-emerald-700 font-semibold px-3 py-1 rounded-full">Siap</span>
      </div>
    </div>
    <div className="md:col-span-2 flex justify-end">
      <span className="bg-indigo-600 text-white text-sm font-semibold px-6 py-2.5 rounded-xl flex items-center gap-2 shadow-md shadow-indigo-200 cursor-default">
        🔍 Analyze CV
      </span>
    </div>
  </div>
);

/* ── OUTPUT (tabel + search + pagination) ── */
const allCandidates = [
  { rank: 1,  name: 'Budi Santoso',     degree: 'S1 - Teknik Informatika', univ: 'Universitas Indonesia',        exp: '5 tahun', email: 'budi.santoso@gmail.com',    wa: '0812-3456-7890', score: 92, status: 'Priority' },
  { rank: 2,  name: 'Sari Dewi',        degree: 'S1 - Sistem Informasi',    univ: 'Institut Teknologi Sepuluh Nopember', exp: '4 tahun', email: 'sari.dewi@outlook.com',     wa: '0813-2345-6789', score: 87, status: 'Priority' },
  { rank: 3,  name: 'Raka Pratama',     degree: 'S1 - Ilmu Komputer',       univ: 'Universitas Gadjah Mada',      exp: '3 tahun', email: 'raka.p@email.com',           wa: '0821-9876-5432', score: 81, status: 'Priority' },
  { rank: 4,  name: 'Anisa Putri',      degree: 'S1 - Teknik Elektro',      univ: 'Institut Teknologi Bandung',   exp: '2 tahun', email: 'anisa.putri@gmail.com',     wa: '0857-1234-5678', score: 76, status: 'Good Chance' },
  { rank: 5,  name: 'Dimas Ardianto',   degree: 'S1 - Teknik Informatika',  univ: 'Universitas Brawijaya',        exp: '4 tahun', email: 'dimas.a@company.co.id',     wa: '0818-7654-3210', score: 74, status: 'Good Chance' },
  { rank: 6,  name: 'Farah Nabilah',    degree: 'S2 - Computer Science',    univ: 'Universitas Indonesia',        exp: '6 tahun', email: 'farah.n@email.com',          wa: '0856-3456-7891', score: 72, status: 'Good Chance' },
  { rank: 7,  name: 'Gilang Ramadhan',  degree: 'S1 - Sistem Informasi',    univ: 'Universitas Diponegoro',       exp: '3 tahun', email: 'gilang.r@gmail.com',         wa: '0831-2345-6780', score: 69, status: 'Good Chance' },
  { rank: 8,  name: 'Hana Kusuma',      degree: 'S1 - Ilmu Komputer',       univ: 'Universitas Padjadjaran',      exp: '2 tahun', email: 'hana.k@email.id',            wa: '0878-8765-4321', score: 65, status: 'Good Chance' },
  { rank: 9,  name: 'Ivan Setiawan',    degree: 'S1 - Teknik Informatika',  univ: 'Universitas Bina Nusantara',   exp: '3 tahun', email: 'ivan.s@binus.ac.id',         wa: '0812-6543-2109', score: 63, status: 'Good Chance' },
  { rank: 10, name: 'Jasmine Hartono',  degree: 'S1 - Sistem Informasi',    univ: 'Universitas Atma Jaya',        exp: '1 tahun', email: 'jasmine.h@gmail.com',        wa: '0877-5432-1098', score: 61, status: 'Good Chance' },
];

const PAGE_SIZE = 5;

const OutputPreview = () => {
  const [search, setSearch] = useState('');
  const [page, setPage]     = useState(1);

  const filtered = useMemo(() =>
    allCandidates.filter(c =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.degree.toLowerCase().includes(search.toLowerCase()) ||
      c.univ.toLowerCase().includes(search.toLowerCase())
    ), [search]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const rows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleSearch = (v: string) => { setSearch(v); setPage(1); };

  return (
    <div className="flex flex-col gap-3">
      {/* header bar */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <p className="text-xs text-gray-400">
          {filtered.length} kandidat · score ≥ 60 · diurutkan tertinggi
        </p>
        <input
          type="text"
          value={search}
          onChange={e => handleSearch(e.target.value)}
          placeholder="Cari nama, jurusan, universitas..."
          className="text-xs border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-indigo-400 w-56 bg-gray-50"
        />
      </div>

      {/* table */}
      <div className="overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-3 py-3 font-semibold text-gray-500 w-8">#</th>
              <th className="text-left px-3 py-3 font-semibold text-gray-500">Nama</th>
              <th className="text-left px-3 py-3 font-semibold text-gray-500 hidden md:table-cell">Pendidikan</th>
              <th className="text-left px-3 py-3 font-semibold text-gray-500 hidden lg:table-cell">Universitas</th>
              <th className="text-left px-3 py-3 font-semibold text-gray-500 hidden md:table-cell">Exp</th>
              <th className="text-left px-3 py-3 font-semibold text-gray-500 hidden lg:table-cell">Email</th>
              <th className="text-left px-3 py-3 font-semibold text-gray-500 hidden lg:table-cell">WhatsApp</th>
              <th className="text-center px-3 py-3 font-semibold text-gray-500">Score</th>
              <th className="text-center px-3 py-3 font-semibold text-gray-500">Status</th>
              <th className="text-center px-3 py-3 font-semibold text-gray-500">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode="popLayout">
              {rows.map((c, i) => (
                <motion.tr
                  key={c.rank}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="border-b border-gray-50 hover:bg-indigo-50/30 transition-colors"
                >
                  <td className="px-3 py-3 text-gray-400 font-medium">{c.rank}</td>
                  <td className="px-3 py-3 font-semibold text-gray-900">{c.name}</td>
                  <td className="px-3 py-3 text-gray-600 hidden md:table-cell">{c.degree}</td>
                  <td className="px-3 py-3 text-gray-500 hidden lg:table-cell">{c.univ}</td>
                  <td className="px-3 py-3 text-gray-500 hidden md:table-cell">{c.exp}</td>
                  <td className="px-3 py-3 text-gray-500 hidden lg:table-cell">{c.email}</td>
                  <td className="px-3 py-3 text-gray-500 hidden lg:table-cell">{c.wa}</td>
                  <td className="px-3 py-3 text-center">
                    <span className={`inline-flex items-center justify-center w-9 h-9 rounded-full font-bold text-white ${c.score >= 80 ? 'bg-emerald-500' : 'bg-amber-400'}`}>
                      {c.score}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-center">
                    <span className={`text-[10px] font-semibold px-2 py-1 rounded-full whitespace-nowrap ${c.status === 'Priority' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                      {c.status === 'Priority' ? '⭐ Priority' : '👍 Good Chance'}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-center">
                    <span className="text-xs bg-white border border-gray-200 text-indigo-600 px-3 py-1.5 rounded-full cursor-default hover:bg-indigo-50 hover:border-indigo-300 transition-colors font-medium">
                      Detail
                    </span>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-1">
          <p className="text-xs text-gray-400">
            Halaman {page} dari {totalPages}
          </p>
          <div className="flex gap-1.5">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:border-indigo-400 hover:text-indigo-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              ← Prev
            </button>
            {Array.from({ length: totalPages }, (_, k) => k + 1).map(n => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`text-xs w-7 h-7 rounded-lg border transition-colors ${page === n ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-gray-200 text-gray-500 hover:border-indigo-400 hover:text-indigo-600'}`}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:border-indigo-400 hover:text-indigo-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

/* ── DETAIL ── */
const DetailPreview = () => (
  <div className="space-y-5">
    {/* candidate header */}
    <div className="flex items-start justify-between bg-gradient-to-r from-indigo-50 to-emerald-50 border border-indigo-100 rounded-2xl px-5 py-4 gap-4">
      <div>
        <h3 className="text-base font-bold text-gray-900 mb-0.5">Budi Santoso</h3>
        <p className="text-xs text-indigo-600 font-medium">S1 - Teknik Informatika</p>
        <p className="text-xs text-gray-500">Universitas Indonesia &nbsp;·&nbsp; 5 tahun pengalaman</p>
        <div className="flex gap-3 mt-2 text-xs text-gray-400">
          <span>✉ budi.santoso@gmail.com</span>
          <span>📱 0812-3456-7890</span>
        </div>
      </div>
      <div className="text-right flex-shrink-0">
        <p className="text-3xl font-extrabold text-emerald-600 leading-none">92</p>
        <p className="text-xs text-gray-400">/100</p>
        <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full mt-1 inline-block">⭐ Priority</span>
      </div>
    </div>

    {/* why match */}
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide mb-2 text-indigo-600">Mengapa Kandidat Ini Cocok</p>
      <div className="text-sm text-gray-600 leading-relaxed bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 space-y-1.5">
        <p>✅ <strong>Pengalaman teknis kuat:</strong> 5 tahun di industri dengan fokus React dan TypeScript — melampaui persyaratan minimum 3 tahun yang ditetapkan.</p>
        <p>✅ <strong>Stack sesuai 100%:</strong> Menguasai seluruh stack yang dibutuhkan — React, Redux, REST API, Git, dan pengalaman deploy ke AWS.</p>
        <p>✅ <strong>Sertifikasi relevan:</strong> Memiliki AWS Certified Developer yang secara eksplisit disebutkan sebagai nilai tambah dalam persyaratan posisi.</p>
        <p>✅ <strong>Rekam jejak kepemimpinan:</strong> Pernah menjabat sebagai Tech Lead di dua perusahaan — sesuai dengan kebutuhan peran senior yang memimpin tim.</p>
      </div>
    </div>

    {/* summary */}
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide mb-2 text-emerald-600">Ringkasan Profil</p>
      <div className="text-sm text-gray-600 leading-relaxed bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
        <p>Budi adalah seorang Senior Frontend Engineer dengan lebih dari 5 tahun pengalaman membangun aplikasi web skala besar di industri fintech dan e-commerce. Ia memulai karier di Tokopedia sebagai Frontend Developer sebelum naik jabatan menjadi Tech Lead di sebuah startup SaaS B2B. Portofolionya mencakup sistem dashboard real-time untuk 50.000+ pengguna aktif dan migrasi arsitektur besar dari jQuery ke React yang berhasil memangkas waktu load halaman hingga 60%. Di luar pekerjaan utama, Budi aktif berkontribusi pada open source dan rutin menulis artikel teknis di Medium seputar React performance optimization.</p>
      </div>
    </div>

    {/* skills */}
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide mb-2 text-amber-600">Skills & Tools</p>
      <div className="flex flex-wrap gap-2">
        {['React', 'TypeScript', 'Redux', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Git', 'Figma'].map(s => (
          <span key={s} className="text-xs bg-indigo-50 border border-indigo-100 text-indigo-700 px-3 py-1 rounded-full">{s}</span>
        ))}
      </div>
    </div>

    {/* review points */}
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide mb-2 text-red-500">Review Points</p>
      <ul className="space-y-1.5">
        <li className="flex items-start gap-2 text-sm text-gray-500"><span className="text-amber-400 mt-0.5">⚠</span> Belum berpengalaman dengan Kubernetes (tercantum sebagai opsional)</li>
        <li className="flex items-start gap-2 text-sm text-gray-500"><span className="text-amber-400 mt-0.5">⚠</span> Pengalaman React Native terbatas — cocok jika posisi murni web</li>
      </ul>
    </div>

    <span className="w-full bg-indigo-600 text-white text-sm font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-indigo-200 cursor-default">
      📥 Download CV Budi Santoso
    </span>
  </div>
);

/* ── MAIN ── */
const SimulasiSection = () => {
  const [active, setActive] = useState<Tab>('input');

  return (
    <section id="simulasi" className="py-24 px-6 bg-gray-50 relative overflow-hidden">
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

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-xl p-6"
          >
            {active === 'input'  && <InputPreview />}
            {active === 'output' && <OutputPreview />}
            {active === 'detail' && <DetailPreview />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SimulasiSection;
