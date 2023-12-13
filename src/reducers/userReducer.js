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
    updateUser: (state, action) => {
      if (action.payload.username) {
        state.user.username = action.payload.username;
      }
      if (action.payload.password) {
        state.user.password = action.payload.password;
      }
      if (action.payload.firstName) {
        state.user.firstName = action.payload.firstName;
      }
      if (action.payload.lastName) {
        state.user.lastName = action.payload.lastName;
      }

      // return state.user;
    },
    updateUserSongs: (state, action) => {
      state.user.likedSongs = action.payload;
    },
  },
});

export const { setUser, updateUser, updateUserSongs } = userSlice.actions;
export default userSlice.reducer;
