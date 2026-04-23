import { useState, useEffect, useRef } from "react";

const cities = [
  "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Peshawar",
  "Quetta", "Multan", "Faisalabad", "Sialkot", "Gujranwala",
  "Hyderabad", "Bahawalpur", "Sargodha", "Abbottabad", "Mardan",
  "Sukkur", "Larkana", "Sheikhupura", "Rahim Yar Khan", "Jhang",
];

const locationsByCity = {
  Islamabad: ["F-6", "F-7", "F-8", "F-9", "F-10", "F-11", "G-9", "G-10", "G-11", "G-13", "I-8", "I-10", "DHA Phase 1", "DHA Phase 2", "Bahria Town"],
  Rawalpindi: ["Saddar", "Westridge", "Chaklala", "Bahria Town", "DHA", "Satellite Town", "Gulzar-e-Quaid"],
  Lahore: ["DHA", "Gulberg", "Model Town", "Johar Town", "Bahria Town", "Garden Town", "Cantt", "Iqbal Town"],
  Karachi: ["DHA", "Clifton", "Gulshan-e-Iqbal", "North Nazimabad", "Korangi", "Malir", "Bahria Town"],
  Peshawar: ["Hayatabad", "University Town", "Saddar", "Regi Model Town", "Gulbahar", "Dalazak Road"],
  Quetta: ["Satellite Town", "Jinnah Town", "Cantt", "Airport Road"],
  Multan: ["Cantt", "Gulgasht Colony", "New Multan", "Bahria Town"],
  Faisalabad: ["Cantt", "Gulberg", "Samanabad", "Madina Town"],
  default: ["Phase 1", "Phase 2", "Block A", "Block B", "Sector C", "Main Market", "Town Center"],
};

const bgImages = [
  "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=1600&q=80",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
];

