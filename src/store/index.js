import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../reducers/searchReducer";

const store = configureStore({
  reducer: {
    searchReducer,
  },
});

export default store;
