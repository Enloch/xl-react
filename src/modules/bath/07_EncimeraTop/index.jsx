import React from "react";
import { medidas1, medidas2, medidas3 } from "./animacionesAncho";
import { TituloAnimacion, Linea } from "./animacionesStyles";
import {
  InfoContainer,
  TextWrapper,
  Heading,
  Subtitle,
  Wrapper,
  WrapperAnim,
  WrapperTitulo,
  BloqueTitulo,
  ImagenTitulo,
  BloqueSubtitulo,
  BloqueEncimeras3,
  ContenedorEncimera,
  IconoEncimera,
  InfoEncimera,
  DetalleEncimera,
  BloqueDescarga,
  TextoDescarga,
  IconoDescarga,
  LinkDescarga,
} from "./encimeraTopStyles";
import "./info.css";

const EncimeraTop = ({
  id,
  headLine,
  description,
  img,
  alt,
  titulo1,
  titulo2,
  titulo3,
  titulo4,
  sub1,
  sub2,
  sub3,
  sub4,
  imagenes1,
  imagenes2,
  imagenes3,
  imagenes4,
  mm12,
  mm06,
  desc1,
  desc2,
  desc3,
  desc4,
  detalleseccion,
  textoseccion,
  iconodescarga,
  descarga1,
  descarga2,
  descarga3,
  descarga4,
}) => {
  return (
    <>
      <InfoContainer id='encimerabath'>
        <TextWrapper>
          <Heading
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              transition: {
                duration: 0.6,
                ease: "easeIn",
              },
              x: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
          >
            {" "}
            {headLine}
          </Heading>
          <Subtitle
            initial={{ x: 100, opacity: 0 }}
            whileInView={{
              transition: {
                duration: 0.6,
                ease: "easeIn",
              },
              x: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
          >
            {description}
            <br />
            <br />
          </Subtitle>
        </TextWrapper>
        <Wrapper id='envoltorio'>
          {bloque(
            titulo1,
            mm12,
            sub1,
            imagenes1,
            desc1,
            iconodescarga,
            descarga1
          )}
          {bloque(
            titulo2,
            mm06,
            sub2,
            imagenes2,
            desc2,
            iconodescarga,
            descarga2
          )}
          <DetalleEncimera src={detalleseccion} />
          <InfoEncimera>
            {textoseccion}
            <br />
            <br />
          </InfoEncimera>

          {bloque(
            titulo3,
            mm12,
            sub3,
            imagenes3,
            desc3,
            iconodescarga,
            descarga3
          )}
          {bloque(
            titulo4,
            mm06,
            sub4,
            imagenes4,
            desc4,
            iconodescarga,
            descarga4
          )}
        </Wrapper>
        <TituloAnimacion>
          todas las encimeras en las siguientes medidas
          <Linea />
        </TituloAnimacion>
        <WrapperAnim>
          {medidas1}
          {medidas2}
          {medidas3}
        </WrapperAnim>
      </InfoContainer>
    </>
  );
};
export default EncimeraTop;

function bloque(
  titulo,
  icono,
  subtitulo,
  imagenes,
  texto,
  iconodownload,
  descarga
) {
  return (
    <>
      <BloqueTitulo>
        <WrapperTitulo
          initial={{ x: -100, opacity: 0 }}
          whileInView={{
            transition: {
              duration: 0.8,
              ease: "easeIn",
            },
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
        >
          <strong>{titulo}</strong>
          <ImagenTitulo src={icono}></ImagenTitulo>
        </WrapperTitulo>
        <BloqueDescarga>
          <TextoDescarga>Esp.Técnicas</TextoDescarga>
          <LinkDescarga href={descarga} download=''>
            <IconoDescarga src={iconodownload} />
          </LinkDescarga>
        </BloqueDescarga>
      </BloqueTitulo>

      <BloqueSubtitulo
        initial={{ y: 100, opacity: 0 }}
        whileInView={{
          transition: {
            duration: 0.8,
            ease: "easeIn",
          },
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
      >
        <br />
        {subtitulo}
      </BloqueSubtitulo>
      <ContenedorEncimera>
        <BloqueEncimeras3
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            transition: {
              duration: 0.8,
              ease: "easeIn",
            },
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
        >
          <IconoEncimera src={imagenes.img1} />
          <InfoEncimera>
            {texto.text1}
            <br />
            {texto.subtext}
          </InfoEncimera>
        </BloqueEncimeras3>
        <BloqueEncimeras3
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            transition: {
              duration: 0.8,
              ease: "easeIn",
            },
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
        >
          <IconoEncimera src={imagenes.img2} />
          <InfoEncimera>
            {texto.text2}
            <br />
            {texto.subtext}
          </InfoEncimera>
        </BloqueEncimeras3>
        <BloqueEncimeras3
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            transition: {
              duration: 0.8,
              ease: "easeIn",
            },
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
        >
          <IconoEncimera src={imagenes.img3} />
          <InfoEncimera>
            {texto.text3}
            <br />
            {texto.subtext}
          </InfoEncimera>
        </BloqueEncimeras3>
      </ContenedorEncimera>
    </>
  );
}
