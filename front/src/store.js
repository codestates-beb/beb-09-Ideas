import { configureStore } from "@reduxjs/toolkit";
import slice from "./reducer/testReducer";

const store = configureStore({
  reducer: slice.reducer,
});

export default store;
