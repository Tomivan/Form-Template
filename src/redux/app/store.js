import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import templatesSlice from "../features/slice/templateSlice";

export const store = configureStore({
  reducer: {
    templates: templatesSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});