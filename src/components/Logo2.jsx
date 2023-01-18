import styled from 'styled-components'
import logo2 from '../assets/icons/introduccion/logo2.svg'

const Logo2 = styled.img.attrs({
    src: logo2,
    alt: 'Logo2',

})`
    //width: clamp(150px, 11.40625vw, 300px);
    width: 300%;
    filter: invert(0.6);
    mix-blend-mode: difference;
`
export default Logo2