const HomeBanner = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const [selectedCity, setSelectedCity] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [locationInput, setLocationInput] = useState("");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [activeTab, setActiveTab] = useState("commercial");
  const [selectedFilters, setSelectedFilters] = useState([]);

  const cityRef = useRef(null);
  const locationRef = useRef(null);
  const filtersRef = useRef(null);

  const commercialOptions = ["1 Bed", "2 Bed", "3 Bed", "4 Bed", "Offices", "Shops"];
  const plotOptions = ["3 Marla", "5 Marla", "7 Marla", "10 Marla", "1 Kanal"];
  const homeOptions = ["3 Marla", "5 Marla", "7 Marla", "10 Marla", "1 Kanal"];

  // Auto-slide background
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % bgImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (cityRef.current && !cityRef.current.contains(e.target)) setShowCityDropdown(false);
      if (locationRef.current && !locationRef.current.contains(e.target)) setShowLocationDropdown(false);
      if (filtersRef.current && !filtersRef.current.contains(e.target)) setShowMoreFilters(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const filteredCities = cities.filter((c) =>
    c.toLowerCase().includes(cityInput.toLowerCase())
  );

  const locations = locationsByCity[selectedCity] || locationsByCity.default;
  const filteredLocations = locations.filter((l) =>
    l.toLowerCase().includes(locationInput.toLowerCase())
  );

  const toggleFilter = (val) => {
    setSelectedFilters((prev) =>
      prev.includes(val) ? prev.filter((f) => f !== val) : [...prev, val]
    );
  };

  return (
    <div className="relative w-full h-[580px] overflow-hidden">

      {/* Background Images */}
      {bgImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${img})`, opacity: i === currentImg ? 1 : 0 }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Slide Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {bgImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImg(i)}
            className={`h-2 rounded-full transition-all duration-300 border-none cursor-pointer
              ${i === currentImg ? "bg-white w-5" : "bg-white/50 w-2"}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-white text-center mb-2 tracking-tight">
          Find Your Dream Property
        </h1>
        <p className="text-white/75 text-base mb-8 text-center">
          Explore thousands of plots, homes, shops & offices across Pakistan
        </p>

        {/* Search Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-3 w-full max-w-3xl">
          <div className="flex items-center gap-2">

            {/* City Dropdown */}
            <div ref={cityRef} className="relative flex-1 min-w-0">
              <div
                className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 h-11 cursor-pointer hover:border-blue-400 transition-colors"
                onClick={() => { setShowCityDropdown((v) => !v); setShowLocationDropdown(false); setShowMoreFilters(false); }}
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="#9ca3af" strokeWidth="1.5">
                  <circle cx="8" cy="7" r="4" />
                  <path d="M8 1v2M8 11v2M1 7h2M11 7h2" />
                </svg>
                <input
                  type="text"
                  placeholder="Select City"
                  value={cityInput}
                  onChange={(e) => { setCityInput(e.target.value); setShowCityDropdown(true); }}
                  onClick={(e) => { e.stopPropagation(); setShowCityDropdown(true); setShowLocationDropdown(false); setShowMoreFilters(false); }}
                  className="flex-1 text-sm text-gray-700 outline-none bg-transparent placeholder-gray-400 min-w-0"
                />
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="#9ca3af" strokeWidth="1.8">
                  <path d="M2 4l4 4 4-4" />
                </svg>
              </div>

              {showCityDropdown && (
                <div className="absolute top-[calc(100%+6px)] left-0 w-full bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-52 overflow-y-auto p-1">
                  {filteredCities.length > 0 ? filteredCities.map((city) => (
                    <div
                      key={city}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        setSelectedCity(city);
                        setCityInput(city);
                        setShowCityDropdown(false);
                        setLocationInput("");
                      }}
                      className="px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-700 cursor-pointer transition-colors"
                    >
                      {city}
                    </div>
                  )) : (
                    <div className="px-3 py-2 text-sm text-gray-400">No cities found</div>
                  )}
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="w-px h-7 bg-gray-200 flex-shrink-0" />

            {/* Location Input */}
            <div ref={locationRef} className="relative flex-1 min-w-0">
              <div
                className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 h-11 cursor-pointer hover:border-blue-400 transition-colors"
                onClick={() => { setShowLocationDropdown((v) => !v); setShowCityDropdown(false); setShowMoreFilters(false); }}
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="#9ca3af" strokeWidth="1.5">
                  <path d="M8 2C5.8 2 4 3.8 4 6c0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4z" />
                  <circle cx="8" cy="6" r="1.5" />
                </svg>
                <input
                  type="text"
                  placeholder="Location / Area"
                  value={locationInput}
                  onChange={(e) => { setLocationInput(e.target.value); setShowLocationDropdown(true); }}
                  onClick={(e) => { e.stopPropagation(); setShowLocationDropdown(true); setShowCityDropdown(false); setShowMoreFilters(false); }}
                  className="flex-1 text-sm text-gray-700 outline-none bg-transparent placeholder-gray-400 min-w-0"
                />
              </div>

              {showLocationDropdown && filteredLocations.length > 0 && (
                <div className="absolute top-[calc(100%+6px)] left-0 w-full bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-52 overflow-y-auto p-1">
                  {filteredLocations.map((loc) => (
                    <div
                      key={loc}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        setLocationInput(loc);
                        setShowLocationDropdown(false);
                      }}
                      className="px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-700 cursor-pointer transition-colors"
                    >
                      {loc}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="w-px h-7 bg-gray-200 flex-shrink-0" />

            {/* More Filters */}
            <div ref={filtersRef} className="relative flex-shrink-0">
              <button
                onMouseDown={(e) => { e.preventDefault(); setShowMoreFilters((v) => !v); setShowCityDropdown(false); setShowLocationDropdown(false); }}
                className={`flex items-center gap-2 h-11 px-4 rounded-xl border text-sm font-medium transition-colors cursor-pointer
                  ${showMoreFilters || selectedFilters.length > 0
                    ? "bg-blue-50 border-blue-300 text-blue-700"
                    : "bg-transparent border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600"}`}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 4h12M4 8h8M6 12h4" />
                </svg>
                More filters
                {selectedFilters.length > 0 && (
                  <span className="bg-blue-700 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center leading-none">
                    {selectedFilters.length}
                  </span>
                )}
                <svg
                  width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8"
                  style={{ transform: showMoreFilters ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}
                >
                  <path d="M2 4l4 4 4-4" />
                </svg>
              </button>

              {showMoreFilters && (
                <div className="absolute right-0 top-[calc(100%+8px)] bg-white border border-gray-200 rounded-2xl shadow-xl z-50 w-[380px] p-4">

                  {/* Tabs */}
                  <div className="flex gap-2 mb-4">
                    <button
                      onMouseDown={(e) => { e.preventDefault(); setActiveTab("commercial"); }}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-colors cursor-pointer
                        ${activeTab === "commercial" ? "bg-blue-700 text-white border-blue-700" : "bg-transparent text-gray-500 border-gray-200 hover:border-blue-300"}`}
                    >
                      Commercial
                    </button>
                    <button
                      onMouseDown={(e) => { e.preventDefault(); setActiveTab("residential"); }}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-colors cursor-pointer
                        ${activeTab === "residential" ? "bg-blue-700 text-white border-blue-700" : "bg-transparent text-gray-500 border-gray-200 hover:border-blue-300"}`}
                    >
                      Residential
                    </button>
                  </div>

                  {/* Commercial Options */}
                  {activeTab === "commercial" && (
                    <div>
                      <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">Property Type</p>
                      <div className="flex flex-wrap gap-2">
                        {commercialOptions.map((opt) => (
                          <button
                            key={opt}
                            onMouseDown={(e) => { e.preventDefault(); toggleFilter(opt); }}
                            className={`px-3 py-1.5 rounded-lg text-sm border transition-colors cursor-pointer
                              ${selectedFilters.includes(opt)
                                ? "bg-blue-700 text-white border-blue-700"
                                : "bg-transparent text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600"}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Residential Options */}
                  {activeTab === "residential" && (
                    <div className="flex flex-col gap-4">
                      <div>
                        <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">Plots</p>
                        <div className="flex flex-wrap gap-2">
                          {plotOptions.map((opt) => (
                            <button
                              key={opt}
                              onMouseDown={(e) => { e.preventDefault(); toggleFilter("Plot: " + opt); }}
                              className={`px-3 py-1.5 rounded-lg text-sm border transition-colors cursor-pointer
                                ${selectedFilters.includes("Plot: " + opt)
                                  ? "bg-blue-700 text-white border-blue-700"
                                  : "bg-transparent text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600"}`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">Homes</p>
                        <div className="flex flex-wrap gap-2">
                          {homeOptions.map((opt) => (
                            <button
                              key={opt}
                              onMouseDown={(e) => { e.preventDefault(); toggleFilter("Home: " + opt); }}
                              className={`px-3 py-1.5 rounded-lg text-sm border transition-colors cursor-pointer
                                ${selectedFilters.includes("Home: " + opt)
                                  ? "bg-blue-700 text-white border-blue-700"
                                  : "bg-transparent text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600"}`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Clear Filters */}
                  {selectedFilters.length > 0 && (
                    <button
                      onMouseDown={(e) => { e.preventDefault(); setSelectedFilters([]); }}
                      className="mt-4 w-full py-2 text-sm text-red-500 border border-red-200 rounded-lg hover:bg-red-50 transition-colors cursor-pointer bg-transparent"
                    >
                      Clear all filters
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Search Button */}
            <button className="h-11 px-6 bg-blue-700 hover:bg-blue-900 text-white text-sm font-medium rounded-xl transition-colors cursor-pointer border-none flex items-center gap-2 flex-shrink-0">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.8">
                <circle cx="7" cy="7" r="4.5" />
                <path d="M10.5 10.5l3 3" />
              </svg>
              Search
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeBanner;
