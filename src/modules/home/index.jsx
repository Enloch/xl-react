import React from "react";
import {
  MainContainer,
  Seccion,
  SeccionContenido,
  WrapperContenido,
  GridSeccion,
  GridTextoCabecera,
  GridTextoCabecera2,
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
  Caja15Flex,
  Caja85Flex,
} from "./styles";
import { useAnimation } from "framer-motion";
import { CustomSliderPequeno } from "../../components/Sliders";
import { CollectionSlider, LiveSlider, ContractSlider } from "./DataSliders";
import Header from "../../assets/images/home/secciones/Landing/HeaderTemporal.jpg";
import Flecha from "../../assets/icons/flechadown.svg";
import Configurador from "../../components/Configurador";
import ScrollToTop from "../../components/GoTopBttn/ScrollToTop";
import FooterSection from "./FooterSection";
import { LandingFooter } from "./FooterSection/data";
import AcabadosHome from "./AcabadosHome";
import {
  Acabados_Encimeras,
  Acabados_Metal,
  Acabados_Haya,
  Acabados_Fresno,
} from "./AcabadosHome/data";
export const XLHome = () => {
  const handleClickFlecha = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
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
                        Orientado tanto a clientes individuales como al sector
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
                    <CustomSliderPequeno images={CollectionSlider} />
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
                    <CustomSliderPequeno images={LiveSlider} />
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
        <Seccion className='Acabados'>
          <SeccionContenido>
            <WrapperContenido>
              <GridSeccion>
                <GridTextoCabecera>Nuestros acabados</GridTextoCabecera>
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
                          <TituloPunto>Porcelánico</TituloPunto>
                        </ContenedorTituloPunto>
                      </AjusteTituloPunto>
                    </SeccionTituloPunto>
                  </Caja25Flex>
                  <Caja75Flex>
                    <AcabadosHome data={Acabados_Encimeras} />
                  </Caja75Flex>
                  <Caja25Flex>
                    <SeccionTituloPunto>
                      <AjusteTituloPunto>
                        <Punto>
                          <TituloPunto>//</TituloPunto>
                        </Punto>
                        <ContenedorTituloPunto>
                          <TituloPunto>metal epoxy</TituloPunto>
                        </ContenedorTituloPunto>
                      </AjusteTituloPunto>
                    </SeccionTituloPunto>
                  </Caja25Flex>
                  <Caja75Flex>
                    <AcabadosHome data={Acabados_Metal} />
                  </Caja75Flex>
                  <Caja25Flex>
                    <SeccionTituloPunto>
                      <AjusteTituloPunto>
                        <Punto>
                          <TituloPunto>//</TituloPunto>
                        </Punto>
                        <ContenedorTituloPunto>
                          <TituloPunto>madera de haya</TituloPunto>
                        </ContenedorTituloPunto>
                      </AjusteTituloPunto>
                    </SeccionTituloPunto>
                  </Caja25Flex>
                  <Caja75Flex>
                    <AcabadosHome data={Acabados_Haya} />
                  </Caja75Flex>
                  <Caja25Flex>
                    <SeccionTituloPunto>
                      <AjusteTituloPunto>
                        <Punto>
                          <TituloPunto>//</TituloPunto>
                        </Punto>
                        <ContenedorTituloPunto>
                          <TituloPunto>madera de fresno</TituloPunto>
                        </ContenedorTituloPunto>
                      </AjusteTituloPunto>
                    </SeccionTituloPunto>
                  </Caja25Flex>
                  <Caja75Flex>
                    <AcabadosHome data={Acabados_Fresno} />
                  </Caja75Flex>
                </LimiteSubtitulos>
              </ContenedorSubtitulos>
            </WrapperContenido>
          </SeccionContenido>
        </Seccion>
        <Seccion className='Configurador'>
          <SeccionContenido>
            <WrapperContenido>
              <GridSeccion></GridSeccion>
              <ContenedorSeparador>
                <SeparadorHeader />
              </ContenedorSeparador>
              <ContenedorSubtitulos>
                <LimiteSubtitulos>
                  <Caja15Flex></Caja15Flex>
                  <Caja85Flex>
                    <GridTextoCabecera2>Configurador</GridTextoCabecera2>
                  </Caja85Flex>
                </LimiteSubtitulos>
              </ContenedorSubtitulos>
            </WrapperContenido>
          </SeccionContenido>
        </Seccion>
        <Seccion>
          <SeccionContenido>
            <WrapperContenido>
              <ContenedorSubtitulos>
                <LimiteSubtitulos>
                  <Configurador />
                </LimiteSubtitulos>
              </ContenedorSubtitulos>
            </WrapperContenido>
          </SeccionContenido>
        </Seccion>
      </MainContainer>
      <FooterSection {...LandingFooter} />
    </>
  );
};
