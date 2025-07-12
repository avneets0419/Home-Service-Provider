import React from "react";
import AdminSidebar from "../../components/admin/Sidebar/AdminSidebar";
import OrdersTable from "../../components/admin/Order Table/OrdersTable";

const Orders = () => {
  return (
    <body style={{ background: "#F9FAFB" }}>
      <AdminSidebar />

      <OrdersTable />
    </body>
  );
};

export default Orders;
