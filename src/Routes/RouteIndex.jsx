import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutMain from "../Layout/LayoutMain";
import Dashboard from "../Pages/Dashboard";
import Team from "../Pages/Team";
import CreateUser from "../Pages/CreateUser";
import Calendar from "../Pages/Calendar";
import GBarras from "../Pages/GBarras";
import GPastel from "../Pages/GPastel";
import GLineas from "../Pages/GLineas";
import GGeo from "../Pages/GGeo";

const RouteIndex = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<Dashboard />} />
          <Route path="team" element={<Team />} />
          <Route path="add-user" element={<CreateUser />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="grafica">
            <Route path="barras" element={<GBarras />} />
            <Route path="pastel" element={<GPastel />} />
            <Route path="lineas" element={<GLineas />} />
            <Route path="geomap" element={<GGeo />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default RouteIndex;
