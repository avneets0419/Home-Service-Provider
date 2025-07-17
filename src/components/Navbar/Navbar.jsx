import React, { useState } from "react";
import "./Navbar.css";

import { FiMenu, FiX } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useUser();
  const role = user?.publicMetadata?.role || "";

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="brand-name">
          <Link className="brand-name" to="/">
            ProFix
          </Link>
        </span>
      </div>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <div className="navl">
          <li className="list">
            <Link to="/" className="navbarl">
              Home
            </Link>
          </li>

          <li className="list">
            <Link to="/about" className="navbarl">
              About Us
            </Link>
          </li>
          <li className="list">
            <Link to="/blog" className="navbarl">
              Blogs
            </Link>
          </li>
          <li className="list">
            <Link to="/services" className="navbarl">
              Services
            </Link>
          </li>
          <li className="list">
            <Link to="/services" className="navbarl">
              Contact Us
            </Link>
          </li>
        </div>
        <div className="navbarr">
          <div className="search-box">
            <input type="text" placeholder="Search for services..." />
            <FiSearch className="search-icon" />
          </div>

          <SignedOut>
            <SignInButton className="btn primary" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {role === "admin" && (
            <div style={{ paddingLeft: "10px" }}>
              <Link to="/admin" className="adminl">
                Admin
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="navbar-right">
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
