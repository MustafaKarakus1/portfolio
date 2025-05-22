import React from 'react';

const NavbarMenu = ({ isOpen }) => {
  return (
    <div className={`navbar-menu ${isOpen ? 'show' : ''}`}>
      <button>Home</button>
      <button>About</button>
      <button>Skills</button>
      <button>Education</button>
      <button>Experience</button>
    </div>
  );
};

export default NavbarMenu;
