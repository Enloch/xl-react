import styled from "styled-components";
import { COLORS, DISTANCES } from "../../global/GlobalStyles";

export const ColecContainer = styled.div`
  background: #d3cec9;
  min-height: 100vh;
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
  grid-template-areas:
    "logo footer"
    "logo footer2";
`;
export const FooterLogo = styled.img`
  grid-area: logo;
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
  grid-area: footer;
  grid-area: footer2;
  
  color: #ffffff;
  font-size: 30px;
  padding: 0.625rem 0;
  text-decoration: underline;
  //border-bottom: 2px solid #ffffff;
  cursor: pointer;
  :hover {
    transform: translateX(20px);
    transition: 0.2s ease-in-out;
  }
  @media screen and (max-width: 980px) {
    scale: 0.7;
  }
  @media screen and (max-width: 480px) {
    scale: 0.5;
  }
`;
