import React from "react";
import FeatureCarousel from "../components/Feature Carousel/FeatureCarousel";
import ServicesSection from "../components/Services Section/ServicesSection";

function Services() {
  return (
    <div style={{ background: "#F8FAFC" }}>
      <div style={{ textAlign: "center", padding: "10px 0" }}>
        <h1 style={{ fontSize: "48px", color: "#3A5BA0" }}>Our Services</h1>
        <p style={{ color: "#596677" }}>
          Professional home services delivered with care and precision
        </p>
      </div>
      <ServicesSection />
    </div>
  );
}

export default Services;
