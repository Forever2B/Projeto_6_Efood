import { styled } from "styled-components";

export const CardsDivTrio = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
`
export const CardContainer = styled.div`
    width: 320px;
    height: 338px;
    padding: 8px;
    background-color: #E66767;
    transition: 0.1s ease-in-out;

    &:hover{
        transform:scale(102%);
        transition: 0.1s ease-in-out;
    }

    img {
        margin-bottom: 8px;
        width: 304px;
        height: 167px;
    }
    span{
        height: 19px;
        font-weight: 900;
        font-size: 16px;
        color: #FFEBD9;
    }
    p{
        margin-top: 8px;
        font-weight: 300;
        height: 88px;
        font-size: 14px;
        line-height: 22px;
        color: #FFEBD9;

        overflow-y: auto;
        text-overflow: ellipsis;
    }
    button{
        width: 100%;
        height: 24px;
        margin-top: 4px;
        margin-bottom: 0px;
        cursor: pointer;    
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgba(255, 235, 217, 0.5);
    }
`