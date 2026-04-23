import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Raza",
    role: "Home Buyer",
    city: "Islamabad",
    avatar: "AR",
    avatarBg: "bg-blue-100",
    avatarColor: "text-blue-700",
    rating: 5,
    review:
      "Kor Manzil made buying my first home so easy. I found a verified 5 Marla house in DHA within a week. The installment plan feature is a game changer — highly recommended!",
    property: "5 Marla House, DHA Phase 2",
  },
  {
    id: 2,
    name: "Sana Malik",
    role: "Property Owner",
    city: "Lahore",
    avatar: "SM",
    avatarBg: "bg-purple-100",
    avatarColor: "text-purple-700",
    rating: 5,
    review:
      "I listed my shop on Kor Manzil and got genuine inquiries within 3 days. The owner dashboard is very easy to use and I could manage everything myself without any agent.",
    property: "Shop, Gulberg III",
  },
  {
    id: 3,
    name: "Tariq Shah",
    role: "Plot Investor",
    city: "Peshawar",
    avatar: "TS",
    avatarBg: "bg-amber-100",
    avatarColor: "text-amber-700",
    rating: 5,
    review:
      "I was looking for a 10 Marla plot in Hayatabad and found exactly what I needed. The location filters and verified listings saved me a lot of time and hassle.",
    property: "10 Marla Plot, Hayatabad",
  },
  {
    id: 4,
    name: "Fatima Noor",
    role: "Tenant",
    city: "Karachi",
    avatar: "FN",
    avatarBg: "bg-green-100",
    avatarColor: "text-green-700",
    rating: 4,
    review:
      "Found a beautiful 2-bed flat in Gulshan-e-Iqbal within my budget. The messaging feature let me talk directly to the owner without going through any broker. Very smooth experience.",
    property: "2 Bed Flat, Gulshan-e-Iqbal",
  },
  {
    id: 5,
    name: "Usman Khan",
    role: "Business Owner",
    city: "Rawalpindi",
    avatar: "UK",
    avatarBg: "bg-rose-100",
    avatarColor: "text-rose-700",
    rating: 5,
    review:
      "Rented an office in Blue Area through Kor Manzil. The process was transparent, no hidden charges, and the owner was genuine. Will definitely use again for my next property.",
    property: "Office, Blue Area",
  },
  {
    id: 6,
    name: "Zara Hussain",
    role: "Home Buyer",
    city: "Multan",
    avatar: "ZH",
    avatarBg: "bg-teal-100",
    avatarColor: "text-teal-700",
    rating: 5,
    review:
      "The search filters are amazing. I could filter by city, area, size and even installment availability. Found my dream home in New Multan in just 2 visits. Absolutely love this platform!",
    property: "7 Marla Home, New Multan",
  },
];

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <svg
        key={s}
        width="14" height="14" viewBox="0 0 16 16"
        fill={s <= rating ? "#f59e0b" : "none"}
        stroke={s <= rating ? "#f59e0b" : "#d1d5db"}
        strokeWidth="1.2"
      >
        <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const visible = 3;
  const total = testimonials.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  const visibleCards = [
    testimonials[active % total],
    testimonials[(active + 1) % total],
    testimonials[(active + 2) % total],
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-blue-700 text-sm font-medium mb-1 uppercase tracking-wider">Customer Reviews</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">What Our Users Say</h2>
            <p className="text-gray-500 mt-2 text-sm">Real experiences from real customers across Pakistan</p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center hover:border-blue-400 hover:text-blue-700 transition-colors cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M10 4L6 8l4 4" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center hover:border-blue-400 hover:text-blue-700 transition-colors cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 4l4 4-4 4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCards.map((t, i) => (
            <div
              key={t.id}
              className={`bg-white rounded-2xl border p-6 flex flex-col gap-4 transition-all duration-300
                ${i === 0 ? "border-blue-200 shadow-md" : "border-gray-100"}`}
            >
              {/* Quote Icon */}
              <svg width="28" height="28" viewBox="0 0 28 28" fill="#dbeafe">
                <path d="M4 18V10a6 6 0 0 1 6-6h1v4H9a2 2 0 0 0-2 2v1h4v7H4zm13 0V10a6 6 0 0 1 6-6h1v4h-2a2 2 0 0 0-2 2v1h4v7h-7z" />
              </svg>

              {/* Review Text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1">"{t.review}"</p>

              {/* Property Tag */}
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 14V7l6-5 6 5v7" />
                  <rect x="6" y="10" width="3" height="4" />
                </svg>
                {t.property}
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-100" />

              {/* User Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl ${t.avatarBg} flex items-center justify-center text-sm font-semibold ${t.avatarColor}`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role} · {t.city}</p>
                  </div>
                </div>
                <StarRating rating={t.rating} />
              </div>
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 border-none cursor-pointer
                ${i === active ? "bg-blue-700 w-5" : "bg-gray-300 w-2"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
