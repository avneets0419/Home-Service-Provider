import React, { useEffect, useState } from "react";
import "./ServicesSection.css";
import CheckoutModal from "../Checkout Modal/CheckoutModal";
import { useUser } from "@clerk/clerk-react";
import AuthRequiredModal from "../Auth Required Modal/AuthRequiredModal";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const { user } = useUser();

  // Fetch services in real time from Firebase
  useEffect(() => {
    const q = query(collection(db, "services"), orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const firebaseServices = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setServices(firebaseServices);
    });

    return () => unsubscribe(); // Cleanup
  }, []);

  const handleBookingClick = (service) => {
    if (!user) {
      setShowAuthModal(true);
    } else {
      setSelectedService(service);
    }
  };

  return (
    <section className="services">
      {services.length === 0 ? (
        <p>Loading services...</p>
      ) : (
        services.map((item, idx) => (
          <div className="service-card" key={item.id || idx}>
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
                {item.labels?.map((label, i) => (
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
        ))
      )}
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
