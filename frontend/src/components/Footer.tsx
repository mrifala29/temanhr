const footerLinks = {
  Produk: [
    { label: 'Fitur',     href: '#fitur'    },
    { label: 'Simulasi',  href: '#simulasi' },
    { label: 'Harga',     href: '#harga'    },
    { label: 'FAQ',       href: '#faq'      },
  ],
  Perusahaan: [
    { label: 'Tentang Kami',   href: '#' },
    { label: 'Blog',           href: '#' },
    { label: 'Karir',          href: '#' },
    { label: 'Hubungi Kami',   href: '#' },
  ],
  Legal: [
    { label: 'Kebijakan Privasi', href: '#' },
    { label: 'Syarat & Ketentuan', href: '#' },
    { label: 'Keamanan Data',      href: '#' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-white font-bold text-xl mb-2">
              🗒️ Teman<span className="text-indigo-400">HR</span>
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              Platform AI untuk mempercepat proses screening CV kandidat. Hemat waktu, temukan yang terbaik.
            </p>
            <div className="flex gap-3">
              {['𝕏', 'in', 'ig'].map((icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center text-xs font-bold text-gray-400 hover:text-white transition-colors">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-white text-sm font-semibold mb-4">{group}</p>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-14 bg-indigo-600/10 border border-indigo-500/20 rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-sm mb-0.5">Coba TemanHR Gratis</p>
            <p className="text-indigo-300 text-xs">3 sesi screening per bulan, tanpa kartu kredit.</p>
          </div>
          <a href="/auth/login" className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors flex-shrink-0">
            Mulai Gratis →
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© 2026 TemanHR. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-400 transition-colors">Privasi</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Ketentuan</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
