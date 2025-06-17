// components/AuthRequiredModal.jsx
import React, { useState } from "react";
// import "./CheckoutModal.css"; // Reuse modal styles
import { RedirectToSignIn } from "@clerk/clerk-react";

const AuthRequiredModal = ({ isOpen, onClose }) => {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  if (!isOpen) return null;
  if (shouldRedirect) return <RedirectToSignIn />;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <div style={{ justifyContent: "center" }} className="modal-header">
          <h2>Login Required</h2>
        </div>
        <div className="modal-body">
          <p style={{ textAlign: "center" }}>
            You need to sign up or log in to place an order.
          </p>
        </div>
        <div className="modal-actions">
          <button
            onClick={() => setShouldRedirect(true)}
            className="checkout-btn"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthRequiredModal;
