import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../component/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { apiurl } from "./url";

const MyList = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const [spots, setSpots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchSpots(user.email);
  }, []);

  const confirmDelete = async (spotIds) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${apiurl}/deleteSpot/${spotIds}`, {
        method: "DELETE",
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete spot");
      }
      setIsLoading(false);
      fetchSpots(user.email);
      toast.success("Spot deleted successfully:");

      console.log("Spot deleted successfully:", data.message);
    } catch (error) {
      setIsLoading(false);
      toast.error("Error deleting spot:");
      console.error("Error deleting spot:", error);
    }
  };

  const showDeleteConfirmation = (spotId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this spot!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        confirmDelete(spotId);
      }
    });
  };

  const fetchSpots = async (email) => {
    try {
      const response = await fetch(`${apiurl}/spotsbyuser?user=${email}`);
      if (!response.ok) {
        throw new Error("Failed to fetch spots");
      }
      const data = await response.json();
      setSpots(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateSpot = (spotId) => {
    console.log("Update spot with ID:", spotId);
  };

  const handleDeleteSpot = (spotId) => {
    showDeleteConfirmation(spotId);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <ToastContainer />
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
            <span className="loading loading-lg"></span>
          </div>
        )}
        <h1 className="text-3xl mb-4 text-center font-bold">
          My Tourists Spots
        </h1>
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Tourist Spot Name</th>
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Short Description</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {spots.map((spot) => (
              <tr key={spot._id}>
                <td className="border px-4 py-2">{spot.tourists_spot_name}</td>
                <td className="border px-4 py-2">{spot.country_Name}</td>
                <td className="border px-4 py-2">{spot.location}</td>
                <td className="border px-4 py-2">{spot.short_description}</td>
                <td className="border px-4 py-2">
                  <div className="flex gap-2">
                    <div className="pt-2">
                      <Link
                        to={`/UpdateTourist/${spot._id}`}
                        className=" text-white font-bold py-2 px-4 rounded"
                        style={{ background: "#C730C7" }}
                      >
                        Update
                      </Link>
                    </div>
                    <div>
                      <button
                        className="px-4 py-2 text-white rounded hover:bg-red-600"
                        onClick={() => handleDeleteSpot(spot._id)}
                        style={{ background: "#9844D5" }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
