import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigateTo = useNavigate();

  const [countries, setCountries] = useState([]);
  const handleCountryClick = (countryName) => {
    // Perform any action you want with the selected country
    console.log("Selected country:", countryName);
    // For example, you can navigate to a page showing spots for the selected country
    navigateTo(`/AllTouristsSpot?country=${encodeURIComponent(countryName)}`);
  };

  useEffect(() => {
    fetch("http://localhost:3002/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Countries</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {countries.map((country) => (
          <div
            key={country._id}
            className="bg-white rounded-lg shadow-md p-4"
            onClick={() => handleCountryClick(country.name)}
          >
            <img
              src={country.image}
              alt={country.name}
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{country.name}</h2>
            <p className="text-gray-600">{country.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
