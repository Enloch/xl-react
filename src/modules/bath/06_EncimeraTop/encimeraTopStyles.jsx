import styled from "styled-components";

export const InfoContainer = styled.div`
  background: rgb(211, 206, 201);
  height: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1.563rem;
  padding: 6rem 4rem 4rem 4rem;
  @media screen and (max-width: 1400px) {
    padding: calc(8px + 1.5625vw);
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const TextWrapper = styled.div`
  grid-column: 4 / span 8;
  @media screen and(max-width: 1920px) {
    //grid-column: 1/span 8;
  }
  @media screen and (max-width: 1400px) {
    grid-column: 2/-2;
  }
  @media screen and (max-width: 980px) {
    grid-column: 1 / -1;
  }
  @media screen and (max-width: 480px) {
    grid-column: 1 / -1;
  }
`;

export const Heading = styled.p`
  margin-right: 10%;
  font-size: 100px;
  line-height: 0.9;
  margin-bottom: 77px;
  justify-content: center;
  color: #000;
  //grid-column: 4 / span 8;
  @media screen and (max-width: 1920px) {
    margin-right: 30%;
  }
  @media screen and (max-width: 1400px) {
    margin-right: 0;
  }
  @media screen and (max-width: 980px) {
    margin-bottom: 30px;
    font-size: 60px;
  }
  @media screen and (max-width: 480px) {
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
  @media screen and (max-width: 1400px) {
    margin-left: 0;
    font-size: 36px;
  }
  @media screen and (max-width: 980px) {
    margin-bottom: 0;
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const ImgWrap = styled.div`
  display: grid;
  padding-left: 100px;
  max-width: 100%;
  height: auto;
  @media screen and (max-width: 1400px) {
    padding-left: 0;
  }
  @media screen and (max-width: 980px) {
    margin-top: 3%;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  width: auto;
  margin-left: auto;
  margin-right: auto;
`;

export const Wrapper = styled.div`
  grid-column: 5 / -1;
  display: flex;
  flex-direction: column;
  height: 100%;
  @media screen and(max-width: 1920px) {
    //grid-column: 1/span 8;
  }
  @media screen and (max-width: 1400px) {
    grid-column: 2/-2;
  }
  @media screen and (max-width: 980px) {
    grid-column: 1 / -1;
  }
  @media screen and (max-width: 480px) {
    grid-column: 1 / -1;
  }
`;
export const BloqueTitulo = styled.p`
  height: 72px;
  display: flex;
  gap: 2%;
  @media screen and (max-width: 1400px) {
    height: 48px;
  }
  @media screen and (max-width: 980px) {
    height: 40px;
  }
  @media screen and (max-width: 480px) {
    height: 32px;
  }
`;
export const WrapperTitulo = styled.div`
  font-size: 60px;
  align-self: center;

  @media screen and (max-width: 1400px) {
    font-size: 40px;
    margin-left: 0;
  }
  @media screen and (max-width: 980px) {
    margin-bottom: 0;
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;
export const ImagenTitulo = styled.img`
  height: 72px;
  width: auto;
  align-self: center;
  @media screen and (max-width: 1400px) {
    height: 48px;
  }
  @media screen and (max-width: 980px) {
    height: 40px;
  }
  @media screen and (max-width: 480px) {
    height: 24px;
  }
`;
export const BloqueSubtitulo = styled.p`
  font-size: 30px;
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
export const ContenedorEncimera = styled.div`
  width: auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 2rem;
  gap: 2%;
`;
export const BloqueEncimeras3 = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30%;
`;
export const IconoEncimera = styled.img`
  width: auto;
  height: auto;
`;
export const InfoEncimera = styled.p`
  font-size: 24px;
  height: auto;

  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
