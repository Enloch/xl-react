import styled from "styled-components";
import { COLORS } from "../../../global/GlobalStyles";
export const InfoContainer = styled.div`
  background: ${COLORS.beige01};
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
  margin-right: 10%;
  font-size: 100px;
  line-height: 0.9;
  margin-right: 30%;
  margin-bottom: 77px;
  justify-content: center;
  color: #000;
  //grid-column: 4 / span 8;
  @media screen and (max-width: 1920px) {
    margin-right: 20%;
  }
  @media screen and (max-width: 1400px) {
    margin-right: 0;
  }
  @media screen and (max-width: 980px) {
    margin-right: 75px;
    margin-bottom: 30px;
    font-size: 60px;
  }
  @media screen and (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 10px;
    font-size: 40px;
  }
`;

export const Subtitle = styled.p`
  font-size: 40px;
  line-height: 1.1;
  font-weight: 100;
  margin-left: 100px;
  margin-bottom: 35px;
  color: #000;
  @media screen and (max-width: 1400px) {
    margin-left: 0;
  }
  @media screen and (max-width: 980px) {
    margin-bottom: 0;
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
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

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  width: auto;
  margin-left: auto;
  margin-right: auto;
`;
