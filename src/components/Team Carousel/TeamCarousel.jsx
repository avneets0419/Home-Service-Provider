import React from "react";
import "./TeamCarousel.css";


const teamMembers = [
  {
    name: "Avneet Singh",
    role: "CEO & Founder",
    image: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg",
  },
  {
    name: "Raman",
    role: "Head of Operations",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
  {
    name: "Anushka",
    role: "Customer Success Manager",
    image: "https://images.pexels.com/photos/3769134/pexels-photo-3769134.jpeg",
  },
  {
    name: "Mohit",
    role: "Lead Technician",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
  },
];

const TeamCarousel = () => {
  const scrollRef = React.useRef(null);

  

  return (
    <section className="carousel-section">
      <div className="carousel-header">
        <h2>Meet Our Team</h2>
      </div>

      <div className="carousel-container">
        

        <div className="carousel" ref={scrollRef}>
          {teamMembers.map((member, index) => (
            <div className="card" key={index}>
              <img src={member.image} alt={member.name} />
              <div className="card-body">
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
              </div>
            </div>
          ))}
        </div>

        
        
      </div>
    </section>
  );
};

export default TeamCarousel;
