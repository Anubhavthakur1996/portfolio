import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import coreSlice from "./coreSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    core: coreSlice,
  },
});
