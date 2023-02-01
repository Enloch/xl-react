import styled from "styled-components";

export const MainContainer = styled.div`
  background: rgb(85, 113, 119);
  height: auto;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1.563rem;
  row-gap: 1.563rem;
  padding: 6rem 4rem 2rem 4rem;
  @media screen and (max-width: 1400px) {
    padding: calc(8px + 1.5625vw);
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
export const Heading = styled.p`
  //max-width: 500px;
  grid-column: 3 / span 4;
  font-size: 100px;
  line-height: 0.9;
  margin-bottom: 77px;
  color: #fff;
  @media screen and (max-width: 1400px) {
    grid-column: 3 / span 5;
    margin-bottom: 30px;
    font-size: 60px;
  }
  @media screen and (max-width: 980px) {
    grid-column: 1/-1;
    margin-bottom: 30px;
    font-size: 60px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 10px;
    font-size: 40px;
  }
`;

export const Subtitle = styled.p`
  grid-column: 4 / span 8;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 100;
  margin-bottom: 35px;
  color: #ffffff;
  @media screen and (max-width: 1400px) {
    margin-right: 75px;
  }
  @media screen and (max-width: 980px) {
    grid-column: 1/-1;
    margin-right: 0;
    margin-bottom: 0;
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }

  //color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;
export const ImgWrapper = styled.div`
  grid-column: 4 / span 8;
  @media screen and (max-width: 1400px) {
    grid-column: 2/-1;
  }
  @media screen and (max-width: 980px) {
    grid-column: 1/-1;
  }
  @media screen and (max-width: 480px) {
    grid-column: 1/-1;
  }
`;

export const Img = styled.img`
  width: 100%;
`;
export const Caracteristics = styled.p`
  font-size: 24px;
  line-height: 1.1;
  font-weight: 100;
  margin-bottom: 35px;
  color: #fff;
  @media screen and (max-width: 980px) {
    margin-left: 0;
    margin-bottom: 10px;
    font-size: 12px;
  }
  @media screen and (max-width: 480px) {
    margin-left: 0;
    margin-bottom: 10px;
    font-size: 12px;
  }
`;
export const WrapperTexto = styled.div`
  display: flexbox;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const TxtSubimagen = styled.p`
  background-color: transparent;
  border: 0;
  font-size: 40px;
  max-width: auto;
  line-height: 1;
  font-weight: 100;
  color: #fff;
  /* cursor: pointer; */

  /* :hover {
    color: rgba(85, 113, 119);
    //transform: translateX(20px);
    transition: 0.2s ease-in-out;
  } */

  @media screen and (max-width: 980px) {
    max-width: auto;
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    max-width: auto;
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

export const Img2 = styled.img`
  max-width: 100%;
  height: auto;
  width: auto;
  margin-left: auto;
  margin-right: auto;
`;
export const GeneralContainer = styled.section`
  background: linear-gradient(
    to bottom,
    rgb(85, 113, 119) 0%,
    rgb(85, 113, 119) 50%,
    rgb(211, 206, 201) 50%,
    rgb(211, 206, 201) 1000%
  );
  height: auto;
  padding-top: 2rem;
  @media screen and (max-width: 1400px) {
    padding: calc(8px + 1.5625vw);
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
export const SliderWrapper = styled.div`
  width: 1200px;
  margin: 0px auto;
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
export const Img3 = styled.img`
  background-size: cover;
  height: 100%;
  width: 100%;
  //margin-left: auto;
  //margin-right: auto;
  /* width: 100vw;
  height: 100vh; */
  //min-width: 100%;
`;
