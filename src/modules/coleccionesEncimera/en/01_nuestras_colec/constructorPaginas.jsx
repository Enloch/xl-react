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
} from "../../styleTwo";
import { PaginasCemento, Footer } from "../02_cemento/data";
import { PaginasColor } from "../03_color/data";
import { PaginasMarmol } from "../04_marmol/data2";
import { PaginasMadera } from "../05_madera/data";
import { PaginasMetal } from "../06_metal/data";
import { PaginasPiedra } from "../07_piedra/data";

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
          <DescargaPdf href={elemento.pdfLink} download=''>
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
          to='/en/colecciones'
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
export const PagiCementoStyle2 = PaginasCemento.map((elemento) => (
  <>
    <Wrapper>
      <ContentWrapper>
        <Title>{elemento.titulo}</Title>
        <ImagenXL src={elemento.imgL} alt={elemento.altL} loading={"lazy"} />
        <EspesorWrapper>
          <Espesor src={elemento.espesor} loading={"lazy"} />
        </EspesorWrapper>
        <Cambiador>
          <Link
            to={elemento.urlanterior}
            style={{ textDecoration: "none", color: "#000000", margin: 0 }}
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
              <Imagen1
                onClick={null}
                src={elemento.img1}
                alt={elemento.altImg1}
                loading={"lazy"}
              />
            </Zoom>
            <Zoom>
              <Imagen2
                src={elemento.img2}
                alt={elemento.altImg2}
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
          <DescargaPdf href={elemento.pdfLink} download=''>
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
          to='/en/colecciones'
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
export const PagiCementoStyle3 = PaginasCemento.map((elemento) => (
  <>
    <Wrapper>
      <ContentWrapper>
        <Title>{elemento.titulo}</Title>
      </ContentWrapper>
      <ContentWrapper>
        <ImagenXL src={elemento.imgL} alt={elemento.altL} loading={"lazy"} />
        <EspesorWrapper>
          <Espesor src={elemento.espesor} loading={"lazy"} />
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
          <ColImagenes></ColImagenes>
          <Vid
            controls
            src={elemento.imgVid}
            alt={elemento.altVid}
            loading={"lazy"}
          />
        </ColWrapper>
        <VerVid>{elemento.vervid}</VerVid>
        {elemento.pdfLink !== "" && (
          <DescargaPdf href={elemento.pdfLink} download=''>
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
          to='/en/colecciones'
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
//color
export const PagiColorStyle1 = PaginasColor.map((elemento) => (
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
          <DescargaPdf href={elemento.pdfLink} download=''>
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
          to='/en/colecciones'
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
export const PagiColorStyle3 = PaginasColor.map((elemento) => (
  <>
    <Wrapper>
      <ContentWrapper>
        <Title>{elemento.titulo}</Title>
      </ContentWrapper>
      <ContentWrapper>
        <ImagenXL src={elemento.imgL} alt={elemento.altL} loading={"lazy"} />
        <EspesorWrapper>
          <Espesor src={elemento.espesor} loading={"lazy"} />
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
          <ColImagenes></ColImagenes>
          <Vid
            controls
            src={elemento.imgVid}
            alt={elemento.altVid}
            loading={"lazy"}
          />
        </ColWrapper>
        <VerVid>{elemento.vervid}</VerVid>
        {elemento.pdfLink !== "" && (
          <DescargaPdf href={elemento.pdfLink} download=''>
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
          to='/en/colecciones'
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
export const PagiColorStyle4 = PaginasColor.map((elemento) => (
  <>
    <Wrapper>
      <ContentWrapper>
        <Title>{elemento.titulo}</Title>
      </ContentWrapper>
      <ContentWrapper>
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
        <EspesorWrapper2>
          <Espesor src={elemento.espesor2} />
        </EspesorWrapper2>
        <Cambiador2>
          <TextoBotonLT></TextoBotonLT>
          <TextoCambio>
            <b>{elemento.desc2[0]}</b>
            <br />
            {elemento.desc2[1]}
            <br />
            {elemento.desc2[2]}
          </TextoCambio>
          <TextoBotonGT></TextoBotonGT>
        </Cambiador2>
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
          <DescargaPdf href={elemento.pdfLink} download=''>
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
          to='/en/colecciones'
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
//marmol
export const PagiMarmolesStyle1 = PaginasMarmol.map((elemento) => (
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
          <DescargaPdf href={elemento.pdfLink} download=''>
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
          to='/en/colecciones'
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
export const PagiMarmolesStyle2 = PaginasMarmol.map((elemento) => (
  <>
    <Wrapper>
      <ContentWrapper>
        <Title>{elemento.titulo}</Title>
        <ImagenXL src={elemento.imgL} alt={elemento.altL} loading={"lazy"} />
        <EspesorWrapper>
          <Espesor src={elemento.espesor} loading={"lazy"} />
        </EspesorWrapper>
        <Cambiador>
          <Link
            to={elemento.urlanterior}
            style={{ textDecoration: "none", color: "#000000", margin: 0 }}
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
              <Imagen1
                onClick={null}
                src={elemento.img1}
                alt={elemento.altImg1}
                loading={"lazy"}
              />
            </Zoom>
            <Zoom>
              <Imagen2
                src={elemento.img2}
                alt={elemento.altImg2}
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
          <DescargaPdf href={elemento.pdfLink} download=''>
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
          to='/en/colecciones'
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
export const PagiMarmolesStyle3 = PaginasMarmol.map((elemento) => (
  <>
    <Wrapper>
      <ContentWrapper>
        <Title>{elemento.titulo}</Title>
      </ContentWrapper>
      <ContentWrapper>
        <ImagenXL src={elemento.imgL} alt={elemento.altL} loading={"lazy"} />
        <EspesorWrapper>
          <Espesor src={elemento.espesor} loading={"lazy"} />
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
          <ColImagenes></ColImagenes>
          <Vid
            controls
            src={elemento.imgVid}
            alt={elemento.altVid}
            loading={"lazy"}
          />
        </ColWrapper>
        <VerVid>{elemento.vervid}</VerVid>
        {elemento.pdfLink !== "" && (
          <DescargaPdf href={elemento.pdfLink} download=''>
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
          to='/en/colecciones'
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
export const PagiMarmolesStyle4 = PaginasMarmol.map((elemento) => (
  <>
    <Wrapper>
      <ContentWrapper>
        <Title>{elemento.titulo}</Title>
        <ImagenXL src={elemento.imgL} alt={elemento.altL} loading={"lazy"} />
        <EspesorWrapper>
          <Espesor src={elemento.espesor} loading={"lazy"} />
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
        <EspesorWrapper2>
          <Espesor src={elemento.espesor2} loading={"lazy"} />
        </EspesorWrapper2>
        <Cambiador2>
          <TextoBotonLT></TextoBotonLT>
          <TextoCambio>
            <b>{elemento.desc2[0]}</b>
            <br />
            {elemento.desc2[1]}
            <br />
            {elemento.desc2[2]}
          </TextoCambio>
          <TextoBotonGT></TextoBotonGT>
        </Cambiador2>
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
          <DescargaPdf href={elemento.pdfLink} download=''>
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
          to='/en/colecciones'
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
//madera
export const PagiMaderaStyle1 = PaginasMadera.map((elemento) => (
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
          <DescargaPdf href={elemento.pdfLink} download=''>
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
          to='/en/colecciones'
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
export const PagiMaderaStyle2 = PaginasMadera.map((elemento) => (
  <>
    <Wrapper>
      <ContentWrapper>
        <Title>{elemento.titulo}</Title>
      </ContentWrapper>
      <ContentWrapper>
        <ImagenXL src={elemento.imgL} alt={elemento.altL} loading={"lazy"} />
        <EspesorWrapper>
          <Espesor src={elemento.espesor} loading={"lazy"} />
        </EspesorWrapper>
        <Cambiador>
          <Link
            to={elemento.urlanterior}
            style={{ textDecoration: "none", color: "#000000", margin: 0 }}
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
              <Imagen1
                src={elemento.img1}
                alt={elemento.altImg1}
                loading={"lazy"}
              />
            </Zoom>
            <Zoom>
              <Imagen2
                src={elemento.img2}
                alt={elemento.altImg2}
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
          <DescargaPdf href={elemento.pdfLink} download=''>
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
          to='/en/colecciones'
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
//metal
export const PagiMetalStyle1 = PaginasMetal.map((elemento) => (
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
          <DescargaPdf href={elemento.pdfLink} download=''>
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
          to='/en/colecciones'
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
export const PagiMetalStyle2 = PaginasMetal.map((elemento) => (
  <>
    <Wrapper>
      <ContentWrapper>
        <Title>{elemento.titulo}</Title>
      </ContentWrapper>
      <ContentWrapper>
        <ImagenXL src={elemento.imgL} alt={elemento.altL} loading={"lazy"} />
        <EspesorWrapper>
          <Espesor src={elemento.espesor} loading={"lazy"} />
        </EspesorWrapper>
        <Cambiador>
          <Link
            to={elemento.urlanterior}
            style={{ textDecoration: "none", color: "#000000", margin: 0 }}
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
              <Imagen1
                onClick={null}
                src={elemento.img1}
                alt={elemento.altImg1}
                loading={"lazy"}
              />
            </Zoom>
            <Zoom>
              <Imagen2
                src={elemento.img2}
                alt={elemento.altImg2}
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
          <DescargaPdf href={elemento.pdfLink} download=''>
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
          to='/en/colecciones'
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
export const PagiMetalStyle3 = PaginasMetal.map((elemento) => (
  <>
    <Wrapper>
      <ContentWrapper>
        <Title>{elemento.titulo}</Title>
      </ContentWrapper>
      <ContentWrapper>
        <ImagenXL src={elemento.imgL} alt={elemento.altL} loading={"lazy"} />
        <EspesorWrapper>
          <Espesor src={elemento.espesor} loading={"lazy"} />
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
          <ColImagenes></ColImagenes>
          <Vid
            controls
            src={elemento.imgVid}
            alt={elemento.altVid}
            loading={"lazy"}
          />
        </ColWrapper>
        <VerVid>{elemento.vervid}</VerVid>
        {elemento.pdfLink !== "" && (
          <DescargaPdf href={elemento.pdfLink} download=''>
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
          to='/en/colecciones'
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
//piedra
export const PagiPiedraStyle1 = PaginasPiedra.map((elemento) => (
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
          <DescargaPdf href={elemento.pdfLink} download=''>
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
          to='/en/colecciones'
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
export const PagiPiedraStyle2 = PaginasPiedra.map((elemento) => (
  <>
    <Wrapper>
      <ContentWrapper>
        <Title>{elemento.titulo}</Title>
      </ContentWrapper>
      <ContentWrapper>
        <ImagenXL src={elemento.imgL} alt={elemento.altL} loading={"lazy"} />
        <EspesorWrapper>
          <Espesor src={elemento.espesor} loading={"lazy"} />
        </EspesorWrapper>
        <Cambiador>
          <Link
            to={elemento.urlanterior}
            style={{ textDecoration: "none", color: "#000000", margin: 0 }}
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
              <Imagen1
                onClick={null}
                src={elemento.img1}
                alt={elemento.altImg1}
                loading={"lazy"}
              />
            </Zoom>
            <Zoom>
              <Imagen2
                src={elemento.img2}
                alt={elemento.altImg2}
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
          <DescargaPdf href={elemento.pdfLink} download=''>
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
          to='/en/colecciones'
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
export const PagiPiedraStyle3 = PaginasPiedra.map((elemento) => (
  <>
    <Wrapper>
      <ContentWrapper>
        <Title>{elemento.titulo}</Title>
      </ContentWrapper>
      <ContentWrapper>
        <ImagenXL src={elemento.imgL} alt={elemento.altL} loading={"lazy"} />
        <EspesorWrapper>
          <Espesor src={elemento.espesor} loading={"lazy"} />
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
          <ColImagenes></ColImagenes>
          <Vid
            controls
            src={elemento.imgVid}
            alt={elemento.altVid}
            loading={"lazy"}
          />
        </ColWrapper>
        <VerVid>{elemento.vervid}</VerVid>
        {elemento.pdfLink !== "" && (
          <DescargaPdf href={elemento.pdfLink} download=''>
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
          to='/en/colecciones'
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
