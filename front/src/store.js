import { configureStore } from "@reduxjs/toolkit";
import slice from "./reducer/testReducer";

const store = configureStore({
  reducer: {
    log: slice.reducer,
  },
});

export default store;
