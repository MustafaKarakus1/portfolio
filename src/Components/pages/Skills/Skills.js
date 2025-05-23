// src/components/Skills/Skills.js
import React from 'react';
import CSS from '../../Assets/css.png';
import react from '../../Assets/React.png';
import HTML from '../../Assets/html.png';
import Tailwind from '../../Assets/tailwind.png';
import JS from '../../Assets/js.png';
import Python from '../../Assets/pyhton.png';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    react, CSS, HTML, Tailwind, JS, Python // Dilersen farklı görseller koyabilirsin
  ];

  // Scroll için sonsuz tekrar sağlamak adına iki kez çoğalt
  const repeatedSkills = [...skillsData, ...skillsData];

  return (
    <div className="skills" id='skills'>
      <h1 className="skills-heading">Skills</h1>
      <div className="skills-row">
        {repeatedSkills.map((imageSrc, index) => (
          <div className="skills-col" key={index}>
            <img src={imageSrc} alt={`skill-${index}`} className="skills-card-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
