import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <p className="text-5xl">Hello</p>
      <Outlet />
    </div>
  );
};

export default AppLayout;
