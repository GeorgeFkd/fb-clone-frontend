import { createSlice, configureStore } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    id: -1,
  },
  reducers: {},
});
