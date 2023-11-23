import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    //TYPE: name of the slice: 'song' + '/' + name of the function: 'addSong' --> song/addSong
    addSong(state, action) {
      state.push(action.payload);
    },
    //TYPE: name of the slice: 'song' + '/' + name of the function: 'removeSong' --> song/removeSong
    removeSong(state, action) {
      // action. payload === string, the song we remove
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
// export default songsSlice.reducer;
