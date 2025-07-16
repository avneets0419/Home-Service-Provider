import React from "react";
import "./FeatureCarousel.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "Carpentry",
    description:
      "Custom woodwork, furniture repair, and carpentry services by skilled craftsmen.",
    image:
      "https://images.pexels.com/photos/3637783/pexels-photo-3637783.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: "🔨",
  },
  {
    title: "Painting",
    description:
      "Interior and exterior painting services to refresh and transform your living spaces.",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: "🖌️",
  },
  {
    title: "Home Renovations",
    description:
      "Full-service home renovations and remodeling to upgrade your living space.",
    image:
      "https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: "🏠",
  },
];

const FeatureCarousel = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="carousel-section">
      <div className="carousel-header">
        <h2>Our Services</h2>
        <p>Professional home services delivered with care and precision</p>
      </div>

      <div className="carousel-container">
        <button className="nav-btn left" onClick={() => scroll("left")}>
          <FaArrowLeft />
        </button>

        <div className="carousel" ref={scrollRef}>
          {services.map((service, index) => (
            <div className="card" key={index}>
              <img src={service.image} alt={service.title} />
              <div className="card-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#" className="learn-more">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn right" onClick={() => scroll("right")}>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default FeatureCarousel;
