import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Blog from "./pages/Blog";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Dashboard from "./pages/admin/Dashboard";
import CustomerSupport from "./pages/admin/CustomerSupport";
import Orders from "./pages/admin/Orders";
import AdminServices from "./pages/admin/AdminServices";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/admin/" element={<Navigate to="dashboard" replace />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/support" element={<CustomerSupport />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/services" element={<AdminServices />} />
      </Routes>
    </>
  );
};

export default App;
