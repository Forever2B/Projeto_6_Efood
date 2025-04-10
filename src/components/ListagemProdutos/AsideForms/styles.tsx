import { styled } from "styled-components";

export const AsideContainer = styled.aside`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0px;
    z-index: 3;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 3;
        }
        & > * {
        position: relative;
        z-index: 4;
    }
    > div{
        width: 360px;
        height: 1624px;
        padding: 8px 32px;
        margin-left: auto;
        background-color: #E66767;
    }
`