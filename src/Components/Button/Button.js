import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import './Button.css';

const contactItems = [
  { icon: faEnvelope, title: 'E-Mail', text: 'mstfkarakus42@gmail.com', link:"mailto:mstfkarakus42@gmail.com?subject=Web%20Sayfası%20İletişim&body=Merhaba,%20size%20web%20sayfanız%20üzerinden%20ulaşıyoruz..." },
  { icon: faPhone, title: 'Phone', text: '+90 507 254 8508'},
  { icon: faLinkedin, title: 'LinkedIn', text: 'Contact me' , link: 'https://www.linkedin.com/in/mustafa-karaku%C5%9F-751635263/' },
  { icon: faGithub, title: 'Github', text: 'Check it', link: 'https://github.com/MustafaKarakus1' },
];


const Button = () => {
  return (
<div className='button-container'>
  {contactItems.map((item, index) => (
    <a 
    style={{color:"white"}}   
    key={index}
    href={item.link}
    >
    <div className='contact-item'  key={index}>
      <div className='icon-circle'>
        <FontAwesomeIcon icon={item.icon} size="s" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </div>
    </a>
  ))}
</div>

  );
};

export default Button;
