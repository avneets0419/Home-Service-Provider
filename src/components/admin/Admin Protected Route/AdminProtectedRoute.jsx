// components/AdminProtectedRoute.jsx
import React from "react";
import {
  useUser,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import "./AdminProtectedRoute.css";

const AdminProtectedRoute = ({ children }) => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <div className="loading">Loading...</div>;

  const role = user?.publicMetadata?.role;

  if (role !== "admin") {
    return <div>🚫 Access Denied. Admins only.</div>;
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
