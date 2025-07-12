// src/components/AdminSidebar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./AdminSidebar.css";
import { useUser, SignOutButton, UserButton } from "@clerk/clerk-react";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState("☰");
  const { user } = useUser();
  const role = user?.publicMetadata?.role || "user"; // Default to "user"

  const toggleSidebar = () =>
    setIsOpen((prev) => !prev) || setIcon((prev) => (prev === "☰" ? "x" : "☰"));

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="upperPart">
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

        <div className="sidebar-user">
          <img
            src={user?.imageUrl}
            alt="Profile"
            className="sidebar-user-avatar"
          />
          <div className="sidebar-user-details">
            <p className="sidebar-user-name">{user?.fullName}</p>
            <p className="sidebar-user-email">
              {user?.primaryEmailAddress?.emailAddress}
            </p>
            <p className="sidebar-user-role">Role: {role}</p>
          </div>
          <div>
            <SignOutButton>
              <button className="logout-btn" title="Logout">
                ⎋
              </button>
            </SignOutButton>
          </div>
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
