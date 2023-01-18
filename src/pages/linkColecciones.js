import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./landing";
import HomeEN from "./landingEN";
import Colecciones from "./colecciones";
import ColeccionesEN from "./coleccionesEN";
import Bath from "./bath";
import {
  BlueStone,
  MomaArena,
  MomaGris,
  KronGrey,
  TitanAnt,
  TitanCem,
  MoodAntra,
  MoodGrey,
  Vulcano,
} from "../modules/colecciones/02_cemento/modulosCemento";
import {
  BasicBlanco,
  BasicNegro,
  EraDeepB,
  EraGrey,
  EraInfinityW,
  EraWhite,
  PureWhite,
  PureBlack,
} from "../modules/colecciones/03_color/coloresConsolidados.js";
import {
  Arabescatto,
  Atlantis,
  BlancArabe,
  BlancBorg,
  BlancCala,
  BlancCalaGold,
  BlancInv,
  BlancStatGold,
  BlancStat,
  BrazilSuper,
  Calacatta,
  CalacattaGold,
  CalacattaPao,
  Corinto,
  CuarzoReno,
  Estatuario,
  EstatuarioBKA,
  Iceberg,
  InvisibleGrey,
  Lilac,
  NegroMarq,
  NeroArdi,
  Paladio,
  RosaPersia,
  Syrac,
  Volakas,
} from "../modules/colecciones/04_marmol/modulosMarmol";
import {
  Canada,
  IratiAlbedo,
} from "../modules/colecciones/05_madera/maderasConsolidados.js";
import {
  DistritoAluminio,
  DistritoMarfil,
  LavaIron,
} from "../modules/colecciones/06_metal/metalConsolidados.js";
import {
  AllureAntra,
  AllureLight,
  AmsterdamGrey,
  BasaltGrey,
  BasaltinaBeige,
  BateigBlue,
  BeraIce,
  BerenBlack,
  BerenLG,
  CamargueArena,
  CamargueBlanco,
  EdraGrey,
  EdraLight,
  EdraSand,
  EmeLG,
  EmeGrey,
  KendoClassic,
  KendoLight,
  NoonGrey,
  NoonSand,
  PorfidoBrown,
  PorfidoSand,
  WegaBlack,
} from "../modules/colecciones/07_piedra/piedrasConsolidados";
/*------------------------------------Ingles----------------------------------------*/
import {
  BlueStoneEN,
  MomaArenaEN,
  MomaGrisEN,
  KronGreyEN,
  TitanAntEN,
  TitanCemEN,
  MoodAntraEN,
  MoodGreyEN,
  VulcanoEN,
} from "../modules/colecciones/en/02_cemento/modulosCemento";
import {
  BasicBlancoEN,
  BasicNegroEN,
  EraDeepBEN,
  EraGreyEN,
  EraInfinityWEN,
  EraWhiteEN,
  PureWhiteEN,
  PureBlackEN,
} from "../modules/colecciones/en/03_color/coloresConsolidados.js";
import {
  ArabescattoEN,
  AtlantisEN,
  BlancArabeEN,
  BlancBorgEN,
  BlancCalaEN,
  BlancCalaGoldEN,
  BlancInvEN,
  BlancStatGoldEN,
  BlancStatEN,
  BrazilSuperEN,
  CalacattaEN,
  CalacattaGoldEN,
  CalacattaPaoEN,
  CorintoEN,
  CuarzoRenoEN,
  EstatuarioEN,
  EstatuarioBKAEN,
  IcebergEN,
  InvisibleGreyEN,
  LilacEN,
  NegroMarqEN,
  NeroArdiEN,
  PaladioEN,
  RosaPersiaEN,
  SyracEN,
  VolakasEN,
} from "../modules/colecciones/en/04_marmol/modulosMarmol";
import {
  CanadaEN,
  IratiAlbedoEN,
} from "../modules/colecciones/en/05_madera/maderasConsolidados.js";
import {
  DistritoAluminioEN,
  DistritoMarfilEN,
  LavaIronEN,
} from "../modules/colecciones/en/06_metal/metalConsolidados.js";
import {
  AllureAntraEN,
  AllureLightEN,
  AmsterdamGreyEN,
  BasaltGreyEN,
  BasaltinaBeigeEN,
  BateigBlueEN,
  BeraIceEN,
  BerenBlackEN,
  BerenLGEN,
  CamargueArenaEN,
  CamargueBlancoEN,
  EdraGreyEN,
  EdraLightEN,
  EdraSandEN,
  EmeLGEN,
  EmeGreyEN,
  KendoClassicEN,
  KendoLightEN,
  NoonGreyEN,
  NoonSandEN,
  PorfidoBrownEN,
  PorfidoSandEN,
  WegaBlackEN,
} from "../modules/colecciones/en/07_piedra/piedrasConsolidados";

