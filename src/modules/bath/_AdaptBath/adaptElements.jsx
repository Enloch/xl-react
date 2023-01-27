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
  grid-column: 4 / span 10;
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
    grid-column: 3/-1;
  }
  @media screen and (max-width: 980px) {
    grid-column: 2/-2;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const TxtSubimagen = styled.p`
  font-size: 16px;
  color: #000;
  @media screen and (max-width: 1400px) {
    font-size: 14px;
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
