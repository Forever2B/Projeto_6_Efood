import { styled } from "styled-components";

export const ContainerCheckout = styled.div `
    padding: 80px 8px;
    justify-content : center;
    text-align: center;

    @keyframes swing {
        0% { transform: rotate(0deg); }
        20% { transform: rotate(10deg); }
        40% { transform: rotate(-8deg); }
        60% { transform: rotate(5deg); }
        80% { transform: rotate(-5deg); }
        100% { transform: rotate(0deg); }
    }    
    h4 {
        margin-bottom: 50px;
        font-size: 22px;
        color:  #FFEBD9;
    }
    p {
        margin-bottom: 30px;
        color:  #FFEBD9;
        font-weight: 300;
        line-height: 20px;
    }
    .swingAnimation {
        display: inline-block;
        animation: swing 2s ease-in-out infinite;
        transform-origin: top center;
        color:  #FFEBD9;
    }
`