import styled from "styled-components";

// style for the main content of the list
export const MainBody = styled.div`
  justify-content: center;
  align-items: center;
  background-color: white;
  text-align: center;
  width: 400px;
  height: 580px;

  @media (max-width: 400px) {
    width: 370px;
  }

  @media (max-width: 375px) {
    width: 350px;
  }

  @media (max-width: 355px) {
    width: 330px;
    height: 548px;
  }

  @media (max-width: 330px) {
    width: 315px;
  }

  @media (max-width: 325px) {
    width: 310px;
  }
  
  @media (max-width: 310px) {
    width: 285px;
  }
`;
