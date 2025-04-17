import {styled} from 'styled-components'

export const ContainerCarrinho = styled.div `
    ul {
      max-height: 796px;
      overflow-y: auto;
    }
	::-webkit-scrollbar-thumb {
        background-color: rgba(255, 235, 217, 0.8);
    }

    .spanSpacing {
        font-size: 14px;
        margin-top: 40px;
        margin-bottom: 16px;
        color: #FFEBD9;
        font-weight: 700;
        display: flex;
        justify-content: space-between;
        max-width: 344px;
    }
    .buttonStyle {
        width: 100%;
        font-size: 14px;
        height: 24px;
        width: 344px;
        font-weight: 700;

        transition: 0.1s ease-in-out;
        &:hover{
          transform:scale(102%);
          transition: 0.1s ease-in-out;
        }
    }
`
export const CardContainer = styled.li`
position: relative;
  display: flex;
  position: relative;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
  padding: 8px;
  max-width: 344px;
  height: 100px;
  color: #E66767;
  background-color: #FFEBD9;

  .cardContent {
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;
  }

  .titleProductCard {
    font-weight: 900;
    font-size: 17px;
    height: 21px;
  }

  .priceProductCard {
	position: absolute;
	bottom: 32px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  img {
    width: 80px;
    height: 80px;
    padding-bottom: 4px;
    object-fit: cover;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    width: 16px;
    height: 16px;
    position: absolute;
    bottom: 8px;
    right: 8px;

    img {
      padding: 0px;
      width: 16px;
      height: 16px;
    }
  }
`;
