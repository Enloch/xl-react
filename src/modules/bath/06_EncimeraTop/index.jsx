import React from "react";
import {
  InfoContainer,
  TextWrapper,
  Heading,
  Subtitle,
  Wrapper,
  WrapperTitulo,
  BloqueTitulo,
  ImagenTitulo,
  BloqueSubtitulo,
  BloqueEncimeras3,
  ContenedorEncimera,
  IconoEncimera,
  InfoEncimera,
} from "./encimeraTopStyles";
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
}) => {
  return (
    <>
      <InfoContainer id={id}>
        <TextWrapper>
          <Heading> {headLine}</Heading>
          <Subtitle>
            {description}
            <br />
            <br />
          </Subtitle>
        </TextWrapper>
        <Wrapper id='envoltorio'>
          {bloque(titulo1, mm12, sub1, imagenes2, desc1)}
          {bloque(titulo2, mm06, sub2, imagenes2, desc2)}
          <IconoEncimera src={detalleseccion} />
          <InfoEncimera>
            {textoseccion}
            <br />
            <br />
          </InfoEncimera>

          {bloque(titulo3, mm06, sub3, imagenes3, desc3)}
          {bloque(titulo4, mm12, sub4, imagenes4, desc4)}
        </Wrapper>
      </InfoContainer>
    </>
  );
};

export default EncimeraTop;

function bloque(titulo, icono, subtitulo, imagenes, texto) {
  return (
    <>
      <BloqueTitulo>
        <WrapperTitulo>
          <b>{titulo}</b>
        </WrapperTitulo>
        <ImagenTitulo src={icono}></ImagenTitulo>
      </BloqueTitulo>
      <BloqueSubtitulo>
        <br />
        {subtitulo}
      </BloqueSubtitulo>
      <ContenedorEncimera>
        <BloqueEncimeras3>
          <IconoEncimera src={imagenes.img1} />
          <InfoEncimera>
            {texto.text1}
            <br />
            {texto.subtext}
          </InfoEncimera>
        </BloqueEncimeras3>
        <BloqueEncimeras3>
          <IconoEncimera src={imagenes.img2} />
          <InfoEncimera>
            {texto.text2}
            <br />
            {texto.subtext}
          </InfoEncimera>
        </BloqueEncimeras3>
        <BloqueEncimeras3>
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
