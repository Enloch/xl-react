import React from "react";
import {
  MainContainer,
  Seccion,
  SeccionContenido,
  WrapperContenido,
  GridSeccion,
  GridTextoCabecera,
  ContenedorSeparador,
  SeparadorHeader,
  ContenedorSubtitulos,
  LimiteSubtitulos,
  Caja25Flex,
  Caja75Flex,
  SeccionTituloPunto,
  AjusteTituloPunto,
  Punto,
  ContenedorTituloPunto,
  TituloPunto,
  TituloCajaDerecha,
  ContSliderPequeño,
  ContenidoHeader,
  TituloHeader,
  Subtitulo,
  AnimatedArrow,
} from "./styles";
import { useAnimation } from "framer-motion";
import { CustomSliderPequeno } from "../../components/Sliders";
import { CollectionSlider, LiveSlider, ContractSlider } from "./DataSliders";
import Header from "../../assets/images/home/secciones/Landing/HeaderTemporal.jpg";
import Flecha from "../../assets/icons/flechadown.svg";
import ScrollToTop from "../../components/GoTopBttn/ScrollToTop";
export const XLHome = () => {
  const handleClickFlecha = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <MainContainer>
      <ScrollToTop />

      <Seccion className='Cabecera' style={{ height: "100vh" }}>
        <ContenidoHeader>
          <AnimatedArrow
            src={Flecha}
            size={32}
            color='white'
            alt=''
            className='flecha-indice'
            onClick={() => handleClickFlecha("scroller")}
          />
          <TituloHeader style={{ color: "#3d3c37" }}>
            XL home // tables
          </TituloHeader>
          <ContenedorSeparador>
            <SeparadorHeader></SeparadorHeader>
          </ContenedorSeparador>
          <ContenedorSubtitulos>
            <LimiteSubtitulos>
              <Caja25Flex>
                <SeccionTituloPunto>
                  <AjusteTituloPunto>
                    <Punto>//</Punto>
                    <ContenedorTituloPunto>
                      orientado tanto a clientes individuales como al sector
                      contract
                    </ContenedorTituloPunto>
                  </AjusteTituloPunto>
                </SeccionTituloPunto>
              </Caja25Flex>
              <Caja75Flex>
                <Subtitulo style={{ color: "#3d3c37" }}>
                  Donde cada espacio encuentra su estilo
                </Subtitulo>
              </Caja75Flex>
            </LimiteSubtitulos>
          </ContenedorSubtitulos>
        </ContenidoHeader>
      </Seccion>
      <Seccion className='Collection'>
        <SeccionContenido>
          <WrapperContenido>
            <GridSeccion>
              <GridTextoCabecera id='scroller'>
                Eleva tu espacio
              </GridTextoCabecera>
            </GridSeccion>
            <ContenedorSeparador>
              <SeparadorHeader />
            </ContenedorSeparador>
            <ContenedorSubtitulos>
              <LimiteSubtitulos>
                <Caja25Flex>
                  <SeccionTituloPunto>
                    <AjusteTituloPunto>
                      <Punto>
                        <TituloPunto>//</TituloPunto>
                      </Punto>
                      <ContenedorTituloPunto>
                        <TituloPunto>Collection</TituloPunto>
                      </ContenedorTituloPunto>
                    </AjusteTituloPunto>
                  </SeccionTituloPunto>
                </Caja25Flex>
                <Caja75Flex>
                  <CustomSliderPequeno images={LiveSlider} />
                </Caja75Flex>
              </LimiteSubtitulos>
            </ContenedorSubtitulos>
          </WrapperContenido>
        </SeccionContenido>
      </Seccion>
      <Seccion classname='Life'>
        <SeccionContenido>
          <WrapperContenido>
            <GridSeccion>
              <GridTextoCabecera>Fusión perfecta</GridTextoCabecera>
            </GridSeccion>
            <ContenedorSeparador>
              <SeparadorHeader />
            </ContenedorSeparador>
            <ContenedorSubtitulos>
              <LimiteSubtitulos>
                <Caja25Flex>
                  <SeccionTituloPunto>
                    <AjusteTituloPunto>
                      <Punto>
                        <TituloPunto>//</TituloPunto>
                      </Punto>
                      <ContenedorTituloPunto>
                        <TituloPunto>Live</TituloPunto>
                      </ContenedorTituloPunto>
                    </AjusteTituloPunto>
                  </SeccionTituloPunto>
                </Caja25Flex>
                <Caja75Flex>
                  <CustomSliderPequeno images={CollectionSlider} />
                </Caja75Flex>
              </LimiteSubtitulos>
            </ContenedorSubtitulos>
          </WrapperContenido>
        </SeccionContenido>
      </Seccion>
      <Seccion className='Contract'>
        <SeccionContenido>
          <WrapperContenido>
            <GridSeccion>
              <GridTextoCabecera>
                Transforma espacios en experiencias excepcionales
              </GridTextoCabecera>
            </GridSeccion>
            <ContenedorSeparador>
              <SeparadorHeader />
            </ContenedorSeparador>
            <ContenedorSubtitulos>
              <LimiteSubtitulos>
                <Caja25Flex>
                  <SeccionTituloPunto>
                    <AjusteTituloPunto>
                      <Punto>
                        <TituloPunto>//</TituloPunto>
                      </Punto>
                      <ContenedorTituloPunto>
                        <TituloPunto>Contract</TituloPunto>
                      </ContenedorTituloPunto>
                    </AjusteTituloPunto>
                  </SeccionTituloPunto>
                </Caja25Flex>
                <Caja75Flex>
                  <CustomSliderPequeno images={ContractSlider} />
                </Caja75Flex>
              </LimiteSubtitulos>
            </ContenedorSubtitulos>
          </WrapperContenido>
        </SeccionContenido>
      </Seccion>
    </MainContainer>
  );
};
