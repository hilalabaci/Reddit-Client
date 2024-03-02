import React from "react";
import "../app/App.css";
import AppLayout from "./AppLayout";
import { Main, PostWraper, SubredditListWrapper } from "./styles";
import { Posts } from "../features/posts/index";
import { SubredditsList } from "../features/subreddits/index";

function App() {
  return (
    <AppLayout>
      <Main>
        <PostWraper>
          <Posts />
          <Posts />
        </PostWraper>
        <SubredditListWrapper>
          <SubredditsList />
        </SubredditListWrapper>
      </Main>
    </AppLayout>
  );
}

export default App;
