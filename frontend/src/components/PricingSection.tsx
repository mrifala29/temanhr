import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: 'Gratis',
    period: '',
    description: 'Untuk rekruter yang ingin mencoba platform',
    features: [
      '3 sesi screening per bulan',
      'Maksimal 10 CV per sesi',
      'Ranking top 5 kandidat',
      'Detail analisis kandidat',
      'Download CV kandidat',
    ],
    cta: 'Mulai Gratis',
    highlight: false,
  },
  {
    name: 'Pro',
    price: 'Rp 149.000',
    period: '/ bulan',
    description: 'Untuk rekruter aktif dengan kebutuhan rutin',
    features: [
      'Unlimited sesi screening',
      'Maksimal 50 CV per sesi',
      'Ranking top 20 kandidat',
      'Detail analisis kandidat',
      'Download CV kandidat',
      'Riwayat screening tersimpan',
      'Prioritas pemrosesan AI',
    ],
    cta: 'Mulai Pro',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Untuk tim HR dan perusahaan besar',
    features: [
      'Unlimited sesi & CV',
      'Ranking kandidat tidak terbatas',
      'Multi-user (tim HR)',
      'API integration',
      'Custom job template',
      'Dedicated support',
      'SLA & keamanan data',
    ],
    cta: 'Hubungi Kami',
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section id="harga" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Harga</h2>
          <p className="text-gray-500 text-sm">Pilih paket yang sesuai kebutuhanmu.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-2xl border p-7 flex flex-col gap-5 ${
                plan.highlight
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-200'
                  : 'bg-white border-gray-200 text-gray-900'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1 rounded-full">
                  Paling Populer
                </span>
              )}

              <div>
                <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${plan.highlight ? 'text-indigo-200' : 'text-indigo-600'}`}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-3xl font-extrabold">{plan.price}</span>
                  {plan.period && (
                    <span className={`text-sm mb-1 ${plan.highlight ? 'text-indigo-200' : 'text-gray-400'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`text-sm ${plan.highlight ? 'text-indigo-200' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="flex flex-col gap-2.5">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <span className={plan.highlight ? 'text-indigo-200' : 'text-indigo-500'}>✓</span>
                    <span className={plan.highlight ? 'text-indigo-100' : 'text-gray-600'}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-auto w-full py-3 rounded-xl text-sm font-semibold transition-colors ${
                  plan.highlight
                    ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
