import styled from "styled-components";

export const GeneralContainer = styled.section`
  background: linear-gradient(
    to bottom,
    rgba(211, 206, 201) 0%,
    rgba(211, 206, 201) 50%,
    rgba(85, 113, 119) 50%,
    rgba(85, 113, 119) 100%
  );
  height: auto;
  @media screen and (max-width: 1400px) {
    padding: calc(8px + 1.5625vw);
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
export const SliderWrapper = styled.div`
  width: 1200px;
  margin: 0px auto;
  @media screen and (max-width: 1400px) {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
export const SliderContainer = styled.div``;
export const ImgGradWrap = styled.div`
  max-width: auto;
  height: auto;
  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 980px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
export const Img = styled.img`
  background-size: cover;
  height: 100%;
  width: 100%;
  //margin-left: auto;
  //margin-right: auto;
  /* width: 100vw;
  height: 100vh; */
  //min-width: 100%;
`;
