import React from "react";
import { IconSearch, SearchButton, Wrapper } from "./styles";

export function Search() {
  return (
    <Wrapper>
      <IconSearch />
      <SearchButton placeholder="Search Reddit" />
    </Wrapper>
  );
}
