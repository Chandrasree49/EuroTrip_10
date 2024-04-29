import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../component/Nav";
import Footer from "../component/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Nav></Nav>
        <Outlet />
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
