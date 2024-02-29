import React from "react";
import {
  ArrowDown,
  ArrowUp,
  Wrapper,
  ButtonforArrows,
  Numbers,
} from "./styles";

export function VotesofPost(props) {
  return (
    <Wrapper>
      <ButtonforArrows>
        <ArrowUp />
      </ButtonforArrows>
      <Numbers>{props.votes}</Numbers>
      <ButtonforArrows>
        <ArrowDown />
      </ButtonforArrows>
    </Wrapper>
  );
}
