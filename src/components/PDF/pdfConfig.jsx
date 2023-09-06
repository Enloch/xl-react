import { jsPDF } from "jspdf";
import Base from "../../assets/images/encimera/intercambiador/BASE.png";
import LogoPDF from "../../assets/icons/logoPDF.png";

const addImageToPDF = (doc, image, format, x, y, width, height) => {
  if (image) {
    try {
      doc.addImage(image, format, x, y, width, height);
    } catch (error) {
      console.error("Error adding image to PDF:", image);
      console.error(error);
    }
  }
};

// const addMiniatureWithText = (doc, miniature, x, y) => {
//   const nombre = miniature.nombre;
//   const maxWidth = 280;
//   // const textLines = doc.splitTextToSize(nombre, maxWidth);

//   doc.addImage(miniature.textura, "WEBP", x, y, maxWidth, maxWidth);
//   // doc.text("Acabado", x, y + 330);
//   // doc.text(textLines, x, y + 360);
// };

const generatePDF = ({
  encimera,
  mueble,
  frenteActivo,
  frente,
  copete,
  muebleMini,
  encimeraMini,
  frenteMini,
}) => {
  console.log("frente status", frenteActivo);
  console.log("encimera", encimera);
  console.log("mueble", mueble);
  console.log("frente", frente);
  console.log("copete", copete);
  console.log("encimeraMini", encimeraMini);
  console.log("muebleMini", muebleMini);
  console.log("frenteMini", frenteMini);

  const a4Width = 2480;
  const a4Height = 3508;
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
  const logoHeight = 350;
  const padding = 100;
  const miniWidth = 280;
  let currentX = 650;
  let currentY = MiniPadding;
  doc.setFontSize(42);
  doc.addImage(LogoPDF, "PNG", padding, padding, logoWidth, logoHeight);

  // const elementsToRender = [Base, mueble, encimera];

  // elementsToRender.forEach((img) =>
  //   addImageToPDF(doc, img, "PNG", 650, padding, imageWidth, imageHeight)
  // );
  doc.addImage(Base, "PNG", 650, padding, imageWidth, imageHeight);
  doc.addImage(mueble, "PNG", 650, padding, imageWidth, imageHeight);

  doc.addImage(encimera, "PNG", 650, padding, imageWidth, imageHeight);

  if (frenteActivo) {
    doc.addImage(frente, "PNG", 650, padding, imageWidth, imageHeight);
    doc.addImage(copete, "PNG", 650, padding, imageWidth, imageHeight);
  }
  // addMiniatureWithText(doc, muebleMini.textura, currentX, currentY);
  // currentX += miniWidth + 20;

  // addMiniatureWithText(doc, encimeraMini.textura, currentX, currentY);
  // currentX += miniWidth + 20;
  if (encimeraMini) {
    doc.addImage(
      encimeraMini.textura,
      "WEBP",
      currentX,
      currentY,
      miniWidth,
      miniWidth
    );
    doc.setLineWidth(0.02); // Establecer el ancho de línea en 1px
    doc.rect(currentX, currentY, miniWidth, miniWidth); // Dibujar el rectángulo
    doc.text("Encimera", currentX, currentY + 330);

    // Limitar la longitud del texto y generar un salto de línea si es necesario para encimeraMini.nombre
    const textLinesEncimera = doc.splitTextToSize(
      encimeraMini.nombre,
      miniWidth
    );
    doc.text(textLinesEncimera, currentX, currentY + 360);

    // Actualizar las coordenadas para el siguiente elemento (pavimento, etc.)
    currentX += miniWidth + 20; // miniWidth (ancho de imagen) + 20 (espacio entre elementos)
  }
  if (!frenteActivo) {
    if (frenteMini) {
      doc.addImage(
        frenteMini.textura,
        "WEBP",
        currentX,
        currentY,
        miniWidth,
        miniWidth
      );
      doc.setLineWidth(0.02); // Establecer el ancho de línea en 1px
      doc.rect(currentX, currentY, miniWidth, miniWidth); // Dibujar el rectángulo
      doc.text("Frente", currentX, currentY + 330);
      // Limitar la longitud del texto y generar un salto de línea si es necesario para frenteMini.nombre
      const textLinesFrente = doc.splitTextToSize(frenteMini.nombre, miniWidth);
      doc.text(textLinesFrente, currentX, currentY + 360);
      // Actualizar las coordenadas para el siguiente elemento (pavimento, etc.)
      currentX += miniWidth + 20;
    }
  }
  if (muebleMini) {
    doc.addImage(
      muebleMini.textura,
      "WEBP",
      currentX,
      currentY,
      miniWidth,
      miniWidth
    );
    doc.setLineWidth(0.02); // Establecer el ancho de línea en 1px
    doc.rect(currentX, currentY, miniWidth, miniWidth); // Dibujar el rectángulo
    doc.text("Mueble", currentX, currentY + 330);
    // Limitar la longitud del texto y generar un salto de línea si es necesario para muebleMini.nombre
    const textLinesMueble = doc.splitTextToSize(muebleMini.nombre, miniWidth);
    doc.text(textLinesMueble, currentX, currentY + 360);
    // Actualizar las coordenadas para el siguiente elemento (pavimento, etc.)
    currentX += miniWidth + 20;
  }

  const contactText = `Dirección de contacto
Correo electrónico:
xlporcelanico@xlporcelanico.com
Teléfono: +34 673 21 01 47`;

  const textX = 100;
  const textY = doc.internal.pageSize.height - 200;
  doc.text(contactText, textX, textY);

  doc.save("XL Kitchen.pdf");
};

export default generatePDF;
