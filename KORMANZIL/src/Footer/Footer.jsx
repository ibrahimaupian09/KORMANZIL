const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="1.8">
                  <path d="M3 18V9l7-6 7 6v9" />
                  <rect x="7" y="12" width="3" height="6" />
                  <rect x="11" y="12" width="3" height="4" />
                </svg>
              </div>
              <span className="text-white text-lg font-semibold tracking-tight">
                Kor <span className="text-blue-400">Manzil</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Pakistan's trusted property platform. Find, buy, rent, or sell plots, homes, shops and offices across the country.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                {
                  label: "Facebook",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                    </svg>
                  ),
                },
                {
                  label: "Twitter",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  ),
                },
                {
                  label: "YouTube",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.5 6.2a2.8 2.8 0 0 0-2-2C18.9 4 12 4 12 4s-6.9 0-8.5.2a2.8 2.8 0 0 0-2 2C1.3 7.9 1.3 12 1.3 12s0 4.1.2 5.8a2.8 2.8 0 0 0 2 2C5.1 20 12 20 12 20s6.9 0 8.5-.2a2.8 2.8 0 0 0 2-2c.2-1.7.2-5.8.2-5.8s0-4.1-.2-5.8zM9.8 15.5V8.5l6.4 3.5-6.4 3.5z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  title={s.label}
                  className="w-9 h-9 bg-gray-800 hover:bg-blue-700 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200 no-underline"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {["Home", "Browse Properties", "Post a Property", "How It Works", "About Us", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-white transition-colors no-underline flex items-center gap-1.5 group">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8"
                      className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0 duration-200">
                      <path d="M2 6h8M6 2l4 4-4 4" />
                    </svg>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Property Types</h4>
            <ul className="flex flex-col gap-2.5">
              {["Houses for Sale", "Plots for Sale", "Flats for Rent", "Shops for Rent", "Offices for Sale", "Commercial Properties"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-white transition-colors no-underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="#60a5fa" strokeWidth="1.5">
                    <path d="M8 2C5.8 2 4 3.8 4 6c0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4z" />
                    <circle cx="8" cy="6" r="1.5" />
                  </svg>
                </div>
                <span>Office 4, Gulberg Business Center, Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="#60a5fa" strokeWidth="1.5">
                    <path d="M2 3h12v10H2zM2 3l6 5 6-5" />
                  </svg>
                </div>
                <a href="mailto:info@kormanzil.pk" className="hover:text-white transition-colors no-underline">
                  info@kormanzil.pk
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="#60a5fa" strokeWidth="1.5">
                    <path d="M2 3a1 1 0 0 1 1-1h2.5l1 3-1.5 1.5a9 9 0 0 0 4.5 4.5L11 9.5l3 1V13a1 1 0 0 1-1 1C6 14 2 10 2 5V3z" />
                  </svg>
                </div>
                <a href="tel:+923001234567" className="hover:text-white transition-colors no-underline">
                  +92 300 123 4567
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-white text-sm font-medium mb-2">Get property alerts</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-gray-800 border border-gray-700 text-white text-sm rounded-lg px-3 py-2 outline-none focus:border-blue-500 placeholder-gray-500 min-w-0"
                />
                <button className="bg-blue-700 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg transition-colors cursor-pointer border-none flex-shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© 2026 Kor Manzil. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="hover:text-gray-400 transition-colors no-underline">
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
