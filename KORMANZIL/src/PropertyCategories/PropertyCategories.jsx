const categories = [
  {
    id: 1,
    label: "Houses",
    count: "1,240+ listings",
    color: "bg-blue-50 hover:bg-blue-100",
    iconBg: "bg-blue-100",
    iconColor: "#185fa5",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#185fa5" strokeWidth="1.6">
        <path d="M4 26V13L14 4l10 9v13" />
        <rect x="10" y="18" width="4" height="8" />
        <rect x="16" y="14" width="4" height="5" />
      </svg>
    ),
  },
  {
    id: 2,
    label: "Plots",
    count: "980+ listings",
    color: "bg-amber-50 hover:bg-amber-100",
    iconBg: "bg-amber-100",
    iconColor: "#854F0B",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#854F0B" strokeWidth="1.6">
        <rect x="3" y="3" width="22" height="22" rx="2" />
        <path d="M3 14h22M14 3v22" />
        <path d="M3 8.5h5M3 19.5h5M20 8.5h5M20 19.5h5" />
      </svg>
    ),
  },
  {
    id: 3,
    label: "Flats",
    count: "640+ listings",
    color: "bg-purple-50 hover:bg-purple-100",
    iconBg: "bg-purple-100",
    iconColor: "#6d28d9",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#6d28d9" strokeWidth="1.6">
        <rect x="3" y="4" width="22" height="20" rx="2" />
        <path d="M3 12h22M3 20h22M12 4v20M16 4v20" />
      </svg>
    ),
  },
  {
    id: 4,
    label: "Offices",
    count: "310+ listings",
    color: "bg-gray-50 hover:bg-gray-100",
    iconBg: "bg-gray-100",
    iconColor: "#374151",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#374151" strokeWidth="1.6">
        <rect x="3" y="2" width="22" height="24" rx="2" />
        <path d="M9 7h10M9 12h10M9 17h6" />
        <rect x="11" y="20" width="6" height="6" />
      </svg>
    ),
  },
  {
    id: 5,
    label: "Shops",
    count: "520+ listings",
    color: "bg-green-50 hover:bg-green-100",
    iconBg: "bg-green-100",
    iconColor: "#15803d",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#15803d" strokeWidth="1.6">
        <rect x="3" y="12" width="22" height="14" rx="1" />
        <path d="M3 12l3-8h16l3 8" />
        <path d="M14 12v14" />
        <rect x="8" y="18" width="5" height="8" />
        <rect x="15" y="18" width="5" height="5" />
      </svg>
    ),
  },
  {
    id: 6,
    label: "Commercial",
    count: "180+ listings",
    color: "bg-rose-50 hover:bg-rose-100",
    iconBg: "bg-rose-100",
    iconColor: "#be123c",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#be123c" strokeWidth="1.6">
        <rect x="3" y="6" width="22" height="20" rx="1" />
        <path d="M8 6V3h12v3" />
        <path d="M9 12h3v4H9zM16 12h3v4h-3zM9 20h3v6H9zM16 20h3v6h-3z" />
      </svg>
    ),
  },
];

const PropertyCategories = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-blue-700 text-sm font-medium mb-1 uppercase tracking-wider">Browse By Type</p>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Property Categories</h2>
          <p className="text-gray-500 mt-2 text-sm max-w-md mx-auto">
            Find exactly what you're looking for by browsing our property categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href="#"
              className={`group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-gray-100 transition-all duration-200 cursor-pointer no-underline ${cat.color} hover:border-gray-200 hover:-translate-y-1 hover:shadow-md`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${cat.iconBg} rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110`}>
                {cat.icon}
              </div>

              {/* Label */}
              <div className="text-center">
                <p className="text-gray-900 font-semibold text-sm">{cat.label}</p>
                <p className="text-gray-400 text-xs mt-0.5">{cat.count}</p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PropertyCategories;
