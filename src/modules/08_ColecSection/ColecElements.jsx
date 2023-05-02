import styled from "styled-components";

export const ColecContainer = styled.div`
  background: rgb(85, 113, 119);
  height: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1.563rem;
  row-gap: 3.125rem;
  padding: 4rem 4rem 1rem 4rem;
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
  font-size: 70px;
  max-width: 630px;
  line-height: 0.9;
  margin-bottom: 77px;
  color: #fff;
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

export const Subtitle = styled.p`
  font-size: 28px;
  line-height: 1.1;
  font-weight: 100;
  max-width: 1100px;
  margin-left: -100px;
  margin-bottom: 5rem;
  color: #fff;
  @media screen and (max-width: 980px) {
    margin-left: 0;
    margin-bottom: 5rem;
    font-size: 28px;
  }
  @media screen and (max-width: 480px) {
    margin-left: 0;
    margin-bottom: 3rem;
    font-size: 16px;
  }

  //color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const Subtitle2 = styled.p`
  font-size: 32px;
  max-width: 480px;
  line-height: 1.1;
  font-weight: 100;
  margin-bottom: 2.25rem;
  color: #fff;
  border-bottom: 2px solid;
  cursor: pointer;
  :hover {
    transform: translateX(20px);
    transition: 0.2s ease-in-out;
  }
  @media screen and (max-width: 980px) {
    max-width: 390px;
    margin-bottom: 1rem;
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    max-width: 200px;
    margin-bottom: 1rem;
    font-size: 16px;
  }

  //color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;
