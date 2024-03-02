import { createAsyncThunk } from "@reduxjs/toolkit";

const subreddit = "";

const postsBaseUrl = `https://www.reddit.com/${subreddit}/.json`;

export const getPosts = createAsyncThunk("Posts/getPosts", async () => {
  try {
    const response = await fetch(postsBaseUrl, {
      method: "GET",
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      const posts = jsonResponse.data.children.map((child) => ({
        prefixedName: child.data.display_name_prefixed,
        id: child.data.id,
        author: child.data.author,
        title: child.data.title,
        selftext: child.data.selftext,
        img: child.data.url_overridden_by_dest,
        video: child.data.secure_media?.reddit_video.scrubber_media_url,
        num_comments: child.data.num_comments,
        ups: child.data.ups,
      }));
      return posts;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
});
