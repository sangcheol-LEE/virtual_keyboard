import { configureStore } from "@reduxjs/toolkit";
import textSlice from "../features/input";

export const store = configureStore({
   reducer : {
      text : textSlice
   },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;