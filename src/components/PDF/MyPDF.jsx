import React, { useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

import LogoPDF from "../../assets/icons/logoPDF.png";

const MyDocument = ({ imagenes, tipoCocina, tipoPuerta }) => {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#FFFFFF",
      padding: "100px",
    },
    image: {
      width: 2752,
      height: 1548,
      position: "absolute",
      top: 0,
      left: 550,
    },
    logo: {
      width: 280,
      height: 280,
      position: "absolute",
      top: 0,
      left: 0,
    },
  });
  const [FondoCocina, setFondoCocina] = useState();
  const [MuebleCocina, setMuebleCocina] = useState();
  const [EncimeraCocina, setEncimeraCocina] = useState();
  const [FrenteCocina, setFrenteCocina] = useState();

  console.log("Okay?", tipoCocina.id);

  if (tipoCocina.id === CocinaLineal.id) {
    setFondoCocina(CocinaLineal.textura);
    setCampanaCocina();
    for (let i = 0; i < imagenes.length; i++) {
      console.log(imagenes[i].id);
      if (tipoPuerta === "Puerta Concept") {
        if (imagenes[i].id === MuebleConcept.id) {
          setMuebleCocina(imagenes[i].textura);
        }
        if (imagenes[i].id === MODULOConcept.id) {
          setModuloCocina(imagenes[i].textura);
        }
      }
      if (tipoPuerta === "Puerta Essential") {
        if (imagenes[i].id === MuebleEssential.id) {
          setMuebleCocina(imagenes[i].textura);
        }
        if (imagenes[i].id === MODULOEssential.id) {
          setModuloCocina(imagenes[i].textura);
        }
        if (imagenes[i].id === TiradorEssential.id) {
          setTiradorCocina(imagenes[i].textura);
        }
      }
      if (tipoPuerta === "Puerta Newport") {
        if (imagenes[i].id === MuebleNewport.id) {
          setMuebleCocina(imagenes[i].textura);
        }
        if (imagenes[i].id === MODULONewport.id) {
          setModuloCocina(imagenes[i].textura);
        }
      }
      if (tipoPuerta === "Puerta Tempo") {
        if (imagenes[i].id === MuebleTempo.id) {
          setMuebleCocina(imagenes[i].textura);
        }
        if (imagenes[i].id === MODULOTempo.id) {
          setModuloCocina(imagenes[i].textura);
        }
      }
      if (tipoPuerta === "Puerta York") {
        setPerfilCocina(PerfilLineal);
        if (imagenes[i].id === MuebleYork.id) {
          setMuebleCocina(imagenes[i].textura);
        }
        if (imagenes[i].id === MODULOYork.id) {
          setModuloCocina(imagenes[i].textura);
        }
      }
      if (imagenes[i].id === EncimeraLineal.id) {
        setEncimeraCocina(imagenes[i].textura);
      }
      if (imagenes[i].id === PavimentoLineal.id) {
        setPavimentoCocina(imagenes[i].textura);
      }
      if (imagenes[i].id === GrifosLineal.id) {
        setGrifoCocina(imagenes[i].textura);
      }

      if (imagenes[i].id === FregaderosLineal.id) {
        setFregaderoCocina(imagenes[i].textura);
      }
    }
  }

  return (
    <Document>
      <Page size='A4' dpi={300} orientation='landscape' style={styles.page}>
        <View>
          <Image src={LogoPDF} style={styles.logo} />
          <Image src={FondoCocina} style={styles.image} />
          <Image src={MuebleCocina} style={styles.image} />
          <Image src={EncimeraCocina} style={styles.image} />
          <Image src={FrenteCocina} style={styles.image} />
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
