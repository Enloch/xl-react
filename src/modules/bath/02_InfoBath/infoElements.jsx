import styled from "styled-components";

export const InfoContainer = styled.div`
  background: rgb(85, 113, 119);
  height: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1.563rem;
  row-gap: 3.125rem;
  padding: 6rem 4rem 4rem 4rem;
  @media screen and (max-width: 1400px) {
    padding: calc(8px + 1.5625vw);
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const InfoWrapper = styled.div`
  z-index: 1;
  height: auto;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  display: grid;
  grid-column: 4 / span 8;
  @media screen and(max-width: 1920px) {
    //grid-column: 1/span 8;
  }
  @media screen and (max-width: 1400px) {
    grid-column: 2/-2;
  }
  @media screen and (max-width: 980px) {
    grid-column: 1 / span 12;
  }
  @media screen and (max-width: 480px) {
    grid-column: 1 / span 12;
  }
`;

export const Heading = styled.p`
  max-width: 500px;
  font-size: 100px;
  line-height: 0.9;
  margin-bottom: 77px;
  justify-content: center;
  color: #fff;
  //grid-column: 4 / span 8;
  @media screen and (max-width: 1400px) {
    font-size: 60px;
  }
  @media screen and (max-width: 980px) {
    margin-bottom: 30px;
    font-size: 60px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 10px;
    font-size: 40px;
  }
`;

export const Subtitle = styled.p`
  font-size: 40px;
  //max-width: 440px;
  line-height: 1.1;
  max-width: 1120px;
  font-weight: 100;
  margin-bottom: 35px;
  color: #fff;
  @media screen and(max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
    margin-bottom: 0;
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 0;
    font-size: 16px;
  }
`;
export const ImgGradient = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(85, 113, 119) 0%,
    rgba(85, 113, 119) 50%,
    rgba(211, 206, 201) 50%,
    rgba(211, 206, 201) 100%
  );

  height: auto;
  padding: 2rem;
  @media screen and (max-width: 1400px) {
    padding: calc(8px + 1.5625vw);
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
export const ImgWrap = styled.div`
  display: grid;
  grid-column: 3 / span 8;
  padding-left: 100px;
  max-width: 100%;
  height: auto;
  @media screen and (max-width: 1400px) {
    grid-column: 2 / span 10;
    padding-left: 0;
  }
  @media screen and (max-width: 980px) {
    grid-column: 1/5;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  width: auto;
  margin-left: auto;
  margin-right: auto;
`;
