import React from "react";
import Navbar from "./../Components/Navbar/Navbar";
import Home from "./../pages/Home";
import Blogs from "../pages/Blogs";
import Bookmarks from "../pages/Bookmarks";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="min-h-[62px]">
        <Navbar></Navbar>
      </div>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
