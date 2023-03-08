import styled from "styled-components";
import Seccion from "../../../components/Seccion";
// import StyledCita from '../../components/Cita/styles'
import {
  fadeLogoDelay,
  fadeLogoDuration,
  showCitaDelay,
  showCitaDuration,
  showLogoDelay,
  showLogoDuration,
} from "./animationsConfig";
import Logo from "../../../components/Logo";
import Logo2 from "../../../components/Logo2";
const StyledIntroduccion = styled(Seccion)`
  min-height: 100vh;
  align-items: center;

  ${Logo} {
    animation: showLogo ${showLogoDuration}s ease-out ${showLogoDelay}s 1 normal
        forwards,
      moveLogo ${fadeLogoDuration}s linear ${fadeLogoDelay}s 1 normal forwards,
      moveLogo ${fadeLogoDuration}s linear ${fadeLogoDelay}s 1 normal forwards;
  }

  ${Logo2} {
    animation: showCita ${showCitaDuration}s linear ${showCitaDelay}s 1 normal
      forwards;
  }
  // 2k_SIZE
  @media screen and (max-width: 2560px) {
    ${Logo} {
      opacity: 0;
    }
    ${Logo2} {
      opacity: 0;
    }
    @keyframes showLogo {
      from {
        transform: translate(1075px, 230px);
        opacity: 0;
      }

      to {
        transform: translate(1075px, -50px);
        opacity: 1;
      }
    }
    @keyframes moveLogo {
      from {
        align-self: center;
        transform: translate(1075px, -50px);
        opacity: 1;
      }

      to {
        opacity: 1;
        transform: scale(0.5) translate(117.5vw, 62vh);
      }
    }
    @keyframes showCita {
      from {
        transform: translate(650px, 230px);
        opacity: 0;
      }

      to {
        scale: 1.2;
        transform: translate(650px, 0px);
        opacity: 1;
      }
    }
  }
  // 1920_SIZE
  @media screen and (max-width: 1920px) {
    ${Logo} {
      opacity: 0;
    }
    ${Logo2} {
      opacity: 0;
    }
    @keyframes showLogo {
      from {
        transform: translate(800px, 230px);
        opacity: 0;
      }

      to {
        transform: translate(800px, -50px);
        opacity: 1;
      }
    }
    @keyframes moveLogo {
      from {
        align-self: center;
        transform: translate(800px, -50px);
        opacity: 1;
      }

      to {
        opacity: 1;
        transform: scale(0.5) translate(111vw, 50vh);
      }
    }
    @keyframes showCita {
      from {
        transform: translate(575px, 230px);
        opacity: 0;
      }

      to {
        scale: 1;
        transform: translate(575px, 0px);
        opacity: 1;
      }
    }
  }
  // TABLET_SIZE
  @media screen and (max-width: 980px) {
    ${Logo} {
      opacity: 0;
    }
    ${Logo2} {
      opacity: 0;
    }
    @keyframes showLogo {
      from {
        transform: translate(250px, 230px);
        opacity: 0;
      }

      to {
        transform: translate(250px, -50px);
        opacity: 1;
      }
    }
    @keyframes moveLogo {
      from {
        align-self: center;
        transform: translate(250px, -50px);
        opacity: 1;
      }

      to {
        opacity: 1;
        transform: scale(0.5) translate(230%, 130%);
      }
    }
    @keyframes showCita {
      from {
        transform: translateY(230px);
        opacity: 0;
      }

      to {
        margin-top: -40%;
        margin-left: -60%;
        scale: 1;
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
  // MOBILE_SIZE
  @media screen and (max-width: 480px) {
    ${Logo} {
      opacity: 0;
    }
    ${Logo2} {
      opacity: 0;
    }
    @keyframes showLogo {
      from {
        transform: translate(100px, 230px);
        opacity: 0;
      }

      to {
        transform: translate(100px, -50px);
        opacity: 1;
      }
    }
    @keyframes moveLogo {
      from {
        align-self: center;
        transform: translate(100px, -50px);
        opacity: 1;
      }

      to {
        opacity: 1;
        transform: scale(0.5) translate(300%, 175%);
      }
    }
    @keyframes showCita {
      from {
        transform: translateY(230px);
        opacity: 0;
      }

      to {
        margin-left: -20px;
        scale: 1.2;
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
`;

export default StyledIntroduccion;
