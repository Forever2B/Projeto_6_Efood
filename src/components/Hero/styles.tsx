import styled from "styled-components";
import HeroBack from '../../assets/HeroBack.png';
import { Link } from 'react-router-dom'


interface HeaderProps {
    isHome: boolean
}

export const HeaderHero = styled.header<HeaderProps>`
    width: 100%;
    height: ${({ isHome }) => (isHome ? '384px' : '186px')};
    margin-bottom: ${({ isHome }) => (isHome ? '80px' : '0px')};

    background-image: url(${HeroBack});

    .WidthHeader {
        position: relative;
        margin: auto;
        display:flex;
        display: flex;
        padding: 40px 0px;
        max-width: 1024px;
        height: 100%;
        width: 100%;
        flex-direction: ${({ isHome }) => (isHome ? 'column' : '')};
        align-items: ${({ isHome }) => (isHome ? 'center' : '')};
        justify-content: space-between;
    }
    
    div {
        height: 100%;
        position: relative;
    }

    img {
        width: 125px;
        height: 57.5px;
    }
    .buttonStyle {
        text-decoration: none;

        margin: 17.75px 0px;
        /* top: 60px; */
        height: 22px;
        font-size: 18px;
        font-weight: 900;
        transition-duration: 0.1s;
        cursor: pointer;
        border: none;
        background: none;
        color: #E66767;

        &:hover {
            transition-duration: 0.1s;
            transform: scale(105%);
        }
    }

`

export const Title = styled.h2`
    font-weight: 900;
    text-align:center;
    font-size: 36px;
    max-width: 539px;
    color: #E66767;
`

export const CarrinhoButton = styled.button`
    /* position: absolute; */
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        margin-right: 8px;
    }
`
export const ReturnButton = styled(Link)`
        /* position: absolute; */
`