import React from "react";
import { useInView } from "react-intersection-observer";
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
}) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
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
          {bloque(titulo1, mm12, sub1, imagenes2, desc1, iconodescarga)}
          {bloque(titulo2, mm06, sub2, imagenes2, desc2, iconodescarga)}
          <DetalleEncimera src={detalleseccion} />
          <InfoEncimera>
            {textoseccion}
            <br />
            <br />
          </InfoEncimera>

          {bloque(titulo3, mm06, sub3, imagenes3, desc3, iconodescarga)}
          {bloque(titulo4, mm12, sub4, imagenes4, desc4, iconodescarga)}
        </Wrapper>
        <WrapperAnim ref={ref}>
          <div class='medTer'>
            <div class='titulete'>
              todas las encimeras en las siguientes medidas
            </div>
            <div class='rayita'></div>
            <div class='barra' id='w36'>
              61
            </div>
            <div class='barra' id='w48'>
              71
            </div>
            <div class='barra' id='w60'>
              81
            </div>
            <div class='barra' id='w72'>
              91
            </div>
            <div class='barra' id='w96'>
              101
            </div>
            <div class='barra' id='w120'>
              111
            </div>
          </div>
        </WrapperAnim>
      </InfoContainer>
    </>
  );
};
export default EncimeraTop;

// function animmedida() {
//   return (

//   );
// }
function bloque(titulo, icono, subtitulo, imagenes, texto, iconodownload) {
  return (
    <>
      <BloqueTitulo>
        <WrapperTitulo>
          <b>{titulo}</b>
        </WrapperTitulo>
        <ImagenTitulo src={icono}></ImagenTitulo>
        <BloqueDescarga>
          <TextoDescarga>Esp.Técnicas</TextoDescarga>
          <IconoDescarga src={iconodownload} />
        </BloqueDescarga>
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
