import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    updateUserSongs: (state, action) => {
      state.user.likedSongs = action.payload;
    },
  },
});

export const { setUser, updateUserSongs } = userSlice.actions;
export default userSlice.reducer;
