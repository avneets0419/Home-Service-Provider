import React, { useRef, useState } from "react";
import "./HeroSection.css";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const HeroSection = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const serviceRef = useRef();
  const messageRef = useRef();
  const [loading, setLoading] = useState(false);

  const generateSupportId = async () => {
    const snapshot = await getDocs(collection(db, "support"));
    const count = snapshot.size + 1;
    return `SUP-${String(count).padStart(3, "0")}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const supportId = await generateSupportId();

    const supportData = {
      supportId,
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      service: serviceRef.current.value,
      message: messageRef.current.value,
      timestamp: new Date().toISOString(),
    };

    try {
      await addDoc(collection(db, "support"), supportData);
      alert("Support request submitted successfully!");
      e.target.reset();
    } catch (err) {
      console.error("Failed to submit support request:", err);
    }

    setLoading(false);
  };
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
            <Link to="/services" className="btn primary">
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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                required
                ref={nameRef}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                ref={emailRef}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                ref={phoneRef}
              />
              <select required ref={serviceRef}>
                <option value="">Select Service</option>
                <option>Plumbing</option>
                <option>Electrical</option>
                <option>HVAC</option>
                <option>Repair</option>
              </select>
              <textarea
                ref={messageRef}
                placeholder="Tell us about your needs"
                rows="3"
              ></textarea>
              <button type="submit" className="submit-btn" disabled={loading}>
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
