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
} from "../subreddits/subredditsSlice";
import { getSubreddits } from "./subredditsAPI";

export function SubredditsList(props) {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  const isLoading = useSelector(isLoadingSubreddits);

  useEffect(() => {
    dispatch(getSubreddits(props.name));
  }, [dispatch, props.name]);

  if (isLoading) return <div>Loading now...</div>;
  return (
    <Wrapper>
      <TitleSubreddit>Communities</TitleSubreddit>
      <UlSubreddit>
        {subreddits.map((subreddit) => (
          <LinkSubreddit key={subreddit.id} to={`/${subreddit.prefixedName}`}>
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
