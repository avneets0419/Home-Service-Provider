import React, { useEffect, useState } from "react";
import "./OrdersTable.css";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "orders"), (snapshot) => {
      const fetchedOrders = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(fetchedOrders);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="orders-table-wrapper">
      <h1>Orders</h1>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Name</th>
            <th>Service</th>
            <th>Amount</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="5">
                <p>Loading orders...</p>
              </td>
            </tr>
          ) : (
            orders.map((order, index) => (
              <tr key={index}>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>{order.service}</td>
                <td>{order.price || "—"}</td>
                <td>{order.address}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
