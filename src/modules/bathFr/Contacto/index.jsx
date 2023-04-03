import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ImagenContacto from "../../../assets/contacto/GoogleDireccion.png";
import {
  ColecContainer,
  ContenedorGrupo,
  TextContainer,
  MapContainer,
  MapImg,
  FooterContainer,
  FooterWrapper,
  FooterLogo,
  FooterLink,
} from "./ContactoElements";

const ContactoSectionFR = ({ footerImg, footer }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ColecContainer id='contacto'>
        <ContenedorGrupo>
          <TextContainer>
            <h1 style={{ fontSize: "100px", marginTop: "-20px" }}>contact</h1>
            <br />
            <br />
            <br />
            <h2>XL distribución y soluciones de gran formato, S.L.</h2>
            <span style={{ fontSize: "24px" }}>Urarte Kalea, 8</span>
            <br />
            <span style={{ fontSize: "24px" }}>
              20570, Bergara, Gipuzkoa (Spain)
            </span>
            <br />
            <br />
            <br />
            <span>
              <a style={{ fontSize: "24px" }}>Téléphone : </a>
              <a
                style={{ fontSize: "24px", color: "black" }}
                href='tel:+34673210147'
              >
                +34 673 21 01 47
              </a>
            </span>
            <br />
            <br />
            <br />
            <span>
              <a style={{ fontSize: "24px" }}>e-mail : </a>
              <a
                style={{ fontSize: "24px", color: "black" }}
                href='mailto:xlporcelanico@xlporcelanico.com'
              >
                xlporcelanico@xlporcelanico.com
              </a>
            </span>
          </TextContainer>
          <MapContainer>
            <a href='https://www.google.com/maps/place/XL+GRAN+FORMATO+PORCEL%C3%81NICO/@43.1264793,-2.4215128,19.5z/data=!4m5!3m4!1s0xd502bed0d19f41f:0xa4b91ac2a271bd57!8m2!3d43.1266255!4d-2.4208597'>
              <MapImg src={ImagenContacto} />
            </a>
          </MapContainer>
        </ContenedorGrupo>
      </ColecContainer>
      <FooterContainer>
        <FooterWrapper>
          <FooterLogo src={footerImg} />
          <Link
            to='/fr/bath'
            style={{ textDecoration: "none", alignSelf: "center" }}
          >
            <FooterLink>{footer}</FooterLink>
          </Link>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default ContactoSectionFR;
