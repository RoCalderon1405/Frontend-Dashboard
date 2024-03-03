import React from "react";

import { Box, colors } from "@mui/material";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import GraficaGeo from "../components/GraficaGeo";
import { tokens } from "../themeSettings";

const GGeo = () => {
  const colorMode = useSelector((state) => state.colorMode.mode);
  const colors = tokens(colorMode);
  return (
    <Box m="20px">
      <Header title="Gráfica geográfica" subtitle="Una gráfica de geográfica" />
      <Box height="75vh" border={`1px solid ${colors.grey[100]}`}>
        <GraficaGeo />
      </Box>
    </Box>
  );
};

export default GGeo;
