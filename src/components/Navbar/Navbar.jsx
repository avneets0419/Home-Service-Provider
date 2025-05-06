import React, { useState } from "react";
import "./Navbar.css";

import { FiSearch, FiPhone, FiMenu, FiX } from "react-icons/fi";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

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
        <li>Home</li>
        <li>Services</li>
        <li>About Us</li>
        <li>Testimonials</li>
        <li>Contact</li>
      </div>

      <div className="navbar-right">
      <SignedOut>
        <SignInButton className="btn primary"/>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <button className="btn primary">Login</button>
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
