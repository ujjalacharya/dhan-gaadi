import React from "react";

const Layout = ({ title="Title", description="", children, className="container" }) => (
  <div>
    <div className={className}>{children}</div>
  </div>
);

export default Layout;