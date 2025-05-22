import React from 'react';

const NavbarToggle = ({ onClick }) => {
  return (
    <button className="navbar-toggle" onClick={onClick}>
      &#9776;
    </button>
  );
};

export default NavbarToggle;
