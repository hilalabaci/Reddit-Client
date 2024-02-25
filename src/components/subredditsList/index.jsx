import React from "react";
import { Card } from "../card/index";
import {
  TitleSubreddit,
  UlSubreddit,
  LiSubreddit,
  ButtonSubreddit,
  IconSubreddit,
} from "./styles";

export function SubredditsList() {
  return (
    <Card>
      <TitleSubreddit>Subreddits</TitleSubreddit>
      <UlSubreddit>
        <LiSubreddit>
          <ButtonSubreddit>
            <IconSubreddit></IconSubreddit>
          </ButtonSubreddit>
        </LiSubreddit>
      </UlSubreddit>
    </Card>
  );
}