/*----------------------------------------------------------------------------------*/
import PrivSection from "../modules/10_PrivacidadSection";
import { privObj } from "../modules/10_PrivacidadSection/data";
import LegalSection from "../modules/11_LegalSection";
import { legalObj } from "../modules/11_LegalSection/data";
import ContactoSection from "../modules/12_Contacto";
import { contactoObj } from "../modules/12_Contacto/data";
import Intercambiador from "./intercambiador";
import Rotador from "./rotador";
const PaginasColeccion = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/en" element={<HomeEN />} />
        <Route path="/colecciones/*" element={<Colecciones />} />
        <Route path="/en/colecciones/*" element={<ColeccionesEN />} />
        <Route path="/bath" element={<Bath />} />
        <Route path="/privacidad" element={<PrivSection {...privObj} />} />
        <Route path="/legal" element={<LegalSection {...legalObj} />} />
        <Route path="/contacto" element={<ContactoSection {...contactoObj} />} />
        <Route path="/intercambiador" element={<Intercambiador />} />
        <Route path="/rotador" element={<Rotador />} />
        {/* ---------------------Cementos--------------------- */}
        <Route path="/colecciones/blue-stone-gris" element={<BlueStone />} />
        <Route path="/colecciones/moma-arena" element={<MomaArena />} />
        <Route path="/colecciones/moma-gris" element={<MomaGris />} />
        <Route path="/colecciones/kron-grey" element={<KronGrey />} />
        <Route path="/colecciones/titan-antracita" element={<TitanAnt />} />
        <Route path="/colecciones/titan-cemento" element={<TitanCem />} />
        <Route path="/colecciones/mood-anthracite" element={<MoodAntra />} />
        <Route path="/colecciones/mood-grey" element={<MoodGrey />} />
        <Route path="/colecciones/vulcano" element={<Vulcano />} />
        {/* ---------------------Color--------------------- */}
        <Route path="/colecciones/basic-blanco" element={<BasicBlanco />} />
        <Route path="/colecciones/basic-negro" element={<BasicNegro />} />
        <Route path="/colecciones/era-deep-black" element={<EraDeepB />} />
        <Route path="/colecciones/era-grey" element={<EraGrey />} />
        <Route
          path="/colecciones/era-infinity-white"
          element={<EraInfinityW />}
        />
        <Route path="/colecciones/era-white" element={<EraWhite />} />
        <Route path="/colecciones/pure-super-white" element={<PureWhite />} />
        <Route path="/colecciones/pure-black" element={<PureBlack />} />
        {/* ---------------------marmol--------------------- */}
        <Route
          path="/colecciones/arabescatto-corchia"
          element={<Arabescatto />}
        />
        <Route path="/colecciones/atlantis" element={<Atlantis />} />
        <Route path="/colecciones/blanc-arabescato" element={<BlancArabe />} />
        <Route path="/colecciones/blanc-borghini" element={<BlancBorg />} />
        <Route path="/colecciones/blanc-calacatta" element={<BlancCala />} />
        <Route
          path="/colecciones/blanc-calacatta-gold"
          element={<BlancCalaGold />}
        />
        <Route path="/colecciones/blanc-invisible" element={<BlancInv />} />
        <Route
          path="/colecciones/blanc-statuario-gold"
          element={<BlancStatGold />}
        />
        <Route path="/colecciones/blanc-statuarietto" element={<BlancStat />} />
        <Route
          path="/colecciones/brazil-super-white"
          element={<BrazilSuper />}
        />
        <Route path="/colecciones/calacatta" element={<Calacatta />} />
        <Route path="/colecciones/calacatta-gold" element={<CalacattaGold />} />
        <Route
          path="/colecciones/calacatta-paonazzo"
          element={<CalacattaPao />}
        />
        <Route path="/colecciones/corinto" element={<Corinto />} />
        <Route path="/colecciones/cuarzo-reno" element={<CuarzoReno />} />
        <Route path="/colecciones/estatuario" element={<Estatuario />} />
        <Route
          path="/colecciones/estatuario-bk-a"
          element={<EstatuarioBKA />}
        />
        <Route path="/colecciones/iceberg" element={<Iceberg />} />
        <Route path="/colecciones/invisible-grey" element={<InvisibleGrey />} />
        <Route path="/colecciones/lilac" element={<Lilac />} />
        <Route path="/colecciones/negro-marquina" element={<NegroMarq />} />
        <Route path="/colecciones/nero-ardi" element={<NeroArdi />} />
        <Route path="/colecciones/paladio" element={<Paladio />} />
        <Route path="/colecciones/rosa-persia" element={<RosaPersia />} />
        <Route path="/colecciones/syrac" element={<Syrac />} />
        <Route path="/colecciones/volakas" element={<Volakas />} />
        {/* ---------------------madera--------------------- */}
        <Route path="/colecciones/canada" element={<Canada />} />
        <Route path="/colecciones/irati-abeto" element={<IratiAlbedo />} />
        {/* ---------------------metal--------------------- */}
        <Route
          path="/colecciones/distrito-aluminio"
          element={<DistritoAluminio />}
        />
        <Route
          path="/colecciones/distrito-marfil"
          element={<DistritoMarfil />}
        />
        <Route path="/colecciones/lava-iron" element={<LavaIron />} />
        {/* ---------------------piedra--------------------- */}
        <Route
          path="/colecciones/allure-anthracite"
          element={<AllureAntra />}
        />
        <Route
          path="/colecciones/allure-light-grey"
          element={<AllureLight />}
        />
        <Route path="/colecciones/amsterdam-grey" element={<AmsterdamGrey />} />
        <Route path="/colecciones/basalt-grey" element={<BasaltGrey />} />
        <Route
          path="/colecciones/basaltina-beige"
          element={<BasaltinaBeige />}
        />
        <Route path="/colecciones/bateig-blue" element={<BateigBlue />} />
        <Route path="/colecciones/bera-ice" element={<BeraIce />} />
        <Route path="/colecciones/beren-black" element={<BerenBlack />} />
        <Route path="/colecciones/beren-light-grey" element={<BerenLG />} />
        <Route path="/colecciones/camargue-arena" element={<CamargueArena />} />
        <Route
          path="/colecciones/camargue-blanco"
          element={<CamargueBlanco />}
        />
        <Route path="/colecciones/edra-grey" element={<EdraGrey />} />
        <Route path="/colecciones/edra-light" element={<EdraLight />} />
        <Route path="/colecciones/edra-sand" element={<EdraSand />} />
        <Route path="/colecciones/eme-light-grey" element={<EmeLG />} />
        <Route path="/colecciones/eme-grey" element={<EmeGrey />} />
        <Route path="/colecciones/kendo-classic" element={<KendoClassic />} />
        <Route path="/colecciones/kendo-light" element={<KendoLight />} />
        <Route path="/colecciones/noon-grey" element={<NoonGrey />} />
        <Route path="/colecciones/noon-sand" element={<NoonSand />} />
        <Route path="/colecciones/porfido-brown" element={<PorfidoBrown />} />
        <Route path="/colecciones/porfido-sand" element={<PorfidoSand />} />
        <Route path="/colecciones/wega-black" element={<WegaBlack />} />
        {/*---------------------------Ingles-------------------------------------------------------------------*/}
        {/* ---------------------Cementos--------------------- */}
        <Route
          path="en/colecciones/blue-stone-gris"
          element={<BlueStoneEN />}
        />
        <Route path="en/colecciones/moma-arena" element={<MomaArenaEN />} />
        <Route path="en/colecciones/moma-gris" element={<MomaGrisEN />} />
        <Route path="en/colecciones/kron-grey" element={<KronGreyEN />} />
        <Route path="en/colecciones/titan-antracita" element={<TitanAntEN />} />
        <Route path="en/colecciones/titan-cemento" element={<TitanCemEN />} />
        <Route
          path="en/colecciones/mood-anthracite"
          element={<MoodAntraEN />}
        />
        <Route path="en/colecciones/mood-grey" element={<MoodGreyEN />} />
        <Route path="en/colecciones/vulcano" element={<VulcanoEN />} />
        {/* ---------------------Color--------------------- */}
        <Route path="en/colecciones/basic-blanco" element={<BasicBlancoEN />} />
        <Route path="en/colecciones/basic-negro" element={<BasicNegroEN />} />
        <Route path="en/colecciones/era-deep-black" element={<EraDeepBEN />} />
        <Route path="en/colecciones/era-grey" element={<EraGreyEN />} />
        <Route
          path="en/colecciones/era-infinity-white"
          element={<EraInfinityWEN />}
        />
        <Route path="en/colecciones/era-white" element={<EraWhiteEN />} />
        <Route
          path="en/colecciones/pure-super-white"
          element={<PureWhiteEN />}
        />
        <Route path="en/colecciones/pure-black" element={<PureBlackEN />} />
        {/* ---------------------marmol--------------------- */}
        <Route
          path="en/colecciones/arabescatto-corchia"
          element={<ArabescattoEN />}
        />
        <Route path="en/colecciones/atlantis" element={<AtlantisEN />} />
        <Route
          path="en/colecciones/blanc-arabescato"
          element={<BlancArabeEN />}
        />
        <Route path="en/colecciones/blanc-borghini" element={<BlancBorgEN />} />
        <Route
          path="en/colecciones/blanc-calacatta"
          element={<BlancCalaEN />}
        />
        <Route
          path="en/colecciones/blanc-calacatta-gold"
          element={<BlancCalaGoldEN />}
        />
        <Route path="en/colecciones/blanc-invisible" element={<BlancInvEN />} />
        <Route
          path="en/colecciones/blanc-statuario-gold"
          element={<BlancStatGoldEN />}
        />
        <Route
          path="en/colecciones/blanc-statuarietto"
          element={<BlancStatEN />}
        />
        <Route
          path="en/colecciones/brazil-super-white"
          element={<BrazilSuperEN />}
        />
        <Route path="en/colecciones/calacatta" element={<CalacattaEN />} />
        <Route
          path="en/colecciones/calacatta-gold"
          element={<CalacattaGoldEN />}
        />
        <Route
          path="en/colecciones/calacatta-paonazzo"
          element={<CalacattaPaoEN />}
        />
        <Route path="en/colecciones/corinto" element={<CorintoEN />} />
        <Route path="en/colecciones/cuarzo-reno" element={<CuarzoRenoEN />} />
        <Route path="en/colecciones/estatuario" element={<EstatuarioEN />} />
        <Route
          path="en/colecciones/estatuario-bk-a"
          element={<EstatuarioBKAEN />}
        />
        <Route path="en/colecciones/iceberg" element={<IcebergEN />} />
        <Route
          path="en/colecciones/invisible-grey"
          element={<InvisibleGreyEN />}
        />
        <Route path="en/colecciones/lilac" element={<LilacEN />} />
        <Route path="en/colecciones/negro-marquina" element={<NegroMarqEN />} />
        <Route path="en/colecciones/nero-ardi" element={<NeroArdiEN />} />
        <Route path="en/colecciones/paladio" element={<PaladioEN />} />
        <Route path="en/colecciones/rosa-persia" element={<RosaPersiaEN />} />
        <Route path="en/colecciones/syrac" element={<SyracEN />} />
        <Route path="en/colecciones/volakas" element={<VolakasEN />} />
        {/* ---------------------madera--------------------- */}
        <Route path="en/colecciones/canada" element={<CanadaEN />} />
        <Route path="en/colecciones/irati-abeto" element={<IratiAlbedoEN />} />
        {/* ---------------------metal--------------------- */}
        <Route
          path="en/colecciones/distrito-aluminio"
          element={<DistritoAluminioEN />}
        />
        <Route
          path="en/colecciones/distrito-marfil"
          element={<DistritoMarfilEN />}
        />
        <Route path="en/colecciones/lava-iron" element={<LavaIronEN />} />
        {/* ---------------------piedra--------------------- */}
        <Route
          path="en/colecciones/allure-anthracite"
          element={<AllureAntraEN />}
        />
        <Route
          path="en/colecciones/allure-light-grey"
          element={<AllureLightEN />}
        />
        <Route
          path="en/colecciones/amsterdam-grey"
          element={<AmsterdamGreyEN />}
        />
        <Route path="en/colecciones/basalt-grey" element={<BasaltGreyEN />} />
        <Route
          path="en/colecciones/basaltina-beige"
          element={<BasaltinaBeigeEN />}
        />
        <Route path="en/colecciones/bateig-blue" element={<BateigBlueEN />} />
        <Route path="en/colecciones/bera-ice" element={<BeraIceEN />} />
        <Route path="en/colecciones/beren-black" element={<BerenBlackEN />} />
        <Route path="en/colecciones/beren-light-grey" element={<BerenLGEN />} />
        <Route
          path="en/colecciones/camargue-arena"
          element={<CamargueArenaEN />}
        />
        <Route
          path="en/colecciones/camargue-blanco"
          element={<CamargueBlancoEN />}
        />
        <Route path="en/colecciones/edra-grey" element={<EdraGreyEN />} />
        <Route path="en/colecciones/edra-light" element={<EdraLightEN />} />
        <Route path="en/colecciones/edra-sand" element={<EdraSandEN />} />
        <Route path="en/colecciones/eme-light-grey" element={<EmeLGEN />} />
        <Route path="en/colecciones/eme-grey" element={<EmeGreyEN />} />
        <Route
          path="en/colecciones/kendo-classic"
          element={<KendoClassicEN />}
        />
        <Route path="en/colecciones/kendo-light" element={<KendoLightEN />} />
        <Route path="en/colecciones/noon-grey" element={<NoonGreyEN />} />
        <Route path="en/colecciones/noon-sand" element={<NoonSandEN />} />
        <Route
          path="en/colecciones/porfido-brown"
          element={<PorfidoBrownEN />}
        />
        <Route path="en/colecciones/porfido-sand" element={<PorfidoSandEN />} />
        <Route path="en/colecciones/wega-black" element={<WegaBlackEN />} />
      </Routes>
    </Router>
  );
};
export default PaginasColeccion;
