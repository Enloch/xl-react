import React, { useState, useEffect } from "react";
import Logo from "../../assets/icons/introduccion/logo.png";
import styled from "styled-components";
import "./styles.css";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(true);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.screen.width > 2000) {
  //       if (window.scrollY > 1290) {
  //         setShowTopBtn(true);
  //       } else {
  //         setShowTopBtn(false);
  //       }
  //     }
  //     if (window.screen.width <= 1930) {
  //       if (window.scrollY > 900) {
  //         setShowTopBtn(true);
  //       } else {
  //         setShowTopBtn(false);
  //       }
  //     }
  //     if (window.screen.width <= 960) {
  //       if (window.scrollY > 950) {
  //         setShowTopBtn(true);
  //       } else {
  //         setShowTopBtn(false);
  //       }
  //     }
  //     if (window.screen.width <= 480) {
  //       if (window.scrollY > 780) {
  //         setShowTopBtn(true);
  //       } else {
  //         setShowTopBtn(false);
  //       }
  //     }
  //   });
  // }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className='top-to-btm'>
      <Logotipo
        src={Logo}
        className='icon-position icon-style'
        onClick={goToTop}
        alt={"GoTopBttn"}
        // style={{ mixBlendMode: "difference" }}
      />
    </div>
  );
};
export default ScrollToTop;
const Logotipo = styled.img`
  width: 65px;
  height: auto;
  mix-blend-mode: difference;
  @media screen and (max-width: 980px) {
    width: 40px;
  }
`;
