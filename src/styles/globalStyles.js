import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{ 
    margin:0;
    padding:0;
    font-family: "Roboto", serif;
    box-sizing: border-box;
    border: none;
    }

    body {
    height: 100vh;
    background: radial-gradient(circle, #508bfc, #1c3a70);
    }
`;

export default GlobalStyle;
