/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import "./CheckoutModal.css";
import { useUser } from "@clerk/clerk-react";
import AuthRequiredModal from "../Auth Required Modal/AuthRequiredModal";

const CheckoutModal = ({ isOpen, onClose, service }) => {
  const { user } = useUser();

  const name = user?.fullName || "";
  const email = user?.primaryEmailAddress?.emailAddress || "";

  // Refs to access input values
  const phoneRef = useRef();
  const addressRef = useRef();

  if (!isOpen || !service) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const url =
      "https://script.google.com/macros/s/AKfycbzdweBmhPopTrjY_AT5XpZTQuH1TqTyiv9GW2jgcX7l8rZq3xOFJU8hJK2Cwm0ICqyB/exec";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Name=${e.target.name.value}&Email=${e.target.email.value}&Phone=${e.target.phone.value}&Address=${e.target.address.value}&Service=${service.title}`,
    })
      .then((res) => res.text())
      .then((data) => {
        alert("Order Created Succesfully");
        onClose();
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
            <input name="name" type="text" value={name} />
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
            Proceed to Checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;
