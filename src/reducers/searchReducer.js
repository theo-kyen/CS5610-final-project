import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  results: {},
};

const searchSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { setQuery, setResults } = searchSlice.actions;
export default searchSlice.reducer;
