import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #f2f4f5;
  opacity: 0.7;
  background-color: #1a282d;
  border-radius: 50px;
  width: 50%;
  padding: 0 16px;
  height: 40px;
  font-family: "Fredoka";
  :hover {
    opacity: 1;
  }
`;
export const IconSearch = styled(SearchIcon)`
  font-size: 20px !important;
  padding-right: 10px;
  opacity: 0.4;
  :hover {
    opacity: 1;
  }
`;
export const SearchButton = styled.input`
  background-color: #1a282d;
  border: none;
  outline: none;
  font-size: 17px;
  color: #f2f4f5;
  font-family: "Fredoka";
  :hover {
    opacity: 1;
  }
`;
