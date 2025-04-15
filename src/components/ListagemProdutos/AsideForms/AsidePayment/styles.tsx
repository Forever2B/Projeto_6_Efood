import { styled } from "styled-components";

export const AsidePaymentForm = styled.form`
    width: 345px;
    height: 219px;
    display: flex;
    flex-direction: column;
    color: #FFEBD9;

    .title{
        height: 19px;
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 16px;
    }
    .divsLabelXinput{
        display: flex;
        flex-direction: column;
        margin-bottom: 8px;
        height: 56px;
        
        label {
            margin-bottom: 8px;
            font-size: 14px;
            font-weight: 700;
            height: 16px;
        }
        input{
            height: 32px;
            padding: 8px;
            border: none;
            font-size: 14px;
            font-weight: 700;
            color: #4B4B4B;
            background-color: #FFEBD9;
        }
        
        .input-group {
            width: 155px;
            display: flex;
            flex-direction: column;
        }
        .input-group-small{
            width: 87px;
            display: flex;
            flex-direction: column;
        }
        .input-group-bigger{
            width: 228px;
            display: flex;
            flex-direction: column; 
        }
        .form-two-inputs {
            display: flex;
            flex-direction: row;
            font-size: 20px;
        }
        .space34 {
            margin-left: 34px;
        }
        .space30 {
            margin-left: 30px;
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }
    }
`

export const AsidePaymentContainer = styled.div `
 .buttonStyle {
    height: 24px;
    max-width: 344px;
    padding: 4px 0px;
    margin-bottom: 8px;
    width: 100%;
    text-align: center;

    transition: 0.1s ease-in-out;
    &:hover{
        transform:scale(102%);
        transition: 0.1s ease-in-out;
    }
 }
`