import styled from "styled-components";

// style for the button and the hover effect
export const AddButton = styled.button`
  border-radius: 50%;
  position: fixed;
  height: 75px;
  width: 75px;
  font-size: 40px;
  background-color: #2ceead;
  border: none;
  color: rgb(28, 119, 28);

  &:hover {
    background-color: #58c9a3;
    color: rgb(20, 85, 20);
    cursor: pointer;
  }

  @media (max-width: 355px) {
    height: 65px;
    width: 65px;
  }
`;
