import React, { useState, useContext } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../component/AuthProvider/AuthProvider";

const AddTourists = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const initialFormData = {
    image: "",
    tourists_spot_name: "",
    country_Name: "",
    location: "",
    short_description: "",
    average_cost: "",
    seasonality: "",
    travel_time: "",
    totalVisitorsPerYear: "",
    userEmail: user.email,
    userName: user.displayName,
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddTour = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch("http://localhost:3002/addSpot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Spot Added Successfully");
        setIsLoading(false);
        console.log(data);
        setFormData({ ...initialFormData });
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error adding spot:", error);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-purple-400 to-pink-500">
      <div className="container relative">
        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
            <span className="loading loading-lg"></span>
          </div>
        )}
        <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg flex flex-col items-center">
          <h1 className="text-3xl mb-8">Add Tourist Spots</h1>
          <form onSubmit={handleAddTour}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p>Image URL</p>
                <input
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  value={formData.image}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <p>Tourists Spot Name</p>
                <input
                  type="text"
                  name="tourists_spot_name"
                  placeholder="Tourists Spot Name"
                  value={formData.tourists_spot_name}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <p>Country Name</p>
                <input
                  type="text"
                  name="country_Name"
                  placeholder="Country Name"
                  value={formData.country_Name}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <p>Location</p>
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <p>Short Description</p>
                <input
                  type="text"
                  name="short_description"
                  placeholder="Short Description"
                  value={formData.short_description}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <p>Average Cost</p>
                <input
                  type="text"
                  name="average_cost"
                  placeholder="Average Cost"
                  value={formData.average_cost}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <p>Seasonality</p>
                <input
                  type="text"
                  name="seasonality"
                  placeholder="Seasonality"
                  value={formData.seasonality}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <p>Travel Time</p>
                <input
                  type="text"
                  name="travel_time"
                  placeholder="Travel Time"
                  value={formData.travel_time}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <p>Total Visitors Per Year</p>
                <input
                  type="text"
                  name="totalVisitorsPerYear"
                  placeholder="Total Visitors Per Year"
                  value={formData.totalVisitorsPerYear}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <button type="submit" className="btn btn-primary">
                Add Spot
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default AddTourists;
