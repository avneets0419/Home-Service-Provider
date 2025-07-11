import React from "react";

import HeroSection from "../components/Hero Section/HeroSection";
import FeatureCarousel from "../components/Feature Carousel/FeatureCarousel";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureCarousel />
      <Footer />
    </div>
  );
}

export default Home;
