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
import { SpritzData } from "../data";
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
const Spritz = () => {
  const generateColumns = (items, itemsPerColumn) => {
    const columns = [];

    for (let i = 0; i < items.length; i += itemsPerColumn) {
      columns.push(items.slice(i, i + itemsPerColumn));
    }

    return columns;
  };

  // en tu componente
  const renderAccordionPanel = (data, itemsPerColumn) => {
    const columns = generateColumns(data, itemsPerColumn);

    return (
      <AccordionPanel
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        }}
      >
        {columns.map((columnItems, columnIndex) => (
          <div key={columnIndex}>
            {columnItems.map((item, index) => (
              <TextosIconos key={index}>
                {item}
                <br />
              </TextosIconos>
            ))}
          </div>
        ))}
      </AccordionPanel>
    );
  };

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
                <CustomSliderMesas images={SpritzData.imagenes} />
              </Slider>
            </ContenedorInterior>
          </ContenedorSlider>
          <ContenedorDatos>
            <ContenedorInterior>
              <TituloMesa>{SpritzData.titulo}</TituloMesa>
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
                  <TextoPunto>{SpritzData.subtitulo}</TextoPunto>
                </ContenedorTextoPunto>
              </SubtituloConPunto>
              <ParrafoSubtitulo>
                {SpritzData.parrafo1}
                <br />
                {SpritzData.parrafo2}
                <br />
                {SpritzData.parrafo3}
                <br />
                {SpritzData.parrafo4}
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
                    {SpritzData.bisel && (
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
                    {SpritzData.metal && (
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
                    {SpritzData.haya && (
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
                    {SpritzData.fresno && (
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
                    {SpritzData.fijo && (
                      <Accordion allowToggle>
                        <AccordionItem border='0px'>
                          <AccordionButton>
                            <Box flex='1' textAlign='left'>
                              Mesa fija
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                          {renderAccordionPanel(SpritzData.tamanosFijo, 4)}
                        </AccordionItem>
                      </Accordion>
                    )}
                    {SpritzData.extensible && (
                      <Accordion allowToggle>
                        <AccordionItem border='0px'>
                          <AccordionButton>
                            <Box flex='1' textAlign='left'>
                              Mesa fija con extensión
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                          {renderAccordionPanel(
                            SpritzData.tamanosExtensibles,
                            6
                          )}
                        </AccordionItem>
                      </Accordion>
                    )}
                    {SpritzData.fijocircular && (
                      <Accordion allowToggle>
                        <AccordionItem border='0px'>
                          <AccordionButton>
                            <Box flex='1' textAlign='left'>
                              Mesa fija circular
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                          {renderAccordionPanel(
                            SpritzData.tamanosCirculo,
                            4
                          )}
                        </AccordionItem>
                      </Accordion>
                    )}
                    {SpritzData.extensiblecircular && (
                      <Accordion allowToggle>
                        <AccordionItem border='0px'>
                          <AccordionButton>
                            <Box flex='1' textAlign='left'>
                              Mesa fija circular con extensión
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                          {renderAccordionPanel(
                            SpritzData.tamanosCircularExt,
                            4
                          )}
                        </AccordionItem>
                      </Accordion>
                    )}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <ContenedorBoton>
                <a
                  href={SpritzData.pdf}
                  download
                  style={{
                    textDecoration: "none",
                    width: "100%",
                    height: "100%",
                  }}
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

export default Spritz;