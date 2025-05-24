import React, { useEffect, useRef, useState } from 'react';
import './Footer.css';
import Button from '../Button/Button';

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div className={`footer ${isVisible ? 'show' : ''}`} ref={footerRef} style={{marginTop:"10vh"}} id='contact'>
      <h1 style={{fontSize:"2.5rem"}}>Contact <span style={{color:"turquoise"}}> MUSTAFA </span></h1>
      <h4>Get in touch with me</h4>
      <Button />
    </div>
  );
};

export default Footer;
