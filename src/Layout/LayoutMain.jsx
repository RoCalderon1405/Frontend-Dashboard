 import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../components/Global/Topbar";
import SidebarMain from "../components/Global/SidebarMain";

const LayoutMain = () => {
  return (
    <>
      <div className="app">
        <SidebarMain />
        <main className="content">
          <Topbar />
          <div style={{paddingLeft:"16px", paddingRight:"16px"}}>
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default LayoutMain;
