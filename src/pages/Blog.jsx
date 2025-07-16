import React from "react";
import BlogSection from "../components/Blog Section/BlogSection";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Blog() {
  return (
    <>
      <Navbar />
      <div style={{ background: "#F8FAFC" }}>
        <div style={{ textAlign: "center", padding: "10px 0" }}>
          <h1 style={{ fontSize: "48px", color: "#3A5BA0" }}>Our Blog</h1>
          <p style={{ color: "#596677" }}>
            A center for all our resources & insights
          </p>
        </div>
        <BlogSection />
      </div>
      <Footer />
    </>
  );
}

export default Blog;
