import React from "react";
import AdminSidebar from "../../components/admin/Sidebar/AdminSidebar";
import DashboardStats from "../../components/admin/DashboardStats/DashboardStats";
import OrdersTable from "../../components/admin/Order Table/OrdersTable";

const Dashboard = () => {
  return (
    <div style={{}}>
      <AdminSidebar />
      <DashboardStats />
      <></>
      <OrdersTable />
    </div>
  );
};

export default Dashboard;
