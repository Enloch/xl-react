import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ColecContainer,
  ContentWrapper,
  ImageBoxWrapper,
} from "./acabadosElements";
import { generateAcabados } from "./constructorAcabados";
const AcabadosHome = ({ id, data }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const AcabadosComponents = generateAcabados(
    data,
    setSelectedImage,
    setSelectedName,
    setModalOpen
  );
  const imageSize = window.innerWidth <= 600 ? "75%" : "500px";
  return (
    <>
      <ColecContainer id={id}>
        <ContentWrapper>
          <ImageBoxWrapper>{AcabadosComponents}</ImageBoxWrapper>
        </ContentWrapper>
      </ColecContainer>
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: imageSize,
              maxHeight: "500px",
            }}
          >
            <img
              onClick={() => setModalOpen(false)}
              src={selectedImage}
              alt='Selected'
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                color: "white",
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              {selectedName}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AcabadosHome;
