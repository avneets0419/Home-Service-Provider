import React from 'react';
import './MissionVision.css';

const MissionVision = () => {
  return (
    <section className="mission-vision-section">
      <div className="mv-container">
        <div className="mv-card">
          <h3>Our Mission</h3>
          <p>
            To deliver exceptional home services that enhance the comfort, safety, and value of our customers' homes while providing peace of mind through professional, reliable, and transparent service.
          </p>
        </div>
        <div className="mv-card">
          <h3>Our Vision</h3>
          <p>
            To become the most trusted name in home services, setting the industry standard for quality, reliability, and customer satisfaction across the nation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
