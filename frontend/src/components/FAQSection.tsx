import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'Format file apa saja yang didukung?',
    a: 'CV harus dalam format PDF, dikemas dalam satu file ZIP. Sistem akan otomatis mengekstrak dan memvalidasi setiap file di dalamnya. File non-PDF di dalam ZIP akan ditolak.',
  },
  {
    q: 'Berapa banyak CV yang bisa diupload sekaligus?',
    a: 'Tergantung paket yang kamu gunakan. Paket Starter mendukung maksimal 10 CV per sesi, Paket Pro hingga 50 CV, dan Paket Enterprise tidak terbatas.',
  },
  {
    q: 'Bagaimana sistem menentukan score kandidat?',
    a: 'AI menganalisis setiap CV dan membandingkannya dengan persyaratan posisi yang kamu masukkan — meliputi pendidikan, pengalaman kerja, skill/tools, dan sertifikasi. Score 0–100 diberikan berdasarkan tingkat kesesuaian tersebut.',
  },
  {
    q: 'Apa perbedaan status "Priority" dan "Good to give chance"?',
    a: 'Kandidat dengan score 80–100 mendapat status Priority — mereka sangat sesuai dengan posisi. Kandidat dengan score 60–79 mendapat status "Good to give chance" — layak dipertimbangkan. Kandidat dengan score di bawah 60 tidak ditampilkan.',
  },
  {
    q: 'Apakah hasil screening tersimpan?',
    a: 'Ya. Semua hasil screening tersimpan di akun kamu dan bisa diakses kembali kapan saja tanpa perlu menganalisis ulang. Fitur ini tersedia di Paket Pro ke atas.',
  },
  {
    q: 'Apakah data CV kandidat aman?',
    a: 'Data CV disimpan secara terenkripsi dan hanya dapat diakses oleh akun rekruter yang mengunggahnya. Kami tidak membagikan data ke pihak ketiga.',
  },
  {
    q: 'Bagaimana jika tidak ada kandidat yang memenuhi threshold?',
    a: 'Jika tidak ada kandidat dengan score ≥ 60, sistem akan menampilkan notifikasi bahwa tidak ada kandidat yang memenuhi kriteria minimum. Kamu bisa mengubah persyaratan posisi dan menganalisis ulang.',
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Pertanyaan Umum</h2>
          <p className="text-gray-500 text-sm">Hal-hal yang sering ditanyakan tentang TemanHR.</p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm font-semibold text-gray-900">{faq.q}</span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors text-xs font-bold ${open === i ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {open === i ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-3">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
