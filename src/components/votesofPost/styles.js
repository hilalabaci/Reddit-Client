import styled from "styled-components";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

export const Wrapper = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$backgroundColor || "#1a282d"};
  border-radius: 50px;
`;

export const Numbers = styled.p`
  font-weight: bold;
  font-size: 11px;
`;
export const ButtonforArrows = styled.button`
  background-color: ${(props) => props.$backgroundColor || "#1a282d"};
  color: #8e9fa5;
  border: none;
  outline: none;
  border-radius: 50px;
  &:hover {
    background-color: #223237;
  }
`;
export const ArrowUp = styled(ArrowUpwardOutlinedIcon)`
  width: 1.1rem !important;
  color: white;
  &:hover {
    color: #d93a00 !important;
  }
`;
export const ArrowDown = styled(ArrowDownwardOutlinedIcon)`
  width: 1.1rem !important;
  color: white;
  &:hover {
    color: #6a5cff !important;
  }
`;
