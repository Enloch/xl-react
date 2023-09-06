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

const addMiniatureWithText = (doc, miniature, x, y) => {
  const { textura, nombre } = miniature;
  const maxWidth = 280;
  const textLines = doc.splitTextToSize(nombre, maxWidth);

  doc.addImage(textura, "WEBP", x, y, maxWidth, maxWidth);
  doc.text("Acabado", x, y + 330);
  doc.text(textLines, x, y + 360);
};

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

  const elementsToRender = [Base, mueble, encimera];

  elementsToRender.forEach((img) =>
    addImageToPDF(doc, img, "PNG", 650, padding, imageWidth, imageHeight)
  );

  addMiniatureWithText(doc, muebleMini, currentX, currentY);
  currentX += miniWidth + 20;

  addMiniatureWithText(doc, encimeraMini, currentX, currentY);
  currentX += miniWidth + 20;

  if (frenteActivo) {
    doc.addImage(frente, "PNG", 650, padding, imageWidth, imageHeight);
    doc.addImage(copete, "PNG", 650, padding, imageWidth, imageHeight);
    addMiniatureWithText(doc, frenteMini, currentX, currentY);
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
