import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Istate {
    currentVideoUrl : string
}


export const initialState: Istate = {
    currentVideoUrl : ''
};
export const youtubePlayer = createSlice({
  name: "Youtube",
  initialState,
  reducers: {
    currentVideo: (state, action: PayloadAction<string>) => {
       state.currentVideoUrl = action.payload
    },
  },
});

export const { currentVideo } = youtubePlayer.actions;

export default youtubePlayer.reducer;