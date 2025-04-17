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
        cursor: pointer;
  }

  .LoadingStyle{
    margin: 80px;
    margin-top: 120px;
    font-size: 50px;
    font-weight: 700;
    color: #E66767;
    text-align: center;

    @keyframes balance {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(-5deg);
      }
      50% {
        transform: rotate(0deg);
      }
      75% {
        transform: rotate(5deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
    animation: balance 1s ease-in-out infinite;
  }

  /* Alvo para WebKit (Chrome, Edge, etc.) */
::-webkit-scrollbar {
  width: 8px; /* largura da barra */
}

::-webkit-scrollbar-track {
  background: transparent; /* fundo da área do scroll */
}

::-webkit-scrollbar-thumb {
  background-color: rgba(255, 0, 0, 0.5); /* cor + opacidade */
  border-radius: 20px;
  border: 2px solid transparent;
  background-clip: padding-box;
}

`

export const ListagemContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

export default GlobalStyle