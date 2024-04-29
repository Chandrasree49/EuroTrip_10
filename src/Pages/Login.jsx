import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../component/AuthProvider/AuthProvider";
import { useNavigate, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigateTo = useNavigate();
  const { loginUser, googleLogin, setUser, gitLogin } = useContext(AuthContext);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    setIsPasswordVisible((prevState) => !prevState);
  };

  const handleLogin = (reg) => {
    reg.preventDefault();

    const email = reg.target.email.value;

    const password = reg.target.password.value;

    console.log(email, password);

    setLoading(true);

    loginUser(email, password)
      .then((userCredential) => {
        setLoading(false);
        const user = userCredential.user;
        setUser(user);
        reg.target.email.value = "";
        reg.target.password.value = "";
        toast.success("Logged in Successfully");
        navigateTo("/UpdateProfile");
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Login failed. Please check your credentials.");
      });
  };
  const handleGoogleLogin = () => {
    googleLogin().then((result) => setUser(result.user));
  };
  const handleGitLogin = () => {
    gitLogin().then((result) => setUser(result.user));
  };

  return (
    <div className="w-full md:max-w-[40%] mx-auto md:min-w-[500px] border-2 rounded-xl p-5" style={{border:" 4px solid rgb(23, 152, 175"}}>
      <form onSubmit={handleLogin}>
        <ToastContainer></ToastContainer>
        <p>Email</p>
        <label className="input input-bordered flex items-center gap-2">
          <input
            name="email"
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
        <p>Password</p>
        <label
          className="input input-bordered flex items-center gap-2"
          style={{ marginBottom: "20" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <div className="relative w-1/1 container mx-auto mt-0">
            <input
              name="password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Password"
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
        <button className="btn w-full mt-4" style={{background:"rgb(23, 152, 175"}}>Login</button>
      </form>
      <div className="flex justify-center mt-4 md:justify-between">
        <button
          className="btn btn-outline btn-accent w-full md:w-auto md:ml-2 mb-2 md:mb-0"
          onClick={handleGoogleLogin}
          style={{ marginTop: "20px", marginLeft: "30px" }}
        >
          {" "}
          Google Login
        </button>
        <h5 style={{fontSize:"18px", fontWeight:"bold",color:"rgb(23, 152, 175", marginTop:"30px"}}>or</h5>
        <button
          className="btn btn-outline btn-accent w-full md:w-auto md:ml-2 mb-2 md:mb-0"
          onClick={handleGitLogin}
          style={{ margin: "20px" }}
        >
          {" "}
          Git Login
        </button>
      </div>
      {isLoading && (
        <span
          className="loading loading-spinner loading-lg"
          style={{ textAlign: "center" }}
        ></span>
      )}
      <p className="text-center mt-4">
        Don't have an account?{" "}
        <a href="/register" className="text-green-500 hover:underline">
          Register
        </a>
      </p>
    </div>
  );
};

export default Login;
