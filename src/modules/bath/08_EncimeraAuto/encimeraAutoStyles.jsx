import styled from "styled-components";

export const InfoContainer = styled.div`
  background: rgb(85, 113, 119);
  height: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1.563rem;
  row-gap: 1.563rem;
  padding: 6rem 4rem 4rem 4rem;
  @media screen and (max-width: 1400px) {
    padding: calc(8px + 1.5625vw);
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const TextWrapper = styled.div`
  display: grid;
  grid-column: 2 / span 6;
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
  margin-right: 10%;
  font-size: 100px;
  line-height: 0.9;
  justify-content: center;
  color: #fff;
  //grid-column: 4 / span 8;
  @media screen and (max-width: 1920px) {
    margin-right: 30%;
  }
  @media screen and (max-width: 1400px) {
    margin-right: 0;
  }
  @media screen and (max-width: 980px) {
    font-size: 60px;
    margin-top: 1rem;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 10px;
    font-size: 40px;
  }
`;

export const Subtitle = styled.p`
  font-size: 40px;
  font-weight: 100;
  color: #fff;
  grid-column: 3 / 6;
  @media screen and (max-width: 1400px) {
    padding-right: 0;
    margin-left: 0;
  }
  @media screen and (max-width: 980px) {
    grid-column: 2 / 5;
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    grid-row: 2;
    grid-column: 1 / -1;
  }
`;
export const ImgWrap = styled.div`
  display: grid;
  padding-left: 100px;
  max-width: 100%;
  height: auto;
  @media screen and (max-width: 1400px) {
    padding-left: 0;
  }
  @media screen and (max-width: 980px) {
    margin-top: 3%;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const GeneralContainer = styled.div`
  /* background: linear-gradient(
    to bottom,
    rgba(211, 206, 201) 0%,
    rgba(211, 206, 201) 50%,
    rgba(85, 113, 119) 50%,
    rgba(85, 113, 119) 100%
  ); */
  background-color: rgb(85, 113, 119);
  /* height: auto; */
  grid-column: 6/-1;
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
    grid-row: 3;
    grid-column: 1/-1;
  }
`;
export const SliderWrapper = styled.div`
  width: 1200px;
  @media screen and (max-width: 1400px) {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
export const SliderContainer = styled.div``;
export const ImgGradWrap = styled.div`
  max-width: auto;
  height: auto;
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
export const Img = styled.img`
  background-size: cover;
  height: 100%;
  width: 100%;
  //margin-left: auto;
  //margin-right: auto;
  /* width: 100vw;
  height: 100vh; */
  //min-width: 100%;
`;
export const WrapperAnim = styled.div`
  grid-column: 4 / -2;
  display: flex;
  flex-direction: row;
  /* height: 100%; */
  @media screen and (max-width: 1400px) {
    grid-column: 2/-2;
  }
  @media screen and (max-width: 980px) {
    grid-column: 1 / -1;
  }
  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
    /* flex-direction: column; */
    grid-column: 1 / -1;
  }
`;
