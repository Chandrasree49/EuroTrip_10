import React, { useContext } from "react";
import pp3 from "../assets/images/pp3.jpg"
import { useState } from "react";
import { AuthContext } from "../component/AuthProvider/AuthProvider.jsx";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { registerUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);

  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    setIsPasswordVisible((prevState) => !prevState);
  };

  const togglePasswordVisibility2 = (event) => {
    event.preventDefault();
    setIsPasswordVisible2((prevState) => !prevState);
  };

  const notify = () => toast.error("password didn't match");
  const notify2 = () =>
    toast.error(
      "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
    );
  const [emailError, setEmailError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const photo = event.target.photo.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmpassword.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError("Not a Valid Email");
      toast.error("Not a Valid Email");
      return;
    }
    setEmailError("");

    if (password !== confirmPassword) {
      notify();
      return;
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      notify2();
      return;
    }

    console.log(name, email, photo, password, confirmPassword);

    setLoading(true);

    registerUser(email, password, photo, name)
      .then((result) => {
        setLoading(false);
        setUser(null)

        event.target.name.value = "";
        event.target.email.value = "";
        event.target.photo.value = "";
        event.target.password.value = "";
        event.target.confirmpassword.value = "";
        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: "You have successfully registered.",
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
    <div className="register min-h-screen pt-20" style={{ backgroundImage:`url(${pp3})`, backgroundRepeat:"no-repeat" ,backgroundSize: "cover", backgroundPosition: "center"}}>
    <form
      className="w-[40%] mx-auto min-w[500px] border-2 rounded-xl p-5 "
      style={{background:"#F7F0FA"}}
      onSubmit={handleRegister}
    >
      <p>Name</p>
      <label className="input input-bordered flex items-center gap-2">
        <input
          name="name"
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
        <input name="email" type="text" className="grow" placeholder="Email" />
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
          type="text"
          className="grow"
          placeholder="Photo Url"
        />
      </label>
      <p>Password</p>
      <label className="input input-bordered flex items-center gap-2">
       
        <div className="relative w-1/1 container mx-auto mt-0">
          <input
            placeholder="Password"
            name="password"
            type={isPasswordVisible ? "text" : "password"}
            className="w-full
        px-4
        py-2
        text-base
        border-none 
    rounded
    outline-none
        focus:none"
          />
          <button
            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
          </button>
        </div>
      </label>

      <p>Confirm Password</p>
      <label className="input input-bordered flex items-center gap-2">
        <div className="relative w-1/1 container mx-auto mt-0">
          <input
            name="confirmpassword"
            placeholder=" Confirm password"
            type={isPasswordVisible2 ? "text" : "password"}
            className="w-full
        px-4
        py-2
        text-base
        border-none  // Remove border
    rounded
    outline-none
        focus:none"
          />
          <button
            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
            onClick={togglePasswordVisibility2}
          >
            {isPasswordVisible2 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
          </button>
        </div>
      </label>
      <ToastContainer></ToastContainer>
      <br></br>
      <button className="btn btn-success w-full" style={{background:"#A755CA"}}>Register</button>
      <p className="text-center mt-4">
        Already have an account?{" "}
        <a href="/Login" className=" hover:underline" style={{color:"#A755CA"}}>
          Login
        </a>
      </p>

      {isLoading && (
        <span
          className="loading loading-spinner loading-lg"
          style={{ textAlign: "center" }}
        ></span>
      )}
    </form>
    </div>
  );
};

export default Register;
