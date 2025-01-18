import { createSlice } from "@reduxjs/toolkit";

const coreSlice = createSlice({
  name: "core",
  initialState: {
    isMobile: false,
  },
  reducers: {
    setMobile(state, action) {
      state.isMobile = action.payload;
    },
  },
});

export const { setMobile } = coreSlice.actions;
export default coreSlice.reducer;
