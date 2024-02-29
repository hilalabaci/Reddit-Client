import React from "react";
import { VotesofPost } from "../votesofPost";
import {
  PostContainer,
  Wrapper,
  UserInfo,
  UserName,
  DatePosted,
  PostDetail,
  ImgPosted,
  ActionDetails,
  CommentPost,
  UserImg,
  CommentIcon,
} from "./styles";

export function Posts() {
  return (
    <PostContainer>
      <Wrapper>
        <UserInfo>
          <UserImg src="/img/logoReddit.webp" />
          <UserName>u/Hilalaabaci</UserName>
          <DatePosted>. 11 hr ago</DatePosted>
        </UserInfo>
        <PostDetail>Just spotted this sticker</PostDetail>
        <ImgPosted src="/img/logoReddit.webp" />
        <ActionDetails>
          <VotesofPost votes="230" />
          <CommentPost>
            <CommentIcon /> 300
          </CommentPost>
        </ActionDetails>
      </Wrapper>
    </PostContainer>
  );
}
