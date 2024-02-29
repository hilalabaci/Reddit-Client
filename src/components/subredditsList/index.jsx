import React, { useEffect } from "react";
import {
  TitleSubreddit,
  UlSubreddit,
  LiSubreddit,
  LinkSubreddit,
  IconSubreddit,
  PrefixedName,
  Wrapper,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoadingSubreddits,
  selectSubreddits,
} from "../../features/subreddit/subredditsSlice";
import { getSubreddits } from "../../features/subreddit/subredditsAPI";

export function SubredditsList() {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  const isLoading = useSelector(isLoadingSubreddits);

  useEffect(() => {
    dispatch(getSubreddits());
  }, [dispatch]);

  if (isLoading) return <div>Loading now...</div>;
  return (
    <Wrapper>
      <TitleSubreddit>Communities</TitleSubreddit>
      <UlSubreddit>
        {subreddits.map((subreddit) => (
          <LinkSubreddit>
            <LiSubreddit>
              <IconSubreddit
                src={subreddit.icon ? subreddit.icon : "/img/logoReddit.webp"}
              />
              <PrefixedName>{subreddit.prefixedName}</PrefixedName>
            </LiSubreddit>
          </LinkSubreddit>
        ))}
      </UlSubreddit>
    </Wrapper>
  );
}
