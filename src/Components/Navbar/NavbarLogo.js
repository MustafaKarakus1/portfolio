import React from 'react'
import Logo from '../Assets/logo.png'
import './Navbar.css'   

const NavbarLogo = () => {
  return (
    <div className='navbar-logo'>
        <img src={Logo} alt="Logo" />
    </div>
  )
}

export default NavbarLogo