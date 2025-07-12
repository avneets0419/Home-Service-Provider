import React from "react";
import "./DashboardStats.css";
import { Link } from "react-router-dom";

const DashboardStats = () => {
  return (
    <div className="dashboard-wrapper">
      <h1>Welcome to Dashboard</h1>
      <div className="top-cards">
        <Link to="/admin/orders" className="link">
          <div className="icon">&#128230;</div>
          <div className="label">Orders</div>
          <div className="container">
            <div className="value">5,359</div>
            <div className="stat down">▼ 9.05%</div>
          </div>
        </Link>
        <Link to="/admin/orders" className="link">
          <div className="icon">🛒 </div>
          <div className="label">Sales</div>
          <div className="container">
            <div className="value">₹3,782</div>
            <div className="stat up">▲ 11.01%</div>
          </div>
        </Link>
        <Link to="/admin/support" className="link">
          {/* <div className="card customers-card"> */}
          <div className="icon">☎️ </div>
          <div className="label">Support Enquiry</div>
          <div className="container">
            <div className="value">13</div>
            {/* <div className="stat up"></div> */}
          </div>
          {/* </div> */}
        </Link>
      </div>
    </div>
  );
};

export default DashboardStats;
