import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import ProtectedRoute from "./component/ProtectedRoute.jsx";
import UpdateProfile from "./Pages/UpdateProfile.jsx";
import AuthProvider from "./component/AuthProvider/AuthProvider.jsx";
import MyList from "./Pages/MyList.jsx";
import AddTourists from "./Pages/AddTourists.jsx";
import AllTourists from "./Pages/AllTourists.jsx";
import ViewDetails from "./Pages/ViewDetails.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },

      

      {
        path: "/AllTouristsSpot",
        element: (
          <ProtectedRoute>
            <AllTourists></AllTourists>
          </ProtectedRoute>
        ),
      },
      {
        path: "/AddTouristsSpot",
        element: (
          <ProtectedRoute>
            <AddTourists></AddTourists>
          </ProtectedRoute>
        ),
      },
      {
        path: "/ViewDetails/:id",
        element: (
          <ProtectedRoute>
            <ViewDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "/MyList",
        element: (
          <ProtectedRoute>
            <MyList></MyList>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
