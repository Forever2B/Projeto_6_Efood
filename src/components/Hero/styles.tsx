import styled from "styled-components";
import HeroBack from '../../assets/HeroBack.png';

export const HeaderHero = styled.header`
    width: 100%;
    height: 384px;
    padding: 40px;

    display:flex;
    flex-direction: column;
    align-items: center;

    background-image: url(${HeroBack});
    
    div {
        height: 100%;
    }

    img {
        display: block;
        width: 125px;
        height: 57.5px;
    }

`

export const Title = styled.h2`
    font-weight: 900;
    text-align:center;
    font-size: 36px;
    max-width: 539px;
    color: #E66767;
`