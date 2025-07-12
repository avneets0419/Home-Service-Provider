// components/AdminProtectedRoute.jsx
import React from "react";
import {
  useUser,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import "./AdminProtectedRoute.css";
import { Link } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <div className="loading">Loading...</div>;

  const role = user?.publicMetadata?.role;

  if (role !== "admin") {
    return (
      <div className="deniedpg">
        <div className="denied">
          <h3>🚫 Access Denied. Admins only.</h3>
          <Link to="/" className="btn">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default AdminProtectedRoute;
