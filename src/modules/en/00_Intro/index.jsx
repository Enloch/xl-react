import StyledIntroduccion from "./styles";
import Logo from "../../../components/Logo";
import Logo2 from "../../../components/Logo2";
import { COLORS } from "../../../global/GlobalStyles";
import getCookie from "../../../utils/getCookie";
import scrollTo from "../../../helpers/scrollTo";
import { useEffect } from "react";
import { totalDuration } from "./animationsConfig";

const Introduccion = ({ indiceRef }) => {
  useEffect(() => {
    if (getCookie("Animation")) {
      document.body.parentElement.style.scrollBehavior = "smooth";
      document.body.style.overflow = "auto";
      return;
    } else {
      document.cookie = "animacion=true";
      window.scrollTo(0, 0);

      if (window.scrollY === 0) {
        document.body.style.overflow = "hidden";

        setTimeout(() => {
          scrollTo(indiceRef.current.offsetTop, 2000);
          document.body.style.overflow = "auto";
        }, (totalDuration + 1.5) * 1000);
      } else {
        document.body.parentElement.style.scrollBehavior = "smooth";
      }
    }
  }, []);

  return (
    <StyledIntroduccion backgroundColor={COLORS.beige01}>
      <Logo />
      <Logo2 />

      {/* <Cita
        cita="Time moves in one direction, memory in another."
        author="William Gibson"
        big
        colorAutor={COLORS.gray05}
      /> */}
    </StyledIntroduccion>
  );
};

export default Introduccion;
