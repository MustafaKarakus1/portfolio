import React from 'react';

const NavbarMenu = ({ isOpen, onMenuClose }) => {
  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Mobil menüyü kapat (eğer açıksa)
    if (onMenuClose) {
      onMenuClose();
    }
  };

  return (
    <div className={`navbar-menu ${isOpen ? 'show' : ''}`}>
      <button onClick={() => scrollTo('home')}>Home</button>
      <button onClick={() => scrollTo('about')}>About</button>
      <button onClick={() => scrollTo('skills')}>Skills</button>
      <button onClick={() => scrollTo('education')}>Education</button>
      <button onClick={() => scrollTo('experience')}>Experience</button>
      <button onClick={() => scrollTo('contact')}>Contact</button>

    </div>
  );
};

export default NavbarMenu;