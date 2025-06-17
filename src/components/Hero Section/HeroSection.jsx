import React from "react";
import "./HeroSection.css";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-left">
          <h1>Professional Home Services You Can Trust</h1>
          <p>
            Expert plumbing, electrical, HVAC, and home repair services
            delivered with care and precision.
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn primary">
              Our Services
            </Link>

            <Link to="/about" className="btn secondary">
              About Us
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="contact-card">
            <h2>Get in Touch</h2>
            <p>Request a service or consultation</p>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <select required>
                <option value="">Select Service</option>
                <option>Plumbing</option>
                <option>Electrical</option>
                <option>HVAC</option>
                <option>Repair</option>
              </select>
              <textarea
                placeholder="Tell us about your needs"
                rows="3"
              ></textarea>
              <button type="submit" className="submit-btn">
                <FiSend className="send-icon" /> Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
