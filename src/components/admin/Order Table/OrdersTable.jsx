import React, { useEffect, useRef, useState } from "react";
import "./OrdersTable.css";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../../firebase";
import { useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Pagination } from "antd";

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);
  const previousOrdersRef = useRef([]);
  const { user } = useUser();
  const role = user?.publicMetadata?.role;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(15);

  useEffect(() => {
    const ordersRef = collection(db, "orders");
    const q = query(ordersRef, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newOrders = snapshot.docs.map((doc) => ({
        id: doc.data().orderId || doc.id,
        ...doc.data(),
      }));

      // Skip first load
      if (previousOrdersRef.current.length && role === "admin") {
        const prevIds = new Set(previousOrdersRef.current.map((o) => o.id));
        const newlyAdded = newOrders.find((o) => !prevIds.has(o.id));
        if (newlyAdded) {
          toast.success(
            `🛎️ New order from ${newlyAdded.name} of ${newlyAdded.service}`,
            {
              position: "top-right",
              autoClose: 6000,
            }
          );
        }
      }

      // Update both ref and state
      previousOrdersRef.current = newOrders;
      setOrders(newOrders);
    });

    return () => unsubscribe();
  }, [role]);
  // Below all useEffect logic
  const paginatedOrders = orders.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

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
            <th>Phone</th>
            <th>Date & Time</th>
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
            paginatedOrders.map((order, index) => (
              <tr key={index}>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>{order.service}</td>
                <td>{order.price || "—"}</td>
                <td>{order.address}</td>
                <td>{order.phone}</td>
                <td>{order.time}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      >
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={orders.length}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default OrdersTable;
