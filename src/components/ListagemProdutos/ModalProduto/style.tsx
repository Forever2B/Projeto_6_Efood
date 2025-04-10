import { styled } from "styled-components";


export const ProductModalContainer = styled.div`

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
`

export const CardModal = styled.div`
    display: flex;
    padding: 32px;
    width: 1024px;
    height: 344px;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    background-color: #E66767;
    img {
        object-fit: cover;
        width: 280px;
        height: 280px;
        margin-right: 24px;
    }
`

export const ContainerTextModal = styled.div `
    display: flex;
    flex-direction: column;

    div {
        margin: 16px 0px;
        .spacing{
            margin-bottom: 22px;
        }
    }

    h3{
        color: #FFFFFF;
        font-size: 18px;
        font-weight: 900;
    }
    p{
        color: #FFFFFF;
        line-height: 22px;
        font-size: 14px;
        font-weight: 300;
    }
    button{
        width: 218px;
        height: 24px;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
    }
`