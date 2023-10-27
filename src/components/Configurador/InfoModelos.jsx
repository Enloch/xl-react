import {
  MatSobre,
  MatBisel,
  MatMetal,
  MatFresno,
  MatHaya,
} from "./MaterialModelos";
import {
  ModeloKirNoExt,
  ModeloKirExt,
  Emma,
  Connor,
  Gene,
  Grace,
  Harp,
  Hulk,
  Ilia,
  Kiff,
  Lyre,
  Mario,
  Olympus,
  Pisa,
  Progetto,
  Solo,
  Toyo,
  Victory,
  Collins,
  CollinsExt,
  Flip,
  FlipExt,
  Gibson,
  GibsonExt,
  Hakone,
  HakoneExt,
  Hemingway,
  HeminwayExt,
  Mary,
  MaryExt,
  Zama,
  ZamaExt,
  Brezza,
  BrezzaExt,
  Manhattan,
  Rob,
  Spritz,
  SprtizExt,
  Gene120,
  Ilia120,
  HakoneCircle,
  HakoneCircleExt,
} from "./Modelos";
//---------------------Collections------------------------
export const DatosConnor = {
  id: "Connor",
  modelo3d: Connor,
  formasobre: "Rectangular",
  cambiasobre: true,
  cuadrado: false,
  rectangular: true,
  circular: false,
  ovalado: true,
  barril: true,
  bisel: false,
  bastidor: false,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatMetal[3],
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: false,
  camara: false,
  pdf: "downloads/fichasmesa/connor.pdf",
  zip: "downloads/modelos/CONNOR.zip",
};
export const DatosEmma = {
  id: "Emma",
  modelo3d: Emma,
  formasobre: "Rectangular",
  cambiasobre: true,
  cuadrado: false,
  rectangular: true,
  circular: false,
  ovalado: true,
  barril: true,
  bisel: false,
  bastidor: false,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatMetal[3],
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: false,
  camara: false,
  pdf: "downloads/fichasmesa/emma.pdf",
  zip: "downloads/modelos/EMMA.zip",
};
export const DatosGene = {
  id: "Gene",
  modelo3d: Gene,
  formasobre: "Barril",
  cambiasobre: true,
  cuadrado: false,
  rectangular: true,
  circular: false,
  ovalado: true,
  barril: true,
  bisel: false,
  bastidor: false,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatMetal[3],
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: false,
  camara: false,
  pdf: "downloads/fichasmesa/gene.pdf",
  zip: "downloads/modelos/GENE.zip",
};
export const DatosGene120 = {
  id: "Gene 120",
  modelo3d: Gene120,
  formasobre: "Circular",
  cambiasobre: false,
  cuadrado: false,
  rectangular: false,
  circular: true,
  ovalado: false,
  barril: false,
  bisel: false,
  bastidor: false,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatMetal[3],
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: false,
  camara: true,
  pdf: "downloads/fichasmesa/gene.pdf",
  zip: "downloads/modelos/GENE.zip",
};
export const DatosGrace = {
  id: "Grace",
  modelo3d: Grace,
  formasobre: "Rectangular",
  cambiasobre: true,
  cuadrado: false,
  rectangular: true,
  circular: false,
  ovalado: true,
  barril: true,
  bisel: false,
  bastidor: false,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatMetal[3],
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: false,
  camara: false,
  pdf: "downloads/fichasmesa/grace.pdf",
  zip: "downloads/modelos/GRACE.zip",
};
export const DatosHarp = {
  id: "Harp",
  modelo3d: Harp,
  formasobre: "Rectangular",
  cambiasobre: true,
  cuadrado: false,
  rectangular: true,
  circular: false,
  ovalado: true,
  barril: true,
  bisel: false,
  bastidor: false,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatMetal[3],
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: false,
  camara: false,
  pdf: "downloads/fichasmesa/harp.pdf",
  zip: "downloads/modelos/HARP.zip",
};
export const DatosHulk = {
  id: "Hulk",
  modelo3d: Hulk,
  formasobre: "Rectangular",
  cambiasobre: true,
  cuadrado: false,
  rectangular: true,
  circular: false,
  ovalado: true,
  barril: true,
  bisel: false,
  bastidor: false,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatMetal[3],
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: false,
  camara: false,
  pdf: "downloads/fichasmesa/hulk.pdf",
  zip: "downloads/modelos/HULK.zip",
};
export const DatosIlia = {
  id: "Ilia",
  modelo3d: Ilia,
  formasobre: "Barril",
  cambiasobre: true,
  cuadrado: false,
  rectangular: true,
  circular: false,
  ovalado: true,
  barril: true,
  bisel: false,
  bastidor: false,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatMetal[3],
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: false,
  camara: false,
  pdf: "downloads/fichasmesa/ilia.pdf",
  zip: "downloads/modelos/ILIA.zip",
};
export const DatosIlia120 = {
  id: "Ilia 120",
  modelo3d: Ilia120,
  formasobre: "Circular",
  cambiasobre: false,
  cuadrado: false,
  rectangular: false,
  circular: true,
  ovalado: false,
  barril: false,
  bisel: false,
  bastidor: false,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatMetal[3],
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: false,
  camara: true,
  pdf: "downloads/fichasmesa/ilia.pdf",
  zip: "downloads/modelos/ILIA.zip",
};
export const DatosKiff = {
  id: "Kiff",
  modelo3d: Kiff,
  formasobre: "Rectangular",
  cambiasobre: true,
  cuadrado: false,
  rectangular: true,
  circular: false,
  ovalado: true,
  barril: true,
  bisel: false,
  bastidor: false,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatMetal[3],
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: false,
  camara: false,
  pdf: "downloads/fichasmesa/kiff.pdf",
  zip: "downloads/modelos/KIFF.zip",
};
export const DatosLyre = {
  id: "Lyre",
  modelo3d: Lyre,
  formasobre: "Rectangular",
  cambiasobre: true,
  cuadrado: false,
  rectangular: true,
  circular: false,
  ovalado: true,
  barril: true,
  bisel: false,
  bastidor: false,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatMetal[3],
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: false,
  camara: false,
  pdf: "downloads/fichasmesa/lyre.pdf",
  zip: "downloads/modelos/LYRE.zip",
};
export const DatosMario = {
  id: "Mario",
  modelo3d: Mario,
  formasobre: "Rectangular",
  cambiasobre: true,
  cuadrado: false,
  rectangular: true,
  circular: false,
  ovalado: true,
  barril: true,
  bisel: false,
  bastidor: false,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatMetal[3],
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: false,
  camara: false,
  pdf: "downloads/fichasmesa/mario.pdf",
  zip: "downloads/modelos/MARIO.zip",
};
export const DatosOlympus = {
  id: "Olympus",
  modelo3d: Olympus,
  formasobre: "Circular",
  cambiasobre: false,
  cuadrado: false,
  rectangular: false,
  circular: true,
  ovalado: false,
  barril: false,
  bisel: false,
  bastidor: false,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatMetal[3],
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: false,
  camara: true,
  pdf: "downloads/fichasmesa/olympus.pdf",
  zip: "downloads/modelos/OLYMPUS.zip",
};
export const DatosPisa = {
  id: "Pisa",
  modelo3d: Pisa,
  formasobre: "Rectangular",
  cambiasobre: true,
  cuadrado: false,
  rectangular: true,
  circular: false,
  ovalado: true,
  barril: true,
  bisel: false,
  bastidor: false,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatMetal[3],
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: false,
  camara: false,
  pdf: "downloads/fichasmesa/pisa.pdf",
  zip: "downloads/modelos/PISA.zip",
};
export const DatosProgetto = {
  id: "Progetto",
  modelo3d: Progetto,
  formasobre: "Rectangular",
  cambiasobre: true,
  cuadrado: false,
  rectangular: true,
  circular: false,
  ovalado: true,
  barril: true,
  bisel: false,
  bastidor: false,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatMetal[3],
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: false,
  camara: false,
  pdf: "downloads/fichasmesa/progetto.pdf",
  zip: "downloads/modelos/PROGETTO.zip",
};
export const DatosSolo = {
  id: "Solo",
  modelo3d: Solo,
  formasobre: "Rectangular",
  cambiasobre: true,
  cuadrado: false,
  rectangular: true,
  circular: false,
  ovalado: true,
  barril: true,
  bisel: false,
  bastidor: false,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatMetal[3],
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: false,
  camara: false,
  pdf: "downloads/fichasmesa/solo.pdf",
  zip: "downloads/modelos/SOLO.zip",
};
export const DatosToyo = {
  id: "Toyo",
  modelo3d: Toyo,
  formasobre: "Rectangular",
  cambiasobre: true,
  cuadrado: false,
  rectangular: true,
  circular: false,
  ovalado: true,
  barril: true,
  bisel: false,
  bastidor: false,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatMetal[3],
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: false,
  camara: false,
  pdf: "downloads/fichasmesa/toyo.pdf",
  zip: "downloads/modelos/TOYO.zip",
};
export const DatosVictory = {
  id: "Victory",
  modelo3d: Victory,
  formasobre: "Rectangular",
  cambiasobre: true,
  cuadrado: false,
  rectangular: true,
  circular: false,
  ovalado: true,
  barril: true,
  bisel: false,
  bastidor: false,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatMetal[3],
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: false,
  camara: false,
  pdf: "downloads/fichasmesa/victory.pdf",
  zip: "downloads/modelos/VICTORY.zip",
};
//----------------------Life------------------------
export const DatosCollins = {
  id: "Collins",
  modelo3d: Collins,
  formasobre: "Barril",
  cambiasobre: false,
  cuadrado: false,
  rectangular: true,
  circular: false,
  ovalado: false,
  barril: false,
  bisel: true,
  bastidor: false,
  metal: false,
  fresno: false,
  haya: true,
  setMaterialSobre: MatSobre[7].imagen,
  setMaterialBisel: MatBisel[0].imagen,
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatHaya[3],
  extension: true,
  modeloExtension: CollinsExt,
  camara: false,
  pdf: "downloads/fichasmesa/collins.pdf",
  zip: "downloads/modelos/COLLINS.zip",
};
export const DatosFlip = {
  id: "Flip",
  modelo3d: Flip,
  formasobre: "Rectangular",
  cambiasobre: false,
  cuadrado: false,
  rectangular: true,
  circular: false,
  ovalado: false,
  barril: false,
  bisel: false,
  bastidor: true,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatBisel[0].imagen,
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: true,
  modeloExtension: FlipExt,
  camara: false,
  pdf: "downloads/fichasmesa/flip.pdf",
  zip: "downloads/modelos/FLIP.zip",
};
export const DatosGibson = {
  id: "Gibson",
  modelo3d: Gibson,
  formasobre: "Rectangular",
  cambiasobre: false,
  cuadrado: false,
  rectangular: true,
  circular: false,
  ovalado: false,
  barril: false,
  bisel: true,
  bastidor: true,
  metal: true,
  fresno: true,
  haya: false,
  setMaterialSobre: MatSobre[11].imagen,
  setMaterialBisel: MatBisel[0].imagen,
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatFresno[3],
  extension: true,
  modeloExtension: GibsonExt,
  camara: false,
  pdf: "downloads/fichasmesa/gibson.pdf",
  zip: "downloads/modelos/GIBSON.zip",
};
export const DatosHakone = {
  id: "Hakone",
  modelo3d: Hakone,
  formasobre: "Rectangular",
  cambiasobre: false,
  cuadrado: false,
  rectangular: true,
  circular: false,
  ovalado: false,
  barril: false,
  bisel: false,
  bastidor: false,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatBisel[0].imagen,
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: true,
  modeloExtension: HakoneExt,
  camara: false,
  pdf: "downloads/fichasmesa/hakone.pdf",
  zip: "downloads/modelos/HAKONE.zip",
};
export const DatosHakoneCircular = {
  id: "Hakone",
  modelo3d: HakoneCircle,
  formasobre: "Circular",
  cambiasobre: false,
  cuadrado: false,
  rectangular: true,
  circular: true,
  ovalado: false,
  barril: false,
  bisel: false,
  bastidor: false,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatBisel[0].imagen,
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: true,
  modeloExtension: HakoneCircleExt,
  camara: true,
  pdf: "downloads/fichasmesa/hakone.pdf",
  zip: "downloads/modelos/HAKONE.zip",
};
export const DatosHemingway = {
  id: "Hemingway",
  modelo3d: Hemingway,
  formasobre: "Rectangular",
  cambiasobre: false,
  cuadrado: false,
  rectangular: true,
  circular: false,
  ovalado: false,
  barril: false,
  bisel: false,
  bastidor: true,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatBisel[0].imagen,
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: true,
  modeloExtension: HeminwayExt,
  camara: false,
  pdf: "downloads/fichasmesa/hemingway.pdf",
  zip: "downloads/modelos/HEMINGWAY.zip",
};
export const DatosKir = {
  id: "Kir",
  modelo3d: ModeloKirNoExt,
  formasobre: "Rectangular",
  cambiasobre: false,
  cuadrado: false,
  rectangular: true,
  circular: false,
  ovalado: false,
  barril: false,
  bisel: true,
  bastidor: true,
  metal: true,
  fresno: true,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatBisel[0].imagen,
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: true,
  modeloExtension: ModeloKirExt,
  camara: false,
  pdf: "downloads/fichasmesa/kir.pdf",
  zip: "downloads/modelos/KIR.zip",
};
export const DatosMary = {
  id: "Mary",
  modelo3d: Mary,
  formasobre: "Rectangular",
  cambiasobre: false,
  cuadrado: false,
  rectangular: true,
  circular: false,
  ovalado: false,
  barril: false,
  bisel: true,
  bastidor: true,
  metal: true,
  fresno: true,
  haya: true,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatBisel[0].imagen,
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: true,
  modeloExtension: MaryExt,
  camara: false,
  pdf: "downloads/fichasmesa/mary.pdf",
  zip: "downloads/modelos/MARY.zip",
};
export const DatosZama = {
  id: "Zama",
  modelo3d: Zama,
  formasobre: "Rectangular",
  cambiasobre: false,
  cuadrado: false,
  rectangular: true,
  circular: false,
  ovalado: false,
  barril: false,
  bisel: true,
  bastidor: false,
  metal: false,
  fresno: true,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatBisel[0].imagen,
  setMaterialBastidor: MatFresno[3],
  setMaterialPatas: MatMetal[3],
  extension: true,
  modeloExtension: ZamaExt,
  camara: false,
  pdf: "downloads/fichasmesa/zama.pdf",
  zip: "downloads/modelos/ZAMA.zip",
};
//------------------------Contract------------------------
export const DatosBrezza = {
  id: "Brezza",
  modelo3d: Brezza,
  formasobre: "Circular",
  cambiasobre: false,
  cuadrado: false,
  rectangular: false,
  circular: true,
  ovalado: false,
  barril: false,
  bisel: true,
  bastidor: false,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatBisel[0].imagen,
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: false,
  modeloExtension: BrezzaExt,
  camara: true,
  pdf: "downloads/fichasmesa/brezza.pdf",
  zip: "downloads/modelos/BEZZA.zip",
};
export const DatosManhattan = {
  id: "Manhattan",
  modelo3d: Manhattan,
  formasobre: "Circular",
  cambiasobre: false,
  cuadrado: false,
  rectangular: true,
  circular: true,
  ovalado: false,
  barril: false,
  bisel: false,
  bastidor: false,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatBisel[0].imagen,
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: false,
  camara: true,
  pdf: "downloads/fichasmesa/manhattan.pdf",
  zip: "downloads/modelos/MANHATTAN.zip",
};
export const DatosRob = {
  id: "Rob",
  modelo3d: Rob,
  formasobre: "Rectangular",
  cambiasobre: false,
  cuadrado: false,
  rectangular: true,
  circular: false,
  ovalado: false,
  barril: false,
  bisel: false,
  bastidor: false,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatBisel[0].imagen,
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: false,
  camara: false,
  pdf: "downloads/fichasmesa/rob.pdf",
  zip: "downloads/modelos/ROB.zip",
};
export const DatosSpritz = {
  id: "Spritz80",
  modelo3d: Spritz,
  formasobre: "Cuadrado",
  cambiasobre: false,
  cuadrado: false,
  rectangular: true,
  circular: false,
  ovalado: false,
  barril: false,
  bisel: false,
  bastidor: false,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatBisel[0].imagen,
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: false,
  camara: true,
  pdf: "downloads/fichasmesa/spritz.pdf",
  zip: "downloads/modelos/Spritz.zip",
};
export const DatosSpritz120 = {
  id: "Spritz120",
  modelo3d: SprtizExt,
  formasobre: "Rectangular",
  cambiasobre: false,
  cuadrado: false,
  rectangular: true,
  circular: false,
  ovalado: false,
  barril: false,
  bisel: false,
  bastidor: false,
  metal: true,
  fresno: false,
  haya: false,
  setMaterialSobre: MatSobre[4].imagen,
  setMaterialBisel: MatBisel[0].imagen,
  setMaterialBastidor: MatMetal[3],
  setMaterialPatas: MatMetal[3],
  extension: false,
  camara: true,
  pdf: "downloads/fichasmesa/spritz.pdf",
  zip: "downloads/modelos/Spritz.zip",
};
