import React, { useState } from "react";
import {
  AcabadoContainer,
  TextWrapper,
  TextWrapper2,
  TextWrapper3,
  Heading,
  Subtitle,
  Subtitle2,
  Caracteristics,
  Subtitle3,
  ImgWrap,
  Img,
  Img2,
} from "./AcabadoElements";
import { caracteristicas, imagenes } from "./img_alt";

const AcabadoSection = ({
  headLine,
  description,
  description2,
  description3,
  img,
  alt,
}) => {
  const [seleccionada, setSeleccionada] = useState(imagenes.imagen0);
  const [caracteristic, setCaracteristica] = useState(caracteristicas.carac0);
  return (
    <>
      <AcabadoContainer id='acabados'>
        <TextWrapper>
          <Heading> {headLine}</Heading>
          <Subtitle>{description}</Subtitle>
        </TextWrapper>
        <ImgWrap>
          <Img id='img' src={seleccionada} alt={alt} />
          <Caracteristics>
            Acabado mostrado: <b>{caracteristic}</b>
          </Caracteristics>
          <Subtitle2>{description2}</Subtitle2>
        </ImgWrap>
        <TextWrapper2>
          <Subtitle3
            onClick={() => {
              setSeleccionada(imagenes.imagen0);
              setCaracteristica(caracteristicas.carac0);
            }}
            alt={alt}
          >
            / Soft
          </Subtitle3>
          <Subtitle3
            onClick={() => {
              setSeleccionada(imagenes.imagen1);
              setCaracteristica(caracteristicas.carac1);
            }}
            alt={alt}
          >
            / Soft textured
          </Subtitle3>
          <Subtitle3
            onClick={() => {
              setSeleccionada(imagenes.imagen2);
              setCaracteristica(caracteristicas.carac2);
            }}
            alt={alt}
          >
            / Pulido
          </Subtitle3>
        </TextWrapper2>
        <TextWrapper2>
          <Subtitle3
            onClick={() => {
              setSeleccionada(imagenes.imagen3);
              setCaracteristica(caracteristicas.carac3);
            }}
            alt={alt}
          >
            / Natural
          </Subtitle3>
          <Subtitle3
            onClick={() => {
              setSeleccionada(imagenes.imagen4);
              setCaracteristica(caracteristicas.carac4);
            }}
            alt={alt}
          >
            / Natural S/R
          </Subtitle3>
          <Subtitle3
            onClick={() => {
              setSeleccionada(imagenes.imagen5);
              setCaracteristica(caracteristicas.carac5);
            }}
            alt={alt}
          >
            / Pulido S/R
          </Subtitle3>
        </TextWrapper2>
        <TextWrapper3>
          <Subtitle3
            onClick={() => {
              setSeleccionada(imagenes.imagen6);
              setCaracteristica(caracteristicas.carac6);
            }}
            alt={alt}
          >
            / Mate
          </Subtitle3>
          <Subtitle3
            onClick={() => {
              setSeleccionada(imagenes.imagen7);
              setCaracteristica(caracteristicas.carac7);
            }}
            alt={alt}
          >
            / Mate S/R
          </Subtitle3>
          <Subtitle3
            onClick={() => {
              setSeleccionada(imagenes.imagen8);
              setCaracteristica(caracteristicas.carac8);
            }}
            alt={alt}
          >
            / Silk
          </Subtitle3>
          <Subtitle3
            onClick={() => {
              setSeleccionada(imagenes.imagen9);
              setCaracteristica(caracteristicas.carac9);
            }}
            alt={alt}
          >
            / Hond
          </Subtitle3>
        </TextWrapper3>
      </AcabadoContainer>
    </>
  );
};

export default AcabadoSection;
