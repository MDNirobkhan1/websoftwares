import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../component/Home";
import Courses from "../component/Courses";
import Universities from "../component/Universities";

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/university" element={<Universities />} />
      </Routes>
    </div>
  );
};

export default Layout;
