import { useState, useEffect, useRef } from "react";

const cities = [
  "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Peshawar",
  "Quetta", "Multan", "Faisalabad", "Sialkot", "Gujranwala",
];

const locationsByCity = {
  Islamabad: ["F-6", "F-7", "F-8", "DHA Phase 1", "Bahria Town"],
  Rawalpindi: ["Saddar", "Bahria Town", "DHA", "Satellite Town"],
  Lahore: ["DHA", "Gulberg", "Model Town", "Johar Town"],
  Karachi: ["DHA", "Clifton", "Gulshan-e-Iqbal", "North Nazimabad"],
  Peshawar: ["Hayatabad", "University Town", "Saddar"],
  default: ["Phase 1", "Phase 2", "Main Market"],
};

const bgImages = [
  "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=1600&q=80",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80",
];

const HomeBanner = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const [selectedCity, setSelectedCity] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  const [locationInput, setLocationInput] = useState("");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  const [showFilters, setShowFilters] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState({
    flat: [],
    house: [],
    plot: [],
    office: [],
    shop: [],
  });

  const cityRef = useRef(null);
  const locationRef = useRef(null);
  const filterRef = useRef(null);

  // AUTO SLIDER
  useEffect(() => {
    const t = setInterval(() => {
      setCurrentImg((p) => (p + 1) % bgImages.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  // OUTSIDE CLICK CLOSE
  useEffect(() => {
    const handleClick = (e) => {
      if (cityRef.current && !cityRef.current.contains(e.target))
        setShowCityDropdown(false);

      if (locationRef.current && !locationRef.current.contains(e.target))
        setShowLocationDropdown(false);

      if (filterRef.current && !filterRef.current.contains(e.target))
        setShowFilters(false);
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // FIX: CITY CHANGE RESETS LOCATION (IMPORTANT)
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setCityInput(city);
    setLocationInput(""); // RESET LOCATION
    setShowCityDropdown(false);
  };

  // FILTER TOGGLE
  const toggleFilter = (type, value) => {
    setSelectedFilters((prev) => {
      const exists = prev[type].includes(value);

      return {
        ...prev,
        [type]: exists
          ? prev[type].filter((v) => v !== value)
          : [...prev[type], value],
      };
    });
  };

  const totalFilters =
    Object.values(selectedFilters).flat().length;

  const locations =
    locationsByCity[selectedCity] || locationsByCity.default;

  const filteredCities = cities.filter((c) =>
    c.toLowerCase().includes(cityInput.toLowerCase())
  );

  const filteredLocations = locations.filter((l) =>
    l.toLowerCase().includes(locationInput.toLowerCase())
  );

  // SEARCH FUNCTION
  const handleSearch = () => {
    const payload = {
      city: selectedCity,
      location: locationInput,
      filters: selectedFilters,
    };

    console.log("SEARCH PAYLOAD:", payload);
    // TODO: send to API
  };

  return (
    <div className="relative w-full h-[580px] overflow-hidden">

      {/* BACKGROUND */}
      {bgImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${img})`,
            opacity: i === currentImg ? 1 : 0,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-black/55" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">

        <h1 className="text-4xl font-bold text-white mb-2 text-center">
          Find Your Dream Property
        </h1>

        {/* SEARCH BAR */}
        <div className="bg-white rounded-2xl p-3 w-full max-w-3xl">

          <div className="flex gap-2 items-center">

            {/* CITY */}
            <div ref={cityRef} className="relative flex-1">
              <input
                value={cityInput}
                onChange={(e) => {
                  setCityInput(e.target.value);
                  setShowCityDropdown(true);
                }}
                onClick={() => setShowCityDropdown(true)}
                placeholder="City"
                className="w-full border rounded-xl h-11 px-3 text-sm"
              />

              {showCityDropdown && (
                <div className="absolute bg-white border w-full mt-2 rounded-xl shadow max-h-48 overflow-auto">
                  {filteredCities.map((c) => (
                    <div
                      key={c}
                      onMouseDown={() => handleCitySelect(c)}
                      className="px-3 py-2 hover:bg-blue-50 cursor-pointer"
                    >
                      {c}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* LOCATION */}
            <div ref={locationRef} className="relative flex-1">
              <input
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
                onClick={() => setShowLocationDropdown(true)}
                placeholder="Location"
                className="w-full border rounded-xl h-11 px-3 text-sm"
              />

              {showLocationDropdown && (
                <div className="absolute bg-white border w-full mt-2 rounded-xl shadow max-h-48 overflow-auto">
                  {filteredLocations.map((l) => (
                    <div
                      key={l}
                      onMouseDown={() => {
                        setLocationInput(l);
                        setShowLocationDropdown(false);
                      }}
                      className="px-3 py-2 hover:bg-blue-50 cursor-pointer"
                    >
                      {l}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* FILTERS */}
            <div ref={filterRef} className="relative">
              <button
                onClick={() => setShowFilters((v) => !v)}
                className="border rounded-xl h-11 px-4 text-sm"
              >
                Filters ({totalFilters})
              </button>

              {showFilters && (
                <div className="absolute right-0 top-14 bg-white border rounded-xl shadow-xl w-[420px] p-4 max-h-[400px] overflow-y-auto">

                  {/* FLATS */}
                  <p className="text-xs text-gray-400 mb-2">Flats</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["1 Bed", "2 Bed", "3 Bed", "4 Bed"].map((v) => (
                      <button
                        key={v}
                        onMouseDown={() => toggleFilter("flat", v)}
                        className={`px-3 py-1 border rounded ${
                          selectedFilters.flat.includes(v)
                            ? "bg-blue-600 text-white"
                            : ""
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>

                  {/* HOUSES */}
                  <p className="text-xs text-gray-400 mb-2">Houses</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["3 Marla", "5 Marla", "7 Marla", "10 Marla", "1 Kanal"].map((v) => (
                      <button
                        key={v}
                        onMouseDown={() => toggleFilter("house", v)}
                        className={`px-3 py-1 border rounded ${
                          selectedFilters.house.includes(v)
                            ? "bg-blue-600 text-white"
                            : ""
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>

                  {/* PLOTS */}
                  <p className="text-xs text-gray-400 mb-2">Plots</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["3 Marla", "5 Marla", "7 Marla", "10 Marla", "1 Kanal"].map((v) => (
                      <button
                        key={v}
                        onMouseDown={() => toggleFilter("plot", v)}
                        className={`px-3 py-1 border rounded ${
                          selectedFilters.plot.includes(v)
                            ? "bg-blue-600 text-white"
                            : ""
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>

                  {/* OFFICES */}
                  <p className="text-xs text-gray-400 mb-2">Offices</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Small", "Medium", "Large"].map((v) => (
                      <button
                        key={v}
                        onMouseDown={() => toggleFilter("office", v)}
                        className={`px-3 py-1 border rounded ${
                          selectedFilters.office.includes(v)
                            ? "bg-blue-600 text-white"
                            : ""
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>

                  {/* SHOPS */}
                  <p className="text-xs text-gray-400 mb-2">Shops</p>
                  <div className="flex flex-wrap gap-2">
                    {["Small", "Medium", "Large"].map((v) => (
                      <button
                        key={v}
                        onMouseDown={() => toggleFilter("shop", v)}
                        className={`px-3 py-1 border rounded ${
                          selectedFilters.shop.includes(v)
                            ? "bg-blue-600 text-white"
                            : ""
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>

                </div>
              )}
            </div>

            {/* SEARCH BUTTON */}
            <button
              onClick={handleSearch}
              className="bg-blue-700 text-white px-6 h-11 rounded-xl"
            >
              Search
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeBanner;