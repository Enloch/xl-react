import React from "react";
import { Link } from "react-router-dom";
import {
  FooterContainer,
  FooterWrapper,
  FooterLogo,
  FooterLink,
  LinkBox,
} from "./FooterElements";
const FooterSection = ({ footerImg, footer, footer2, footer3 }) => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <a href='/'>
            <FooterLogo src={footerImg} />
          </a>
          <LinkBox>
            <Link
              to='/privacidad'
              style={{ textDecoration: "none", alignSelf: "center" }}
            >
              <FooterLink>{footer}</FooterLink>
            </Link>
            <Link
              to='/legal'
              style={{ textDecoration: "none", alignSelf: "center" }}
            >
              <FooterLink>{footer2}</FooterLink>
            </Link>
            <Link
              to='/contacto'
              style={{ textDecoration: "none", alignSelf: "center" }}
            >
              <FooterLink>{footer3}</FooterLink>
            </Link>
          </LinkBox>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default FooterSection;
