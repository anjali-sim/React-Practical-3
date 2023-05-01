import { createGlobalStyle } from "styled-components";

// style for global style
const GlobalStyle = createGlobalStyle`
body {
  background-color: rgb(238, 238, 238);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  font-family: "Pathway Extreme", sans-serif;
}
`;

export default GlobalStyle;
