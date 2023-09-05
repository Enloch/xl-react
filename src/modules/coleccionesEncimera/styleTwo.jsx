import styled from "styled-components";
import { COLORS, DISTANCES } from "../../global/GlobalStyles";
import { BsDownload } from "react-icons/bs";

export const Wrapper = styled.div`
  background: #d3cec9;
  min-height: 100%;
  height: auto;
  width: auto;
  column-gap: ${DISTANCES.small};
  padding: 7rem 2.25rem 7rem 2.25rem;
  @media screen and (max-width: 1400px) {
    padding: 3rem calc(8px + 1.5625vw);
  }
  @media screen and (max-width: 980px) {
    padding: 3rem calc(8px + 1.5625vw);
  }
  @media screen and (max-width: 480px) {
    padding: calc(8px + 1.5625vw);
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 10;
  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(12, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

export const Title = styled.p`
  grid-column: 2/6;
  grid-row: 1;
  //margin-left: 10rem;
  margin-bottom: 2.25rem;
  font-size: 40px;
  //color: ${COLORS.gray09};

  @media screen and (max-width: 980px) {
    grid-column: 2/9;
  }
  @media screen and (max-width: 480px) {
    grid-column: 1/-1;
  }
`;

export const ImagenXL = styled.img`
  grid-column: 2/ 7;
  width: 100%;
  max-height: 100%;
  //margin-left: 10rem;
  //max-width: auto;
  //max-height: 1538px;
  @media screen and (max-width: 980px) {
    grid-column: 2/7;
    margin: 0;
  }
  @media screen and (max-width: 480px) {
    grid-column: 1/-1;
  }
`;
export const EspesorWrapper = styled.div`
  grid-column: 2/5;
  grid-row: 3;
  //margin-left: 10rem;
  margin-top: 18px;
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
    margin: 0;
  }
  @media screen and (max-width: 480px) {
    grid-column: 1/-1;
    margin: 0;
    grid-row: 4;
  }
`;
export const Espesor = styled.img`
  margin-right: 10px;
  scale: 0.7;
`;
export const EspesorWrapper2 = styled.div`
  grid-row: 5;
  grid-column: 2;
  margin-top: 18px;
  @media screen and (max-width: 980px) {
    margin: 0;
  }
  @media screen and (max-width: 480px) {
    grid-column: 1/-1;
    margin: 0;
    grid-row: 4;
  }
`;
export const Cambiador = styled.div`
  grid-column: 1/7;
  grid-row: 4;
  display: grid;
  grid-template-columns: 16.5% 70% 13.5%;
  @media screen and (max-width: 980px) {
    grid-column: 1/7;
    grid-template-columns: repeat(3, fr);
  }
  @media screen and (max-width: 480px) {
    grid-column: 1/-1;
    grid-row: 5;
    grid-template-columns: repeat(3, fr);
  }
`;
export const Cambiador2 = styled.div`
  grid-column: 1/7;
  grid-row: 6;
  display: grid;
  grid-template-columns: 16.5% 70% 13.5%;
  @media screen and (max-width: 980px) {
    grid-column: 1/7;
    grid-template-columns: repeat(3, fr);
  }
  @media screen and (max-width: 480px) {
    grid-column: 1/-1;
    grid-template-columns: repeat(3, fr);
  }
`;
export const TextoCambio = styled.p`
  align-self: center;
  font-size: 30px;
  @media screen and (max-width: 1400px) {
    font-size: 24px;
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
export const TextoBotonLT = styled.p`
  justify-self: center;
  align-self: center;
  font-size: 60px;
  cursor: pointer;
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
export const TextoBotonGT = styled.p`
  font-size: 60px;
  cursor: pointer;
  @media screen and (max-width: 980px) {
    width: auto;
  }
  @media screen and (max-width: 480px) {
    width: auto;
  }
`;
export const ColWrapper = styled.div`
  grid-column: 8/12;
  display: grid;
  align-items: start;
  //grid-auto-flow: dense;
  margin-left: -100px;
  @media screen and (max-width: 1400px) {
    margin-left: -20%;
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
    grid-column: 1/-1;
    grid-row: 7;
    margin: 0;
  }
`;
export const ColImagenes = styled.div``;

export const Imagen1 = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 373px;
  margin-bottom: 2rem;

  @media screen and (max-width: 1400px) {
    margin-bottom: 0.75rem;
  }
  @media screen and (max-width: 980px) {
    max-height: 250px;
  }
  @media screen and (max-width: 480px) {
    margin: 0.25rem 0;
  }
`;
export const Imagen1Style1 = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 700px;
  margin-bottom: 2rem;

  @media screen and (max-width: 1400px) {
    max-height: 350px;
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
    margin: 0.25rem 0;
  }
`;
export const Imagen2 = styled.img`
  object-fit: cover;
  width: 39%;
  height: 260px;
  margin-left: 61%;
  margin-bottom: 2rem;

  @media screen and (max-width: 1400px) {
    height: 130px;
    margin-bottom: 0.75rem;
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 0.25rem;
    margin-top: 0.25rem;
  }
`;

export const VerImg = styled.p`
  font-size: 30px;
  font-weight: bold;

  @media screen and (max-width: 1400px) {
    font-size: 24px;
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
    margin: 0.5rem 0;
    font-size: 18px;
  }
`;
export const VerImg2 = styled.p`
  font-size: 30px;
  margin-left: 60px;
  font-weight: bold;
  margin-bottom: 85px;
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
export const ImagenVid = styled.img`
  object-fit: cover;
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
export const Vid = styled.video`
  object-fit: cover;
  width: 100%;
  max-height: 100%;
  align-self: end;
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
export const VerVid = styled.p`
  grid-column: 8/11;
  grid-row: 3;
  font-size: 30px;
  margin-top: 38px;
  margin-left: -100px;
  font-weight: bold;
  @media screen and (max-width: 1400px) {
    font-size: 24px;
    margin-left: -75px;
  }
  @media screen and (max-width: 980px) {
    grid-column: 8/11;
    margin-left: -55px;
    grid-row: 3;
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    grid-column: 1/-1;
    grid-row: 8;
    margin: 0.5rem 0;
    font-size: 18px;
  }
`;

export const DescargaPdf = styled.a`
  grid-column: 6;
  grid-row: 1;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: black;
  margin-top: 10px;

  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
    grid-column: 9/12;
  }
  @media screen and (max-width: 480px) {
    grid-column: 1/-1;
    grid-row: 2;
    margin: 0.5rem 0;
  }
`;
export const DescargaPdfIcon = styled(BsDownload)`
  grid-column: 6;
  grid-row: 1;
  /* margin-left: -50px; */
  height: 35px;
  width: 35px;
  cursor: pointer;

  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
export const TextoDescarga = styled.span`
  width: 200px;
  font-size: 14px;
`;
export const FooterContainer = styled.div`
  background: #000000;
  width: 100%;
  padding: 2rem;
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
`;
export const FooterLogo = styled.img`
  @media screen and (max-width: 980px) {
    scale: 0.7;
  }
  @media screen and (max-width: 480px) {
    scale: 0.5;
  }
`;
export const FooterLink = styled.p`
  color: #ffffff;
  align-self: center;
  width: 325px;
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
    scale: 0.7;
  }
`;
