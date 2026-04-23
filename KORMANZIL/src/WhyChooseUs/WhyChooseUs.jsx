const features = [
  {
    id: 1,
    title: "Verified Listings",
    description: "Every property on Kor Manzil is manually verified by our team to ensure you only see genuine, accurate listings.",
    iconBg: "bg-blue-50",
    iconColor: "#185fa5",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#185fa5" strokeWidth="1.6">
        <path d="M14 3L4 7v8c0 6 4.5 10.5 10 12 5.5-1.5 10-6 10-12V7L14 3z" />
        <path d="M9 14l3.5 3.5L19 10" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Thousands of Listings",
    description: "From 3 Marla plots to 1 Kanal homes, from small shops to large offices — we have properties for every budget and need.",
    iconBg: "bg-amber-50",
    iconColor: "#854F0B",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#854F0B" strokeWidth="1.6">
        <rect x="3" y="10" width="8" height="15" rx="1" />
        <rect x="10" y="5" width="8" height="20" rx="1" />
        <rect x="17" y="13" width="8" height="12" rx="1" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Easy Installment Plans",
    description: "Buy your dream property with flexible installment options. Track your payments and schedule directly from your dashboard.",
    iconBg: "bg-green-50",
    iconColor: "#15803d",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#15803d" strokeWidth="1.6">
        <rect x="3" y="5" width="22" height="18" rx="2" />
        <path d="M3 11h22" />
        <path d="M8 16h4M8 20h6" />
        <circle cx="20" cy="18" r="4" fill="#dcfce7" stroke="#15803d" />
        <path d="M18.5 18l1 1 2-2" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Trusted by Thousands",
    description: "Over 10,000+ buyers, sellers, and owners across Pakistan trust Kor Manzil for their property needs every day.",
    iconBg: "bg-purple-50",
    iconColor: "#6d28d9",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#6d28d9" strokeWidth="1.6">
        <circle cx="10" cy="9" r="4" />
        <circle cx="20" cy="9" r="3" />
        <path d="M2 24c0-4.4 3.6-8 8-8s8 3.6 8 8" />
        <path d="M22 16c2.2.8 4 3 4 6" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Direct Owner Contact",
    description: "Connect directly with property owners or agents. No middlemen — message, call, or schedule a visit right from the platform.",
    iconBg: "bg-rose-50",
    iconColor: "#be123c",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#be123c" strokeWidth="1.6">
        <path d="M5 4h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9l-6 4V6a2 2 0 0 1 2-2z" />
        <path d="M9 11h10M9 15h6" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Nationwide Coverage",
    description: "Listings from all major cities — Islamabad, Lahore, Karachi, Peshawar, Quetta and beyond. Find property anywhere in Pakistan.",
    iconBg: "bg-teal-50",
    iconColor: "#0f766e",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#0f766e" strokeWidth="1.6">
        <circle cx="14" cy="14" r="11" />
        <path d="M3 14h22" />
        <path d="M14 3c-3 3-5 6-5 11s2 8 5 11c3-3 5-6 5-11s-2-8-5-11z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "10,000+", label: "Happy Customers" },
  { value: "25,000+", label: "Active Listings" },
  { value: "50+", label: "Cities Covered" },
  { value: "99%", label: "Verified Properties" },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-blue-700 text-sm font-medium mb-1 uppercase tracking-wider">Our Advantages</p>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Why Choose Kor Manzil?</h2>
          <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
            We make finding, buying, renting, and selling property in Pakistan simple, transparent, and trustworthy.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((f) => (
            <div
              key={f.id}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div className={`w-14 h-14 ${f.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                {f.icon}
              </div>
              <h3 className="text-gray-900 font-semibold text-base mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-blue-700 rounded-2xl px-8 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-white text-3xl font-bold tracking-tight">{s.value}</p>
              <p className="text-blue-200 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
