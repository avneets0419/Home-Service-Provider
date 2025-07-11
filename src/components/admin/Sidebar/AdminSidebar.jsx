// src/components/AdminSidebar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./AdminSidebar.css";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState("☰");

  const toggleSidebar = () =>
    setIsOpen((prev) => !prev) || setIcon((prev) => (prev === "☰" ? "x" : "☰"));

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="logo">ProFix Admin</div>

        <div className="menu-section">
          <p className="section-title">DASHBOARD</p>
          <SidebarLink
            className={location.pathname === "/dashboard" ? "active" : ""}
            label="Dashboard"
            to="/admin/dashboard"
          />
        </div>

        <div className="menu-section">
          <p className="section-title">OTHERS</p>
          <SidebarLink label="Orders" to="/admin/orders" />
          <SidebarLink label="Services" to="/admin/services" />
          <SidebarLink label="Customer Support" to="/admin/support" />
        </div>
      </div>

      {/* Mobile toggle button */}
      <button className="mobile-toggle" onClick={toggleSidebar}>
        {icon}
      </button>
    </>
  );
};

const SidebarLink = ({ label, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={`sidebar-link ${isActive ? "active" : ""}`}>
      {label}
    </Link>
  );
};

export default AdminSidebar;
