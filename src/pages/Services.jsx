import React from "react";
import FeatureCarousel from "../components/Feature Carousel/FeatureCarousel";
import ServicesSection from "../components/Services Section/ServicesSection";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Faq from "../components/FAQ/Faq";

function Services() {
  return (
    <>
      <Navbar />
      <div style={{ background: "#F8FAFC" }}>
        <div style={{ textAlign: "center", padding: "10px 0" }}>
          <h1 style={{ fontSize: "48px", color: "#3A5BA0" }}>Our Services</h1>
          <p style={{ color: "#596677" }}>
            Professional home services delivered with care and precision
          </p>
        </div>
        <ServicesSection />
        <Faq />
      </div>
      <Footer />
    </>
  );
}

export default Services;
