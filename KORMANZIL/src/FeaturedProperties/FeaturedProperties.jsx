import { useState } from "react";

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    title: "Modern 5 Marla House",
    price: "PKR 1.85 Crore",
    location: "DHA Phase 2, Islamabad",
    size: "5 Marla",
    beds: 3,
    baths: 2,
    type: "House",
    badge: "For Sale",
    badgeColor: "bg-blue-700",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    title: "Luxury 10 Marla Villa",
    price: "PKR 4.2 Crore",
    location: "Bahria Town, Lahore",
    size: "10 Marla",
    beds: 5,
    baths: 4,
    type: "House",
    badge: "Featured",
    badgeColor: "bg-amber-500",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    title: "Commercial Plot F-9",
    price: "PKR 2.5 Crore",
    location: "F-9, Islamabad",
    size: "7 Marla",
    beds: null,
    baths: null,
    type: "Plot",
    badge: "For Sale",
    badgeColor: "bg-blue-700",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&q=80",
    title: "3 Bed Apartment Gulberg",
    price: "PKR 85,000 / mo",
    location: "Gulberg III, Lahore",
    size: "1800 sqft",
    beds: 3,
    baths: 2,
    type: "Flat",
    badge: "For Rent",
    badgeColor: "bg-green-600",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    title: "Ground Floor Shop Saddar",
    price: "PKR 45,000 / mo",
    location: "Saddar, Peshawar",
    size: "120 sqft",
    beds: null,
    baths: null,
    type: "Shop",
    badge: "For Rent",
    badgeColor: "bg-green-600",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    title: "Corporate Office Space",
    price: "PKR 1.2 Crore",
    location: "Blue Area, Islamabad",
    size: "2400 sqft",
    beds: null,
    baths: null,
    type: "Office",
    badge: "For Sale",
    badgeColor: "bg-blue-700",
  },
];

const typeColors = {
  House: "bg-blue-50 text-blue-700",
  Plot: "bg-amber-50 text-amber-700",
  Flat: "bg-purple-50 text-purple-700",
  Shop: "bg-green-50 text-green-700",
  Office: "bg-gray-100 text-gray-600",
};

const FeaturedProperties = () => {
  const [favourites, setFavourites] = useState([]);

  const toggleFav = (id) => {
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-blue-700 text-sm font-medium mb-1 uppercase tracking-wider">Top Listings</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Featured Properties</h2>
            <p className="text-gray-500 mt-2 text-sm">Hand-picked properties across Pakistan's top cities</p>
          </div>
          <a
            href="#"
            className="flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors no-underline"
          >
            View all listings
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {/* Badge */}
                <span className={`absolute top-3 left-3 ${p.badgeColor} text-white text-xs font-medium px-2.5 py-1 rounded-lg`}>
                  {p.badge}
                </span>
                {/* Favourite Button */}
                <button
                  onClick={(e) => { e.stopPropagation(); toggleFav(p.id); }}
                  className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center border-none cursor-pointer hover:bg-white transition-colors"
                >
                  <svg
                    width="16" height="16" viewBox="0 0 16 16"
                    fill={favourites.includes(p.id) ? "#ef4444" : "none"}
                    stroke={favourites.includes(p.id) ? "#ef4444" : "#6b7280"}
                    strokeWidth="1.5"
                  >
                    <path d="M8 14s-6-4.35-6-8.25A3.75 3.75 0 0 1 8 3a3.75 3.75 0 0 1 6 2.75C14 9.65 8 14 8 14z" />
                  </svg>
                </button>
              </div>

              {/* Card Body */}
              <div className="p-4">
                {/* Type Badge + Size */}
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-lg ${typeColors[p.type]}`}>
                    {p.type}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="1" y="1" width="14" height="14" rx="1" />
                      <path d="M1 6h14M6 1v14" />
                    </svg>
                    {p.size}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-gray-900 font-semibold text-base mb-1 leading-snug">{p.title}</h3>

                {/* Location */}
                <div className="flex items-center gap-1 text-gray-400 text-xs mb-3">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 2C5.8 2 4 3.8 4 6c0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4z" />
                    <circle cx="8" cy="6" r="1.5" />
                  </svg>
                  {p.location}
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-100 mb-3" />

                {/* Price + Beds/Baths */}
                <div className="flex items-center justify-between">
                  <span className="text-blue-700 font-bold text-base">{p.price}</span>
                  {p.beds !== null && (
                    <div className="flex items-center gap-3 text-gray-400 text-xs">
                      <span className="flex items-center gap-1">
                        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M1 10V7a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v3" />
                          <rect x="1" y="10" width="14" height="4" rx="1" />
                          <path d="M4 7h4" />
                        </svg>
                        {p.beds} Beds
                      </span>
                      <span className="flex items-center gap-1">
                        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M2 8h12v5H2zM4 8V5a2 2 0 0 1 4 0" />
                        </svg>
                        {p.baths} Baths
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-10">
          <button className="flex items-center gap-2 px-8 py-3 border border-blue-700 text-blue-700 text-sm font-medium rounded-xl hover:bg-blue-700 hover:text-white transition-colors cursor-pointer bg-transparent">
            Load more properties
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M8 3v10M3 9l5 5 5-5" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProperties;
