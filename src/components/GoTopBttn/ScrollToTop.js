import React, { useState, useEffect } from "react";
import Logo from "../../assets/icons/introduccion/logo.png";

import "./styles.css";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screen.width > 2000) {
        if (window.scrollY > 1290) {
          setShowTopBtn(true);
        } else {
          setShowTopBtn(false);
        }
      }
      if (window.screen.width <= 1930) {
        if (window.scrollY > 900) {
          setShowTopBtn(true);
        } else {
          setShowTopBtn(false);
        }
      }
      if (window.screen.width <= 960) {
        if (window.scrollY > 950) {
          setShowTopBtn(true);
        } else {
          setShowTopBtn(false);
        }
      }
      if (window.screen.width <= 480) {
        if (window.scrollY > 780) {
          setShowTopBtn(true);
        } else {
          setShowTopBtn(false);
        }
      }
    });
  }, []);
  const goToTop = () => {
    if (window.screen.width > 2000) {
      window.scrollTo({
        top: 1400,
        behavior: "smooth",
      });
    }
    if (window.screen.width <= 1930) {
      window.scrollTo({
        top: 1000,
        behavior: "smooth",
      });
    }
    if (window.screen.width <= 480) {
      window.scrollTo({
        top: 860,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="top-to-btm">
      {" "}
      {showTopBtn && (
        <img
          src={Logo}
          className="icon-position icon-style"
          onClick={goToTop}
          alt={"GoTopBttn"}
        />
      )}{" "}
    </div>
  );
};
export default ScrollToTop;
