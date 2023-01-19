import styled from "styled-components";

export const DescargasContainer = styled.div`
  background: #d3cec9;
  display: grid;
  grid-template-columns: repeat(12, 1fr); 
  column-gap: 1.563rem;
  row-gap: 3.125rem;
  padding: 6rem 4rem 1rem 4rem;
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
  grid-column: 3 / span 8;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
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
  max-width: 630px;
  line-height: 0.9;
  margin-bottom: 77px;
  color: #000000;
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
export const ContCat = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #ffbe7d;
  height: auto;
  width: auto;
  flex-wrap: wrap;
  gap: 0.5em;
`;
export const Catalogo = styled.div`
  background-color: #7df6ff;
  height: 175px;
  width: 100px;
`;
