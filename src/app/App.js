import React from "react";
import "../app/App.css"
import { SubredditsList } from "../components/subredditsList";
import AppLayout from "./AppLayout";
import { Main, PostWraper, SubredditListWrapper } from "./styles";

function App() {
  return (
    <AppLayout>
      <Main>
        <PostWraper></PostWraper>
        <SubredditListWrapper>
          <SubredditsList />
        </SubredditListWrapper>
      </Main>
    </AppLayout>
  );
}

export default App;
