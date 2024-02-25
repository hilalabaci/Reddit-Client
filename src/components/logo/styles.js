import styled from "styled-components";
import RedditIcon from "@mui/icons-material/Reddit";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  height: 64px;
  font-size: 19px;
  letter-spacing: 0.8px;
  font-family: "Fredoka";
  font-weight: 600;
`;

export const IconReddit = styled(RedditIcon)`
  font-size: 41px !important;
  color: #ff4500;
`;
export const Reddit = styled.span`
  color: #ff4500;
  font-size: 28px;
`;
export const Minimal = styled.span`
  color: #ffffff;
  font-size: 28px;
  padding-left: 2px;
`;
