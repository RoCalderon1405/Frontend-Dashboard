import React from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { tokens } from "../themeSettings";
import Header from "../components/Header";
import GraficaBarra from "../components/GraficaBarra";

const GBarras = () => {
  const colorMode = useSelector((state) => state.colorMode.mode);
  const colors = tokens(colorMode);
  return (
    <Box m="20px">
      <Header title="Gráfica de barras" subtitle="Una gráfica de barras" />
      <Box height="75vh">
        <GraficaBarra />
      </Box>
    </Box>
  );
};

export default GBarras;
