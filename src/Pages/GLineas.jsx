import React from "react";

import { Box } from "@mui/material";

import { useSelector } from "react-redux";

import GraficaLineas from "../components/GraficaLineas";
import Header from "../components/Header";

import { tokens } from "../themeSettings";

const GLineas = () => {
  const colorMode = useSelector((state) => state.colorMode.mode);
  const colors = tokens(colorMode);

  return (
    <Box m="20px">
      <Header title="Gráfica de lineas" subtitle="Una gráfica de lineas" />
      <Box height="75vh">
        <GraficaLineas />
      </Box>
    </Box>
  );
};

export default GLineas;
