import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem;
`;
export const TitleSubreddit = styled.h2`
  text-transform: uppercase;
  color: #82959b;
  font-size: 20px;
  font-family: "Fredoka";
  padding: 10px 0;
`;
export const UlSubreddit = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 25px;
  flex-direction: column;
  padding: 0;
`;
export const LiSubreddit = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
`;
export const LinkSubreddit = styled.a`
  color: #8e9fa5;
  font-family: "Fredoka";
`;
export const IconSubreddit = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50px;
`;
export const PrefixedName = styled.span`
  font-size: 18px;
`;
