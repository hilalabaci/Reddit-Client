import styled from "styled-components";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

export const PostContainer = styled.div``;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 20px;
  padding: 10px 0;
  flex: 1;
  border-top: solid #ffffff1a;
  border-top-width: 0.001rem;
  border-bottom: solid #ffffff1a;
  border-bottom-width: 0.001rem;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;
export const UserImg = styled.img`
  width: 25px;
  border-radius: 50px;
`;
export const UserName = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: #b8c5c9;
`;
export const SelfText = styled.p`
  color: white;
`;
export const DatePosted = styled.div`
  color: #82959b;
  font-size: 0.75rem;
`;
export const PostDetail = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
`;
export const ImgPosted = styled.img`
  width: 500px;
  border-radius: 20px;
`;
export const VideoPosted = styled.video``;
export const ActionDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const CommentPost = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a282d;
  border-radius: 50px;
  width: 4.5rem;
  font-size: 11px;
  font-weight: bold;
  gap: 6px;
`;
export const CommentIcon = styled(ModeCommentOutlinedIcon)`
  width: 1.1rem !important;
  color: white;
`;
