import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    showMenu: false,
  },
  reducers: {
    showMenu(state, action) {
      state.showMenu = true;
    },
  },
});

export const { showMenu } = menuSlice.actions;
export default menuSlice.reducer;
