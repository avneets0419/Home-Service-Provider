import React from 'react';
import './AboutHero.css';

const AboutHero = () => {
  return (
    <>
    <section className="about-hero">
      <div className="about-hero-overlay">
        <div className="about-hero-content">
          <h1>Building Trust Through <br /> Quality Service</h1>
          <p>Your trusted partner in professional home services since 2010</p>
        </div>
      </div>
      
    </section>
    <section className="our-history">
      <div className="container">
        <h2>Our History</h2>
        <p>
          Founded in 2010, ProFix emerged from a simple vision: to provide homeowners with reliable, professional
          home services they can trust. What started as a small team of dedicated professionals has grown into
          a comprehensive home service provider, serving thousands of satisfied customers across the region.
        </p>
        <p>
          Over the years, we've expanded our services, built a team of certified experts, and maintained our
          commitment to quality and customer satisfaction. Our journey has been marked by continuous improvement,
          technological adoption, and an unwavering focus on exceeding customer expectations.
        </p>
      </div>
    </section>
    </>

  );
};

export default AboutHero;
