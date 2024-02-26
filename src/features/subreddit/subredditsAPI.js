import { createAsyncThunk } from "@reduxjs/toolkit";

/**const client_id = process.env.REACT_APP_CLIENT_ID;
const authorization_URL = process.env.REACT_APP_AUTHORIZATION_URL;
const redirect_uri = process.env.REACT_APP_REDIRECT_URL;**/
const subredditBaseUrl = "https://www.reddit.com/subreddits/.json";

export const getSubreddits = createAsyncThunk(
  "Subreddits/getSubreddits",
  async () => {
    try {
      const response = await fetch(subredditBaseUrl, {
        method: "GET",
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        const subsreddits = jsonResponse.data.children.map((child) => ({
          id: child.data.id,
          name: child.data.display_name,
          title: child.data.title,
          prefixedName: child.data.display_name_prefixed, 
          url: child.data.url,
          icon: child.data.icon_img,
        }));
        return subsreddits;
      }
    } catch (error) {
      console.log(error);
      return [];
    }
  }
);
