import { createGlobalStyle } from "styled-components";

 export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #242424;
    color: white;
  }
   :root {
    --color-primary: #F7F9FC;
    --color-secondary: #15181C;
    --gray: #D9D9D9;
    --blue: #4766FF;
    --white: #FFFFFF;
   }  
  body {
    background-color: var(--color-primary);
    color: var(--color-secondary);
    font-size: 1.2rem;
     font-family: "Dosis", sans-serif;
    font-weight: 400;
    ul{list-style: none;}
    a{text-decoration: none;}
`;

