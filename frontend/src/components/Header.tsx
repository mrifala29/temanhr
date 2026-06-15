const navLinks = [
  { label: 'Simulasi', href: '#simulasi' },
  { label: 'Analisa', href: '#analisa' },
  { label: 'Screening', href: '#screening' },
  { label: 'Harga', href: '#harga' },
];

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-gray-900">
          🤖 Teman<span className="text-indigo-600">HR</span>
        </a>
        <div className="flex items-center gap-6 text-sm">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/auth/login"
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
