import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import flecha from "../../assets/configurador/iconos/flecha.svg";
import { Sobre, Bisel, Metal, Haya, Fresno } from "./DatosModelo";

const Section = styled(motion.div)`
  margin-bottom: 1rem;
`;

const SectionHeader = styled.div`
  display: flex; // Añadido para permitir el diseño en fila
  align-items: center; // Añadido para alinear elementos en el centro verticalmente
  justify-content: space-between;
  border-top: 1px solid #a6a9ab;
  cursor: pointer;
  padding: 10px 0 10px;
`;
const SubsectionHeader = styled.div`
  display: flex; // Añadido para permitir el diseño en fila
  align-items: center; // Añadido para alinear elementos en el centro verticalmente
  justify-content: space-between;
  cursor: pointer;
  padding: 0px;
`;
const SectionTitle = styled.p`
  color: ${theme.colors.primaryTextColor};
  font-family: "Neue Montreal", sans-serif;
  font-size: 14px;
  font-weight: 700;
`;
const SubsectionTitle = styled.p`
  color: ${theme.colors.secondaryTextColor};
  font-family: "Neue Montreal", sans-serif;
  font-size: 14px;
  font-weight: 400;
  margin: 5px 0px 5px;
`;
const SectionIcon = styled.img`
  width: 10px;
`;

const SectionContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Thumbnail = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-bottom: 3px;
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 75px;
  margin-top: 10px;
  cursor: pointer;
  &.phantom {
    visibility: hidden;
  }
`;

const Textos = styled.a`
  text-decoration: none;
  color: ${theme.colors.secondaryTextColor};
  font-family: "Neue Montreal", sans-serif;
  font-size: 14px;
  font-weight: 400;
  margin: 5px 0px 5px;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.primaryTextColor};
    font-weight: 700;
  }
`;
const TextosIconos = styled.a`
  text-decoration: none;
  color: ${theme.colors.secondaryTextColor};
  font-family: "Neue Montreal", sans-serif;
  font-size: 12px;
  font-weight: 400;
