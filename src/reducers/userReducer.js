import { createSlice } from "@reduxjs/toolkit";
import * as client from '../Search/client';

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

export const addSong = (song) => {
  return async (dispatch) => {
    try {
      const updatedUser = await client.addSong(song); // API call to add a song
      dispatch({
        type: 'ADD_SONG',
        payload: updatedUser,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteSong = (songId) => {
  return async (dispatch) => {
    try {
      const updatedUser = await client.deleteSong(songId); // API call to delete a song
      dispatch({
        type: 'DELETE_SONG',
        payload: updatedUser,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export default userSlice.reducer;
