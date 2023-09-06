import { jsPDF } from "jspdf";
import Base from "../../assets/images/encimera/intercambiador/BASE.png";
import LogoPDF from "../../assets/icons/logoPDF.png";
const generatePDF = ({
  encimera,
  mueble,
  frenteActivo,
  frente,
  frenteMini,
  muebleMini,
  encimeraMini,
}) => {
  let cambiaCocina;
  let cambiaMueble;
  let cambiaEncimera;
  let cambiaFrente;

  console.log("frent", frenteActivo);

  console.log("encimera", encimera);
  console.log("mueble", mueble);
  console.log("frente", frente);
  console.log("encimeraMini", encimeraMini);
  console.log("muebleMini", muebleMini);
  console.log("frenteMini", frenteMini);
  if (mueble) {
    cambiaMueble = mueble;
  }
  if (encimera) {
    cambiaEncimera = encimera;
  }
  if (frenteActivo) {
    cambiaFrente = frente;
  }

  // Tamaño A4 en puntos (1 pulgada = 72 puntos)
  const a4Width = 2480; // Ancho en puntos
  const a4Height = 3508; // Altura en puntos

  // Configurar el documento con tamaño A4 y 300 DPI
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: [a4Width, a4Height],
    compress: true,
  });

  const imageWidth = 2752;
  const imageHeight = 1548;
  const MiniPadding = 1750;
  const logoWidth = 280;
  const logoHeight = 280;
  const padding = 100;
  const miniWidth = 280;
  const miniHeight = 280;
  let currentX = 650;
  let currentY = MiniPadding;
  doc.addImage(LogoPDF, "PNG", padding, padding, logoWidth, logoHeight);

  let fondoCocina = Base;
  let muebleCocina = cambiaMueble;
  let encimeraCocina = cambiaEncimera;
  let frenteCocina = cambiaFrente;

  //----------------------------------------------------------------------------------------------
  // Renderizar imágenes solo si tienen valores válidos
  doc.setFontSize(42);
  doc.addImage(fondoCocina, "PNG", 650, padding, imageWidth, imageHeight);
  if (muebleCocina) {
    doc.addImage(muebleCocina, "PNG", 650, padding, imageWidth, imageHeight);
  }
  if (encimeraCocina) {
    doc.addImage(encimeraCocina, "PNG", 650, padding, imageWidth, imageHeight);
  }
  if (frenteActivo && frenteCocina) {
    doc.addImage(frenteCocina, "PNG", 650, padding, imageWidth, imageHeight);
  }

  // Verificar si muebleMini existe antes de agregarlo (asumiendo que siempre estará presente)
  doc.addImage(
    muebleMini.textura,
    "PNG",
    currentX,
    currentY,
    miniWidth,
    miniHeight
  );

  doc.text("Acabado", currentX, currentY + 330);

  // Limitar la longitud del texto y generar un salto de línea si es necesario para muebleMini.nombre
  const maxWidthMueble = miniWidth; // Establece el ancho máximo para ajustar el texto
  const textLinesMueble = doc.splitTextToSize(
    muebleMini.nombre,
    maxWidthMueble
  );
  doc.text(textLinesMueble, currentX, currentY + 360);

  // Actualizar las coordenadas para el siguiente elemento (módulo, encimera, pavimento, etc.)
  currentX += miniWidth + 20; // miniWidth (ancho de imagen) + 20 (espacio entre elementos)

  // Verificar si encimeraMini existe antes de agregarlo
  doc.addImage(
    encimeraMini.textura,
    "PNG",
    currentX,
    currentY,
    miniWidth,
    miniHeight
  );

  doc.text("Encimera", currentX, currentY + 330);

  // Limitar la longitud del texto y generar un salto de línea si es necesario para encimeraMini.nombre
  const textLinesEncimera = doc.splitTextToSize(encimeraMini.nombre, miniWidth);
  doc.text(textLinesEncimera, currentX, currentY + 360);

  // Actualizar las coordenadas para el siguiente elemento (pavimento, etc.)
  currentX += miniWidth + 20; // miniWidth (ancho de imagen) + 20 (espacio entre elementos)

  if (!frenteCocina) {
    doc.addImage(
      frenteMini.textura,
      "PNG",
      currentX,
      currentY,
      miniWidth,
      miniHeight
    );

    doc.text("Frente", currentX, currentY + 330);

    // Limitar la longitud del texto y generar un salto de línea si es necesario para encimeraMini.nombre
    const textLinesEncimera = doc.splitTextToSize(frenteMini.nombre, miniWidth);
    doc.text(textLinesEncimera, currentX, currentY + 360);

    // Actualizar las coordenadas para el siguiente elemento (pavimento, etc.)
    currentX += miniWidth + 20; // miniWidth (ancho de imagen) + 20 (espacio entre elementos)
  }

  // Verificar si fregaderoMini existe antes de agregarlo

  const contactText = `Dirección de contacto
Correo electrónico:
xlporcelanico@xlporcelanico.com
Teléfono: +34 673 21 01 47`;

  // Calcular las coordenadas para posicionar el texto en la esquina inferior izquierda
  const textX = 100;
  const textY = doc.internal.pageSize.height - 200; // 100 unidades desde la parte inferior
  // const textY = 2260; // 100 unidades desde la parte inferior
  // Agregar el texto al documento en la posición especificada
  doc.text(contactText, textX, textY);
  doc.save("XL Kitchen.pdf");
};

export default generatePDF;
