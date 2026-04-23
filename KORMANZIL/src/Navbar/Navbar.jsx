import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [favActive, setFavActive] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = ["Commercial", "Plots", "Houses", "Offices", "Shops"];

  const dropdownItems = [
    {
      label: "My Profile",
      icon: (
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="8" cy="5" r="3" />
          <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        </svg>
      ),
    },
    {
      label: "My Installments",
      icon: (
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="12" height="10" rx="1" />
          <path d="M5 7h6M5 10h4" />
        </svg>
      ),
    },
    {
      label: "Payment History",
      icon: (
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="4" width="14" height="9" rx="1" />
          <path d="M4 4V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1" />
          <path d="M1 8h14" />
        </svg>
      ),
    },
    {
      label: "Favourites",
      icon: (
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 14s-6-4.35-6-8.25A3.75 3.75 0 0 1 8 3a3.75 3.75 0 0 1 6 2.75C14 9.65 8 14 8 14z" />
        </svg>
      ),
    },
    {
      label: "Messages",
      icon: (
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 2h12v9H2z" />
          <path d="M5 14l3-3 3 3" />
        </svg>
      ),
    },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 no-underline">
          <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="1.8">
              <path d="M3 18V9l7-6 7 6v9" />
              <rect x="7" y="12" width="3" height="6" />
              <rect x="11" y="12" width="3" height="4" />
            </svg>
          </div>
          <span className="text-lg font-semibold text-gray-900 tracking-tight">
            Kor <span className="text-blue-700">Manzil</span>
          </span>
        </a>

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150 no-underline"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Favourite Button */}
          <button
            onClick={() => setFavActive(!favActive)}
            title="Favourites"
            className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-colors duration-150 cursor-pointer
              ${favActive
                ? "bg-red-50 border-red-300"
                : "bg-transparent border-gray-200 hover:bg-gray-50"
              }`}
          >
            <svg
              width="18" height="18" viewBox="0 0 18 18"
              fill={favActive ? "#ef4444" : "none"}
              stroke={favActive ? "#ef4444" : "#6b7280"}
              strokeWidth="1.5"
            >
              <path d="M9 15s-6-4.35-6-8.25A3.75 3.75 0 0 1 9 4.5a3.75 3.75 0 0 1 6 2.25C15 10.65 9 15 9 15z" />
            </svg>
          </button>

          {/* Sign In with Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-900 transition-colors duration-150 cursor-pointer border-none"
            >
              Sign in
              <svg
                width="12" height="12" viewBox="0 0 12 12" fill="none"
                stroke="white" strokeWidth="1.8"
                style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
              >
                <path d="M2 4l4 4 4-4" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg min-w-[200px] p-1.5 z-50">
                {dropdownItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors duration-100 cursor-pointer"
                  >
                    {item.icon}
                    {item.label}
                  </div>
                ))}

                <div className="h-px bg-gray-200 my-1" />

                <div className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-100 cursor-pointer">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 14H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3" />
                    <path d="M11 11l3-3-3-3" />
                    <path d="M14 8H6" />
                  </svg>
                  Sign out
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
