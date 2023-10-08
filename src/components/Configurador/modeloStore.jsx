// modeloStore.js
import { create } from "zustand";
import { ModeloKirNoExt, ModeloKirExt } from "./Modelos";
import {
  MatSobre,
  MatBisel,
  MatMetal,
  // MatHaya,
} from "./MaterialModelos";
const useModeloStore = create((set) => ({
  modeloMostrado: ModeloKirNoExt,
  materialSobre: MatSobre[4].imagen,
  materialBisel: MatBisel[0].imagen,
  materialBastidor: MatMetal[3],
  materialPatas: MatMetal[3],
  encimeraDefault: true,
  encimeraCuadrada: false,
  encimeraRectangular: false,
  encimeraCircular: false,
  encimeraOvalada: false,
  encimeraBarril: true,
  isExtendido: false, // Nuevo estado para saber si el modelo está extendido
  modeloMostradoNombre: "Kir",
  modeloSobre: "Rectangular",
  materialSobreNombre: "Calacatta Black",
  materialBiselNombre: "Fibracolor",
  materialBastidorNombre: "Antracita",
  materialPatasNombre: "Antracita",
  modeloOriginal: ModeloKirNoExt,
  modeloExtension: ModeloKirExt,

  setEncimeraCuadrada: (estado) => set({ encimeraCuadrada: estado }),
  setEncimeraRectangular: (estado) => set({ encimeraRectangular: estado }),
  setEncimeraCircular: (estado) => set({ encimeraCircular: estado }),
  setEncimeraOvalada: (estado) => set({ encimeraOvalada: estado }),
  setEncimeraBarril: (estado) => set({ encimeraBarril: estado }),
  setEncimeraDefault: (estado) => set({ encimeraDefault: estado }),
  // Nuevos setters para nombres y estados adicionales
  setModeloMostradoNombre: (nombre) => set({ modeloMostradoNombre: nombre }),
  setModeloSobre: (sobre) => set({ modeloSobre: sobre }),
  setMaterialSobreNombre: (nombre) => set({ materialSobreNombre: nombre }),
  setMaterialBiselNombre: (nombre) => set({ materialBiselNombre: nombre }),
  setMaterialBastidorNombre: (nombre) =>
    set({ materialBastidorNombre: nombre }),
  setMaterialPatasNombre: (nombre) => set({ materialPatasNombre: nombre }),
  //-----------------------------------------------
  setModeloMostrado: (modelo) => {
    set({ modeloMostrado: modelo });
  },
  setModeloExtension: (modelo) => {
    set({ modeloExtension: modelo });
  },
  setModeloOriginal: (modelo) => {
    set({ modeloOriginal: modelo });
  },
  setIsExtendido: (isExtendido) => {
    set({ isExtendido: isExtendido });
  }, // Nuevo setter para actualizar 'isExtendido'
  setMaterialSobre: (material) => {
    set({ materialSobre: material });
  },
  setMaterialBisel: (material) => {
    set({ materialBisel: material });
  },
  setMaterialBastidor: (material) => {
    set({ materialBastidor: material });
  },
  setMaterialPatas: (material) => {
    set({ materialPatas: material });
  },
}));

export default useModeloStore;
