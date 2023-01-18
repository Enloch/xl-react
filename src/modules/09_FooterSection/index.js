import React from "react";
import { Link } from "react-router-dom";
import {
  FooterContainer,
  FooterWrapper,
  FooterLogo,
  FooterLink,
} from "./FooterElements";
const FooterSection = ({ footerImg, footer, footer2 }) => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLogo src={footerImg} />
          <Link
            to="/privacidad"
            style={{ textDecoration: "none", alignSelf: "center" }}
          >
            <FooterLink>{footer}</FooterLink>
          </Link>
          <Link
            to="/legal"
            style={{ textDecoration: "none", alignSelf: "center" }}
          >
            <FooterLink>{footer2}</FooterLink>
          </Link>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default FooterSection;
