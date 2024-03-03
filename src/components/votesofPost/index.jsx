import React, { useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  Wrapper,
  ButtonforArrows,
  Numbers,
} from "./styles";

export function VotesofPost(props) {
  const [backgroundForButton, setBackgroundForButton] = useState("#1a282d");

  const HandlerChangeforArrowUp = () => {
    setBackgroundForButton("#d93a00");
  };
  const HandlerChangeforArrowDown = () => {
    setBackgroundForButton("#6a5cff");
  };
  return (
    <Wrapper $backgroundColor={backgroundForButton}>
      <ButtonforArrows
        onClick={HandlerChangeforArrowUp}
        $backgroundColor={backgroundForButton}
      >
        <ArrowUp />
      </ButtonforArrows>
      <Numbers>{props.votes}</Numbers>
      <ButtonforArrows
        onClick={HandlerChangeforArrowDown}
        $backgroundColor={backgroundForButton}
      >
        <ArrowDown />
      </ButtonforArrows>
    </Wrapper>
  );
}
