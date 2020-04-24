import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    box-sizing: border-box;
  }
#root {
    display: grid;
    grid-template-rows: 64px auto 48px;
    height: 100vh;
}
  body {
    margin: 0;
    font-family: sans-serif;
    background: #f8e1f4;
  }
  p {
    line-height: 150%;
    font-weight: 300;
  }
  :root {
    --primary: #D8345F;
    --secondary: #CCAFAF;
    --tertiary: #E58A8A;
  }
`;
