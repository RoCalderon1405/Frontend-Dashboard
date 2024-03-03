import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeSlice";
import dataUsersReducer from "./reducers/dataUsersSlice";

export const store = configureStore({
  reducer: {
    colorMode: themeReducer, 
    dataUsers: dataUsersReducer,
  },
});
