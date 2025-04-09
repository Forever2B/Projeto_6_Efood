import { styled } from "styled-components";

interface BannerProps {
    imgBanner: string,
}

export const Banner = styled.div<BannerProps>`
    background-image: url(${p => p.imgBanner});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0px -500px;

    margin-bottom: 58px;

    position: relative;
    display: block;
    width: 100%;
    height: 280px;

    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    }
    & > * {
    position: relative;
    z-index: 2;
  }

  span{
    font-size: 32px;
    font-weight: 100;
    margin-right: 32px;
    color: #fff;
  }
  div {
    position: absolute;
    top: 25px;
    left: 170px;
  }

  h2 {
    font-size: 32px;
    font-weight: 900;
    color: #fff;

    position: absolute;
    bottom: 32px;
    left: 170px;
  }
`