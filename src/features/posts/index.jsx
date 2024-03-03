import React, { useEffect } from "react";
import { VotesofPost } from "../../components/votesofPost";
import {
  PostContainer,
  Wrapper,
  UserInfo,
  UserName,
  DatePosted,
  PostDetail,
  ImgPosted,
  VideoPosted,
  ActionDetails,
  CommentPost,
  UserImg,
  CommentIcon,
  SelfText,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./postsAPI";
import { isLoadingPosts, selectPosts } from "./postsSlice";

export function Posts(props) {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(isLoadingPosts);

  useEffect(() => {
    dispatch(getPosts(props.name));
  }, [dispatch, props.name]);

  if (isLoading) return <div>Loading now...</div>;
  return (
    <PostContainer>
      {posts.map((post) => (
        <Wrapper>
          <UserInfo>
            <UserImg src="/img/logoReddit.webp" />
            <UserName>{post.author}</UserName>
            <DatePosted>
              . {new Date(Number(post.created) * 1000).toDateString()}
            </DatePosted>
          </UserInfo>
          <PostDetail>{post.title}</PostDetail>
          <SelfText>{post.selftext}</SelfText>
          {post.video ? (
            <VideoPosted
              width="500px"
              height="500px"
              autoplay="autoplay"
              muted
              loop
            >
              <source src={post.video} type="video/mp4" />
            </VideoPosted>
          ) : post.img ? (
            <ImgPosted src={post.img ? post.img : "/img/logoReddit.webp"} />
          ) : null}

          <ActionDetails>
            <VotesofPost votes={post.ups} />
            <CommentPost>
              <CommentIcon /> {post.num_comments}
            </CommentPost>
          </ActionDetails>
        </Wrapper>
      ))}
    </PostContainer>
  );
}
