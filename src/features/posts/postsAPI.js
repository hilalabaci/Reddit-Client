import { createAsyncThunk } from "@reduxjs/toolkit";

const postsBaseUrl = (subreddit) => {
  if (!subreddit) subreddit = "Home";

  return `https://www.reddit.com/r/${subreddit}/.json`;
};

export const getPosts = createAsyncThunk("Posts/getPosts", async (name) => {
  try {
    const response = await fetch(postsBaseUrl(name), {
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
        video: child.data.secure_media?.reddit_video?.scrubber_media_url,
        num_comments: child.data.num_comments,
        ups: child.data.ups,
        created: child.data.created,
      }));
      return posts;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
});
