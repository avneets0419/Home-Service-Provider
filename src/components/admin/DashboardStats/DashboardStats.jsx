import React, { useEffect, useState } from "react";
import "./DashboardStats.css";
import { Link } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";

const DashboardStats = () => {
  const [ordersCount, setOrdersCount] = useState(0);
  const [salesTotal, setSalesTotal] = useState(0);
  const [supportCount, setSupportCount] = useState(0);

  useEffect(() => {
    // Real-time listener for Orders
    const unsubscribeOrders = onSnapshot(
      collection(db, "orders"),
      (snapshot) => {
        const orders = snapshot.docs.map((doc) => doc.data());
        setOrdersCount(orders.length);

        const totalSales = orders.reduce((sum, order) => {
          const price = parseFloat(order.price.replace(/[^\d.-]/g, ""));
          return sum + (isNaN(price) ? 0 : price);
        }, 0);
        setSalesTotal(totalSales);
      }
    );

    // Real-time listener for Support Queries
    const unsubscribeSupport = onSnapshot(
      collection(db, "support"),
      (snapshot) => {
        setSupportCount(snapshot.size);
      }
    );

    // Cleanup on unmount
    return () => {
      unsubscribeOrders();
      unsubscribeSupport();
    };
  }, []);

  return (
    <div className="dashboard-wrapper">
      <h1>Welcome to Dashboard</h1>
      <div className="top-cards">
        <Link to="/admin/orders" className="link">
          <div className="icon">&#128230;</div>
          <div className="label">Orders</div>
          <div className="container">
            <div className="value">{ordersCount}</div>
            <div className="stat down">▼ 9.05%</div>
          </div>
        </Link>
        <Link to="/admin/orders" className="link">
          <div className="icon">🛒</div>
          <div className="label">Sales</div>
          <div className="container">
            <div className="value">₹{salesTotal}</div>
            <div className="stat up">▲ 11.01%</div>
          </div>
        </Link>
        <Link to="/admin/support" className="link">
          <div className="icon">☎️</div>
          <div className="label">Support Enquiry</div>
          <div className="container">
            <div className="value">{supportCount}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DashboardStats;
