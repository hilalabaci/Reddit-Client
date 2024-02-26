import { createSlice } from "@reduxjs/toolkit";
import { getSubreddits } from "../subreddit/subredditsAPI";

export const subredditsSlice = createSlice({
  name: "Subreddits",
  initialState: {
    subreddits: [],
    isLoadingSubreddits: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSubreddits.pending, (state) => {
        state.isLoadingSubreddits = true;
        state.hasError = false;
      })
      .addCase(getSubreddits.rejected, (state) => {
        state.isLoadingSubreddits = false;
        state.hasError = true;
        state.subreddits = {};
      })
      .addCase(getSubreddits.fulfilled, (state, action) => {
        state.isLoadingSubreddits = false;
        state.hasError = false;
        state.subreddits = action.payload;
      });
  },
});

export const selectSubreddits = (state) => state.subreddits.subreddits;
export const isLoadingSubreddits = (state) =>
  state.subreddits.isLoadingSubreddits;

export default subredditsSlice.reducer;
