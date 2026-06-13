import React from "react";
import Sidebar from "./components/SideBar";
import { Outlet } from "react-router-dom";
import "/src/Styles/dashboard.css"; 
const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="dashboard-main">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;