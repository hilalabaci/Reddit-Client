import { configureStore } from "@reduxjs/toolkit";
import subredditsReducer from "../features/subreddit/subredditsSlice";

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
  },
});
