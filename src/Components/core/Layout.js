import React from "react";
import SideBar from "./Sidebar";
import Header from "./Header";

const Layout = ({ title="Title", description="", children, className="content-wrapper" }) => (
  <div>
    <Header />
    <SideBar /> 
    <div className={className}>{children}</div>
  </div>
);

export default Layout;