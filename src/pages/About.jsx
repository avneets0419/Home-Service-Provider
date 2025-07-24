import React from "react";
import AboutHero from "../components/About Hero/AboutHero";
import MissionVision from "../components/Mission Vision/MissionVision";
import TeamCarousel from "../components/Team Carousel/TeamCarousel";
import Navbar from "../components/Navbar/Navbar";

import Footer from "../components/Footer/Footer";
import ChatBot from "../components/Chatbot/ChatBot";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <MissionVision />
      <TeamCarousel />
      <ChatBot />
      <Footer />
    </>
  );
};

export default About;
