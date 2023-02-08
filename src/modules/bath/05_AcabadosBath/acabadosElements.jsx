import { motion } from "framer-motion";
import styled from "styled-components";
import { COLORS, DISTANCES } from "../../../global/GlobalStyles";

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

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: auto;
  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(12, 1fr);
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(8, 1fr);
  }
`;

export const Heading = styled(motion.p)`
  margin-left: 3.8125rem;
  margin-right: 3.9rem;
  grid-column: 2 / span 2;
  font-size: 100px;
  color: #303030;
  @media screen and (max-width: 1400px) {
    grid-column: 2/10;
    margin: 0;
    font-size: 60px;
  }
  @media screen and (max-width: 980px) {
    grid-column: 2/8;
    margin-left: 0rem;
    font-size: 60px;
  }
  @media screen and (max-width: 480px) {
    grid-column: 1 / -2;
    margin-left: 0rem;
    font-size: 40px;
  }
`;
export const SubtitleWrapper = styled.div`
  grid-column: 2/5;
  text-align: center;
  align-content: center;
  display: flex;
  margin: 5rem 0;

  gap: 0.5rem 2rem;
  /* padding-bottom:1rem; */
  @media screen and (max-width: 1400px) {
    flex-wrap: wrap;
    grid-column: 2/-1;
    align-content: start;
  }
  @media screen and(max-width: 980px) {
    margin: 0;
  }
  @media screen and (max-width: 480px) {
    grid-column: 1 / -1;
    gap: 0.5rem;
    margin: 1rem 0;
  }
`;

export const Subtitle = styled.p`
  font-size: calc(15px + 0.390625vw);
  color: ${COLORS.gray05};
  /* margin-top: 85px;
  margin-bottom: 89px; */
  @media screen and (max-width: 980px) {
    margin: 0;
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
export const ImageBoxWrapper = styled.div`
  grid-column: 2 / 4;
  display: flex;
  flex-wrap: wrap;
  gap: 39px 20.5px;
  @media screen and (max-width: 1400px) {
    grid-column: 2 / 11;
  }
  @media screen and (max-width: 980px) {
    grid-column: 2 / 10;
  }
  @media screen and (max-width: 480px) {
    grid-column: 2 / 9;
  }
`;
export const ImageBox = styled.div`
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
export const ImgMini = styled.img`
  cursor: pointer;
  width: 122px;
  max-height: 244px;
  padding-right: 0;
  :hover {
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
  }
`;
export const Text = styled.p`
  margin-top: 13px;
  font-size: 12px;
  color: #000;
`;

export const LinkBox = styled.div`
  grid-column: 4/5;
  margin-left: 3.375em;
  @media screen and (max-width: 1400px) {
    grid-column: 11/-1;
    margin: 0;
  }
  @media screen and (max-width: 980px) {

    margin-left: 0;
    grid-column: 10/ -1;
  }
  @media screen and (max-width: 480px) {
    margin: 1rem 0;
    grid-column: 2 /8;
    grid-row: 4;
  }
`;

export const LinkHeader = styled.div`
  font-weight: 500;
  font-size: 1.4rem;
  margin-bottom: 2.625rem;
  color: #303030;
`;
export const LinkLista = styled.div`
  color: ${COLORS.gray08};
  font-size: 1rem;
  color: #303030;
  cursor: pointer;
  :hover {
    font-size: 1.1rem;
    font-weight: 600;
    //transition: 0.2s ease-in-out;
  }
`;
