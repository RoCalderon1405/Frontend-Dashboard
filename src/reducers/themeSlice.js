import { useMemo, useState } from "react";

import { createSlice } from "@reduxjs/toolkit";
import { createTheme } from "@mui/material/styles";

import { useSelector } from "react-redux";

import { tokens, themeSettings } from "../themeSettings";


const themeSlice = createSlice({
  name: "colorMode",
  initialState: {
    mode: "light",
    theme: themeSettings("dark"),
  },
  reducers: {
    toggleColorMode: (state) => {
      state.mode = state.mode == "light" ? "dark" : "light";
      state.theme = themeSettings(state.mode);
    },
  },
});

export const useMode = () => {
  const colorMode = useSelector((state) => state.colorMode.mode);
  const theme = useMemo(() => createTheme(themeSettings(colorMode)), [colorMode]);

  return [theme, colorMode];
};

export default themeSlice.reducer;
export const { toggleColorMode } = themeSlice.actions;
export const selectColorMode = (state) => state.colorMode.mode;