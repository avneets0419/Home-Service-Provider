import React from "react";
import { Routes, Route } from "react-router-dom";

import Blog from "./pages/Blog";


import Home from "./pages/home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
