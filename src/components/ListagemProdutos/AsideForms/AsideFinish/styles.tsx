import { styled } from "styled-components";

export const AsideFinishContainer =  styled.div`
    color: #FFEBD9;

    div{
        height: 19px;
        margin-bottom: 16px;
        font-size: 16px;
        font-weight: 700;
    }
    p{
        line-height: 22px;
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 24px;
    }
` 
export const CustomButtom = styled.button`
        width: 100%;
        margin: 0px;
        font-size: 14px;
        height: 24px;
        width: 344px;
        font-weight: 700;
        

        transition: 0.1s ease-in-out;
        &:hover{
          transform:scale(102%);
          transition: 0.1s ease-in-out;
        }
` 