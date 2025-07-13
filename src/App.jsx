import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Blog from "./pages/Blog";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Dashboard from "./pages/admin/Dashboard";
import CustomerSupport from "./pages/admin/CustomerSupport";
import Orders from "./pages/admin/Orders";
import AdminServices from "./pages/admin/AdminServices";
import AdminProtectedRoute from "./components/admin/Admin Protected Route/AdminProtectedRoute";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/admin/" element={<Navigate to="dashboard" replace />} />
        <Route
          path="/admin/dashboard"
          element={
            <AdminProtectedRoute>
              <Dashboard />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/support"
          element={
            <AdminProtectedRoute>
              <CustomerSupport />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <AdminProtectedRoute>
              <Orders />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/services"
          element={
            <AdminProtectedRoute>
              <AdminServices />
            </AdminProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
