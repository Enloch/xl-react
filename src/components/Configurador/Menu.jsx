/* eslint-disable react/prop-types */
import {
  MenuSelector,
  MenuDescargas,
  LinkDescargas,
  Section,
  SectionIcon,
  SectionContent,
  SectionTitle,
  SectionHeader,
  SubsectionHeader,
  SubsectionTitle,
  ThumbnailContainer,
  Thumbnail,
  ThumbnailWrapper,
  TextosIconos,
  Textos,
} from "./Styles";
import { AnimatePresence } from "framer-motion";
import { Sobre, Bisel, Metal, Haya, Fresno } from "./MiniaturasModelo";
import {
  MatSobre,
  MatBisel,
  MatMetal,
  MatHaya,
  MatFresno,
} from "./MaterialModelos";
import { useState, startTransition } from "react";
import flecha from "../../assets/configurador/iconos/flecha.svg";
import {
  DatosConnor,
  DatosEmma,
  DatosGene,
  DatosGrace,
  DatosHarp,
  DatosHulk,
  DatosIlia,
  DatosKiff,
  DatosLyre,
  DatosMario,
  DatosOlympus,
  DatosPisa,
  DatosProgetto,
  DatosSolo,
  DatosToyo,
  DatosVictory,
  DatosCollins,
  DatosFlip,
  DatosGibson,
  DatosHakone,
  DatosHemingway,
  DatosKir,
  DatosMary,
  DatosZama,
  DatosBrezza,
  DatosManhattan,
  DatosRob,
  DatosSpritz,
  DatosSpritz120,
} from "./InfoModelos";
import useModeloStore from "./modeloStore";
const generatePhantomItems = (itemCount, itemsPerRow) => {
  const phantomItems = itemsPerRow - (itemCount % itemsPerRow);
  return Array.from({ length: phantomItems }).map((_, index) => (
    <ThumbnailWrapper key={`phantom-${index}`} className='phantom'>
      <Thumbnail src='' />
      <TextosIconos></TextosIconos>
    </ThumbnailWrapper>
  ));
};

