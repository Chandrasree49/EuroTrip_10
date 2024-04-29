import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";

const Nav = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold active py-2 px-4 "
                  : "font-semibold py-2 px-4"
              }
            >
              Home
            </NavLink>

            {user != null && (
              <NavLink
                to="/AllTouristsSpot"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold active py-2 px-4 "
                    : " font-semibold py-2 px-4"
                }
              >
                All Tourists Spot
              </NavLink>
            )}

            <NavLink
              to="/AddTouristsSpot"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold active py-2 px-4 "
                  : "font-semibold py-2 px-4"
              }
            >
              Add Tourists Spot
            </NavLink>
            <NavLink
              to="/Register"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold active py-2 px-4 "
                  : " font-semibold py-2 px-4"
              }
            >
              Register
            </NavLink>
            {user != null && (
              <NavLink
                to="/UpdateProfile"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold active py-2 px-4 "
                    : " font-semibold py-2 px-4"
                }
              >
                Update Profile
              </NavLink>
            )}
            <NavLink
              to="/MyList"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold active py-2 px-4 "
                  : " font-semibold py-2 px-4"
              }
            >
              My List
            </NavLink>
          </ul>
        </div>
        <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
          Euro<span style={{ color: "rgb(23, 152, 175)" }}>Trip</span>
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex justify-center">
        <ul className="menu menu-horizontal px-1 flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold active py-2 px-4 "
                : "font-semibold py-2 px-4"
            }
          >
            Home
          </NavLink>

          {user != null && (
            <NavLink
              to="/AllTouristsSpot"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold active py-2 px-4 "
                  : " font-semibold py-2 px-4"
              }
            >
              All Tourists Spot
            </NavLink>
          )}

          <NavLink
            to="/AddTouristsSpot"
            className={({ isActive }) =>
              isActive
                ? "font-semibold active py-2 px-4 "
                : "font-semibold py-2 px-4"
            }
          >
            Add Tourists Spot
          </NavLink>
          <NavLink
            to="/Register"
            className={({ isActive }) =>
              isActive
                ? "font-semibold active py-2 px-4 "
                : " font-semibold py-2 px-4"
            }
          >
            Register
          </NavLink>
          {user != null && (
            <NavLink
              to="/UpdateProfile"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold active py-2 px-4 "
                  : " font-semibold py-2 px-4"
              }
            >
              Update Profile
            </NavLink>
          )}
          <NavLink
            to="/MyList"
            className={({ isActive }) =>
              isActive
                ? "font-semibold active py-2 px-4 "
                : " font-semibold py-2 px-4"
            }
          >
            My List
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.accessToken.length > 4 && (
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={user?.photoURL}
                title={user?.displayName}
              />
            </div>
          </div>
        )}
        {!user && (
          <a>
            <NavLink to="/Login" className="btn">
              login
            </NavLink>
          </a>
        )}

        {user?.accessToken.length >= 4 && (
          <a className="btn" onClick={handleLogout}>
            Logout
          </a>
        )}
      </div>
    </div>
  );
};

export default Nav;
