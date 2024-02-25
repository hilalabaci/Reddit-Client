import React from "react";
import { Wrapper } from "./styles";
import { Logo } from "../logo";
import { Search } from "../search";

export function Navbar() {
  return (
    <Wrapper>
      <Logo />
      <Search />
    </Wrapper>
  );
}
