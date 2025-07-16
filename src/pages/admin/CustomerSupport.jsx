import React from "react";
import AdminSidebar from "../../components/admin/Sidebar/AdminSidebar";
import SupportTable from "../../components/admin/Support Table/SupportTable";

const CustomerSupport = () => {
  return (
    <div
      style={{
        background: "#F9FAFB",
        minHeight: "100vh",
      }}
    >
      <AdminSidebar />
      <SupportTable />
    </div>
  );
};

export default CustomerSupport;
