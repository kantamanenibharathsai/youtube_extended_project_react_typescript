import { configureStore } from "@reduxjs/toolkit";
import youtubePlayer from "../features/Slice"

export const store = configureStore({
  reducer: { player: youtubePlayer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;