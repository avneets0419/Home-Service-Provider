import React from "react";
import AdminSidebar from "../../components/admin/Sidebar/AdminSidebar";
import ServicesTable from "../../components/admin/Services Table/ServicesTable";

const AdminServices = () => {
  return (
    <body style={{ background: "#F9FAFB" }}>
      <AdminSidebar />
      <ServicesTable />
    </body>
  );
};

export default AdminServices;
