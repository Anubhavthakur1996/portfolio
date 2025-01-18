import { createSlice } from "@reduxjs/toolkit";

const coreSlice = createSlice({
  name: "core",
  initialState: {
    isMobile: false,
  },
  reducers: {
    setMobile(state, action) {
      state.isMobile = action.value;
    },
  },
});

export const { setMobile } = coreSlice.actions;
export default coreSlice.reducer;
