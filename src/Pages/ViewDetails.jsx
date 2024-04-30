import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
  const { id } = useParams();
  const [spot, setSpot] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3002/spotsbyId/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Spot not found");
        }
        return res.json();
      })
      .then((data) => {
        setSpot(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching spot:", error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return (
      <div className="absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
        <span className="loading loading-lg"></span>
      </div>
    );
  }

  if (!spot) {
    return <div>Spot not found</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl mb-4 font-bold  text-center">View Details</h1>
      {/* <div className="bg-white p-4 rounded-lg shadow-md min-h-screen">
        <img
          src={spot.image}
          alt={spot.tourists_spot_name}
          className="w-full mb-2 rounded-lg"
          style={{ height: "400px" }}
        />
        <h2 className="text-xl font-semibold mb-2">
          {spot.tourists_spot_name}
        </h2>
        <p>
          <strong>Country:</strong> {spot.country_Name}
        </p>
        <p>
          <strong>Location:</strong> {spot.location}
        </p>
        <p>
          <strong>Short Description:</strong> {spot.short_description}
        </p>
        <p>
          <strong>Average Cost:</strong> {spot.average_cost}
        </p>
        <p>
          <strong>Seasonality:</strong> {spot.seasonality}
        </p>
        <p>
          <strong>Travel Time:</strong> {spot.travel_time}
        </p>
        <p>
          <strong>Total Visitors Per Year:</strong> {spot.totalVisitorsPerYear}
        </p>
        <p>
          <strong>User Email:</strong> {spot.userEmail}
        </p>
        <p>
          <strong>User Name:</strong> {spot.userName}
        </p>
      </div> */}
      <div className="card lg:card-side bg-base-100 shadow-xl m-20">
  <figure> <img
          src={spot.image}
          alt={spot.tourists_spot_name}
          className="w-full mb-2 rounded-lg"
          style={{ height: "400px" }}
        /></figure>
  <div className="card-body">
  <h2 className="text-xl font-semibold mb-2">
          {spot.tourists_spot_name}
        </h2>
        <p>
          <strong>Country:</strong> {spot.country_Name}
        </p>
        <p>
          <strong>Location:</strong> {spot.location}
        </p>
        <p>
          <strong>Short Description:</strong> {spot.short_description}
        </p>
        <p>
          <strong>Average Cost:</strong> {spot.average_cost}
        </p>
        <p>
          <strong>Seasonality:</strong> {spot.seasonality}
        </p>
        <p>
          <strong>Travel Time:</strong> {spot.travel_time}
        </p>
        <p>
          <strong>Total Visitors Per Year:</strong> {spot.totalVisitorsPerYear}
        </p>
        <p>
          <strong>User Email:</strong> {spot.userEmail}
        </p>
        <p>
          <strong>User Name:</strong> {spot.userName}
        </p>
  </div>
</div>
    </div>
  );
};

export default ViewDetails;
