import React from "react";
import { Minimal, Reddit, IconReddit, Wrapper } from "./styles.js";

export function Logo() {
  return (
    <Wrapper>
      <IconReddit />
      <Reddit>Reddit</Reddit>
      <Minimal>Minimal</Minimal>
    </Wrapper>
  );
}
