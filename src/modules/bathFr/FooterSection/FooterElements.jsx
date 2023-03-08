import styled from "styled-components";
import { COLORS, DISTANCES } from "../../../global/GlobalStyles";

export const ColecContainer = styled.div`
  background: #d3cec9;
  height: 100%;
  width: auto;
  column-gap: ${DISTANCES.small};
  padding: 7rem 4rem 7rem 4rem;
  @media screen and (max-width: 1400px) {
  }

  @media screen and (max-width: 980px) {
    padding: calc(8px + 1.5625vw);
    height: auto;
  }
  @media screen and (max-width: 480px) {
  }
`;
export const FooterContainer = styled.div`
  background: #000000;
  width: 100%;
  padding: 2rem;
`;
export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 30% 70%;
  }
`;
export const FooterLogo = styled.img`
  grid-area: logo;
  grid-column: 1;
  grid-row: 1;
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
    scale: 0.7;
  }
  @media screen and (max-width: 480px) {
    scale: 0.5;
  }
`;
export const FooterLink = styled.p`
  color: #ffffff;
  font-size: 30px;
  padding: 0.625rem 0;
  //border-bottom: 2px solid #ffffff;
  cursor: pointer;
  @media screen and (max-width: 980px) {
    scale: 0.7;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
export const LinkBox = styled.div`
  grid-column: 2;
  grid-row: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-content: end;
  justify-content: end;
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;
