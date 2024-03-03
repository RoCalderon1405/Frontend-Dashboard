import React from "react";

import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SecurityIcon from "@mui/icons-material/Security";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import { useSelector } from "react-redux";

import { tokens } from "../themeSettings";
import Header from "../components/Header";

const Team = () => {
  const dataUsers = useSelector((state) => state.dataUsers);
  const colorMode = useSelector((state) => state.colorMode.mode);
  const colors = tokens(colorMode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      editable: true,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      headerAlign: "left",
      align: "left",
      flex:1
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
        field: "gender",
        headerName: "Gender",
        flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsIcon />}
            {access === "manager" && <SecurityIcon />}
            {access === "user" && <LockOpenIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access.toUpperCase()}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <>
      <Box m="20px">
        <Header title="Team" subtitle="Administación de equipo" />
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
              display: "none",
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          <DataGrid checkboxSelection rows={dataUsers} columns={columns} />
        </Box>
      </Box>
    </>
  );
};

export default Team;
