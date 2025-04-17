import styled from "styled-components";

export const UlCustom = styled.ul`
    align-self: center;
    display: grid;
    column-gap: 80px;
    row-gap: 48px;
    grid-template-columns: repeat(2, 1fr);
`
interface Props {
    imageUrl: string;
  }

export const LiCard = styled.li<Props>`
    display: flex;
    flex-direction: column;
    color: #E66767;

    .img {
        width: 472px;
        height: 217px;
        padding: 16px;
        display: flex;
        background-image: url(${props => props.imageUrl});;
        background-size: cover;
        background-repeat: no-repeat;
        .space-left {
            margin-left: auto;
            display: flex;
            justify-content: flex-end;
        }
    }
    .TextDiv {
        display: inline-block;
        background-color: #FFFFFF;
        
        p{
            height: 88px;
            overflow-y: auto;
            text-overflow: ellipsis;
        }
        img{
            width: 21px;
            height: 20px;
            margin-left: 12px;
        }
    }
`

export const TextCard = styled.div`
    width: 472px;
    height: 181px;
    padding: 8px;
    border-width: 0px 1px 1px 1px;
    border-style: solid;
    border-color: #E66767;

    div{
        display:flex;
        justify-content: space-between;

        b{
            font-size: 18px;
            font-size: bold;
        }
    }
    p{
        margin: 16px 0px;
        font-size: 14px;
        line-height: 22px;
        font-weight: 400;
    }
    button{
        width: 82px;
        height: 24px;
        border: none;
        font-size: 14px;
        font-weight: 700;
        color: #FFEBD9;
        background-color: #E66767;
        cursor: pointer;
        transition: ease-in-out 0.2s;
        
        &:hover {
            transition: ease-in-out 0.1s;
            transform: scale(105%);
        }
    }
`
export const Tag = styled.div`
    display: flex;
    margin-left: 12px;
    padding: 10px 6px;
    min-width: 61px;
    height: 26px;
    font-size: 12px;
    font-weight: 700;
    color: #FFEBD9;
    background-color: #E66767;
    text-align: center;
    align-items: center;
    justify-content: center;
`