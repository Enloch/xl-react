import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./MyPDF";

function Wrapper() {
  return (
    <PDFViewer style={{ width: "100vw", height: "100vh", marginTop: "40px" }}>
      <MyDocument />
    </PDFViewer>
  );
}

export default Wrapper;
