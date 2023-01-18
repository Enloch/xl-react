import styled from "styled-components";

export const CaraContainer = styled.div`
  background: rgba(211, 206, 201);
  height: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1.563rem;
  row-gap: 3.125rem;
  padding: 6rem 4rem 6rem 4rem;
  @media screen and (max-width: 980px) {
    padding-top: 2rem;
    padding-bottom: 4rem;
    row-gap: 1.563rem;
    height: auto;
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 480px) {
    padding: calc(8px + 1.5625vw);
    row-gap: 1.563rem;
    height: auto;
    grid-template-columns: repeat(4, 1fr);
  }
`;
export const TextWrapper = styled.div`
  display: grid;
  height: auto;
  grid-column-start: 4;
  grid-column-end: span 8;
  @media screen and (max-width: 980px) {
    width: auto;
    grid-column-start: 1;
    grid-column-end: 5;
  }
  @media screen and (max-width: 480px) {
    width: auto;
    grid-column-start: 1;
    grid-column-end: 5;
  }
`;

export const Heading = styled.p`
  //max-width: 1066px;
  font-size: 100px;
  line-height: 0.9;
  //font-weight: 600;
  margin-right: 75px;
  margin-bottom: 77px;
  justify-content: center;
  color: #000;
  @media screen and (max-width: 980px) {
    margin-right: 0;
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
  @media screen and (max-width: 980px) {
    margin-bottom: 0;
    margin-left: 0;
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 0;
    margin-left: 0;
    font-size: 16px;
  }

  //color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const ImgWrap = styled.div`
  display: grid;
  grid-row-gap: 3.125rem;
  grid-column-start: 4;
  grid-column-end: span 8;
  padding-left: 100px;
  max-width: 100%;
  //height: 776px;
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
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-right: 0;
`;
