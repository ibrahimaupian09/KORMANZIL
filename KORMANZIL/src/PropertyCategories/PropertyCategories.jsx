// Added new

import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    label: "Flats",
    slug: "flats",
    count: 640,
    color: "bg-purple-50 hover:bg-purple-100",
    iconBg: "bg-purple-100",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#6d28d9" strokeWidth="1.6">
        <rect x="3" y="4" width="22" height="20" rx="2" />
        <path d="M3 12h22M3 20h22M12 4v20M16 4v20" />
      </svg>
    ),
  },
  {
    id: 2,
    label: "Offices",
    slug: "offices",
    count: 310,
    color: "bg-gray-50 hover:bg-gray-100",
    iconBg: "bg-gray-100",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#374151" strokeWidth="1.6">
        <rect x="3" y="2" width="22" height="24" rx="2" />
        <path d="M9 7h10M9 12h10M9 17h6" />
        <rect x="11" y="20" width="6" height="6" />
      </svg>
    ),
  },
  {
    id: 3,
    label: "Shops",
    slug: "shops",
    count: 520,
    color: "bg-green-50 hover:bg-green-100",
    iconBg: "bg-green-100",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#15803d" strokeWidth="1.6">
        <rect x="3" y="12" width="22" height="14" rx="1" />
        <path d="M3 12l3-8h16l3 8" />
      </svg>
    ),
  },
  {
    id: 4,
    label: "Houses",
    slug: "houses",
    count: 1240,
    color: "bg-blue-50 hover:bg-blue-100",
    iconBg: "bg-blue-100",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#185fa5" strokeWidth="1.6">
        <path d="M4 26V13L14 4l10 9v13" />
      </svg>
    ),
  },
  {
    id: 5,
    label: "Plots",
    slug: "plots",
    count: 980,
    color: "bg-amber-50 hover:bg-amber-100",
    iconBg: "bg-amber-100",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#854F0B" strokeWidth="1.6">
        <rect x="3" y="3" width="22" height="22" rx="2" />
      </svg>
    ),
  },
];

const PropertyCategories = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-700 text-sm font-medium uppercase tracking-wider">
            Browse By Type
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Property Categories
          </h2>
          <p className="text-gray-500 mt-2 text-sm max-w-md mx-auto">
            Find exactly what you're looking for
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/properties/${cat.slug}`}
              className={`group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-gray-100 transition-all duration-200 ${cat.color} hover:border-gray-200 hover:-translate-y-1 hover:shadow-md`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${cat.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition`}>
                {cat.icon}
              </div>

              {/* Text */}
              <div className="text-center">
                <p className="text-gray-900 font-semibold text-sm">
                  {cat.label}
                </p>
                <p className="text-gray-400 text-xs mt-0.5">
                  {cat.count.toLocaleString()}+ listings
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;