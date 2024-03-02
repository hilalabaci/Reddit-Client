import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postsAPI";

export const postsSlice = createSlice({
  name: "Posts",
  initialState: {
    posts: [],
    isLoadingPosts: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoadingPosts = true;
        state.hasError = false;
      })
      .addCase(getPosts.rejected, (state) => {
        state.isLoadingPosts = false;
        state.hasError = true;
        state.posts = {};
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoadingPosts = false;
        state.hasError = false;
        state.posts = action.payload;
      });
  },
});

export const selectPosts = (state) => state.posts.posts;
export const isLoadingPosts = (state) => state.posts.isLoadingPosts;

export default postsSlice.reducer;
