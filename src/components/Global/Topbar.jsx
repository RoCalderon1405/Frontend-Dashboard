import React, { useMemo } from "react";

import { Box, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

import { useSelector, useDispatch } from "react-redux";

import { toggleColorMode } from "../../reducers/themeSlice";
import { tokens } from "../../themeSettings";

const Topbar = () => {
  const colorMode = useSelector((state) => state.colorMode.mode);
  const theme = useSelector((state) => state.colorMode.theme.palette);
  const colors = tokens(colorMode);
  
  const dispatch = useDispatch();

  return (
    <>
      <Box display="flex" justifyContent="space-between" p={2}>
        {/* Barra de búsqueda */}
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          <InputBase
            sx={{ ml: 2, flex: 1 }}
            placeholder="Buscar..."
          ></InputBase>
          <IconButton type="button" sx={{}}>
            <SearchIcon />
          </IconButton>
        </Box>
        {/* íconos */}
        <Box display="flex">
          <IconButton onClick={() => dispatch(toggleColorMode())}>
            {colorMode == "light" ? (
              <LightModeOutlinedIcon />
            ) : (
              <DarkModeOutlinedIcon />
            )}
          </IconButton>
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton>
            <PersonOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Topbar;
