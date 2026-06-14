import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo - text only, no icon */}
          <a href="#" className="text-xl font-bold text-gray-900">
            Teman<span className="text-indigo-600">HR</span>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#simulasi" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Simulasi</a>
            <a href="#fitur" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Fitur</a>
            <a href="#harga" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Harga</a>
          </nav>

          {/* Login only */}
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors">
            Login
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
