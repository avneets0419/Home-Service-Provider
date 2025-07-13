import React from "react";
import AdminSidebar from "../../components/admin/Sidebar/AdminSidebar";
import ServicesTable from "../../components/admin/Services Table/ServicesTable";

const AdminServices = () => {
  return (
    <div style={{ background: "#F9FAFB", minHeight: "100vh" }}>
      <AdminSidebar />
      <ServicesTable />
    </div>
  );
};

export default AdminServices;
