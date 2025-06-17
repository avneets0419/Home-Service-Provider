import React, { useState } from "react";
import "./Navbar.css";

import { FiMenu, FiX } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="brand-name">ProFix</span>
      </div>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <div className="navl">
          <li>
            <Link to="/" className="navbarl">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="navbarl">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/blog" className="navbarl">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/services" className="navbarl">
              Services
            </Link>
          </li>

          <li className="navbarl">Contact</li>
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
