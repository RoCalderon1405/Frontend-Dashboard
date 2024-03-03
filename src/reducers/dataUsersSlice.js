import { createSlice } from "@reduxjs/toolkit";
import { users } from "../data/data";

const dataUsersSlice = createSlice({
    name: 'dataUsers',
    initialState: users,
    reducers: {

    }

})

export default dataUsersSlice.reducer