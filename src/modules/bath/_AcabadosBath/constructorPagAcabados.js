import React from "react";
import { Link } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "./styles.css";

import {
  Wrapper,
  FooterContainer,
  FooterWrapper,
  FooterLogo,
  FooterLink,
  ContentWrapper,
  ColWrapper,
  ColImagenes,
  Title,
  ImagenXL,
  EspesorWrapper,
  EspesorWrapper2,
  Espesor,
  Cambiador,
  Cambiador2,
  TextoCambio,
  TextoBotonLT,
  TextoBotonGT,
  Imagen1,
  Imagen1Style1,
  Imagen2,
  VerImg,
  Vid,
  VerVid,
  DescargaPdf,
  DescargaPdfIcon,
  TextoDescarga,
} from "../styleTwo";
import { PaginasCemento, Footer } from "../02_cemento/data";

//cemento
export const PagiCementoStyle1 = PaginasCemento.map((elemento) => (
  <>
    <Wrapper>
      <ContentWrapper>
        <Title>{elemento.titulo}</Title>
        <ImagenXL src={elemento.imgL} alt={elemento.altL} loading={"lazy"} />
        <EspesorWrapper>
          <Espesor src={elemento.espesor} />
        </EspesorWrapper>
        <Cambiador>
          <Link
            to={elemento.urlanterior}
            style={{ textDecoration: "none", color: "#000000" }}
          >
            <TextoBotonLT>&lt;</TextoBotonLT>
          </Link>
          <TextoCambio>
            <b>{elemento.desc[0]}</b>
            <br />
            {elemento.desc[1]}
            <br />
            {elemento.desc[2]}
          </TextoCambio>
          <Link
            to={elemento.urlsiguiente}
            style={{
              textDecoration: "none",
              color: "#000000",
              justifySelf: "end",
            }}
          >
            <TextoBotonGT>&gt;</TextoBotonGT>
          </Link>
        </Cambiador>
        <ColWrapper>
          <ColImagenes>
            <Zoom>
              <Imagen1Style1
                src={elemento.img1}
                alt={elemento.altImg1}
                loading={"lazy"}
              />
            </Zoom>
            <VerImg>{elemento.verimg}</VerImg>
          </ColImagenes>
          <Vid
            controls
            src={elemento.imgVid}
            alt={elemento.altVid}
            loading={"lazy"}
          />
        </ColWrapper>
        <VerVid>{elemento.vervid}</VerVid>
        {elemento.pdfLink !== "" && (
          <DescargaPdf href={elemento.pdfLink} download="">
            <TextoDescarga>
              Descarga ficha técnica // Download Technical sheet
            </TextoDescarga>
            <DescargaPdfIcon />
          </DescargaPdf>
        )}
      </ContentWrapper>
    </Wrapper>
    <FooterContainer>
      <FooterWrapper>
        <FooterLogo src={Footer.footerImg} />
        <Link
          to="/colecciones"
          style={{
            textDecoration: "none",
            color: "#000000",
            alignSelf: "center",
          }}
        >
          <FooterLink>{Footer.footer}</FooterLink>
        </Link>
      </FooterWrapper>
    </FooterContainer>
  </>
));
