import styled, { createGlobalStyle } from 'styled-components'

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

export const ListagemContainer = styled.div`
    display: flex;
    width: 100%;
    padding-bottom: 120px;
    justify-content: center;
`

export default GlobalStyle