import React from "react";
import "../app/App.css";
import { SubredditsList } from "../components/subredditsList";
import AppLayout from "./AppLayout";
import { Main, PostWraper, SubredditListWrapper } from "./styles";
import { Posts } from "../components/posts";

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
