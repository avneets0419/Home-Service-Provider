import React from "react";
import AdminSidebar from "../../components/admin/Sidebar/AdminSidebar";
import OrdersTable from "../../components/admin/Order Table/OrdersTable";

const Orders = () => {
  return (
    <div style={{ background: "#F9FAFB", minHeight: "100vh" }}>
      <AdminSidebar />

      <OrdersTable />
    </div>
  );
};

export default Orders;
