import { createGlobalStyle } from "styled-components";
import RobotoBold from "../assets/fonts/Roboto-Bold.ttf";
import RobotoRegular from "../assets/fonts/Roboto-Regular.ttf";

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'),
            url(${RobotoBold});
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'),
            url(${RobotoRegular});
        font-weight: normal;
        font-style: normal;
    }
`;

export default FontStyles;
