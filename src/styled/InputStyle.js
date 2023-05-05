import styled from "styled-components";

// Style for the input text field
export const InputStyle = styled.input`
  width: 340px;
  height: 30px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 3px solid #bfdde9;
  font-size: ${(props) => props.fontSize}px;
  position: fixed;
  top: 720px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #444444;
    font-size: 18px;
  }

  &:focus {
    background-color: #d3d3d3;
  }

  // Media query for width
  @media (max-width: 2560px) {
    top: 700px;
  }

  @media (max-width: 1440px) {
    top: 702px;
  }

  @media (max-width: 1024px) {
    top: 690px;
  }

  @media (max-width: 355px) {
    width: 250px;
  }

  // Media query for height
  @media (max-height: 1786px) {
    top: 1120px;
  }

  @media (max-height: 1750px) {
    top: 1100px;
  }

  @media (max-height: 1710px) {
    top: 1080px;
  }

  @media (max-height: 1692px) {
    top: 1070px;
  }

  @media (max-height: 1650px) {
    top: 1050px;
  }

  @media (max-height: 1600px) {
    top: 1030px;
  }

  @media (max-height: 1550px) {
    top: 1010px;
  }

  @media (max-height: 1500px) {
    top: 980px;
  }

  @media (max-height: 1450px) {
    top: 940px;
  }

  @media (max-height: 1370px) {
    top: 900px;
  }

  @media (max-height: 1320px) {
    top: 880px;
  }

  @media (max-height: 1280px) {
    top: 860px;
  }

  @media (max-height: 1230px) {
    top: 840px;
  }

  @media (max-height: 1180px) {
    top: 820px;
  }

  @media (max-height: 1140px) {
    top: 800px;
  }

  @media (max-height: 1100px) {
    top: 775px;
  }

  @media (max-height: 1050px) {
    top: 763px;
  }

  @media (max-height: 1024px) {
    top: 753px;
  }

  @media (max-height: 1010px) {
    top: 743px;
  }

  @media (max-height: 990px) {
    top: 733px;
  }

  @media (max-height: 970px) {
    top: 725px;
  }

  @media (max-height: 950px) {
    top: 715px;
  }

  @media (max-height: 930px) {
    top: 705px;
  }

  @media (max-height: 910px) {
    top: 700px;
  }

  @media (max-height: 893px) {
    top: 680px;
  }

  @media (max-height: 890px) {
    top: 670px;
  }

  @media (max-height: 870px) {
    top: 665px;
  }

  @media (max-height: 850px) {
    top: 653px;
  }

  @media (max-height: 830px) {
    top: 645px;
  }

  @media (max-height: 815px) {
    top: 639px;
  }

  @media (max-height: 800px) {
    top: 638px;
  }

  @media (max-height: 764px) {
    top: 620px;
  }

  @media (max-height: 744px) {
    top: 610px;
  }

  @media (max-height: 730px) {
    top: 600px;
  }

  @media (max-height: 700px) {
    top: 590px;
  }

  @media (max-height: 680px) {
    top: 580px;
  }

  @media (max-height: 650px) {
    top: 550px;
  }

  @media (max-height: 620px) {
    top: 530px;
  }

  @media (max-height: 590px) {
    top: 520px;
  }

  @media (max-height: 560px) {
    top: 490px;
  }
`;
