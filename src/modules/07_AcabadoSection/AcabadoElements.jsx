import styled from "styled-components";

export const AcabadoContainer = styled.div`
  background: rgb(211, 206, 201);
  height: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1.563rem;
  //row-gap: 3.125rem;
  padding: 6rem 4rem 6rem 4rem;
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
  margin-bottom: 2rem;
  @media screen and (max-width: 980px) {
    grid-column-start: 1;
    grid-column-end: 5;
  }
  @media screen and (max-width: 480px) {
    grid-column-start: 1;
    grid-column-end: 5;
  }
`;

export const TextWrapper2 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-column-start: 4;
  grid-column-end: span 5;
  justify-items: flex-start;
  margin-right: auto;
  @media screen and (max-width: 980px) {
    grid-column-start: 1;
    grid-column-end: 5;
  }
  @media screen and (max-width: 480px) {
    grid-column-start: 1;
    grid-column-end: 5;
  }
`;
export const TextWrapper3 = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-column-start: 4;
  grid-column-end: span 5;
  justify-items: flex-start;
  margin-right: auto;
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
  margin-left: 25%;
  margin-bottom: 77px;
  color: #000;
  @media screen and (max-width: 980px) {
    margin-left: 0;
    margin-bottom: 30px;
    vertical-align: center;
    font-size: 60px;
  }
  @media screen and (max-width: 480px) {
    margin-left: 0;
    margin-bottom: 10px;
    font-size: 40px;
  }
`;

export const Subtitle = styled.p`
  justify-content: left;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 100;
  margin-bottom: 50px;
  margin-right: 35px;
  color: #000;
  @media screen and (max-width: 980px) {
    margin-left: 0;
    margin-bottom: 10px;
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    margin-left: 0;
    margin-bottom: 10px;
    font-size: 16px;
  }

  //color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;
export const Subtitle2 = styled.p`
  font-size: 24px;
  line-height: 1.1;
  font-weight: 100;
  margin-bottom: 35px;
  color: #000;
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

  //color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;
export const Caracteristics = styled.p`
  font-size: 12px;
  color: #000;
  @media screen and (max-width: 980px) {
    margin-left: 0;
    margin-bottom: 10px;
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    margin-left: 0;
    margin-bottom: 10px;
    font-size: 12px;
  }
`;
export const Subtitle3 = styled.button`
  background-color: transparent;
  border: 0;
  font-size: 40px;
  max-width: auto;
  line-height: 1.1;
  font-weight: 100;
  color: #000;
  cursor: pointer;

  :hover {
    color: rgba(85, 113, 119);
    //transform: translateX(20px);
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 980px) {
    max-width: auto;
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    max-width: auto;
    font-size: 16px;
  }

  //color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const ImgWrap = styled.div`
  display: grid;
  grid-row-gap: 1.125rem;
  grid-column-start: 4;
  grid-column-end: span 8;
  max-width: 100%;
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
