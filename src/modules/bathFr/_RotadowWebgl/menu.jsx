import React from "react";

export const Menu = ({ handleTextureChange }) => {
  return (
    <nav>
      <ul>
        <li>
          <a
            href='Allure'
            onClick={(event) => handleTextureChange(event, "Allure")}
          >
            Allure Anthracite
          </a>
        </li>
        <li>
          <a
            href='Beren'
            onClick={(event) => handleTextureChange(event, "Beren")}
          >
            Beren Light Grey
          </a>
        </li>
        <li>
          <a
            href='Borghini'
            onClick={(event) => handleTextureChange(event, "Borghini")}
          >
            Blanc Borghini
          </a>
        </li>
      </ul>
    </nav>
  );
};
