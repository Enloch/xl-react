import styled from 'styled-components'
import logo from '../assets/icons/introduccion/logo.svg'

const Logo = styled.img.attrs({
    src: logo,
    alt: 'Logo',

})`
    //width: clamp(109px, 11.40625vw, 219px);
    width: 200%;
    filter: invert(1);
    mix-blend-mode: difference;
`
export default Logo