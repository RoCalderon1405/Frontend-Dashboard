import React, { useState } from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Box, IconButton, Typography } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HelpIcon from "@mui/icons-material/Help";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import MapIcon from "@mui/icons-material/Map";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

import { Link } from "react-router-dom";

import { tokens } from "../../themeSettings";

import { useSelector } from "react-redux";

const Item = ({ title, route, icon, selected, setSelected }) => {
  const colorMode = useSelector((state) => state.colorMode.mode);
  // const theme = useSelector((state) => state.colorMode.theme.palette);
  const colors = tokens(colorMode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={route} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const SidebarMain = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  const colorMode = useSelector((state) => state.colorMode.mode);
  // const theme = useSelector((state) => state.colorMode.theme.palette);
  const colors = tokens(colorMode);

  return (
    <Box
      sx={{
        "& .ps-sidebar-container": {
          background: `${colors.primary[400]} !important`,
        },
        "& .ps-menuitem-root": {
          // padding: "5px 35px 5px 20px !important",
          height: "auto !important",
        },
        "& .ps-menu-button:hover": {
          background: `${colors.grey[500]} !important`,
        },
        "& .ps-active": {
          color: `#6870fa !important`,
        },
      }}
    >
      <Sidebar
        collapsed={isCollapsed}
        style={{
          height: "100%",
        }}
        rootStyles={{
          border: "none !important",
        }}
      >
        <Menu>
          {/* Logo y menu icon */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={
              isCollapsed ? (
                <IconButton>
                  <MenuIcon />
                </IconButton>
              ) : undefined
            }
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
              justifyContent: "space-between",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  src="https://b.fssta.com/uploads/application/soccer/headshots/885.png"
                  alt="messi"
                  width="100px"
                  height="100px"
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                  }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Cristiano Ronaldo
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Programador Frontend
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              route="/"
              icon={<HomeIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{
                margin: !isCollapsed ? "15px 0 5px 20px" : "",
                color: isCollapsed && "#6870fa",
              }}
            >
              {!isCollapsed ? (
                "Usuarios"
              ) : (
                <div
                  style={{
                    margin: "auto",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <HorizontalRuleIcon />
                </div>
              )}
            </Typography>
            <Item
              title="Administrar Usuarios"
              route="team"
              icon={<EmojiPeopleIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Agregar Usuario"
              route="add-user"
              icon={<PersonAddAlt1Icon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{
                margin: !isCollapsed ? "15px 0 5px 20px" : "",
                color: isCollapsed && "#6870fa",
              }}
            >
              {!isCollapsed ? (
                "Datos"
              ) : (
                <div
                  style={{
                    margin: "auto",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <HorizontalRuleIcon />
                </div>
              )}
            </Typography>
            {/* <Item
              title="Balance de gastos"
              route="/"
              icon={<ReceiptLongIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            {/* <Item
              title="Perfil form"
              route="/"
              icon={<PersonIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            <Item
              title="Calendar"
              route="calendar"
              icon={<CalendarTodayIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* <Item
              title="FAQ"
              route="/"
              icon={<HelpIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{
                margin: !isCollapsed ? "15px 0 5px 20px" : "",
                color: isCollapsed && "#6870fa",
              }}
            >
              {!isCollapsed ? (
                "Gráficas"
              ) : (
                <div
                  style={{
                    margin: "auto",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <HorizontalRuleIcon />
                </div>
              )}
            </Typography>
            <Item
              title="Gráfica de Barras"
              route="grafica/barras"
              icon={<BarChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Gráfica de Pastel"
              route="grafica/pastel"
              icon={<PieChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Gráfica de Lineas"
              route="grafica/lineas"
              icon={<StackedLineChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Mapa Geográfico"
              route="grafica/geomap"
              icon={<MapIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarMain;
