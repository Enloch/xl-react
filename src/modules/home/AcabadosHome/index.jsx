import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  ColecContainer,
  ContentWrapper,
  ImageBoxWrapper,
} from "./acabadosElements";
import { generateAcabados } from "./constructorAcabados";
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: ${(props) => (window.innerWidth <= 600 ? "75%" : "500px")};
  color: rgb(37, 35, 36);
  overflow-y: auto;
  padding-bottom: 40px;
  padding-top: 40px;
  background-color: rgb(255, 252, 245);
  pointer-events: auto;
  max-height: 90vh;
  @media (min-width: 0px) {
    padding-left: 20px;
    padding-right: 20px;
    width: 90vw;
  }
  @media (min-width: 900px) {
    padding-left: 50px;
    padding-right: 50px;
    width: unset;
  }
`;

const ModalImage = styled.img`
  object-fit: cover;

  @media (min-width: 0px) {
    height: calc(-40px + 90vw);
    width: 100%;
  }
  @media (min-width: 900px) {
    height: 50vh;
    width: 50vh;
  }
`;

const ModalText = styled.div`
  color: #000000;
  text-align: left;
  margin-bottom: 25px;

  @media (min-width: 0px) {
    font-size: 20px;
    line-height: 24px;
  }
  @media (min-width: 900px) {
    font-size: 30px;
    line-height: 36px;
  }
`;
const NavigationButtons = styled.div`
  position: absolute;
  padding: 20px;
  bottom: 3%;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (min-width: 0px) {
    bottom: 4%;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 900px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

const NavigationButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  padding: 10px 18px;
  border: 1px solid #444444;
  cursor: pointer;
  border-radius: 50px;
  &:hover {
    background-color: #b4b4b4;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
const AcabadosHome = ({ id, data }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Limpiar el efecto cuando el componente se desmonte
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  const AcabadosComponents = generateAcabados(
    data,
    setSelectedImage,
    setSelectedName,
    setModalOpen,
    setSelectedIndex // Añade esto
  );
  const handleNavigate = (direction) => {
    if (!selectedIndex && selectedIndex !== 0) return; // Retorna si el índice seleccionado no está definido

    let newIndex = null;

    if (direction === "prev" && selectedIndex > 0) {
      // Para ir a la muestra anterior
      newIndex = selectedIndex - 1;
    } else if (direction === "next" && selectedIndex < data.length - 1) {
      // Para ir a la muestra siguiente
      newIndex = selectedIndex + 1;
    }

    if (newIndex !== null) {
      setSelectedImage(data[newIndex].full);
      setSelectedName(data[newIndex].desc[0]);
      setSelectedIndex(newIndex);
    }
  };
  return (
    <>
      <ColecContainer id={id}>
        <ContentWrapper>
          <ImageBoxWrapper>{AcabadosComponents}</ImageBoxWrapper>
        </ContentWrapper>
      </ColecContainer>
      {modalOpen && (
        <ModalOverlay onClick={() => setModalOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalText>{selectedName}</ModalText>
            <ModalImage
              onClick={() => setModalOpen(false)}
              src={selectedImage}
              alt='Selected'
            />
            <NavigationButtons>
              <NavigationButton
                onClick={() => handleNavigate("prev")}
                disabled={selectedIndex === 0}
              >
                {"<"}
              </NavigationButton>
              <NavigationButton
                onClick={() => handleNavigate("next")}
                disabled={selectedIndex === data.length - 1}
              >
                {">"}
              </NavigationButton>
            </NavigationButtons>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default AcabadosHome;
