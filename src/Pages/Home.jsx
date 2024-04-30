import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../Pages/Hero";
import { Link } from "react-router-dom";
import AllTourists from "./AllTourists";
import Lottie from "lottie-react";
import travelanim from "./travel.json";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const navigateTo = useNavigate();

  const featuredPackages = [
    {
      id: 1,
      name: "Romantic Getaway in Paris",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR19ehxsLIwe35gPXyic9ZCYp1da3Q3cPUpy6qzs-7Dkw&s",
      description: "Experience the romance of Paris with your loved one.",
      price: "$1500",
    },
    {
      id: 2,
      name: "Adventure in the Swiss Alps",
      image:
        "https://lp-cms-production.imgix.net/2023-07/GettyImages-808144682.jpeg?auto=format&w=1440&h=810&fit=crop&q=75",
      description:
        "Embark on an adrenaline-filled adventure in the breathtaking Swiss Alps.",
      price: "$2000",
    },
    {
      id: 3,
      name: "Relaxing Beach Vacation in Bali",
      image:
        "https://imageio.forbes.com/specials-images/imageserve/675172642/pura-ulun-danu-bratan-temple-in-Bali-/960x0.jpg?format=jpg&width=960",
      description:
        "Unwind on the stunning beaches of Bali and explore its vibrant culture.",
      price: "$1800",
    },
  ];

  const travelTips = [
    {
      id: 1,
      title: "Packing Essentials for Every Traveler",
      content:
        "Don't forget to pack your passport, travel adapter, and comfortable shoes!",
    },
    {
      id: 2,
      title: "Navigating Public Transportation in Foreign Cities",
      content:
        "Research local transportation options ahead of time to save time and money during your trip.",
    },
    {
      id: 3,
      title: "Staying Safe While Traveling Solo",
      content:
        "Share your itinerary with someone you trust, and stay aware of your surroundings at all times.",
    },
  ];

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
    <>
      <div>
        <Hero></Hero>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl text-center font-bold">Countries</h1>
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

      <div className="container mx-auto px-4 py-8">
        <AllTourists></AllTourists>
      </div>
      <hr></hr>
      <div className="container mx-auto px-4 py-8">
        <section className="mt-12">
          <h1 className="text-3xl text-center font-bold">Featured Packages</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "24vh",
            }}
          >
            <Lottie
              animationData={travelanim}
              loop={true}
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          ;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full mb-2 rounded-lg"
                  style={{ height: "250px" }}
                />
                <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                <p>{pkg.description}</p>
                <p className="font-bold mt-2">Price: {pkg.price}</p>
                <Link
                  className="mt-4 block text-center text-white font-bold py-2 px-4 rounded"
                  style={{ background: "#A755CA" }}
                >
                  View Package
                </Link>
              </div>
            ))}
          </div>
        </section>
        <hr></hr>
        <hr></hr>
        <section className="mt-12">
          <h1 className="text-3xl text-center font-bold">Travel Tips</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {travelTips.map((tip) => (
              <div key={tip.id} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                <p>{tip.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
