import styled from "styled-components";

export const ColecContainer = styled.div`
  background: rgb(211, 206, 201);
  min-height: 85vh;
  display: flex;
  padding: 6rem 4rem 1rem 4rem;
  @media screen and (max-width: 980px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  @media screen and (max-width: 480px) {
    padding: calc(8px + 1.5625vw);
  }
`;
export const ContenedorGrupo = styled.div`
  width: 100%;
  align-self: center;
  display: flex;
  @media screen and (max-width: 980px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 480px) {
  }
`;
export const TextContainer = styled.div`
  width: 50%;
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
export const MapContainer = styled.div`
  align-self: center;
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
export const MapImg = styled.img`
  width: 100%;
  justify-self: center;
  @media screen and (max-width: 1440px) {
    margin-left: 30px;
  }
  @media screen and (max-width: 980px) {
    margin-top: 30px;
    margin-left: 0px;
  }
  @media screen and (max-width: 480px) {
  }
`;
export const FooterContainer = styled.div`
  background: #000000;
  width: 100%;
  min-height: 15vh;
  padding: 2rem;
`;
export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
`;
export const FooterLogo = styled.img`
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
  width: 280px;
  font-size: 30px;
  padding: 0.625rem 0;
  border-bottom: 2px solid #ffffff;
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
