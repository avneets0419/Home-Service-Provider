import React from "react";

import HeroSection from "../components/Hero Section/HeroSection";
import FeatureCarousel from "../components/Feature Carousel/FeatureCarousel";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ChatBot from "../components/Chatbot/Chatbot";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureCarousel />
      <ChatBot />
      <Footer />
    </div>
  );
}

export default Home;
