import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* Reset básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;

    font-family: roboto, sans-serif;
  }

  body {
    background-color: #FFF8F2;
  }
`
export default GlobalStyle