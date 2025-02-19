import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../component/Home";
import Courses from "../component/Courses";
import Universities from "../component/Universities";
import AdmissionForm from "../component/AdmissionForm";
import Admissionquery from "../component/Admission_query/Admissionquery";
import ViewDetails from "../component/Admission_query/ViewDetails";

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/university" element={<Universities />} />
        <Route path="/admissionform" element={<AdmissionForm />} />
        <Route path="/admissionquery" element={<Admissionquery />} />
        <Route path="/view-details" element={<ViewDetails />} />
      </Routes>
    </div>
  );
};

export default Layout;