`;

/**
 * Generates phantom items to fill the last row of a grid with empty items.
 * @param {number} itemCount - The total number of items in the grid.
 * @param {number} itemsPerRow - The number of items per row in the grid.
 * @returns {Array<JSX.Element>} An array of phantom items to fill the last row of the grid.
 */
const generatePhantomItems = (itemCount, itemsPerRow) => {
  const phantomItems = itemsPerRow - (itemCount % itemsPerRow);
  return Array.from({ length: phantomItems }).map((_, index) => (
    <ThumbnailWrapper key={`phantom-${index}`} className='phantom'>
      <Thumbnail src='' />
      <TextosIconos></TextosIconos>
    </ThumbnailWrapper>
  ));
};

const Accordion = () => {
  const [tieneBisel, setTieneBisel] = useState(true);
  const [tieneBastidor, setTieneBastidor] = useState(true);
  const [tieneExtension, setTieneExtension] = useState(true);
  const [tieneMetal, setTieneMetal] = useState(true);
  const [tieneHaya, setTieneHaya] = useState(true);
  const [tieneFresno, setTieneFresno] = useState(true);
  const [openSection, setOpenSection] = useState(null);
  const [openSubsection, setOpenSubsection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div>
      <Section>
        <SectionHeader onClick={() => toggleSection("Mesa")}>
          {/* SVG y Título */}
          <SectionTitle>Mesa / Table</SectionTitle>
          <SectionIcon src={flecha} />
        </SectionHeader>
        <AnimatePresence>
          {openSection === "Mesa" && (
            <SectionContent
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                initial: { duration: 1 },
                animate: { duration: 1.5 },
                exit: { duration: 1 },
              }}
            >
              <Textos>Emma</Textos>
              <Textos>Kir</Textos>
            </SectionContent>
          )}
        </AnimatePresence>
      </Section>

      <Section>
        <SectionHeader onClick={() => toggleSection("Sobre")}>
          <SectionTitle>Sobre / Top</SectionTitle>
          <SectionIcon src={flecha} />
        </SectionHeader>
        <AnimatePresence>
          {openSection === "Sobre" && (
            <SectionContent
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                initial: { duration: 1 },
                animate: { duration: 1.5 },
                exit: { duration: 1 },
              }}
            >
              <Textos>Cuadrado / Square</Textos>
              <Textos>Rectangular / Rectangular</Textos>
              <Textos>Circular / Circular</Textos>
              <Textos>Ovalado / Oval</Textos>
              <Textos>Barril / Barrel</Textos>
            </SectionContent>
          )}
        </AnimatePresence>
      </Section>
      <Section>
        <SectionHeader onClick={() => toggleSection("AcabadoSobre")}>
          <SectionTitle>
            Acabados sobre /<br /> Countertop finishes
          </SectionTitle>
          <SectionIcon src={flecha} />
        </SectionHeader>
        <AnimatePresence>
          {openSection === "AcabadoSobre" && (
            <SectionContent
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                initial: { duration: 2 },
                animate: { duration: 1.5 },
                exit: { duration: 1 },
              }}
            >
              <ThumbnailContainer>
                {Sobre.map((material, index) => (
                  <ThumbnailWrapper key={index}>
                    <Thumbnail src={material.imagen} />
                    <TextosIconos>{material.nombre}</TextosIconos>
                  </ThumbnailWrapper>
                ))}
              </ThumbnailContainer>
            </SectionContent>
          )}
        </AnimatePresence>
      </Section>
      {tieneBisel && (
        <Section>
          <SectionHeader onClick={() => toggleSection("AcabadoEdge")}>
            <SectionTitle>
              Acabado bisel /<br /> Edge finish
            </SectionTitle>
            <SectionIcon src={flecha} />
          </SectionHeader>
          <AnimatePresence>
            {openSection === "AcabadoEdge" && (
              <SectionContent
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{
                  initial: { duration: 2 },
                  animate: { duration: 1.5 },
                  exit: { duration: 1 },
                }}
              >
                <ThumbnailContainer>
                  {Bisel.map((material, index) => (
                    <ThumbnailWrapper key={index}>
                      <Thumbnail src={material.imagen} />
                      <TextosIconos>{material.nombre}</TextosIconos>
                    </ThumbnailWrapper>
                  ))}
                  {generatePhantomItems(Haya.length, 3)}
                </ThumbnailContainer>
              </SectionContent>
            )}
          </AnimatePresence>
        </Section>
      )}
      {tieneBastidor && (
        <Section>
          <SectionHeader onClick={() => toggleSection("AcabadoBastidor")}>
            <SectionTitle>
              Acabados Bastidor /<br /> Frame finishes
            </SectionTitle>
            <SectionIcon src={flecha} />
            {/* Aquí puedes incluir tu SectionIcon */}
          </SectionHeader>
          <AnimatePresence>
            {openSection === "AcabadoBastidor" && (
              <SectionContent
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{
                  initial: { duration: 1 },
                  animate: { duration: 1.5 },
                  exit: { duration: 1 },
                }}
              >
                <Section>
                  <SubsectionHeader
                    onClick={() =>
                      setOpenSubsection(
                        openSubsection === "Metal" ? null : "Metal"
                      )
                    }
                  >
                    <SubsectionTitle>Metal epoxy / Epoxy metal</SubsectionTitle>
                  </SubsectionHeader>
                  <AnimatePresence>
                    {openSubsection === "Metal" && (
                      <SectionContent
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          initial: { duration: 1 },
                          animate: { duration: 1.5 },
                          exit: { duration: 1 },
                        }}
                      >
                        <ThumbnailContainer>
                          {Metal.map((material, index) => (
                            <ThumbnailWrapper key={index}>
                              <Thumbnail src={material.imagen} />
                              <TextosIconos>{material.nombre}</TextosIconos>
                            </ThumbnailWrapper>
                          ))}
                          {generatePhantomItems(Metal.length, 3)}
                        </ThumbnailContainer>
                      </SectionContent>
                    )}
                  </AnimatePresence>
                </Section>
              </SectionContent>
            )}
          </AnimatePresence>
        </Section>
      )}
      <Section>
        <SectionHeader onClick={() => toggleSection("AcabadoPata")}>
          <SectionTitle>
            Acabados Pata /<br /> Leg finishes
          </SectionTitle>
          <SectionIcon src={flecha} />
        </SectionHeader>
        <AnimatePresence>
          {openSection === "AcabadoPata" && (
            <SectionContent
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                initial: { duration: 1 },
                animate: { duration: 1.5 },
                exit: { duration: 1 },
              }}
            >
              {tieneMetal && (
                <Section>
                  <SubsectionHeader
                    onClick={() =>
                      setOpenSubsection(
                        openSubsection === "Metal" ? null : "Metal"
                      )
                    }
                  >
                    <SubsectionTitle>Metal epoxy / Epoxy metal</SubsectionTitle>
                  </SubsectionHeader>
                  <AnimatePresence>
                    {openSubsection === "Metal" && (
                      <SectionContent
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          initial: { duration: 1 },
                          animate: { duration: 1.5 },
                          exit: { duration: 1 },
                        }}
                      >
                        <ThumbnailContainer>
                          {Metal.map((material, index) => (
                            <ThumbnailWrapper key={index}>
                              <Thumbnail src={material.imagen} />
                              <TextosIconos>{material.nombre}</TextosIconos>
                            </ThumbnailWrapper>
                          ))}
                          {generatePhantomItems(Metal.length, 3)}
                        </ThumbnailContainer>
                      </SectionContent>
                    )}
                  </AnimatePresence>
                </Section>
              )}
              {tieneHaya && (
                <Section>
                  <SubsectionHeader
                    onClick={() =>
                      setOpenSubsection(
                        openSubsection === "Haya" ? null : "Haya"
                      )
                    }
                  >
                    <SubsectionTitle>Madera Haya / Wood Beech</SubsectionTitle>
                  </SubsectionHeader>
                  <AnimatePresence>
                    {openSubsection === "Haya" && (
                      <SectionContent
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          initial: { duration: 1 },
                          animate: { duration: 1.5 },
                          exit: { duration: 1 },
                        }}
                      >
                        <ThumbnailContainer>
                          {Haya.map((material, index) => (
                            <ThumbnailWrapper key={index}>
                              <Thumbnail src={material.imagen} />
                              <TextosIconos>{material.nombre}</TextosIconos>
                            </ThumbnailWrapper>
                          ))}
                          {generatePhantomItems(Haya.length, 3)}
                        </ThumbnailContainer>
                      </SectionContent>
                    )}
                  </AnimatePresence>
                </Section>
              )}
              {tieneFresno && (
                <Section>
                  <SubsectionHeader
                    onClick={() =>
                      setOpenSubsection(
                        openSubsection === "Fresno" ? null : "Fresno"
                      )
                    }
                  >
                    <SubsectionTitle>Madera Olmo / Wood Ash</SubsectionTitle>
                  </SubsectionHeader>
                  <AnimatePresence>
                    {openSubsection === "Fresno" && (
                      <SectionContent
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          initial: { duration: 1 },
                          animate: { duration: 1.5 },
                          exit: { duration: 1 },
                        }}
                      >
                        <ThumbnailContainer>
                          {Fresno.map((material, index) => (
                            <ThumbnailWrapper key={index}>
                              <Thumbnail src={material.imagen} />
                              <TextosIconos>{material.nombre}</TextosIconos>
                            </ThumbnailWrapper>
                          ))}
                          {generatePhantomItems(Fresno.length, 3)}
                        </ThumbnailContainer>
                      </SectionContent>
                    )}
                  </AnimatePresence>
                </Section>
              )}
            </SectionContent>
          )}
        </AnimatePresence>
      </Section>
      {tieneExtension && (
        <Section>
          <SectionHeader onClick={() => toggleSection("Extensible")}>
            <SectionTitle>Extensible / Extendable </SectionTitle>
            <SectionIcon src={flecha} />
          </SectionHeader>
          <AnimatePresence>
            {openSection === "Extensible" && (
              <SectionContent
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{
                  initial: { duration: 1 },
                  animate: { duration: 1.5 },
                  exit: { duration: 1 },
                }}
              >
                <Textos>Cerrada / Closed</Textos>
                <Textos>Abierta / Open</Textos>
              </SectionContent>
            )}
          </AnimatePresence>
        </Section>
      )}
    </div>
  );
};

export default Accordion;
