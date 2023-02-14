/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";

import {
  ContenedorIntercambiador,
  ContenedorImagenBase,
  ContenedorImagen,
  Imagen,
  ContenedorMenu,
  MenuIntrucciones,
  BotonExpandir,
  BotonContinuar,
  TextoIntro,
  ContenedorIconos,
  Icono1,
  MenuMateriales,
  ContenedorMateriales,
  IconoMaterial,
  CajaMaterial,
  ContIconText,
  TextoMaterial,
  WrapperTexto,
  TxtSubimagen,
  ContenedorExpansor,
  TextoIntro2,
  ContIconText2,
} from "./InterGrandeElementos";

import {
  FRONTALES,
  ACABADOMUEBLE,
  PAVIMENTOS,
  PLATOS,
  REVESTIMIENTOS,
  ENCIMERAXL,
  XLFRONTALCAJON,
  FRENTESXLMODULO,
  XLLATERAL,
  XLLAVABO,
  ICONOS,
  txtacabados,
} from "./dataInterGrande";
import icono_b from "../../../assets/icons/botones/boton_b.png";
import icono from "../../../assets/icons/botones/boton.png";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const InterGrande = ({ base }) => {
  const [inicio, setInicio] = useState(true);
  const [inicio2, setInicio2] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [iconos, setIconos] = useState(false);
  const [muebleVisible, setMuebleVisible] = useState(false);
  const [materialesVisible, SetMateriales] = useState(false);
  const [MatModulo, SetMaterialesModulo] = useState(false);
  const [MatEncimera, SetMaterialesEncimera] = useState(false);
  const [MatCajon, SetMaterialesCajon] = useState(false);
  const [MatFrente, SetMaterialesFrente] = useState(false);
  const [MatPavimento, SetMaterialesPavimento] = useState(false);
  const [MatRevestimiento, SetMaterialesRevestimiento] = useState(false);
  const [MatPlato, SetMaterialesPlato] = useState(false);
  const [MatLavabo, SetMaterialesLavabo] = useState(false);
  //modulo
  const [allureModulo, SetAllureM] = useState(false);
  const [berenModulo, SetBerenM] = useState(false);
  const [blancborgModulo, SetBlancborgM] = useState(false);
  const [blancinvModulo, SetBlancinvM] = useState(false);
  const [brazilModulo, SetBrazilM] = useState(false);
  const [calacattaModulo, SetCalacattaM] = useState(false);
  const [emeModulo, SetEmeM] = useState(false);
  const [kendocModulo, SetKendocM] = useState(false);
  const [kendolModulo, SetKendolM] = useState(false);
  const [momaModulo, SetMomaM] = useState(false);
  const [negroModulo, SetNegroM] = useState(false);
  const [noonGModulo, SetNoonGM] = useState(false);
  const [noonsModulo, SetNoonsM] = useState(false);
  const [paladioModulo, SetPaladioM] = useState(false);
  const [syracModulo, SetSyracM] = useState(false);
  //Encimera
  const [allureEncimera, SetAllureEn] = useState(false);
  const [berenEncimera, SetBerenEn] = useState(false);
  const [blancborgEncimera, SetBlancborgEn] = useState(false);
  const [blancinvEncimera, SetBlancinvEn] = useState(false);
  const [brazilEncimera, SetBrazilEn] = useState(false);
  const [calacattaEncimera, SetCalacattaEn] = useState(false);
  const [emeEncimera, SetEmeEn] = useState(false);
  const [kendocEncimera, SetKendocEn] = useState(false);
  const [kendolEncimera, SetKendolEn] = useState(false);
  const [momaEncimera, SetMomaEn] = useState(false);
  const [negroEncimera, SetNegroEn] = useState(false);
  const [noonGEncimera, SetNoonGEn] = useState(false);
  const [noonsEncimera, SetNoonsEn] = useState(false);
  const [paladioEncimera, SetPaladioEn] = useState(false);
  const [syracEncimera, SetSyracEn] = useState(false);
  //Cajon
  const [allureCajon, SetAllureCaj] = useState(false);
  const [berenCajon, SetBerenCaj] = useState(false);
  const [blancborgCajon, SetBlancborgCaj] = useState(false);
  const [blancinvCajon, SetBlancinvCaj] = useState(false);
  const [brazilCajon, SetBrazilCaj] = useState(false);
  const [calacattaCajon, SetCalacattaCaj] = useState(false);
  const [emeCajon, SetEmeCaj] = useState(false);
  const [kendocCajon, SetKendocCaj] = useState(false);
  const [kendolCajon, SetKendolCaj] = useState(false);
  const [momaCajon, SetMomaCaj] = useState(false);
  const [negroCajon, SetNegroCaj] = useState(false);
  const [noonGCajon, SetNoonGCaj] = useState(false);
  const [noonsCajon, SetNoonsCaj] = useState(false);
  const [paladioCajon, SetPaladioCaj] = useState(false);
  const [syracCajon, SetSyracCaj] = useState(false);
  //Frente
  const [allureFrente, SetAllureFre] = useState(false);
  const [berenFrente, SetBerenFre] = useState(false);
  const [blancborgFrente, SetBlancborgFre] = useState(false);
  const [blancinvFrente, SetBlancinvFre] = useState(false);
  const [brazilFrente, SetBrazilFre] = useState(false);
  const [calacattaFrente, SetCalacattaFre] = useState(false);
  const [emeFrente, SetEmeFre] = useState(false);
  const [kendocFrente, SetKendocFre] = useState(false);
  const [kendolFrente, SetKendolFre] = useState(false);
  const [momaFrente, SetMomaFre] = useState(false);
  const [negroFrente, SetNegroFre] = useState(false);
  const [noonGFrente, SetNoonGFre] = useState(false);
  const [noonsFrente, SetNoonsFre] = useState(false);
  const [paladioFrente, SetPaladioFre] = useState(false);
  const [syracFrente, SetSyracFre] = useState(false);
  //Pavimento
  const [allurePavimento, SetAllurePav] = useState(false);
  const [berenPavimento, SetBerenPav] = useState(false);
  const [blancborgPavimento, SetBlancborgPav] = useState(false);
  const [blancinvPavimento, SetBlancinvPav] = useState(false);
  const [brazilPavimento, SetBrazilPav] = useState(false);
  const [calacattaPavimento, SetCalacattaPav] = useState(false);
  const [emePavimento, SetEmePav] = useState(false);
  const [kendocPavimento, SetKendocPav] = useState(false);
  const [kendolPavimento, SetKendolPav] = useState(false);
  const [momaPavimento, SetMomaPav] = useState(false);
  const [negroPavimento, SetNegroPav] = useState(false);
  const [noonGPavimento, SetNoonGPav] = useState(false);
  const [noonsPavimento, SetNoonsPav] = useState(false);
  const [paladioPavimento, SetPaladioPav] = useState(false);
  const [syracPavimento, SetSyracPav] = useState(false);
  //Revestimiento
  const [allureRevestimiento, SetAllureRev] = useState(false);
  const [berenRevestimiento, SetBerenRev] = useState(false);
  const [blancborgRevestimiento, SetBlancborgRev] = useState(false);
  const [blancinvRevestimiento, SetBlancinvRev] = useState(false);
  const [brazilRevestimiento, SetBrazilRev] = useState(false);
  const [calacattaRevestimiento, SetCalacattaRev] = useState(false);
  const [emeRevestimiento, SetEmeRev] = useState(false);
  const [kendocRevestimiento, SetKendocRev] = useState(false);
  const [kendolRevestimiento, SetKendolRev] = useState(false);
  const [momaRevestimiento, SetMomaRev] = useState(false);
  const [negroRevestimiento, SetNegroRev] = useState(false);
  const [noonGRevestimiento, SetNoonGRev] = useState(false);
  const [noonsRevestimiento, SetNoonsRev] = useState(false);
  const [paladioRevestimiento, SetPaladioRev] = useState(false);
  const [syracRevestimiento, SetSyracRev] = useState(false);
  //Plato
  const [allurePlato, SetAllurePla] = useState(false);
  const [berenPlato, SetBerenPla] = useState(false);
  const [blancborgPlato, SetBlancborgPla] = useState(false);
  const [blancinvPlato, SetBlancinvPla] = useState(false);
  const [brazilPlato, SetBrazilPla] = useState(false);
  const [calacattaPlato, SetCalacattaPla] = useState(false);
  const [emePlato, SetEmePla] = useState(false);
  const [kendocPlato, SetKendocPla] = useState(false);
  const [kendolPlato, SetKendolPla] = useState(false);
  const [momaPlato, SetMomaPla] = useState(false);
  const [negroPlato, SetNegroPla] = useState(false);
  const [noonGPlato, SetNoonGPla] = useState(false);
  const [noonsPlato, SetNoonsPla] = useState(false);
  const [paladioPlato, SetPaladioPla] = useState(false);
  const [syracPlato, SetSyracPla] = useState(false);
  //Lavabo
  const [allureLavabo, SetAllureLav] = useState(false);
  const [berenLavabo, SetBerenLav] = useState(false);
  const [blancborgLavabo, SetBlancborgLav] = useState(false);
  const [blancinvLavabo, SetBlancinvLav] = useState(false);
  const [brazilLavabo, SetBrazilLav] = useState(false);
  const [calacattaLavabo, SetCalacattaLav] = useState(false);
  const [emeLavabo, SetEmeLav] = useState(false);
  const [kendocLavabo, SetKendocLav] = useState(false);
  const [kendolLavabo, SetKendolLav] = useState(false);
  const [momaLavabo, SetMomaLav] = useState(false);
  const [negroLavabo, SetNegroLav] = useState(false);
  const [noonGLavabo, SetNoonGLav] = useState(false);
  const [noonsLavabo, SetNoonsLav] = useState(false);
  const [paladioLavabo, SetPaladioLav] = useState(false);
  const [syracLavabo, SetSyracLav] = useState(false);

  //materiales
  const [allureVisible, SetAllure] = useState(false);
  const [berenVisible, SetBeren] = useState(false);
  const [blancborgVisible, SetBlancborg] = useState(false);
  const [blancinvVisible, SetBlancinv] = useState(false);
  const [brazilVisible, SetBrazil] = useState(false);
  const [calacattaVisible, SetCalacatta] = useState(false);
  const [emeVisible, SetEme] = useState(false);
  const [kendocVisible, SetKendoc] = useState(false);
  const [kendolVisible, SetKendol] = useState(false);
  const [momaVisible, SetMoma] = useState(false);
  const [negroVisible, SetNegro] = useState(false);
  const [noonGVisible, SetNoonG] = useState(false);
  const [noonsVisible, SetNoons] = useState(false);
  const [paladioVisible, SetPaladio] = useState(false);
  const [syracVisible, SetSyrac] = useState(false);
  //partes mueble
  const [frenteSelected, SetFrente] = useState(false);
  const [modulosSelected, SetModulos] = useState(false);
  const [lateralSelected, SetLateral] = useState(false);
  const [encimeraSelected, SetEncimera] = useState(false);
  //partes extras
  const [frontalSelected, SetFrontal] = useState(false);
  const [platoSelected, SetPlato] = useState(false);
  const [lavaboSelected, SetLavabo] = useState(false);
  const [revestimientoSelected, SetRevestimiento] = useState(false);
  const [pavimentoSelected, SetPavimento] = useState(false);
  //Acabados Mueble
  const [Natural, SetNatural] = useState(false);
  const [Antracita, SetAntracita] = useState(false);
  const [Blanco, SetBlanco] = useState(false);
  const [Nordik, SetNordik] = useState(false);
  //acabados
  const [txtfrente, setTxtF] = useState(txtacabados.acNatural);
  const [txtmodulo, setTxtM] = useState(txtacabados.acNatural);
  const [txtlateral, setTxtL] = useState(txtacabados.acNatural);
  const [txtencimera, setTxtE] = useState(txtacabados.acNatural);
  const [txtmueble, setTxtMu] = useState(txtacabados.acNatural);
  const [txtpavimento, setTxtP] = useState(txtacabados.acBeren);

  const handleClickMod = (acabado, setFunc, mat, setFunc2, visible2) => {
    // setInicio2(true);
    setIconos(true);

    //setmaterialVisible(!materialVisible);
    setFunc2(!visible2);
    //setAcabadomaterialVisible(!acabadomaterialVisible);
    setFunc(!mat);
    if (modulosSelected && !mat) {
      setTxtM(txtacabados[`ac${acabado}`]);
    }
  };
  const handleClickEn = (acabado, setFunc, mat, setFunc2, visible2) => {
    setIconos(true);
    console.log("que hay aqui ?", acabado);
    console.log("Estado de mod seleccionado?", encimeraSelected);
    //setmaterialVisible(!materialVisible);
    setFunc2(!visible2);
    //setAcabadomaterialVisible(!acabadomaterialVisible);
    setFunc(!mat);

    if (encimeraSelected && !mat) {
      setTxtE(txtacabados[`ac${acabado}`]);
    }
    if (lateralSelected && !mat) {
      setTxtL(txtacabados[`ac${acabado}`]);
    }
  };

  // const handleClick = (acabado, setFunc, visible, setFunc2, visible2) => {
  //   setIconos(true);
  //   //setmaterialVisible(!materialVisible);
  //   setFunc2(!visible2);
  //   //setAcabadomaterialVisible(!acabadomaterialVisible);
  //   setFunc(!visible);
  //   if (frenteSelected && !visible) {
  //     setTxtF(txtacabados[`ac${acabado}`]);
  //     setFunc2(!visible2);
  //   }
  //   if (lateralSelected && !visible) {
  //     setTxtL(txtacabados[`ac${acabado}`]);
  //     setFunc2(!visible2);
  //   }
  //   if (encimeraSelected && !visible) {
  //     setTxtE(txtacabados[`ac${acabado}`]);
  //     setFunc2(!visible2);
  //   }
  //   if (modulosSelected && !visible) {
  //     setTxtM(txtacabados[`ac${acabado}`]);
  //     setFunc2(!visible2);
  //   }
  // };

  const clickAcabado = (finish) => {
    // setIsVisible(!isVisible);
    setIconos(true);
    setMuebleVisible(!muebleVisible);
    SetNatural(finish === "Natural");
    SetAntracita(finish === "Antracita");
    SetBlanco(finish === "Blanco");
    SetNordik(finish === "Nordik");

    //si el estado del yexto es diferente de natural, nordik, antracita o blanco, se deja el estado del texto como estaba
    // if (
    //   txtfrente !== txtacabados.acNatural ||
    //   txtfrente !== txtacabados.acNordik ||
    //   txtfrente !== txtacabados.acAntracita ||
    //   txtfrente !== txtacabados.acBlanco
    // ) {
    //   setTxtF(txtfrente);
    // } else {
    //   setTxtF(txtacabados[`ac${finish}`]);
    // }
    if (
      txtmodulo === txtacabados.acNatural ||
      txtmodulo === txtacabados.acNordik ||
      txtmodulo === txtacabados.acAntracita ||
      txtmodulo === txtacabados.acBlanco
    ) {
      setTxtM(txtacabados[`ac${finish}`]);
    } else {
      setTxtM(txtmodulo);
    }
    if (
      txtencimera === txtacabados.acNatural ||
      txtencimera === txtacabados.acNordik ||
      txtencimera === txtacabados.acAntracita ||
      txtencimera === txtacabados.acBlanco
    ) {
      setTxtE(txtacabados[`ac${finish}`]);
    } else {
      setTxtE(txtencimera);
    }
    console.log("Texto de frente: ", txtfrente);
    console.log("Texto de modulo:", txtmodulo);
    console.log("Texto de lateral: ", txtlateral);
    console.log("Texto de encimera: ", txtencimera);
    console.log("Texto de mueble: ", txtmueble);
    setTxtMu(txtacabados[`ac${finish}`]);
    setTxtL(txtacabados[`ac${finish}`]);
    setTxtF(txtacabados[`ac${finish}`]);
  };

  const encimerasArray = [
    { name: "allureXLE", isVisible: allureEncimera },
    { name: "berenXLE", isVisible: berenEncimera },
    { name: "blancborgXLE", isVisible: blancborgEncimera },
    { name: "blancinvXLE", isVisible: blancinvEncimera },
    { name: "brazilXLE", isVisible: brazilEncimera },
    { name: "calacattaXLE", isVisible: calacattaEncimera },
    { name: "emeXLE", isVisible: emeEncimera },
    { name: "kendoCXLE", isVisible: kendocEncimera },
    { name: "kendoLXLE", isVisible: kendolEncimera },
    { name: "momaXLE", isVisible: momaEncimera },
    { name: "negroXLE", isVisible: negroEncimera },
    { name: "noonGXLE", isVisible: noonGEncimera },
    { name: "noonsXLE", isVisible: noonsEncimera },
    { name: "paladioXLE", isVisible: paladioEncimera },
    { name: "syracXLE", isVisible: syracEncimera },
  ];

  const modulosArray = [
    { name: "allureXlM", isVisible: allureModulo },
    { name: "berenXlM", isVisible: berenModulo },
    { name: "blancBorghiniXlM", isVisible: blancborgModulo },
    { name: "blancInvisibleXlM", isVisible: blancinvModulo },
    { name: "brazilXlM", isVisible: brazilModulo },
    { name: "calacattaXlM", isVisible: calacattaModulo },
    { name: "emeXlM", isVisible: emeModulo },
    { name: "kendoCXlM", isVisible: kendocModulo },
    { name: "kendoLXlM", isVisible: kendolModulo },
    { name: "momaXlM", isVisible: momaModulo },
    { name: "negroXlM", isVisible: negroModulo },
    { name: "noonGXlM", isVisible: noonGModulo },
    { name: "noonSXlM", isVisible: noonsModulo },
    { name: "paladioXlM", isVisible: paladioModulo },
    { name: "syracXlM", isVisible: syracModulo },
  ];
  const lateralesArray = [
    { name: "allureXLL", isVisible: allureVisible },
    { name: "berenXLL", isVisible: berenVisible },
    { name: "blancborgXLL", isVisible: blancborgVisible },
    { name: "blancinvXLL", isVisible: blancinvVisible },
    { name: "brazilXLL", isVisible: brazilVisible },
    { name: "calacattaXLL", isVisible: calacattaVisible },
    { name: "emeXLL", isVisible: emeVisible },
    { name: "kendoCXLL", isVisible: kendocVisible },
    { name: "kendoLXLL", isVisible: kendolVisible },
    { name: "momaXLL", isVisible: momaVisible },
    { name: "negroXLL", isVisible: negroVisible },
    { name: "noonGXLL", isVisible: noonGVisible },
    { name: "noonSXLL", isVisible: noonsVisible },
    { name: "paladioXLL", isVisible: paladioVisible },
    { name: "syracXLL", isVisible: syracVisible },
  ];
  const cajonesArray = [
    { name: "allureXLF", isVisible: allureVisible },
    { name: "berenXLF", isVisible: berenVisible },
    { name: "blancborgXLF", isVisible: blancborgVisible },
    { name: "blancinvXLF", isVisible: blancinvVisible },
    { name: "brazilXLF", isVisible: brazilVisible },
    { name: "calacattaXLF", isVisible: calacattaVisible },
    { name: "emeXLF", isVisible: emeVisible },
    { name: "kendoCXLF", isVisible: kendocVisible },
    { name: "kendoLXLF", isVisible: kendolVisible },
    { name: "momaXLF", isVisible: momaVisible },
    { name: "negroXLF", isVisible: negroVisible },
    { name: "noonGXLF", isVisible: noonGVisible },
    { name: "noonSXLF", isVisible: noonsVisible },
    { name: "paladioXLF", isVisible: paladioVisible },
    { name: "syracXLF", isVisible: syracVisible },
  ];
  const frenteArray = [
    { name: "alluref", isVisible: allureVisible },
    { name: "berenf", isVisible: berenVisible },
    { name: "blancborgf", isVisible: blancborgVisible },
    { name: "blancinvf", isVisible: blancinvVisible },
    { name: "brazilf", isVisible: brazilVisible },
    { name: "calacattaf", isVisible: calacattaVisible },
    { name: "emef", isVisible: emeVisible },
    { name: "kendoCf", isVisible: kendocVisible },
    { name: "kendoLf", isVisible: kendolVisible },
    { name: "momaf", isVisible: momaVisible },
    { name: "negrof", isVisible: negroVisible },
    { name: "noonGf", isVisible: noonGVisible },
    { name: "noonSf", isVisible: noonsVisible },
    { name: "paladiof", isVisible: paladioVisible },
    { name: "syracf", isVisible: syracVisible },
  ];
  const pavimentos = [
    { name: "allurePAV", isVisible: allureVisible },
    { name: "berenPAV", isVisible: berenVisible },
    { name: "blancborgPAV", isVisible: blancborgVisible },
    { name: "blancinvPAV", isVisible: blancinvVisible },
    { name: "brazilPAV", isVisible: brazilVisible },
    { name: "calacattaPAV", isVisible: calacattaVisible },
    { name: "emePAV", isVisible: emeVisible },
    { name: "kendoCPAV", isVisible: kendocVisible },
    { name: "kendoLPAV", isVisible: kendolVisible },
    { name: "momaPAV", isVisible: momaVisible },
    { name: "negroPAV", isVisible: negroVisible },
    { name: "noonGPAV", isVisible: noonGVisible },
    { name: "noonSPAV", isVisible: noonsVisible },
    { name: "paladioPAV", isVisible: paladioVisible },
    { name: "syracPAV", isVisible: syracVisible },
  ];
  const revestimientos = [
    { name: "allureREV", isVisible: allureVisible },
    { name: "berenREV", isVisible: berenVisible },
    { name: "blancborgREV", isVisible: blancborgVisible },
    { name: "blancinvREV", isVisible: blancinvVisible },
    { name: "brazilREV", isVisible: brazilVisible },
    { name: "calacattaREV", isVisible: calacattaVisible },
    { name: "emeREV", isVisible: emeVisible },
    { name: "kendoCREV", isVisible: kendocVisible },
    { name: "kendoLREV", isVisible: kendolVisible },
    { name: "momaREV", isVisible: momaVisible },
    { name: "negroREV", isVisible: negroVisible },
    { name: "noonGREV", isVisible: noonGVisible },
    { name: "noonSREV", isVisible: noonsVisible },
    { name: "paladioREV", isVisible: paladioVisible },
    { name: "syracREV", isVisible: syracVisible },
  ];
  const platos = [
    { name: "allurePLAT", isVisible: allureVisible },
    { name: "berenPLAT", isVisible: berenVisible },
    { name: "blancborgPLAT", isVisible: blancborgVisible },
    { name: "blancinvPLAT", isVisible: blancinvVisible },
    { name: "brazilPLAT", isVisible: brazilVisible },
    { name: "calacattaPLAT", isVisible: calacattaVisible },
    { name: "emePLAT", isVisible: emeVisible },
    { name: "kendoCPLAT", isVisible: kendocVisible },
    { name: "kendoLPLAT", isVisible: kendolVisible },
    { name: "momaPLAT", isVisible: momaVisible },
    { name: "negroPLAT", isVisible: negroVisible },
    { name: "noonGPLAT", isVisible: noonGVisible },
    { name: "noonSPLAT", isVisible: noonsVisible },
    { name: "paladioPLAT", isVisible: paladioVisible },
    { name: "syracPLAT", isVisible: syracVisible },
  ];
  const lavabos = [
    { name: "allureXLLAV", isVisible: allureVisible },
    { name: "berenXLLAV", isVisible: berenVisible },
    { name: "blancborgXLLAV", isVisible: blancborgVisible },
    { name: "blancinvXLLAV", isVisible: blancinvVisible },
    { name: "brazilXLLAV", isVisible: brazilVisible },
    { name: "calacattaXLLAV", isVisible: calacattaVisible },
    { name: "emeXLLAV", isVisible: emeVisible },
    { name: "kendoCXLLAV", isVisible: kendocVisible },
    { name: "kendoLXLLAV", isVisible: kendolVisible },
    { name: "momaXLLAV", isVisible: momaVisible },
    { name: "negroXLLAV", isVisible: negroVisible },
    { name: "noonGXLLAV", isVisible: noonGVisible },
    { name: "noonSXLLAV", isVisible: noonsVisible },
    { name: "paladioXLLAV", isVisible: paladioVisible },
    { name: "syracXLLAV", isVisible: syracVisible },
  ];
  // const menuMats = (
  //   <MenuMateriales
  //     id='menu inferior'
  //     initial={{
  //       height: "0%",
  //     }}
  //     whileInView={{
  //       transition: {
  //         duration: 0.2,
  //         ease: "easeIn",
  //       },
  //       height: "auto",
  //     }}
  //   >
  //     <ContenedorMateriales>
  //       <CajaMaterial>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Allure", SetAllure, allureVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.allureIco}></IconoMaterial>
  //           <TextoMaterial>Allure</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Beren", SetBeren, berenVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.berenIco}></IconoMaterial>
  //           <TextoMaterial>Beren</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Blancborg", SetBlancborg, blancborgVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.blancborgIco}></IconoMaterial>
  //           <TextoMaterial>Blanc Borghini</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Blancinv", SetBlancinv, blancinvVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.blancinvIco}></IconoMaterial>
  //           <TextoMaterial>Blanc Invisible</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Brazil", SetBrazil, brazilVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.brazilIco}></IconoMaterial>
  //           <TextoMaterial>Brazil Super White</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Calacatta", SetCalacatta, calacattaVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.calacattaIco}></IconoMaterial>
  //           <TextoMaterial>Calacatta</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Eme", SetEme, emeVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.emeIco}></IconoMaterial>
  //           <TextoMaterial>Eme Light Grey</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("KendoC", SetKendoc, kendocVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.kendoCIco}></IconoMaterial>
  //           <TextoMaterial>Kendo Classic</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("KendoL", SetKendol, kendolVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.kendoLIco}></IconoMaterial>
  //           <TextoMaterial>Kendo Light</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Moma", SetMoma, momaVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.momaIco}></IconoMaterial>
  //           <TextoMaterial>Moma Gris</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Negro", SetNegro, negroVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.negroIco}></IconoMaterial>
  //           <TextoMaterial>Negro Marquina</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("NoonG", SetNoonG, noonGVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.noonGIco}></IconoMaterial>
  //           <TextoMaterial>Noon Grey</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("NoonS", SetNoons, noonsVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.noonSIco}></IconoMaterial>
  //           <TextoMaterial>Noon Sand</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Paladio", SetPaladio, paladioVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.paladioIco}></IconoMaterial>
  //           <TextoMaterial>Paladio</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Syrac", SetSyrac, syracVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.syracIco}></IconoMaterial>
  //           <TextoMaterial>Syrac</TextoMaterial>
  //         </ContIconText>
  //       </CajaMaterial>
  //     </ContenedorMateriales>
  //   </MenuMateriales>
  // );
  const menuModulo = (
    <MenuMateriales
      id='menu inferior'
      initial={{
        height: "0%",
      }}
      whileInView={{
        transition: {
          duration: 0.2,
          ease: "easeIn",
        },
        height: "auto",
      }}
    >
      <ContenedorMateriales>
        <CajaMaterial>
          <ContIconText
            onClick={() => {
              handleClickMod(
                "Allure",
                SetAllureM,
                allureModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.allureIco}></IconoMaterial>
            <TextoMaterial>Allure</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickMod(
                "Beren",
                SetBerenM,
                berenModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.berenIco}></IconoMaterial>
            <TextoMaterial>Beren</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickMod(
                "Blancborg",
                SetBlancborgM,
                blancborgModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.blancborgIco}></IconoMaterial>
            <TextoMaterial>Blanc Borghini</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickMod(
                "Blancinv",
                SetBlancinvM,
                blancinvModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.blancinvIco}></IconoMaterial>
            <TextoMaterial>Blanc Invisible</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickMod(
                "Brazil",
                SetBrazilM,
                brazilModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.brazilIco}></IconoMaterial>
            <TextoMaterial>Brazil Super White</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickMod(
                "Calacatta",
                SetCalacattaM,
                calacattaModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.calacattaIco}></IconoMaterial>
            <TextoMaterial>Calacata</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickMod(
                "Eme",
                SetEmeM,
                emeModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.emeIco}></IconoMaterial>
            <TextoMaterial>Eme Light Grey</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickMod(
                "KendoC",
                SetKendocM,
                kendocModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.kendoCIco}></IconoMaterial>
            <TextoMaterial>Kendo Classic</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickMod(
                "KendoL",
                SetKendolM,
                kendolModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.kendoLIco}></IconoMaterial>
            <TextoMaterial>Kendo Light</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickMod(
                "Moma",
                SetMomaM,
                momaModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.momaIco}></IconoMaterial>
            <TextoMaterial>Moma Gris</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickMod(
                "Negro",
                SetNegroM,
                negroModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.negroIco}></IconoMaterial>
            <TextoMaterial>Negro Marquina</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickMod(
                "NoonG",
                SetNoonGM,
                noonGModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.noonGIco}></IconoMaterial>
            <TextoMaterial>Noon Grey</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickMod(
                "NoonS",
                SetNoonsM,
                noonsModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.noonSIco}></IconoMaterial>
            <TextoMaterial>Noon Sand</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickMod(
                "Paladio",
                SetPaladioM,
                paladioModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.paladioIco}></IconoMaterial>
            <TextoMaterial>Paladio</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickMod(
                "Syrac",
                SetSyracM,
                syracModulo,
                SetMaterialesModulo,
                MatModulo
              );
            }}
          >
            <IconoMaterial src={ICONOS.syracIco}></IconoMaterial>
            <TextoMaterial>Syrac</TextoMaterial>
          </ContIconText>
        </CajaMaterial>
      </ContenedorMateriales>
    </MenuMateriales>
  );

  const menuEncimera = (
    <MenuMateriales
      id='menu inferior'
      initial={{
        height: "0%",
      }}
      whileInView={{
        transition: {
          duration: 0.2,
          ease: "easeIn",
        },
        height: "auto",
      }}
    >
      <ContenedorMateriales>
        <CajaMaterial>
          <ContIconText
            onClick={() => {
              handleClickEn(
                "Allure",
                SetAllureEn,
                allureEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.allureIco}></IconoMaterial>
            <TextoMaterial>Allure</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickEn(
                "Beren",
                SetBerenEn,
                berenEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.berenIco}></IconoMaterial>
            <TextoMaterial>Beren</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickEn(
                "Blancborg",
                SetBlancborgEn,
                blancborgEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.blancborgIco}></IconoMaterial>
            <TextoMaterial>Blanc Borghini</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickEn(
                "Blancinv",
                SetBlancinvEn,
                blancinvEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.blancinvIco}></IconoMaterial>
            <TextoMaterial>Blanc Invisible</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickEn(
                "Brazil",
                SetBrazilEn,
                brazilEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.brazilIco}></IconoMaterial>
            <TextoMaterial>Brazil Super White</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickEn(
                "Calacatta",
                SetCalacattaEn,
                calacattaEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.calacattaIco}></IconoMaterial>
            <TextoMaterial>Calacata</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickEn(
                "Eme",
                SetEmeEn,
                emeEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.emeIco}></IconoMaterial>
            <TextoMaterial>Eme Light Grey</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickEn(
                "KendoC",
                SetKendocEn,
                kendocEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.kendoCIco}></IconoMaterial>
            <TextoMaterial>Kendo Classic</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickEn(
                "KendoL",
                SetKendolEn,
                kendolEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.kendoLIco}></IconoMaterial>
            <TextoMaterial>Kendo Light</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickEn(
                "Moma",
                SetMomaEn,
                momaEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.momaIco}></IconoMaterial>
            <TextoMaterial>Moma Gris</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickEn(
                "Negro",
                SetNegroEn,
                negroEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.negroIco}></IconoMaterial>
            <TextoMaterial>Negro Marquina</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickEn(
                "NoonG",
                SetNoonGEn,
                noonGEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.noonGIco}></IconoMaterial>
            <TextoMaterial>Noon Grey</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickEn(
                "NoonS",
                SetNoonsEn,
                noonsEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.noonSIco}></IconoMaterial>
            <TextoMaterial>Noon Sand</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickEn(
                "Paladio",
                SetPaladioEn,
                paladioEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.paladioIco}></IconoMaterial>
            <TextoMaterial>Paladio</TextoMaterial>
          </ContIconText>
          <ContIconText
            onClick={() => {
              handleClickEn(
                "Syrac",
                SetSyracEn,
                syracEncimera,
                SetMaterialesEncimera,
                MatEncimera
              );
            }}
          >
            <IconoMaterial src={ICONOS.syracIco}></IconoMaterial>
            <TextoMaterial>Syrac</TextoMaterial>
          </ContIconText>
        </CajaMaterial>
      </ContenedorMateriales>
    </MenuMateriales>
  );

  // const menuCajon = (
  //   <MenuMateriales
  //     id='menu inferior'
  //     initial={{
  //       height: "0%",
  //     }}
  //     whileInView={{
  //       transition: {
  //         duration: 0.2,
  //         ease: "easeIn",
  //       },
  //       height: "auto",
  //     }}
  //   >
  //     <ContenedorMateriales>
  //       <CajaMaterial>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Allure", SetAllure, allureVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.allureIco}></IconoMaterial>
  //           <TextoMaterial>Allure</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Beren", SetBeren, berenVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.berenIco}></IconoMaterial>
  //           <TextoMaterial>Beren</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Blancborg", SetBlancborg, blancborgVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.blancborgIco}></IconoMaterial>
  //           <TextoMaterial>Blanc Borghini</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Blancinv", SetBlancinv, blancinvVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.blancinvIco}></IconoMaterial>
  //           <TextoMaterial>Blanc Invisible</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Brazil", SetBrazil, brazilVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.brazilIco}></IconoMaterial>
  //           <TextoMaterial>Brazil Super White</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Calacatta", SetCalacatta, calacattaVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.calacattaIco}></IconoMaterial>
  //           <TextoMaterial>Calacatta</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Eme", SetEme, emeVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.emeIco}></IconoMaterial>
  //           <TextoMaterial>Eme Light Grey</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("KendoC", SetKendoc, kendocVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.kendoCIco}></IconoMaterial>
  //           <TextoMaterial>Kendo Classic</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("KendoL", SetKendol, kendolVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.kendoLIco}></IconoMaterial>
  //           <TextoMaterial>Kendo Light</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Moma", SetMoma, momaVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.momaIco}></IconoMaterial>
  //           <TextoMaterial>Moma Gris</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Negro", SetNegro, negroVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.negroIco}></IconoMaterial>
  //           <TextoMaterial>Negro Marquina</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("NoonG", SetNoonG, noonGVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.noonGIco}></IconoMaterial>
  //           <TextoMaterial>Noon Grey</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("NoonS", SetNoons, noonsVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.noonSIco}></IconoMaterial>
  //           <TextoMaterial>Noon Sand</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Paladio", SetPaladio, paladioVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.paladioIco}></IconoMaterial>
  //           <TextoMaterial>Paladio</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Syrac", SetSyrac, syracVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.syracIco}></IconoMaterial>
  //           <TextoMaterial>Syrac</TextoMaterial>
  //         </ContIconText>
  //       </CajaMaterial>
  //     </ContenedorMateriales>
  //   </MenuMateriales>
  // );
  // const menuFrente = (
  //   <MenuMateriales
  //     id='menu inferior'
  //     initial={{
  //       height: "0%",
  //     }}
  //     whileInView={{
  //       transition: {
  //         duration: 0.2,
  //         ease: "easeIn",
  //       },
  //       height: "auto",
  //     }}
  //   >
  //     <ContenedorMateriales>
  //       <CajaMaterial>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Allure", SetAllure, allureVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.allureIco}></IconoMaterial>
  //           <TextoMaterial>Allure</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Beren", SetBeren, berenVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.berenIco}></IconoMaterial>
  //           <TextoMaterial>Beren</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Blancborg", SetBlancborg, blancborgVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.blancborgIco}></IconoMaterial>
  //           <TextoMaterial>Blanc Borghini</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Blancinv", SetBlancinv, blancinvVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.blancinvIco}></IconoMaterial>
  //           <TextoMaterial>Blanc Invisible</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Brazil", SetBrazil, brazilVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.brazilIco}></IconoMaterial>
  //           <TextoMaterial>Brazil Super White</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Calacatta", SetCalacatta, calacattaVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.calacattaIco}></IconoMaterial>
  //           <TextoMaterial>Calacatta</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Eme", SetEme, emeVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.emeIco}></IconoMaterial>
  //           <TextoMaterial>Eme Light Grey</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("KendoC", SetKendoc, kendocVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.kendoCIco}></IconoMaterial>
  //           <TextoMaterial>Kendo Classic</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("KendoL", SetKendol, kendolVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.kendoLIco}></IconoMaterial>
  //           <TextoMaterial>Kendo Light</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Moma", SetMoma, momaVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.momaIco}></IconoMaterial>
  //           <TextoMaterial>Moma Gris</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Negro", SetNegro, negroVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.negroIco}></IconoMaterial>
  //           <TextoMaterial>Negro Marquina</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("NoonG", SetNoonG, noonGVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.noonGIco}></IconoMaterial>
  //           <TextoMaterial>Noon Grey</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("NoonS", SetNoons, noonsVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.noonSIco}></IconoMaterial>
  //           <TextoMaterial>Noon Sand</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Paladio", SetPaladio, paladioVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.paladioIco}></IconoMaterial>
  //           <TextoMaterial>Paladio</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Syrac", SetSyrac, syracVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.syracIco}></IconoMaterial>
  //           <TextoMaterial>Syrac</TextoMaterial>
  //         </ContIconText>
  //       </CajaMaterial>
  //     </ContenedorMateriales>
  //   </MenuMateriales>
  // );
  // const menuPavimento = (
  //   <MenuMateriales
  //     id='menu inferior'
  //     initial={{
  //       height: "0%",
  //     }}
  //     whileInView={{
  //       transition: {
  //         duration: 0.2,
  //         ease: "easeIn",
  //       },
  //       height: "auto",
  //     }}
  //   >
  //     <ContenedorMateriales>
  //       <CajaMaterial>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Allure", SetAllure, allureVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.allureIco}></IconoMaterial>
  //           <TextoMaterial>Allure</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Beren", SetBeren, berenVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.berenIco}></IconoMaterial>
  //           <TextoMaterial>Beren</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Blancborg", SetBlancborg, blancborgVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.blancborgIco}></IconoMaterial>
  //           <TextoMaterial>Blanc Borghini</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Blancinv", SetBlancinv, blancinvVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.blancinvIco}></IconoMaterial>
  //           <TextoMaterial>Blanc Invisible</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Brazil", SetBrazil, brazilVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.brazilIco}></IconoMaterial>
  //           <TextoMaterial>Brazil Super White</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Calacatta", SetCalacatta, calacattaVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.calacattaIco}></IconoMaterial>
  //           <TextoMaterial>Calacatta</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Eme", SetEme, emeVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.emeIco}></IconoMaterial>
  //           <TextoMaterial>Eme Light Grey</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("KendoC", SetKendoc, kendocVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.kendoCIco}></IconoMaterial>
  //           <TextoMaterial>Kendo Classic</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("KendoL", SetKendol, kendolVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.kendoLIco}></IconoMaterial>
  //           <TextoMaterial>Kendo Light</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Moma", SetMoma, momaVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.momaIco}></IconoMaterial>
  //           <TextoMaterial>Moma Gris</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Negro", SetNegro, negroVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.negroIco}></IconoMaterial>
  //           <TextoMaterial>Negro Marquina</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("NoonG", SetNoonG, noonGVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.noonGIco}></IconoMaterial>
  //           <TextoMaterial>Noon Grey</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("NoonS", SetNoons, noonsVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.noonSIco}></IconoMaterial>
  //           <TextoMaterial>Noon Sand</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Paladio", SetPaladio, paladioVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.paladioIco}></IconoMaterial>
  //           <TextoMaterial>Paladio</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Syrac", SetSyrac, syracVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.syracIco}></IconoMaterial>
  //           <TextoMaterial>Syrac</TextoMaterial>
  //         </ContIconText>
  //       </CajaMaterial>
  //     </ContenedorMateriales>
  //   </MenuMateriales>
  // );
  // const menuRevestimiento = (
  //   <MenuMateriales
  //     id='menu inferior'
  //     initial={{
  //       height: "0%",
  //     }}
  //     whileInView={{
  //       transition: {
  //         duration: 0.2,
  //         ease: "easeIn",
  //       },
  //       height: "auto",
  //     }}
  //   >
  //     <ContenedorMateriales>
  //       <CajaMaterial>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Allure", SetAllure, allureVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.allureIco}></IconoMaterial>
  //           <TextoMaterial>Allure</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Beren", SetBeren, berenVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.berenIco}></IconoMaterial>
  //           <TextoMaterial>Beren</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Blancborg", SetBlancborg, blancborgVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.blancborgIco}></IconoMaterial>
  //           <TextoMaterial>Blanc Borghini</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Blancinv", SetBlancinv, blancinvVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.blancinvIco}></IconoMaterial>
  //           <TextoMaterial>Blanc Invisible</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Brazil", SetBrazil, brazilVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.brazilIco}></IconoMaterial>
  //           <TextoMaterial>Brazil Super White</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Calacatta", SetCalacatta, calacattaVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.calacattaIco}></IconoMaterial>
  //           <TextoMaterial>Calacatta</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Eme", SetEme, emeVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.emeIco}></IconoMaterial>
  //           <TextoMaterial>Eme Light Grey</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("KendoC", SetKendoc, kendocVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.kendoCIco}></IconoMaterial>
  //           <TextoMaterial>Kendo Classic</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("KendoL", SetKendol, kendolVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.kendoLIco}></IconoMaterial>
  //           <TextoMaterial>Kendo Light</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Moma", SetMoma, momaVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.momaIco}></IconoMaterial>
  //           <TextoMaterial>Moma Gris</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Negro", SetNegro, negroVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.negroIco}></IconoMaterial>
  //           <TextoMaterial>Negro Marquina</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("NoonG", SetNoonG, noonGVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.noonGIco}></IconoMaterial>
  //           <TextoMaterial>Noon Grey</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("NoonS", SetNoons, noonsVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.noonSIco}></IconoMaterial>
  //           <TextoMaterial>Noon Sand</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Paladio", SetPaladio, paladioVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.paladioIco}></IconoMaterial>
  //           <TextoMaterial>Paladio</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Syrac", SetSyrac, syracVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.syracIco}></IconoMaterial>
  //           <TextoMaterial>Syrac</TextoMaterial>
  //         </ContIconText>
  //       </CajaMaterial>
  //     </ContenedorMateriales>
  //   </MenuMateriales>
  // );
  // const menuPlato = (
  //   <MenuMateriales
  //     id='menu inferior'
  //     initial={{
  //       height: "0%",
  //     }}
  //     whileInView={{
  //       transition: {
  //         duration: 0.2,
  //         ease: "easeIn",
  //       },
  //       height: "auto",
  //     }}
  //   >
  //     <ContenedorMateriales>
  //       <CajaMaterial>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Allure", SetAllure, allureVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.allureIco}></IconoMaterial>
  //           <TextoMaterial>Allure</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Beren", SetBeren, berenVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.berenIco}></IconoMaterial>
  //           <TextoMaterial>Beren</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Blancborg", SetBlancborg, blancborgVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.blancborgIco}></IconoMaterial>
  //           <TextoMaterial>Blanc Borghini</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Blancinv", SetBlancinv, blancinvVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.blancinvIco}></IconoMaterial>
  //           <TextoMaterial>Blanc Invisible</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Brazil", SetBrazil, brazilVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.brazilIco}></IconoMaterial>
  //           <TextoMaterial>Brazil Super White</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Calacatta", SetCalacatta, calacattaVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.calacattaIco}></IconoMaterial>
  //           <TextoMaterial>Calacatta</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Eme", SetEme, emeVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.emeIco}></IconoMaterial>
  //           <TextoMaterial>Eme Light Grey</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("KendoC", SetKendoc, kendocVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.kendoCIco}></IconoMaterial>
  //           <TextoMaterial>Kendo Classic</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("KendoL", SetKendol, kendolVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.kendoLIco}></IconoMaterial>
  //           <TextoMaterial>Kendo Light</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Moma", SetMoma, momaVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.momaIco}></IconoMaterial>
  //           <TextoMaterial>Moma Gris</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Negro", SetNegro, negroVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.negroIco}></IconoMaterial>
  //           <TextoMaterial>Negro Marquina</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("NoonG", SetNoonG, noonGVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.noonGIco}></IconoMaterial>
  //           <TextoMaterial>Noon Grey</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("NoonS", SetNoons, noonsVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.noonSIco}></IconoMaterial>
  //           <TextoMaterial>Noon Sand</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Paladio", SetPaladio, paladioVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.paladioIco}></IconoMaterial>
  //           <TextoMaterial>Paladio</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Syrac", SetSyrac, syracVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.syracIco}></IconoMaterial>
  //           <TextoMaterial>Syrac</TextoMaterial>
  //         </ContIconText>
  //       </CajaMaterial>
  //     </ContenedorMateriales>
  //   </MenuMateriales>
  // );
  // const menuLavabo = (
  //   <MenuMateriales
  //     id='menu inferior'
  //     initial={{
  //       height: "0%",
  //     }}
  //     whileInView={{
  //       transition: {
  //         duration: 0.2,
  //         ease: "easeIn",
  //       },
  //       height: "auto",
  //     }}
  //   >
  //     <ContenedorMateriales>
  //       <CajaMaterial>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Allure", SetAllure, allureVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.allureIco}></IconoMaterial>
  //           <TextoMaterial>Allure</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Beren", SetBeren, berenVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.berenIco}></IconoMaterial>
  //           <TextoMaterial>Beren</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Blancborg", SetBlancborg, blancborgVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.blancborgIco}></IconoMaterial>
  //           <TextoMaterial>Blanc Borghini</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Blancinv", SetBlancinv, blancinvVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.blancinvIco}></IconoMaterial>
  //           <TextoMaterial>Blanc Invisible</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Brazil", SetBrazil, brazilVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.brazilIco}></IconoMaterial>
  //           <TextoMaterial>Brazil Super White</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Calacatta", SetCalacatta, calacattaVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.calacattaIco}></IconoMaterial>
  //           <TextoMaterial>Calacatta</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Eme", SetEme, emeVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.emeIco}></IconoMaterial>
  //           <TextoMaterial>Eme Light Grey</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("KendoC", SetKendoc, kendocVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.kendoCIco}></IconoMaterial>
  //           <TextoMaterial>Kendo Classic</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("KendoL", SetKendol, kendolVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.kendoLIco}></IconoMaterial>
  //           <TextoMaterial>Kendo Light</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Moma", SetMoma, momaVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.momaIco}></IconoMaterial>
  //           <TextoMaterial>Moma Gris</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Negro", SetNegro, negroVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.negroIco}></IconoMaterial>
  //           <TextoMaterial>Negro Marquina</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("NoonG", SetNoonG, noonGVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.noonGIco}></IconoMaterial>
  //           <TextoMaterial>Noon Grey</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("NoonS", SetNoons, noonsVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.noonSIco}></IconoMaterial>
  //           <TextoMaterial>Noon Sand</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Paladio", SetPaladio, paladioVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.paladioIco}></IconoMaterial>
  //           <TextoMaterial>Paladio</TextoMaterial>
  //         </ContIconText>
  //         <ContIconText
  //           onClick={() => {
  //             handleClick("Syrac", SetSyrac, syracVisible);
  //           }}
  //         >
  //           <IconoMaterial src={ICONOS.syracIco}></IconoMaterial>
  //           <TextoMaterial>Syrac</TextoMaterial>
  //         </ContIconText>
  //       </CajaMaterial>
  //     </ContenedorMateriales>
  //   </MenuMateriales>
  // );
  const iconosSeleccion = (
    <ContenedorIconos>
      <Tooltip anchorId={"modulo"} content={"frontal módulo"} />
      <Tooltip anchorId={"encimera"} content={"encimera"} />
      <Tooltip anchorId={"lateralm"} content={"lateral"} />
      <Tooltip anchorId={"frentemueble"} content={"frontal cajón"} />
      <Tooltip anchorId={"frente"} content={"frente"} />
      <Tooltip anchorId={"revestimiento"} content={"revestimiento pared"} />
      <Tooltip anchorId={"plato de ducha"} content={"plato de ducha"} />
      <Tooltip anchorId={"mueble"} content={"mueble"} />
      <Tooltip anchorId={"plato de ducha"} content={"plato de ducha"} />
      <Tooltip anchorId={"pavimento"} content={"pavimento"} />
      <Tooltip anchorId={"lavabo"} content={"lavabo"} />
      <Icono1
        onClick={() => {
          setIconos(!iconos);
          SetMaterialesModulo(!MatModulo);
          SetModulos(true); //IMPORTANTE
          SetAllureM(false);
          SetBerenM(false);
          SetBlancborgM(false);
          SetBlancinvM(false);
          SetBrazilM(false);
          SetCalacattaM(false);
          SetEmeM(false);
          SetKendocM(false);
          SetKendolM(false);
          SetMomaM(false);
          SetNegroM(false);
          SetNoonGM(false);
          SetNoonsM(false);
          SetPaladioM(false);
          SetSyracM(false);
        }}
        src={icono_b}
        alt='modulo'
        id='modulo'
        style={{
          top: "38%",
          left: "11%",
        }}
      />
      <Icono1
        onClick={() => {
          setIconos(!iconos);
          SetMaterialesEncimera(!MatEncimera);
          SetEncimera(true); //IMPORTANTE
          SetLateral(false);
          SetAllureEn(false);
          SetBerenEn(false);
          SetBlancborgEn(false);
          SetBlancinvEn(false);
          SetBrazilEn(false);
          SetCalacattaEn(false);
          SetEmeEn(false);
          SetKendocEn(false);
          SetKendolEn(false);
          SetMomaEn(false);
          SetNegroEn(false);
          SetNoonGEn(false);
          SetNoonsEn(false);
          SetPaladioEn(false);
          SetSyracEn(false);
        }}
        src={icono}
        alt='encimera'
        id='encimera'
        style={{
          top: "58%",
          left: "27%",
        }}
      />
      {encimeraSelected && (
        <Icono1
          onClick={() => {
            setIconos(!iconos);
            SetLateral(!lateralSelected);
          }}
          src={icono}
          alt='lateralm'
          id='lateralm'
          style={{
            top: "70%",
            left: "23%",
          }}
        />
      )}
      <Icono1
        onClick={() => {
          setIconos(false);
          SetFrente(true);
          SetMateriales(!materialesVisible);
        }}
        src={icono_b}
        alt='frentemueble'
        id='frentemueble'
        style={{
          top: "70%",
          left: "40%",
        }}
      />
      <Icono1
        onClick={() => {
          setIconos(!iconos);
          SetModulos(!modulosSelected);
        }}
        src={icono_b}
        alt='frente'
        id='frente'
        style={{
          top: "50%",
          left: "23%",
        }}
      />
      <Icono1
        onClick={() => {
          setIconos(!iconos);
          SetRevestimiento(!revestimientoSelected);
        }}
        src={icono_b}
        alt='revestimiento'
        id='revestimiento'
        style={{
          top: "52%",
          left: "70%",
        }}
      />
      <Icono1
        onClick={() => {
          setIconos(!iconos);
        }}
        src={icono_b}
        alt='plato de ducha'
        id='plato de ducha'
        style={{
          top: "90% ",
          left: "70%",
        }}
      />
      <Icono1
        onClick={() => {
          setIconos(!iconos);
        }}
        src={icono_b}
        alt='pavimento'
        id='pavimento'
        style={{
          top: "92.5% ",
          left: "42.5%",
        }}
      />
      <Icono1
        onClick={() => {
          setIconos(!iconos);
          setMuebleVisible(!muebleVisible);
        }}
        src={icono_b}
        alt='mueble'
        id='mueble'
        style={{
          top: "59%",
          left: "45%",
        }}
      />
      <Icono1
        onClick={() => {
          setIconos(!iconos);
        }}
        src={icono_b}
        alt='lavabo'
        id='lavabo'
        style={{
          top: "53%",
          left: "38%",
        }}
      />
      <Icono1
        onClick={() => {
          setIconos(!iconos);
        }}
        src={icono_b}
        alt='reiniciar'
        id='reiniciar'
        style={{
          top: "92%",
          left: "95%",
        }}
      />
    </ContenedorIconos>
  );
  return (
    <>
      <ContenedorIntercambiador>
        {inicio && (
          <ContenedorExpansor
            id='expansor'
            initial={{
              height: "0%",
            }}
            whileInView={{
              transition: {
                duration: 0.3,
                ease: "easeIn",
              },
              height: "100%",
            }}
            onClick={() => {
              setInicio(false);
              setIconos(!iconos);

              // setIsVisible(!isVisible);
            }}
          >
            <TextoIntro2>Pulsa para acceder al configurador</TextoIntro2>
          </ContenedorExpansor>
        )}
        {isVisible && (
          <ContenedorMenu
            id='menu inferior'
            initial={{
              height: "0%",
            }}
            whileInView={{
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
              height: "20%",
            }}
          >
            <MenuIntrucciones>
              <BotonContinuar
                onClick={() => {
                  setIsVisible(!isVisible);
                  setMuebleVisible(!muebleVisible);
                  SetLateral(false);
                  SetEncimera(false);
                  SetModulos(false);
                  SetFrente(false);
                }}
              >
                <strong>{"<"} atras</strong>
              </BotonContinuar>
              <TextoIntro>
                <bold>Selecciona las partes que quieres cambiar</bold>
              </TextoIntro>
              <BotonContinuar
                onClick={() => {
                  SetMateriales(!materialesVisible);
                  setIsVisible(!isVisible);
                }}
              >
                <strong>continuar {">"}</strong>
              </BotonContinuar>
            </MenuIntrucciones>
          </ContenedorMenu>
        )}
        {muebleVisible && (
          <MenuMateriales
            id='menu inferior'
            initial={{
              height: "0%",
            }}
            whileInView={{
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
              height: "20%",
            }}
          >
            <ContenedorMateriales>
              <TextoIntro>
                <bold>elige el color del mueble {">"}</bold>
              </TextoIntro>
              <CajaMaterial>
                <ContIconText2 onClick={() => clickAcabado("Natural")}>
                  <IconoMaterial src={ICONOS.naturalIco} />
                  <TextoMaterial>Natural</TextoMaterial>
                </ContIconText2>
                <ContIconText2 onClick={() => clickAcabado("Antracita")}>
                  <IconoMaterial src={ICONOS.antracitaIco} />
                  <TextoMaterial>Antracita</TextoMaterial>
                </ContIconText2>
                <ContIconText2 onClick={() => clickAcabado("Blanco")}>
                  <IconoMaterial src={ICONOS.blancoIco} />
                  <TextoMaterial>Blanco</TextoMaterial>
                </ContIconText2>
                <ContIconText2 onClick={() => clickAcabado("Nordik")}>
                  <IconoMaterial src={ICONOS.nordikIco} />
                  <TextoMaterial>Nordik</TextoMaterial>
                </ContIconText2>
              </CajaMaterial>
            </ContenedorMateriales>
          </MenuMateriales>
        )}
        {/* {materialesVisible && menuMats} */}
        {MatModulo && menuModulo}
        {MatEncimera && menuEncimera}
        {iconos && iconosSeleccion}
        <ContenedorImagenBase
          id='fondo'
          descripcion='Mueble de madera sin forrar'
        >
          <Imagen src={base} alt='fondo' />
        </ContenedorImagenBase>
        {/* ------------------BASE MUEBLES------------------ */}
        {Antracita && (
          <ContenedorImagen>
            <Imagen src={ACABADOMUEBLE.anthraciteM} alt='mueble' />
          </ContenedorImagen>
        )}
        {Blanco && (
          <ContenedorImagen>
            <Imagen src={ACABADOMUEBLE.blancoM} alt='mueble' />
          </ContenedorImagen>
        )}
        {Natural && (
          <ContenedorImagen>
            <Imagen src={ACABADOMUEBLE.naturalM} alt='mueble' />
          </ContenedorImagen>
        )}
        {/* ------------------Rojo------------------ */}
        {frenteSelected && (
          <ContenedorImagen>
            <Imagen
              src={XLFRONTALCAJON.rojoXLF}
              alt='frontal'
              style={{ opacity: 0.3 }}
            />
          </ContenedorImagen>
        )}
        {modulosSelected && (
          <ContenedorImagen>
            <Imagen
              src={FRENTESXLMODULO.rojoXlM}
              alt='modulo'
              style={{ opacity: 0.3 }}
            />
          </ContenedorImagen>
        )}
        {encimeraSelected && (
          <ContenedorImagen>
            <Imagen
              src={ENCIMERAXL.rojoXLE}
              alt='lateral'
              style={{ opacity: 0.3 }}
            />
          </ContenedorImagen>
        )}
        {lateralSelected && (
          <ContenedorImagen>
            <Imagen
              src={XLLATERAL.rojoXLL}
              alt='tapa'
              style={{ opacity: 0.3 }}
            />
          </ContenedorImagen>
        )}
        {/* ------------------MODULOS------------------ */}
        {modulosSelected &&
          modulosArray.map((mod) => {
            if (mod.isVisible) {
              return (
                <ContenedorImagen>
                  <Imagen src={FRENTESXLMODULO[mod.name]} alt='modulo' />
                </ContenedorImagen>
              );
            }
            return null;
          })}
        {/* ------------------tops------------------ */}
        {encimeraSelected &&
          !lateralSelected &&
          encimerasArray.map((top) => {
            if (top.isVisible) {
              return (
                <ContenedorImagen>
                  <Imagen src={ENCIMERAXL[top.name]} alt='encimera' />
                </ContenedorImagen>
              );
            }
            return null;
          })}
        {/* ------------------FRONTALES------------------ */}
        {frenteSelected &&
          cajonesArray.map((frontal) => {
            if (frontal.isVisible) {
              return (
                <ContenedorImagen>
                  <Imagen src={XLFRONTALCAJON[frontal.name]} alt='frontal' />
                </ContenedorImagen>
              );
            }
            return null;
          })}
      </ContenedorIntercambiador>
      <WrapperTexto>
        <TxtSubimagen>
          acabado del mueble: <strong>{txtmueble}</strong> //&nbsp;
        </TxtSubimagen>
        <TxtSubimagen>
          mueble basyk frente: <strong>{txtfrente}</strong> //&nbsp;{" "}
        </TxtSubimagen>
        <TxtSubimagen>
          mueble basyk encimera: <strong>{txtencimera}</strong> //&nbsp;{" "}
        </TxtSubimagen>
        <TxtSubimagen>
          mueble basyk lateral: <strong>{txtlateral}</strong> //&nbsp;
        </TxtSubimagen>
        <TxtSubimagen>
          modulo basyk frente: <strong>{txtmodulo}</strong> //&nbsp;
        </TxtSubimagen>
      </WrapperTexto>
    </>
  );
};
export default InterGrande;
