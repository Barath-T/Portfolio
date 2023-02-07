import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    html{
        height:100%;
    }
    body{
        height:100%;
        margin:0;
        background-color: #121212;
        color: #ffffff;
        font-family: Outfit;
        font-size:1em;
        font-weight:400;
    }
    #root{
        height:100%;
        display:flex;
        flex-direction:column;
    }
`;
