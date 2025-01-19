import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menu: false,
  },
  reducers: {
    showMenu(state, action) {
      state.menu = true;
    },
  },
});

export const { showMenu } = menuSlice.actions;
export default menuSlice.reducer;
