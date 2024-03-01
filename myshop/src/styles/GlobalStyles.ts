import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    
    body {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: normal;

        background-color: rgb(169,169,169, .1);
    }

    a, button{
        cursor: pointer;
        transition: filter 0.3s;

        &:hover{
            filter: brightness(1.5);
        }
    }

`