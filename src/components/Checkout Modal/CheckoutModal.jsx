/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import "./CheckoutModal.css";
import { useUser } from "@clerk/clerk-react";
import AuthRequiredModal from "../Auth Required Modal/AuthRequiredModal";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const CheckoutModal = ({ isOpen, onClose, service, showConfirmation }) => {
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const name = user?.fullName || "";
  const email = user?.primaryEmailAddress?.emailAddress || "";

  // Refs to access input values
  const phoneRef = useRef();
  const addressRef = useRef();

  if (!isOpen || !service) return null;

  const generateOrderId = async () => {
    const snapshot = await getDocs(collection(db, "orders"));
    const count = snapshot.size + 1;
    return `PR-${String(count).padStart(3, "0")}`;
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    // 1. Store to Firestore
    try {
      const orderId = await generateOrderId();

      const formData = {
        id: orderId,
        name,
        email,
        phone: phoneRef.current.value,
        address: addressRef.current.value,
        service: service.title,
        price: service.price,
        timestamp: new Date().toISOString(),
      };

      // Add to Firestore
      await addDoc(collection(db, "orders"), formData);
      console.log("✅ Order saved to Firestore");
      setLoading(false);
      onClose(); // ✅ close booking modal first
      showConfirmation();
    } catch (error) {
      console.error("❌ Error creating order:", error);
      alert("Something went wrong!");
    }

    const url =
      "https://script.google.com/macros/s/AKfycbzdweBmhPopTrjY_AT5XpZTQuH1TqTyiv9GW2jgcX7l8rZq3xOFJU8hJK2Cwm0ICqyB/exec";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Name=${e.target.name.value}&Email=${e.target.email.value}&Phone=${e.target.phone.value}&Address=${e.target.address.value}&Service=${service.title}`,
    })
      .then((res) => res.text())
      .then((data) => {
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <div className="modal-header">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={service.image}
              alt={service.title}
              className="modal-img"
            />
          </div>
          <div>
            <h2>{service.title}</h2>
            <p>{service.desc}</p>
            <div className="modal-meta">
              <span className="price">{service.price}</span>
            </div>
          </div>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input name="name" type="text" value={name} disabled />
          </label>
          <label>
            Email
            <input type="email" value={email} name="email" disabled />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              ref={phoneRef}
              required
            />
          </label>
          <label>
            Address
            <textarea
              name="address"
              placeholder="Enter your address"
              ref={addressRef}
              required
            />
          </label>
          <button type="submit" className="checkout-btn">
            {loading ? <div className="spinner"></div> : "Book Service"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;
