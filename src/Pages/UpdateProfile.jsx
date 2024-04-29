import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { AuthContext } from "../component/AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

import "react-toastify/dist/ReactToastify.css";

const UpdateProfile = () => {
  const { user, updateProfileData, setUser } = useContext(AuthContext);

  useEffect(() => {
    // Assuming 'user' contains the user data fetched from Firebase Authentication
    if (user) {
      document.getElementById("displayName").value = user.displayName || "";
      document.getElementById("email").value = user.email || "";
      document.getElementById("photo").value = user.photoURL || "";
      setUser(user);
    }
  }, [user]);

  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleProfileUpdate = (event) => {
    event.preventDefault();
    const name = event.target.displayName.value;
    const email = event.target.email.value;
    const photo = event.target.photo.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError("Not a Valid Email");
      toast.error("Not a Valid Email");
      return;
    }
    setEmailError("");

    console.log(name, email, photo);

    setLoading(true);

    updateProfileData(name, email, photo)
      .then((result) => {
        setLoading(false);
        console.log("Update Profile Event");
        console.log(result);
        setUser(result);
        Swal.fire({
          icon: "success",
          title: "Profile Update Successful!",
          text: "You have successfully Updated your Data.",
        });
      })
      .catch((error) => {
        setLoading(false);
        var errors = error.message
          .replace("/", "")
          .replaceAll("-", " ")
          .replace("auth", "")
          .replace("Firebase: Error (", "")
          .replace("-", " ")
          .replace(")", "");
        console.log(errors);
        setEmailError(errors);
        toast.error(errors);

        console.error("Registration error:", error);
      });
  };

  return (
    <div className="min-h-screen pt-20"style={{backgroundImage:"url(https://img.freepik.com/free-vector/flat-budapest-landscape_1051-1006.jpg?t=st=1714416754~exp=1714420354~hmac=0a706e535f509ddea07b9c011f085feebec84d7b98f6170016ae2db194498f54&w=740)"}}>
    <form
      className="w-[40%] mx-auto min-w[500px] border-2 rounded-xl p-5" 
      onSubmit={handleProfileUpdate}
      style={{background:"#FEF5FE"}}
    >
      <p>Name</p>
      <label className="input input-bordered flex items-center gap-2">
        <input
          name="displayName"
          id="displayName"
          type="text"
          className="grow"
          placeholder="Username"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
      </label>
      <p>Email</p>
      <label className="input input-bordered flex items-center gap-2">
        <input
          name="email"
          id="email"
          type="text"
          className="grow"
          placeholder="Email"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
      </label>
      {emailError && <small className="text-red-500">{emailError}</small>}
      <p>User Photo</p>
      <label className="input input-bordered flex items-center gap-2">
        <input
          name="photo"
          id="photo"
          type="text"
          className="grow"
          placeholder="Photo Url"
        />
      </label>

      <ToastContainer></ToastContainer>

      <button className="btn w-full mt-5" style={{background:"#A755CA"}}>Update Profile</button>

      {isLoading && (
        <span className="loading loading-spinner loading-lg"></span>
      )}
    </form>
    </div>
  );
};

export default UpdateProfile;
