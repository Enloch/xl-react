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
          <FooterLogo src={footerImg} />
          <LinkBox>
            <Link
              to='/fr/privacidad'
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
              to='/fr/contacto'
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
