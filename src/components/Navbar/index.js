import React from 'react'
import { BsList } from 'react-icons/bs'
import { Nav, MobileIcon, MobileIcon2 } from './NavbarElements'
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <MobileIcon onClick={toggle}>
          <BsList />
        </MobileIcon>
      </Nav>
    </>
  )
}

export default Navbar
