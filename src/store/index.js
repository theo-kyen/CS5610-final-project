import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../reducers/searchReducer";
import userReducer from "../reducers/userReducer";

const store = configureStore({
  reducer: {
    searchReducer,
    userReducer,
  },
});

export default store;