const Menu = ({
  setModeloMostrado,
  setModeloExtension,
  setMaterialSobre,
  setMaterialBisel,
  setMaterialBastidor,
  setMaterialPatas,
  modeloExtension,
  setIsExtendido,
  setModeloOriginal,
  modeloOriginal,
  setModeloMostradoNombre,
  setModeloSobre,
  setMaterialSobreNombre,
  setMaterialBiselNombre,
  setMaterialBastidorNombre,
  setMaterialPatasNombre,
}) => {
  const [tieneCuadradado, setTieneCuadrado] = useState(false);
  const [cambiaSobre, setCambiaSobre] = useState(false);
  const [tieneRectangular, setTieneRectangular] = useState(true);
  const [tieneCircular, setTieneCircular] = useState(false);
  const [tieneOvalado, setTieneOvalado] = useState(false);
  const [tieneBarril, setTieneBarril] = useState(false);
  const [tieneBisel, setTieneBisel] = useState(true);
  const [tieneBastidor, setTieneBastidor] = useState(true);
  const [tieneExtension, setTieneExtension] = useState(true);
  const [tieneMetal, setTieneMetal] = useState(true);
  const [tieneHaya, setTieneHaya] = useState(true);
  const [tieneFresno, setTieneFresno] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const [openSubsection, setOpenSubsection] = useState(null);
  const {
    setEncimeraCuadrada,
    setEncimeraRectangular,
    setEncimeraCircular,
    setEncimeraOvalada,
    setEncimeraBarril,
  } = useModeloStore();
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  /**
   * Updates the menu with the given model.
   *
   * @param {object} modeloThe model to update the menu with.
   */
  const ActualizarMenu = (modelo) => {
    startTransition(() => {
      setModeloMostradoNombre(modelo.id);
      setModeloMostrado(modelo.modelo3d);
      setModeloOriginal(modelo.modelo3d);
      setCambiaSobre(modelo.cambiasobre);
      setTieneCuadrado(modelo.cuadrado);
      setTieneRectangular(modelo.rectangular);
      setTieneCircular(modelo.circular);
      setTieneOvalado(modelo.ovalado);
      setTieneBarril(modelo.barril);
      setTieneBisel(modelo.bisel);
      setTieneBastidor(modelo.bastidor);
      setTieneExtension(modelo.extension);
      setTieneMetal(modelo.metal);
      setTieneHaya(modelo.haya);
      setTieneFresno(modelo.fresno);
      // Aquí uso el estado actual para comparar y decidir si actualizar o no
      if (modelo.setMaterialSobre !== undefined) {
        setMaterialSobre(modelo.setMaterialSobre);
      }
      if (modelo.setMaterialBisel !== undefined) {
        setMaterialBisel(modelo.setMaterialBisel);
      }
      if (modelo.setMaterialBastidor !== undefined) {
        setMaterialBastidor(modelo.setMaterialBastidor);
      }
      if (modelo.setMaterialPatas !== undefined) {
        setMaterialPatas(modelo.setMaterialPatas);
      }
      if (modelo.modeloExtension !== undefined) {
        setModeloExtension(modelo.modeloExtension);
      }
      if (modelo.formasobre !== undefined) {
        setModeloSobre(modelo.formasobre);
      }
    });
  };

  const handleCambioTexturaSobre = (material) => {
    let cambio = null;
    let nombrematerial = "";
    if (MatSobre.find((item) => item.id === material)) {
      cambio = MatSobre.find((item) => item.id === material).imagen;
      nombrematerial = MatSobre.find((item) => item.id === material).nombre;
    }
    setMaterialSobreNombre(nombrematerial);
    setMaterialSobre(cambio);
  };
  const handleCambioTexturaBisel = (material) => {
    let cambio = null;
    let nombrematerial = "";
    if (MatBisel.find((item) => item.id === material)) {
      cambio = MatBisel.find((item) => item.id === material).imagen;
      nombrematerial = MatBisel.find((item) => item.id === material).nombre;
    }
    setMaterialBiselNombre(nombrematerial);
    setMaterialBisel(cambio);
  };

  const handleCambioTexturaBastidor = (material) => {
    let cambio = null;
    let nombrematerial = "";
    if (MatMetal.find((item) => item.id === material)) {
      cambio = MatMetal.find((item) => item.id === material);
      nombrematerial = MatMetal.find((item) => item.id === material).nombre;
    }
    console.log(cambio);
    setMaterialBastidorNombre(nombrematerial);
    setMaterialBastidor(cambio);
  };
  const handleCambioTexturaPatas = (material) => {
    let cambio = null;
    let nombrematerial = "";
    if (MatMetal.find((item) => item.id === material)) {
      cambio = MatMetal.find((item) => item.id === material);
      nombrematerial = MatMetal.find((item) => item.id === material).nombre;
    }
    if (MatHaya.find((item) => item.id === material)) {
      cambio = MatHaya.find((item) => item.id === material);
      nombrematerial = MatHaya.find((item) => item.id === material).nombre;
    }
    if (MatFresno.find((item) => item.id === material)) {
      cambio = MatFresno.find((item) => item.id === material);
      nombrematerial = MatFresno.find((item) => item.id === material).nombre;
    }
    setMaterialPatasNombre(nombrematerial);
    setMaterialPatas(cambio);
  };

  const handleModeloExtendido = () => {
    setModeloMostrado(modeloExtension);
    setIsExtendido(true);
  };

  const handleModeloCerrado = () => {
    // Volver al modelo original almacenado en Zustand
    setModeloMostrado(modeloOriginal);
    setIsExtendido(false);
  };
  const handleCambioEncimera = (forma) => {
    setEncimeraCuadrada(forma === "Cuadrada");
    setEncimeraRectangular(forma === "Rectangular");
    setEncimeraCircular(forma === "Circular");
    setEncimeraOvalada(forma === "Ovalada");
    setEncimeraBarril(forma === "Barril");
    setModeloSobre(forma);
    //añadir funcion que exporte nombre de la encimera
  };
  return (
    <>
      <MenuSelector>
        <Section>
          <SectionHeader onClick={() => toggleSection("Mesa")}>
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
                <Section>
                  <SubsectionHeader
                    onClick={() =>
                      setOpenSubsection(
                        openSubsection === "Collection" ? null : "Collection"
                      )
                    }
                  >
                    <SubsectionTitle style={{ color: "#000000" }}>
                      Collection {">"}
                    </SubsectionTitle>
                  </SubsectionHeader>
                  <AnimatePresence>
                    {openSubsection === "Collection" && (
                      <SectionContent
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "250px" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          initial: { duration: 1 },
                          animate: { duration: 1.5 },
                          exit: { duration: 1 },
                        }}
                      >
                        <Textos onClick={() => ActualizarMenu(DatosConnor)}>
                          Connor
                        </Textos>
                        <Textos onClick={() => ActualizarMenu(DatosEmma)}>
                          Emma
                        </Textos>
                        <Textos onClick={() => ActualizarMenu(DatosGene)}>
                          Gene
                        </Textos>
                        <Textos onClick={() => ActualizarMenu(DatosGrace)}>
                          Grace
                        </Textos>
                        <Textos onClick={() => ActualizarMenu(DatosHarp)}>
                          Harp
                        </Textos>
                        <Textos onClick={() => ActualizarMenu(DatosHulk)}>
                          Hulk
                        </Textos>
                        <Textos onClick={() => ActualizarMenu(DatosIlia)}>
                          Ilia
                        </Textos>
                        <Textos onClick={() => ActualizarMenu(DatosKiff)}>
                          Kiff
                        </Textos>
                        <Textos onClick={() => ActualizarMenu(DatosLyre)}>
                          Lyre
                        </Textos>
                        <Textos onClick={() => ActualizarMenu(DatosMario)}>
                          Mario
                        </Textos>
                        <Textos onClick={() => ActualizarMenu(DatosOlympus)}>
                          Olympus
                        </Textos>
                        <Textos onClick={() => ActualizarMenu(DatosPisa)}>
                          Pisa
                        </Textos>
                        <Textos onClick={() => ActualizarMenu(DatosProgetto)}>
                          Progetto
                        </Textos>
                        <Textos onClick={() => ActualizarMenu(DatosSolo)}>
                          Solo
                        </Textos>
                        <Textos onClick={() => ActualizarMenu(DatosToyo)}>
                          Toyo
                        </Textos>
                        <Textos onClick={() => ActualizarMenu(DatosVictory)}>
                          Victory
                        </Textos>
                      </SectionContent>
                    )}
                  </AnimatePresence>
                </Section>
                <Section>
                  <SubsectionHeader
                    onClick={() =>
                      setOpenSubsection(
                        openSubsection === "Life" ? null : "Life"
                      )
                    }
                  >
                    <SubsectionTitle style={{ color: "#000000" }}>
                      Life {">"}
                    </SubsectionTitle>
                  </SubsectionHeader>
                  <AnimatePresence>
                    {openSubsection === "Life" && (
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
                        <Textos onClick={() => ActualizarMenu(DatosCollins)}>
                          Collins
                        </Textos>
                        <Textos onClick={() => ActualizarMenu(DatosFlip)}>
                          Flip
                        </Textos>
                        <Textos onClick={() => ActualizarMenu(DatosGibson)}>
                          Gibson
                        </Textos>
                        <Textos onClick={() => ActualizarMenu(DatosHakone)}>
                          Hakone
                        </Textos>
                        <Textos onClick={() => ActualizarMenu(DatosHemingway)}>
                          Hemingway
                        </Textos>
                        <Textos onClick={() => ActualizarMenu(DatosKir)}>
                          Kir
                        </Textos>
                        <Textos onClick={() => ActualizarMenu(DatosMary)}>
                          Mary
                        </Textos>
                        <Textos onClick={() => ActualizarMenu(DatosZama)}>
                          Zama
                        </Textos>
                      </SectionContent>
                    )}
                  </AnimatePresence>
                </Section>
                <Section>
                  <SubsectionHeader
                    onClick={() =>
                      setOpenSubsection(
                        openSubsection === "Contract" ? null : "Contract"
                      )
                    }
                  >
                    <SubsectionTitle style={{ color: "#000000" }}>
                      Contract {">"}
                    </SubsectionTitle>
                  </SubsectionHeader>
                  <AnimatePresence>
                    {openSubsection === "Contract" && (
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
                        <Textos onClick={() => ActualizarMenu(DatosBrezza)}>
                          Brezza
                        </Textos>
                        <Textos onClick={() => ActualizarMenu(DatosManhattan)}>
                          Manhattan
                        </Textos>
                        <Textos onClick={() => ActualizarMenu(DatosRob)}>
                          Rob
                        </Textos>
                        <Textos onClick={() => ActualizarMenu(DatosSpritz)}>
                          Spritz 80
                        </Textos>
                        <Textos onClick={() => ActualizarMenu(DatosSpritz120)}>
                          Spritz 120
                        </Textos>
                      </SectionContent>
                    )}
                  </AnimatePresence>
                </Section>
              </SectionContent>
            )}
          </AnimatePresence>
        </Section>
        {cambiaSobre && (
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
                  {tieneCuadradado && (
                    <Textos onClick={() => handleCambioEncimera("Cuadrada")}>
                      Cuadrado / Square
                    </Textos>
                  )}
                  {tieneRectangular && (
                    <Textos onClick={() => handleCambioEncimera("Rectangular")}>
                      Rectangular / Rectangular
                    </Textos>
                  )}
                  {tieneCircular && (
                    <Textos onClick={() => handleCambioEncimera("Circular")}>
                      Circular / Circular
                    </Textos>
                  )}
                  {tieneOvalado && (
                    <Textos onClick={() => handleCambioEncimera("Ovalada")}>
                      Ovalado / Oval
                    </Textos>
                  )}
                  {tieneBarril && (
                    <Textos onClick={() => handleCambioEncimera("Barril")}>
                      Barril / Barrel
                    </Textos>
                  )}
                </SectionContent>
              )}
            </AnimatePresence>
          </Section>
        )}
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
                    <ThumbnailWrapper
                      key={index}
                      onClick={() => handleCambioTexturaSobre(material.id)}
                    >
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
                      <ThumbnailWrapper
                        key={index}
                        onClick={() => handleCambioTexturaBisel(material.id)}
                      >
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
                    animate: { duration: 2 },
                    exit: { duration: 1 },
                  }}
                >
                  <Section>
                    <SubsectionHeader>
                      <SubsectionTitle>
                        Metal epoxy / Epoxy metal
                      </SubsectionTitle>
                    </SubsectionHeader>
                    <AnimatePresence>
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
                            <ThumbnailWrapper
                              key={index}
                              onClick={() =>
                                handleCambioTexturaBastidor(material.id)
                              }
                            >
                              <Thumbnail src={material.imagen} />
                              <TextosIconos>{material.nombre}</TextosIconos>
                            </ThumbnailWrapper>
                          ))}
                          {generatePhantomItems(Metal.length, 3)}
                        </ThumbnailContainer>
                      </SectionContent>
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
                      <SubsectionTitle>
                        Metal epoxy / Epoxy metal
                      </SubsectionTitle>
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
                              <ThumbnailWrapper
                                key={index}
                                onClick={() =>
                                  handleCambioTexturaPatas(material.id)
                                }
                              >
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
                      <SubsectionTitle>
                        Madera Haya / Wood Beech
                      </SubsectionTitle>
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
                              <ThumbnailWrapper
                                key={index}
                                onClick={() =>
                                  handleCambioTexturaPatas(material.id)
                                }
                              >
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
                      <SubsectionTitle>
                        Madera Fresno / Wood Ash
                      </SubsectionTitle>
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
                              <ThumbnailWrapper
                                key={index}
                                onClick={() =>
                                  handleCambioTexturaPatas(material.id)
                                }
                              >
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
                  <Textos onClick={() => handleModeloCerrado()}>
                    Cerrada / Closed
                  </Textos>
                  <Textos onClick={() => handleModeloExtendido()}>
                    Abierta / Open
                  </Textos>
                </SectionContent>
              )}
            </AnimatePresence>
          </Section>
        )}
      </MenuSelector>
      <MenuDescargas>
        <Section>
          <SectionHeader>
            <SectionTitle>Archivos / Files</SectionTitle>
            <SectionIcon src={flecha} />
          </SectionHeader>
          <SectionContent>
            <LinkDescargas href='#'>
              Ficha Técnica / Tech. datasheet
            </LinkDescargas>
            {/* <LinkDescargas href='#'>Archivo DWG / DWG File</LinkDescargas> */}
            <LinkDescargas href='#'>Modelo 3d / 3D model</LinkDescargas>
          </SectionContent>
        </Section>
      </MenuDescargas>
    </>
  );
};

export default Menu;
