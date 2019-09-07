import React, { useState } from "react";
import SideBar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children, className = "content-wrapper" }) => {

  return (
    <div>
      <Header />
      <SideBar />
      <div className={className}>{children}</div>
    </div>
  );
}

export default Layout;
