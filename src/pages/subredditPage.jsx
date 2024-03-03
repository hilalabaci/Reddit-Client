import React from "react";
import { Main, PostWraper, SubredditListWrapper } from "./styles";
import { Posts } from "../features/posts";
import { SubredditsList } from "../features/subreddits";
import AppLayout from "../components/layout";
import { useParams } from "react-router-dom";

export default function SubredditPage() {
  const params = useParams();
  return (
    <AppLayout>
      <Main>
        <PostWraper>
          <Posts name={params.name} />
        </PostWraper>
        <SubredditListWrapper>
          <SubredditsList />
        </SubredditListWrapper>
      </Main>
    </AppLayout>
  );
}
