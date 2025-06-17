import React, { useState } from "react";
import "./ServicesSection.css";
import CheckoutModal from "../Checkout Modal/CheckoutModal";
import { useUser } from "@clerk/clerk-react";
import AuthRequiredModal from "../Auth Required Modal/AuthRequiredModal";

const services = [
  {
    tag: "Popular",
    rating: 4.8,
    title: "Emergency Plumbing Repair",
    team: "ProFix Plumbing Team",
    desc: "Fast and reliable emergency plumbing services available 24/7.",
    labels: ["24/7 Available", "Licensed", "Insured", "Emergency Service"],
    price: "$89/hour",
    image:
      "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    tag: "Top Rated",
    rating: 4.9,
    title: "Complete Electrical Installation",
    team: "ProFix Electrical Services",
    desc: "Professional electrical installation and wiring services.",
    labels: ["Certified", "Warranty", "Safety Inspection", "Code Compliant"],
    price: "$125/hour",
    image:
      "https://images.pexels.com/photos/4254161/pexels-photo-4254161.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    tag: "Eco-Friendly",
    rating: 4.7,
    title: "HVAC System Maintenance",
    team: "ProFix HVAC Specialists",
    desc: "Comprehensive HVAC maintenance and repair services.",
    labels: [
      "Energy Efficient",
      "Maintenance Plan",
      "Emergency Repair",
      "Licensed",
    ],
    price: "$95/hour",
    image:
      "https://images.pexels.com/photos/3807276/pexels-photo-3807276.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    tag: "Custom",
    rating: 4.6,
    title: "Custom Carpentry Work",
    team: "ProFix Carpentry",
    desc: "Expert carpentry services including custom furniture.",
    labels: [
      "Custom Work",
      "Quality Materials",
      "Design Consultation",
      "Warranty",
    ],
    price: "$110/hour",
    image:
      "https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const { user } = useUser(); // Replace with your auth logic

  const handleBookingClick = (service) => {
    if (!user) {
      setShowAuthModal(true);
    } else {
      setSelectedService(service);
    }
  };

  return (
    <section className="services">
      {services.map((item, idx) => (
        <div className="service-card" key={idx}>
          <div className="image-container">
            <img src={item.image} alt={item.title} />
            <div className="tag">{item.tag}</div>
            <div className="rating">★ {item.rating}</div>
          </div>
          <div className="content">
            <h3>{item.title}</h3>
            <p className="team">{item.team}</p>
            <p className="description">{item.desc}</p>
            <div className="labels">
              {item.labels.map((label, i) => (
                <span key={i} className="label">
                  {label}
                </span>
              ))}
            </div>
            <div className="footer1">
              <span className="price">{item.price}</span>
              <button
                className="book-btn"
                onClick={() => handleBookingClick(item)}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
      <AuthRequiredModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
      <CheckoutModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </section>
  );
};

export default ServicesSection;
