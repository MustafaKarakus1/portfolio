import React, { useState } from 'react';
import NavbarLogo from './NavbarLogo';
import NavbarMenu from './NavbarMenu';
import NavbarToggle from './NavbarToggle';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <NavbarLogo />
      <NavbarToggle onClick={handleToggle} />
      <NavbarMenu isOpen={menuOpen} />
    </div>
  );
};

export default Navbar;
