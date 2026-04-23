const steps = [
  {
    id: 1,
    title: "Search Your Property",
    description: "Use our smart search to filter by city, area, property type, and size. Find thousands of verified listings across Pakistan in seconds.",
    iconBg: "bg-blue-50",
    iconColor: "#185fa5",
    stepColor: "bg-blue-700",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#185fa5" strokeWidth="1.6">
        <circle cx="14" cy="14" r="8" />
        <path d="M20 20l6 6" strokeLinecap="round" />
        <path d="M11 14h6M14 11v6" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Explore & Shortlist",
    description: "Browse detailed property pages with photos, location maps, and owner info. Save your favourites and compare properties side by side.",
    iconBg: "bg-amber-50",
    iconColor: "#854F0B",
    stepColor: "bg-amber-500",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#854F0B" strokeWidth="1.6">
        <path d="M16 28s-12-8.7-12-16.5A7.5 7.5 0 0 1 16 6a7.5 7.5 0 0 1 12 5.5C28 19.3 16 28 16 28z" />
        <circle cx="16" cy="13" r="3" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Book a Visit",
    description: "Schedule a site visit directly with the owner or agent. Pick a date and time that suits you — right from your dashboard.",
    iconBg: "bg-green-50",
    iconColor: "#15803d",
    stepColor: "bg-green-600",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#15803d" strokeWidth="1.6">
        <rect x="4" y="6" width="24" height="22" rx="2" />
        <path d="M4 13h24" />
        <path d="M10 4v4M22 4v4" />
        <path d="M10 19h4v4h-4z" fill="#dcfce7" stroke="#15803d" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Seal the Deal",
    description: "Finalize your purchase or rental agreement with full transparency. Choose installment plans or full payment — we support both.",
    iconBg: "bg-purple-50",
    iconColor: "#6d28d9",
    stepColor: "bg-purple-600",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#6d28d9" strokeWidth="1.6">
        <path d="M6 16l7 7L26 9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <circle cx="16" cy="16" r="13" />
      </svg>
    ),
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-blue-700 text-sm font-medium mb-1 uppercase tracking-wider">Simple Process</p>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">How It Works</h2>
          <p className="text-gray-500 mt-2 text-sm max-w-md mx-auto">
            From searching to sealing the deal — we've made the entire property journey smooth and simple.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">

          {/* Connector Line (desktop only) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-gray-200 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center">

                {/* Step Number + Icon */}
                <div className="relative mb-5">
                  <div className={`w-20 h-20 ${step.iconBg} rounded-2xl flex items-center justify-center border-2 border-white shadow-sm`}>
                    {step.icon}
                  </div>
                  <span className={`absolute -top-2 -right-2 w-6 h-6 ${step.stepColor} text-white text-xs font-bold rounded-full flex items-center justify-center shadow`}>
                    {step.id}
                  </span>
                </div>

                {/* Text */}
                <h3 className="text-gray-900 font-semibold text-base mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 bg-gray-50 rounded-2xl border border-gray-100 p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-gray-900 font-bold text-lg">Ready to find your dream property?</h3>
            <p className="text-gray-500 text-sm mt-1">Join thousands of happy buyers and renters on Kor Manzil today.</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button className="px-6 py-2.5 border border-blue-700 text-blue-700 text-sm font-medium rounded-xl hover:bg-blue-50 transition-colors cursor-pointer bg-transparent">
              Browse Listings
            </button>
            <button className="px-6 py-2.5 bg-blue-700 text-white text-sm font-medium rounded-xl hover:bg-blue-900 transition-colors cursor-pointer border-none">
              Post a Property
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
