import styled from "styled-components";
import HeroBack from '../../assets/HeroBack.png';
import { Link } from 'react-router-dom'


interface HeaderProps {
    isHome: boolean
}

export const HeaderHero = styled.header<HeaderProps>`
    width: 100%;
    height: ${({ isHome }) => (isHome ? '384px' : '186px')};
    padding: 40px;
    margin-bottom: ${({ isHome }) => (isHome ? '80px' : '0px')};

    display:flex;
    flex-direction: column;
    align-items: center;

    background-image: url(${HeroBack});
    
    div {
        height: 100%;
        position: relative;
    }

    img {
        display: block;
        width: 125px;
        height: 57.5px;
    }
    .buttonStyle {
        text-decoration: none;

        top: 60px;
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
    position: absolute;
    right: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        margin-right: 8px;
    }
`
export const ReturnButton = styled(Link)`
        position: absolute;
        left: 170px;
`