import styled from "styled-components";

export const Wrapper = styled.div`
  width: ${(props) => props.cardWidth};
  height: ${(props) => props.cardHeight};
  border-bottom: 1px solid #ffffff1a;
  border-top: 1px solid #ffffff1a;
  :hover {
    border-radius: 20px;
    background-color: #303030;
  }
`;
