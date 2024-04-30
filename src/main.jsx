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
import UpdateTourist from "./Pages/UpdateTourist.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
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
        path: "/UpdateProfile",
        element: (
          <ProtectedRoute>
            <UpdateProfile></UpdateProfile>
          </ProtectedRoute>
        ),
      },

      {
        path: "/AllTouristsSpot",
        element: <AllTourists />,
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
        path: "/UpdateTourist/:id",
        element: (
          <ProtectedRoute>
            <UpdateTourist />
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
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
