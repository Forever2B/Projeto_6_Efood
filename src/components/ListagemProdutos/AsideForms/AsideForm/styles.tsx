import { styled } from "styled-components";


export const AsideForm = styled.form`
    width: 345px;
    height: 347px;
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
        .form-two-inputs {
            display: flex;
            flex-direction: row;
            font-size: 20px;
        }
        .space {
            margin-left: 34px;
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }
    }
`

export const AsideFormContainer = styled.div `
 .buttonStyle {
    height: 24px;
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