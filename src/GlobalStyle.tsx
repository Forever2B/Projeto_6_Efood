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

  .buttonStyle {
        display: flex;
        font-weight: 700;
        font-size: 14px;
        justify-content: center;
        align-items: center;
        border: none;
        background-color:#FFEBD9;
        color:#E66767;
  }
`

export const ListagemContainer = styled.div`
    display: flex;
    width: 100%;
    padding-bottom: 120px;
    justify-content: center;
`

export default GlobalStyle