import { Box, Typography } from "@mui/material";
import React from "react";
import { tokens } from "../themeSettings";
import { useSelector } from "react-redux";

const Header = ({ title, subtitle }) => {
  const colorMode = useSelector((state) => state.colorMode.mode);
  // const theme = useSelector((state) => state.colorMode.theme.palette);
  const colors = tokens(colorMode);

  return (
    <>
      <Box mb="30px">
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ mb: "5px" }}
        >
          {title}
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[400]}>
          {subtitle}
        </Typography>
      </Box>
    </>
  );
};

export default Header;
