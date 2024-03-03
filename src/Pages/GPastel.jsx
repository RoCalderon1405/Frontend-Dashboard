import React from "react";
import { Box } from "@mui/material";

import Header from "../components/Header";
import GraficaPastel from "../components/GraficaPastel";

const GPastel = () => {
  return (
    <Box m="20px">
      <Header title="Gráfica de pastel" subtitle="Una gráfica de pastel" />
      <Box height="75vh">
        <GraficaPastel />
      </Box>
    </Box>
  );
};

export default GPastel;
