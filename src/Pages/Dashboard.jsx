import React, { useState } from "react";

import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Typography from "@mui/material/Typography";

import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import InventoryIcon from "@mui/icons-material/Inventory";

import { useSelector } from "react-redux";

import Header from "../components/Header";
import StatBox from "../components/StatBox";
import GraficaLineas from "../components/GraficaLineas";
import ProgressCircle from "../components/ProgressCircle";

import { tokens } from "../themeSettings";
import { mockTransactions } from "../data/data";
import GraficaBarra from "../components/GraficaBarra";
import GraficaGeo from "../components/GraficaGeo";

const Dashboard = () => {
  const theme = useSelector((state) => state.colorMode.mode);
  const colors = tokens(theme);

  const [proyectoSelected, setProyectoSelected] = useState("Aragón");
  const [sedeSelected, setSedeSelected] = useState("General");

  const handleChangeProyecto = (event) => {
    const selectedPoyecto = event.target.value;
    setProyectoSelected(selectedPoyecto);
  };
  const handleChangeSede = (event) => {
    const selectedSede = event.target.value;
    setSedeSelected(selectedSede);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignContent="center">
        <Header
          title="DASHBOARD"
          subtitle="Bienvenido al Dashboard Cristiano Ronaldo :)"
        />
      </Box>

      <Box display="flex" justifyContent="space-between">
        <Box display="flex" gap="15px">
          <Box
            width="200px"
            sx={{
              "& .Mui-focused": {
                color: `${colors.grey[200]} !important`,
              },
            }}
          >
            <FormControl fullWidth variant="filled">
              <InputLabel id="simple-select-label">Proyecto</InputLabel>
              <Select
                labelId="simple-select-label"
                id="simple-select-disabled"
                value={proyectoSelected}
                label="Proyecto"
                onChange={handleChangeProyecto}
              >
                <MenuItem value="Fonatur">Fonatur</MenuItem>
                <MenuItem value="Aragón">Aragón</MenuItem>
                <MenuItem value="Mérida">Mérida</MenuItem>
                <MenuItem value="Palénque">Palénque</MenuItem>
                <MenuItem value="Cancún">Cancún</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            width="200px"
            sx={{
              "& .Mui-focused": {
                color: `${colors.grey[200]} !important`,
              },
            }}
          >
            <FormControl fullWidth variant="filled">
              <InputLabel id="simple-select-label">
                Sedes
              </InputLabel>
              <Select
                labelId="simple-select-label"
                id="simple-select-disabled"
                value={sedeSelected}
                label="Age"
                onChange={handleChangeSede}
              >
                <MenuItem value="General">General</MenuItem>
                <MenuItem value="Sede 1">Sede 1</MenuItem>
                <MenuItem value="Sede 2">Sede 2</MenuItem>
                <MenuItem value="Sede 3">Sede 3</MenuItem>
                <MenuItem value="Sede 4">Sede 4</MenuItem>
                <MenuItem value="Sede 5">Sede 5</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadForOfflineIcon sx={{ mr: "10px" }} />
          Descargar Reportes
        </Button>
      </Box>

      {/* Grid & Charts */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        marginTop="10px"
        marginBottom="15px"
        gap="20px"
      >
        {/* Row 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Cajas"
            progress="0.75"
            increase="+14%"
            icon={
              <InventoryIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="No. Cajas"
            progress="0.50"
            increase="+21%"
            icon={
              <InventoryIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="Expedientes"
            progress="0.30"
            increase="+5%"
            icon={
              <InventoryIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Incidencias"
            progress="0.80"
            increase="+43%"
            icon={
              <InventoryIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/* Row 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Ganancias
              </Typography>
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.greenAccent[400]}
              >
                $59,342,32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadForOfflineIcon
                  sx={{
                    fontSize: "26px",
                    color: colors.greenAccent[500],
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px">
            <GraficaLineas isDashboard={true} />
          </Box>
        </Box>
        {/* Transacciones */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Incidencias Recientes
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.redAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                {transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
        {/* Row 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          p="30px"
          sx={{
            backgroundColor: colors.primary[400],
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            Gráfica
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle progress="0.8" size="125" />
            <Typography
              variant="h5"
              fontWeight="bold"
              color={colors.grey[200]}
              sx={{ mt: "15px" }}
            >
              Ganancias generadas
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              $40,846,943
            </Typography>
          </Box>
        </Box>
        {/*  */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Gráfica
          </Typography>
          <Box height="250px" mt="-20px">
            <GraficaBarra isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Mapa geográfico
          </Typography>
          <Box height="250px" mt="-20px">
            <GraficaGeo isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
