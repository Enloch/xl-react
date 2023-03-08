import styled from "styled-components";

export const VentajasContainer = styled.div`
  background: rgb(211, 206, 201);
  height: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1.563rem;
  row-gap: 3.125rem;
  padding: 6rem 4rem 6rem 4rem;
  @media screen and (max-width: 980px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
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
export const VentajasContainer2 = styled.div`
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
  column-gap: 1.563rem;
  row-gap: 3.125rem;
  padding: 1rem 4rem 2rem 4rem;
  @media screen and (max-width: 980px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    height: auto;
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 480px) {
    padding: calc(8px + 1.5625vw);
    height: auto;
    grid-template-columns: repeat(4, 1fr);
  }
`;
export const TextWrapper = styled.div`
  display: grid;
  grid-column-start: 4;
  grid-column-end: span 8;
  max-width: 100%;
  @media screen and (max-width: 980px) {
    grid-column-start: 1;
    grid-column-end: 5;
  }
  @media screen and (max-width: 480px) {
    grid-column-start: 1;
    grid-column-end: 5;
  }
`;

export const Heading = styled.p`
  font-size: 100px;
  line-height: 0.9;
  margin-bottom: 77px;
  color: #000;
  @media screen and (max-width: 980px) {
    margin-bottom: 30px;
    vertical-align: center;
    font-size: 60px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 10px;
    font-size: 40px;
  }
`;

export const ImgWrap = styled.div`
  display: grid;
  grid-row-gap: 3.125rem;
  grid-column-start: 3;
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

export const Img2 = styled.img`
  max-width: 100%;
  height: auto;
  width: 100%;
  margin-left: -20px;
  margin-right: auto;
  padding-right: 0;
  @media screen and (max-width: 980px) {
    margin-left: 0;
  }
  @media screen and (max-width: 480px) {
    margin-left: 0;
  }
`;
