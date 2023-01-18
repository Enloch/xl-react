import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  CaraContainer,
  CaraContainer2,
  CaraContainer3,
  TextWrapper,
  TextWrapper2,
  TextWrapper3,
  TextWrapper4,
  TextWrapper5,
  TextWrapper6,
  Heading,
  Heading2,
  Subtitle,
  ImgWrap,
  ImgWrap2,
  Img,
  IconContainer,
  Icono1,
  ImgGradient,
  ImgGradWrap,
  Caracteristics,
  Caracteristics2,
  Subtitle2,
  Subtitle3,
  Subtitle4,
  ImgSelector2,
} from "./encimeraStyle";
import icono from "../../../assets/icons/botones/boton.png";
import config from "./indicadores";
const EncimeraBath = ({
  id,
  imgheader,
  headLine,
  description,
  description2,
  img,
  alt,
  caracteristicas,
}) => {
  const [seleccionada1, setSeleccionada] = useState(img[0]);
  const [caracteristica1, setCaracteristica] = useState(caracteristicas[0]);
  const [seleccionada2, setSeleccionada2] = useState(img[4]);
  const [caracteristica2, setCaracteristica2] = useState(caracteristicas[4]);
  return (
    <>
      <ImgWrap>
        <IconContainer>
          <Link to="" scroll="smooth">
            <Icono1
              src={icono}
              style={{
                top: config[0].top,
                left: config[0].left,
              }}
            />
          </Link>
          <Link to={config[1].id} scroll="smooth">
            <Icono1
              src={icono}
              style={{
                top: config[1].top,
                left: config[1].left,
              }}
            />
          </Link>
          <Link to={config[2].id} scroll="smooth">
            <Icono1
              src={icono}
              style={{
                top: config[2].top,
                left: config[2].left,
              }}
            />
          </Link>
          <Link to={config[3].id} scroll="smooth">
            <Icono1
              src={icono}
              style={{
                top: config[3].top,
                left: config[3].left,
              }}
            />
          </Link>
          <Link to={config[4].id} scroll="smooth">
            <Icono1
              src={icono}
              style={{
                top: config[4].top,
                left: config[4].left,
              }}
            />
          </Link>
          <Link to={config[5].id} scroll="smooth">
            <Icono1
              src={icono}
              style={{
                top: config[5].top,
                left: config[5].left,
              }}
            />
          </Link>
          <Link to={config[6].id} scroll="smooth">
            <Icono1
              src={icono}
              style={{
                top: config[6].top,
                left: config[6].left,
              }}
            />
          </Link>
          <Link to={config[7].id} scroll="smooth">
            <Icono1
              src={icono}
              style={{
                top: config[7].top,
                left: config[7].left,
              }}
            />
          </Link>
          <Link to={config[8].id} scroll="smooth">
            <Icono1
              src={icono}
              style={{
                top: config[8].top,
                left: config[8].left,
              }}
            />
          </Link>

          <Link to={config[9].id} scroll="smooth">
            <Icono1
              src={icono}
              style={{
                top: config[9].top,
                left: config[9].left,
              }}
            />
          </Link>

          <Img src={imgheader} alt={alt} />
        </IconContainer>
      </ImgWrap>
      <CaraContainer id={id}>
        <TextWrapper>
          <Heading> {headLine[0]}</Heading>
          <Subtitle>{description[0]}</Subtitle>
        </TextWrapper>
      </CaraContainer>
      <ImgGradient>
        <ImgGradWrap>
          <Img src={seleccionada1} alt={alt} />
        </ImgGradWrap>
      </ImgGradient>
      <CaraContainer2>
        <TextWrapper2>
          <Caracteristics>
            Descripción: <b>{caracteristica1}</b>
          </Caracteristics>
          <Subtitle2>{description2}</Subtitle2>
        </TextWrapper2>
        <TextWrapper3>
          <Subtitle3
            onClick={() => {
              setSeleccionada(img[0]);
              setCaracteristica(caracteristicas[0]);
            }}
            alt={alt}
          >
            {caracteristicas[0]} /
          </Subtitle3>
          <Subtitle3
            onClick={() => {
              setSeleccionada(img[1]);
              setCaracteristica(caracteristicas[1]);
            }}
            alt={alt}
          >
            {caracteristicas[1]} /
          </Subtitle3>
          <Subtitle3
            onClick={() => {
              setSeleccionada(img[2]);
              setCaracteristica(caracteristicas[2]);
            }}
            alt={alt}
          >
            {caracteristicas[2]} /
          </Subtitle3>
          <Subtitle3
            onClick={() => {
              setSeleccionada(img[3]);
              setCaracteristica(caracteristicas[3]);
            }}
            alt={alt}
          >
            {caracteristicas[3]}
          </Subtitle3>
        </TextWrapper3>
      </CaraContainer2>
      <CaraContainer3>
        <TextWrapper4>
          <Heading2> {headLine[1]}</Heading2>
          <Subtitle4>{description[1]}</Subtitle4>
        </TextWrapper4>
      </CaraContainer3>
      <ImgSelector2>
        <ImgWrap2>
          <Img src={seleccionada2} alt={alt} />
        </ImgWrap2>
      </ImgSelector2>
      <CaraContainer2>
        <TextWrapper5>
          <Caracteristics2>
            Descripción: <b>{caracteristica2}</b>
          </Caracteristics2>
          <Subtitle2>{description2}</Subtitle2>
        </TextWrapper5>
        <TextWrapper6>
          <Subtitle3
            onClick={() => {
              setSeleccionada2(img[4]);
              setCaracteristica2(caracteristicas[4]);
            }}
            alt={alt}
          >
            {caracteristicas[4]} /
          </Subtitle3>
          <Subtitle3
            onClick={() => {
              setSeleccionada2(img[5]);
              setCaracteristica2(caracteristicas[5]);
            }}
            alt={alt}
          >
            {caracteristicas[5]}
          </Subtitle3>
        </TextWrapper6>
      </CaraContainer2>
    </>
  );
};

export default EncimeraBath;
