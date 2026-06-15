const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-white font-bold text-lg mb-1">
            Teman<span className="text-indigo-400">HR</span>
          </p>
          <p className="text-xs text-gray-500">Platform AI untuk screening CV kandidat.</p>
        </div>

        <nav className="flex gap-6 text-sm">
          <a href="#fitur" className="hover:text-white transition-colors">Fitur</a>
          <a href="#simulasi" className="hover:text-white transition-colors">Simulasi</a>
          <a href="#harga" className="hover:text-white transition-colors">Harga</a>
        </nav>

        <p className="text-xs text-gray-600">© 2026 TemanHR. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
