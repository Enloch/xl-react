import styled from "styled-components";

export const CaraContainer = styled.div`
  background: rgb(85, 113, 119);
  height: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1.563rem;
  row-gap: 3.125rem;
  padding: 6rem 4rem 2rem 4rem;
  @media screen and (max-width: 1400px) {
    padding: calc(8px + 1.5625vw);
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const TextWrapper = styled.div`
  display: grid;
  height: auto;
  grid-column: 4 / span 8;
  width: auto;
  @media screen and (max-width: 1400px) {
    grid-column: 2/-2;
  }
  @media screen and (max-width: 980px) {
    grid-column: 1 / span 12;
  }
  @media screen and (max-width: 480px) {
    grid-column: 1 / span 12;
  }
`;

export const Heading = styled.p`
  //max-width: 500px;
  font-size: 100px;
  margin-left: 50px;
  line-height: 0.9;
  margin-bottom: 77px;
  color: #fff;
  @media screen and (max-width: 1400px) {
    margin-left: 0;
    margin-bottom: 30px;
    font-size: 60px;
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
  margin-right: 125px;
  margin-bottom: 35px;
  color: #fff;
  @media screen and (max-width: 1400px) {
    margin-right: 75px;
  }
  @media screen and (max-width: 980px) {
    margin-right: 0;
    margin-bottom: 0;
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }

  //color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const ImgWrap = styled.div`
  margin-bottom: -10px;
  width: 100%;
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
export const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const Icono1 = styled.img`
  position: absolute;
  cursor: pointer;
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
    scale: 0.5;
  }
  transition: all 0.2s linear;
  :hover {
    transform: rotate(-45deg);
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
export const ImgGradient = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(85, 113, 119) 0%,
    rgba(85, 113, 119) 50%,
    rgba(211, 206, 201) 50%,
    rgba(211, 206, 201) 100%
  );
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1.563rem;
  row-gap: 3.125rem;
  height: auto;
  padding: 2rem 4rem 1rem 4rem;
  @media screen and (max-width: 1400px) {
    padding: calc(8px + 1.5625vw);
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
export const ImgGradWrap = styled.div`
  grid-column: 3 / span 8;
  max-width: 100%;
  height: auto;
  @media screen and (max-width: 1400px) {
    grid-column: 2 / span 10;
    padding-left: 0;
  }
  @media screen and (max-width: 980px) {
    grid-column: 1/-1;
  }
  @media screen and (max-width: 480px) {
  }
`;
export const Caracteristics = styled.p`
  margin-bottom: 25px;
  font-size: 12px;
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
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    margin-left: 0;
    margin-bottom: 10px;
    font-size: 12px;
  }
`;
export const CaraContainer2 = styled.div`
  background: rgba(211, 206, 201);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1.563rem;
  padding: 0rem 4rem 2rem 4rem;
  @media screen and (max-width: 1400px) {
    padding: calc(8px + 1.5625vw);
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const TextWrapper2 = styled.div`
  display: grid;
  height: auto;
  grid-column: 3 / span 8;
  width: auto;
  @media screen and (max-width: 1400px) {
    grid-column: 2/-2;
  }
  @media screen and (max-width: 980px) {
    grid-column: 1 / span 12;
  }
  @media screen and (max-width: 480px) {
    grid-column: 1 / span 12;
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
`;
export const TextWrapper3 = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-column: 3 / 9;
  gap: 5px;
  //justify-items: flex-start;
  //margin-right: auto;
  @media screen and (max-width: 1400px) {
    grid-column: 2/-2;
  }
  @media screen and (max-width: 980px) {
    grid-column: 1 / span 10;
  }
  @media screen and (max-width: 480px) {
  }
`;
export const CaraContainer3 = styled.div`
  background: rgba(211, 206, 201);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1.563rem;
  padding: 4rem 4rem 2rem 4rem;
  @media screen and (max-width: 1400px) {
    padding: calc(8px + 1.5625vw);
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
export const TextWrapper4 = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-column: 3 / 11;
  gap: 5px;
  //justify-items: flex-start;
  //margin-right: auto;
  @media screen and (max-width: 1400px) {
    grid-column: 2/-2;
  }
  @media screen and (max-width: 980px) {
    grid-column: 1 / -1;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const Heading2 = styled.p`
  //max-width: 500px;
  font-size: 100px;
  margin-left: 50px;
  line-height: 0.9;
  margin-bottom: 77px;
  color: #000;
  @media screen and (max-width: 1400px) {
    margin-bottom: 30px;
    font-size: 60px;
  }
  @media screen and (max-width: 980px) {
    margin-left: 0;
    margin-bottom: 30px;
    font-size: 60px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 10px;
    font-size: 40px;
  }
`;

export const Subtitle4 = styled.p`
  font-size: 40px;
  line-height: 1.1;
  font-weight: 100;
  margin-left: 25px;
  margin-right: 100px;
  margin-bottom: 35px;
  color: #000;
  @media screen and (max-width: 1400px) {
    margin-right: 15px;
  }
  @media screen and (max-width: 980px) {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0;
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ImgSelector2 = styled.div`
  background: rgba(211, 206, 201);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1.563rem;
  row-gap: 3.125rem;
  height: auto;
  padding: 2rem 4rem 1rem 4rem;
  @media screen and (max-width: 1400px) {
    padding: calc(8px + 1.5625vw);
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
export const ImgWrap2 = styled.div`
  grid-column: 4 / -2;
  max-width: 100%;
  height: auto;
  @media screen and (max-width: 1400px) {
    grid-column: 2 / span 10;
    padding-left: 0;
  }
  @media screen and (max-width: 980px) {
    grid-column: 1/-1;
  }
  @media screen and (max-width: 480px) {
  }
`;
export const TextWrapper5 = styled.div`
  display: grid;
  height: auto;
  grid-column: 4 / span 8;
  width: auto;
  @media screen and (max-width: 1400px) {
    grid-column: 2/-2;
  }
  @media screen and (max-width: 980px) {
    grid-column: 1 / span 12;
  }
  @media screen and (max-width: 480px) {
    grid-column: 1 / span 12;
  }
`;
export const Caracteristics2 = styled.p`
  margin-bottom: 25px;
  font-size: 12px;
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
`;
export const TextWrapper6 = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-column: 4 / 10;
  gap: 5px;
  //justify-items: flex-start;
  //margin-right: auto;
  @media screen and (max-width: 1400px) {
    grid-column: 2/-2;
  }
  @media screen and (max-width: 980px) {
    grid-column: 1 / span 10;
  }
  @media screen and (max-width: 480px) {
  }
`;
