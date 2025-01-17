// AllTourists.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { apiurl } from "./url";

const AllTourists = ({ countryName }) => {
  const [spots, setSpots] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const country = searchParams.get("country");

  useEffect(() => {
    setIsLoading(true);
    let url = `${apiurl}/spots`;
    if (country) {
      url = `${apiurl}/spotsbycountry?country_name=${country}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
        setIsLoading(false);
      });

    fetch(url, {
      mode: "no-cors",
      credentials: "include",
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => {
        console.error("Error retrieving spots:", error);
        setIsLoading(false);
      });
  }, [countryName]);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    if (e.target.value === "ascending") {
      setSpots([...spots].sort((a, b) => a.average_cost - b.average_cost));
    } else if (e.target.value === "descending") {
      setSpots([...spots].sort((a, b) => b.average_cost - a.average_cost));
    }
  };

  return (
    <div className="container mx-auto">
      <h1
        className="text-3xl text-center font-bold my-10"
        style={{ color: "#BD25C7" }}
      >
        All Tourists Spots
      </h1>
      <div className="flex justify-center mb-4">
        <label htmlFor="sortBy" className="mr-2 mt-1 text-2xl font-bold">
          Sort by:
        </label>
        <select
          id="sortBy"
          value={sortBy}
          onChange={handleSortChange}
          className="border p-2 font-semibold"
        >
          <option value="">Select</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <div className="absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
            <span className="loading loading-lg"></span>
          </div>
        ) : (
          spots.map((spot, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={spot.image}
                alt={spot.tourists_spot_name}
                className="w-full mb-2 rounded-lg"
                style={{ height: "250px" }}
              />
              <h2 className="text-xl font-semibold mb-2">
                {spot.tourists_spot_name}
              </h2>
              <p>
                <strong>Average Cost:</strong> {spot.average_cost}
              </p>
              <p>
                <strong>Total Visitors Per Year:</strong>{" "}
                {spot.totalVisitorsPerYear}
              </p>
              <p>
                <strong>Travel Time:</strong> {spot.travel_time}
              </p>
              <p>
                <strong>Seasonality:</strong> {spot.seasonality}
              </p>
              <p>
                <strong>average_cost:</strong> {spot.average_cost}
              </p>
              <br />
              <Link
                to={`/ViewDetails/${spot._id}`}
                className=" text-white font-bold py-2 px-4 rounded mt-40"
                style={{ background: "#A755CA" }}
              >
                View Details
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllTourists;
