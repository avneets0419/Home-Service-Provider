import React, { useEffect, useState } from "react";
import "./OrdersTable.css";

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);

  // Dummy fetch logic – Replace with real API later
  useEffect(() => {
    // Simulate API fetch
    const dummyData = [
      {
        id: "ORD1234",
        name: "John Doe",
        service: "Emergency Plumbing",
        amount: "$89",
        address: "123 Main St, New York",
      },
      {
        id: "ORD1235",
        name: "Jane Smith",
        service: "Electrical Installation",
        amount: "$125",
        address: "456 Broadway, LA",
      },
      {
        id: "ORD1234",
        name: "John Doe",
        service: "Emergency Plumbing",
        amount: "$89",
        address: "123 Main St, New York",
      },
      {
        id: "ORD1235",
        name: "Jane Smith",
        service: "Electrical Installation",
        amount: "$125",
        address: "456 Broadway, LA",
      },
      {
        id: "ORD1234",
        name: "John Doe",
        service: "Emergency Plumbing",
        amount: "$89",
        address: "123 Main St, New York",
      },
      {
        id: "ORD1235",
        name: "Jane Smith",
        service: "Electrical Installation",
        amount: "$125",
        address: "456 Broadway, LA",
      },
    ];
    setTimeout(() => {
      setOrders(dummyData);
    }, 1000);
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
                <td>{order.amount}</td>
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
