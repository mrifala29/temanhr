import { motion } from 'framer-motion';

const steps = [
  {
    number: '1',
    icon: '🔐',
    title: 'Login',
    description: 'Daftar atau login ke akun TemanHR Anda'
  },
  {
    number: '2',
    icon: '📝',
    title: 'Isi Form Pekerjaan',
    description: 'Masukkan detail posisi, requirements, dan jumlah kandidat yang diinginkan'
  },
  {
    number: '3',
    icon: '📦',
    title: 'Upload CV',
    description: 'Upload file ZIP berisi CV kandidat dalam format PDF'
  },
  {
    number: '4',
    icon: '🤖',
    title: 'AI Analisis',
    description: 'Sistem AI menganalisis setiap CV dan memberikan score'
  },
  {
    number: '5',
    icon: '🏆',
    title: 'Lihat Hasil',
    description: 'Review kandidat terbaik dengan detail lengkap dan download CV'
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cara Kerja <span className="text-primary">TemanHR</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lima langkah mudah untuk mendapatkan kandidat terbaik
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="relative mx-auto w-24 h-24 mb-6"
                >
                  <div className="absolute inset-0 bg-primary/10 rounded-full" />
                  <div className="absolute inset-2 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-4xl">{step.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-primary">
                    <span className="text-primary font-bold text-sm">{step.number}</span>
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg shadow-primary/30 transition-all"
          >
            Coba Sekarang Gratis
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
