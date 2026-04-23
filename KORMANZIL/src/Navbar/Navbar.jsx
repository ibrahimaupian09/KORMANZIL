// New Code


import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Example auth mock (replace with real context)
const useAuth = () => {
  const [user, setUser] = useState({
    name: "Sign in",
    isAuthenticated: true,
  });

  const logout = () => {
    setUser(null);
  };

  return { user, logout };
};

const NAV_LINKS = [
  { label: "Flats", path: "/flats" },
  { label: "Offices", path: "/offices" },
  { label: "Shops", path: "/shops" },
  { label: "Houses", path: "/houses" },
  { label: "Plots", path: "/plots" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFavoriteActive, setIsFavoriteActive] = useState(false);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownItems = [
    { label: "My Profile", action: () => navigate("/profile") },
    { label: "My Installments", action: () => navigate("/installments") },
    { label: "Payment History", action: () => navigate("/payments") },
    { label: "Favourites", action: () => navigate("/favourites") },
    { label: "Messages", action: () => navigate("/messages") },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">K</span>
          </div>
          <span className="text-lg font-semibold text-gray-900">
            Kor <span className="text-blue-700">Manzil</span>
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">

          {/* Favourite */}
          <button
            onClick={() => setIsFavoriteActive(!isFavoriteActive)}
            className={`w-10 h-10 rounded-lg border flex items-center justify-center
              ${isFavoriteActive
                ? "bg-red-50 border-red-300"
                : "border-gray-200 hover:bg-gray-50"
              }`}
          >
            ❤️
          </button>

          {/* Auth Section */}
          {user?.isAuthenticated ? (
            <div ref={dropdownRef} className="relative">

              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-900"
              >
                {user.name}
                <span
                  className={`transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white border rounded-xl shadow-lg min-w-[200px] p-1.5">

                  {dropdownItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={item.action}
                      className="w-full text-left px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-50"
                    >
                      {item.label}
                    </button>
                  ))}

                  <div className="h-px bg-gray-200 my-1" />

                  <button
                    onClick={() => {
                      logout();
                      navigate("/login");
                    }}
                    className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="px-5 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-900"
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;