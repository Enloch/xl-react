import jsPDF from "jspdf";
import Logo from "../../assets/icons/logoPDF.png";
import html2canvas from "html2canvas"; // Agrega la importación de html2canvas

export function captureAndGeneratePDF() {
  // Obtén el canvas de Three.js
  const canvas = document.getElementById("contenedor-rotador-canvas");

  // Crea una instancia de jsPDF en formato horizontal
  const a4Width = 2480;
  const a4Height = 3508;
  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: [a4Width, a4Height],
    compress: true,
  });

  const logoWidth = 280;
  const logoHeight = 350;
  const padding = 100;
  const ImgWidth = 3308;
  const ImgHeight = 1911;
  pdf.addImage(Logo, "PNG", padding, padding, logoWidth, logoHeight);

  // Captura el contenido del canvas utilizando html2canvas
  html2canvas(canvas).then((canvasCapture) => {
    // Obtén la imagen en formato Data URL del canvas
    const canvasDataUrl = canvasCapture.toDataURL("image/jpeg", 1.0); // Ajusta el formato y la calidad según tus necesidades

    // Agrega la imagen del canvas al PDF
    pdf.addImage(canvasDataUrl, "JPEG", padding, 475, ImgWidth, ImgHeight); // Ajusta la posición y el tamaño según tus necesidades

    // Guarda el PDF o sérvelo al usuario (puedes personalizar el nombre del archivo)
    pdf.save("XL Home Mesa.pdf");
  });
}
