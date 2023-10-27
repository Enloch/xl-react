import {
  PaginasModelosContainer,
  ContenedorInterior,
  ContenedorSlider,
  ContenidoBottom,
  DivisorBottom,
  DivisorTop,
  Slider,
  ContenedorDatos,
  TituloMesa,
  SubtituloConPunto,
  Punto,
  ContenedorTextoPunto,
  TextoPunto,
  ParrafoSubtitulo,
  ThumbnailContainer,
  Thumbnail,
  ThumbnailWrapper,
  TextosIconos,
  ContenedorBoton,
  BotonAtras,
} from "../styles";
import { CustomSliderMesas } from "../../../../components/SliderMesas";
import { IliaData } from "../data";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
} from "@chakra-ui/react";
import {
  Sobre,
  Metal,
  Bisel,
  Haya,
  Fresno,
} from "../../../../components/Configurador/MiniaturasModelo";
const Ilia = () => {
  return (
    <PaginasModelosContainer>
      <DivisorTop>
        <BotonAtras href='/home#collection'>{"←"} volver atras</BotonAtras>
      </DivisorTop>
      <DivisorBottom>
        <ContenidoBottom>
          <ContenedorSlider>
            <ContenedorInterior>
              <Slider>
                <CustomSliderMesas images={IliaData.imagenes} />
              </Slider>
            </ContenedorInterior>
          </ContenedorSlider>
          <ContenedorDatos>
            <ContenedorInterior>
              <TituloMesa>{IliaData.titulo}</TituloMesa>
              <SubtituloConPunto>
                <Punto>
                  <svg
                    width='12'
                    height='12'
                    viewBox='0 0 12 12'
                    fill='·222222'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle cx='6' cy='6' r='6' fill='·222222'></circle>
                  </svg>
                </Punto>
                <ContenedorTextoPunto>
                  <TextoPunto>{IliaData.subtitulo}</TextoPunto>
                </ContenedorTextoPunto>
              </SubtituloConPunto>
              <ParrafoSubtitulo>
                {IliaData.parrafo1}
                <br />
                {IliaData.parrafo2}
                <br />
                {IliaData.parrafo3}
                <br />
                {IliaData.parrafo4}
              </ParrafoSubtitulo>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as='span' flex='1' textAlign='left'>
                        <SubtituloConPunto style={{ marginBottom: "0px" }}>
                          <Punto>
                            <svg
                              width='12'
                              height='12'
                              viewBox='0 0 12 12'
                              fill='·222222'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <circle
                                cx='6'
                                cy='6'
                                r='6'
                                fill='·222222'
                              ></circle>
                            </svg>
                          </Punto>
                          <ContenedorTextoPunto>
                            <TextoPunto>Acabados</TextoPunto>
                          </ContenedorTextoPunto>
                        </SubtituloConPunto>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <p
                      style={{
                        fontSize: "14px",
                        marginBottom: "5px",
                        color: "#a6a9ab",
                      }}
                    >
                      Los acabados mostrados son representativas de los colores
                      finales del producto.
                    </p>
                    {/* Acordeón anidado para Sobreencimera */}
                    <Accordion allowToggle defaultIndex={[0]}>
                      <AccordionItem border='0px'>
                        <AccordionButton>
                          <Box flex='1' textAlign='left'>
                            Sobre
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                          <ThumbnailContainer>
                            {Sobre.map((material, index) => (
                              <ThumbnailWrapper key={index}>
                                <Thumbnail src={material.imagen} />
                                <TextosIconos>{material.nombre}</TextosIconos>
                              </ThumbnailWrapper>
                            ))}
                          </ThumbnailContainer>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                    {IliaData.bisel && (
                      <Accordion allowToggle>
                        <AccordionItem border='0px'>
                          <AccordionButton>
                            <Box flex='1' textAlign='left'>
                              Bisel
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                          <AccordionPanel>
                            <ThumbnailContainer>
                              {Bisel.map((material, index) => (
                                <ThumbnailWrapper key={index}>
                                  <Thumbnail src={material.imagen} />
                                  <TextosIconos>{material.nombre}</TextosIconos>
                                </ThumbnailWrapper>
                              ))}
                            </ThumbnailContainer>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    )}
                    {IliaData.metal && (
                      <Accordion allowToggle>
                        <AccordionItem border='0px'>
                          <AccordionButton>
                            <Box flex='1' textAlign='left'>
                              Metales
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                          <AccordionPanel>
                            <ThumbnailContainer>
                              {Metal.map((material, index) => (
                                <ThumbnailWrapper key={index}>
                                  <Thumbnail src={material.imagen} />
                                  <TextosIconos>{material.nombre}</TextosIconos>
                                </ThumbnailWrapper>
                              ))}
                            </ThumbnailContainer>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    )}
                    {IliaData.haya && (
                      <Accordion allowToggle>
                        <AccordionItem border='0px'>
                          <AccordionButton>
                            <Box flex='1' textAlign='left'>
                              Madera de haya
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                          <AccordionPanel>
                            <ThumbnailContainer>
                              {Haya.map((material, index) => (
                                <ThumbnailWrapper key={index}>
                                  <Thumbnail src={material.imagen} />
                                  <TextosIconos>{material.nombre}</TextosIconos>
                                </ThumbnailWrapper>
                              ))}
                            </ThumbnailContainer>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    )}
                    {IliaData.fresno && (
                      <Accordion allowToggle>
                        <AccordionItem border='0px'>
                          <AccordionButton>
                            <Box flex='1' textAlign='left'>
                              Madera de fresno
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                          <AccordionPanel>
                            <ThumbnailContainer>
                              {Fresno.map((material, index) => (
                                <ThumbnailWrapper key={index}>
                                  <Thumbnail src={material.imagen} />
                                  <TextosIconos>{material.nombre}</TextosIconos>
                                </ThumbnailWrapper>
                              ))}
                            </ThumbnailContainer>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    )}
                  </AccordionPanel>
                </AccordionItem>
                {/* ... (otros AccordionItems) */}
                <AccordionItem>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      <SubtituloConPunto style={{ marginBottom: "0px" }}>
                        <Punto>
                          <svg
                            width='12'
                            height='12'
                            viewBox='0 0 12 12'
                            fill='·222222'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <circle cx='6' cy='6' r='6' fill='·222222'></circle>
                          </svg>
                        </Punto>
                        <ContenedorTextoPunto>
                          <TextoPunto>Dimesiones</TextoPunto>
                        </ContenedorTextoPunto>
                      </SubtituloConPunto>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel pb={4}>
                    {IliaData.fijo && (
                      <Accordion allowToggle defaultIndex={[0]}>
                        <AccordionItem border='0px'>
                          <AccordionButton>
                            <Box flex='1' textAlign='left'>
                              Mesa fija
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                          <AccordionPanel>
                            {IliaData.tamanosFijo.map((tamanos, index) => (
                              <TextosIconos key={index}>
                                {tamanos}
                                <br />
                              </TextosIconos>
                            ))}
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    )}
                    {IliaData.fijocircular && (
                      <Accordion allowToggle>
                        <AccordionItem border='0px'>
                          <AccordionButton>
                            <Box flex='1' textAlign='left'>
                              Mesa fija circular
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                          <AccordionPanel>
                            {IliaData.tamanosCirculo.map((tamanos, index) => (
                              <TextosIconos>
                                {tamanos}
                                <br />
                              </TextosIconos>
                            ))}
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    )}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <ContenedorBoton>
                <a
                  href={IliaData.pdf}
                  download
                  style={{ textDecoration: "none", width: "100%" }}
                >
                  <Button
                    colorScheme='#BEBEBE'
                    variant='outline'
                    spinnerPlacement='start'
                    borderRadius='25px'
                    fontSize='14px'
                    _hover={{ bg: "#3E3E3E", color: "white" }}
                    width='100%'
                  >
                    Descargar ficha técnica
                  </Button>
                </a>
                <a href='/home#configurador'>
                  <Button
                    colorScheme='#BEBEBE'
                    variant='outline'
                    spinnerPlacement='start'
                    borderRadius='25px'
                    fontSize='14px'
                    _hover={{ bg: "#3E3E3E", color: "white" }}
                    width='100%'
                  >
                    Ir al configurador de mesas
                  </Button>
                </a>
              </ContenedorBoton>
            </ContenedorInterior>
          </ContenedorDatos>
        </ContenidoBottom>
      </DivisorBottom>
    </PaginasModelosContainer>
  );
};

export default Ilia;
