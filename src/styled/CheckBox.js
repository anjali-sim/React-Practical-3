import styled from "styled-components";
import checkbox from "../assets/images/checkbox.ico";

// Style for the input checkbox
export const CheckBox = styled.input`
  appearance: none;
  border: 2px solid rgb(209, 207, 207);
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  padding-top: 20px;
  position: relative;
  width: 28px;

  &:checked {
    background-image: url(${checkbox});
    background-repeat: no-repeat;
    background-size: 100%;
    border: none;
  }

  @media (max-width: 355px) {
    height: 25px;
    width: 25px;
  }
`;
