import styled from "styled-components";

export const InfoContainer = styled.div`
  background: rgb(85, 113, 119);
  height: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1.563rem;
  row-gap: 3.125rem;
  padding: 4rem 4rem 2rem 4rem;
  @media screen and (max-width: 980px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    row-gap: 1.563rem;
    height: auto;
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 480px) {
    padding: calc(8px + 1.5625vw);
    height: auto;
    row-gap: 1.563rem;
    grid-template-columns: repeat(4, 1fr);
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
  grid-column-start: 4;
  grid-column-end: span 8;
  max-width: 100%;
  @media screen and (max-width: 980px) {
    height: auto;
    grid-column-start: 1;
    grid-column-end: 5;
  }
  @media screen and (max-width: 480px) {
    height: auto;
    grid-column-start: 1;
    grid-column-end: 5;
  }
`;

export const Heading = styled.p`
  max-width: 1066px;
  font-size: 70px;
  line-height: 0.9;
  margin-bottom: 77px;
  justify-content: center;
  color: #fff;
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
  font-size: 28px;
  //max-width: 440px;
  line-height: 1.1;
  max-width: 1120px;
  font-weight: 100;
  margin-bottom: 35px;
  color: #fff;
  @media screen and (max-width: 980px) {
    margin-bottom: 0;
    font-size: 28px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 0;
    font-size: 16px;
  }

  //color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
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
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  row-gap: 3.125rem;
  padding: 2rem;
  @media screen and (max-width: 980px) {
    padding-left: 4rem;
    padding-right: 4rem;
    height: auto;
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 480px) {
    padding: calc(8px + 1.5625vw);
    height: auto;
    grid-template-columns: repeat(4, 1fr);
  }
`;
export const ImgWrap = styled.div`
  display: grid;
  grid-column-start: 3;
  grid-column-end: span 8;
  padding-left: 100px;
  max-width: 100%;
  height: auto;
  @media screen and (max-width: 980px) {
    padding-left: 0;
    grid-column-start: 1;
    grid-column-end: 5;
  }
  @media screen and (max-width: 480px) {
    padding-left: 0;
    grid-column-start: 1;
    grid-column-end: 5;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  width: auto;
  margin-left: auto;
  margin-right: auto;
`;
