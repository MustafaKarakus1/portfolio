import React from 'react'
import './About.css'
import Mustafa from '../../Assets/Mustafa.jpg'

const pdfDownload = () => {
  const link = document.createElement('a');
  link.href = '/MustafaKarakusCV.pdf';  
  link.download = 'MustafaKarakusCV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const About = () => {
  return (
    <div className='about' id='about'>
        <h1 className='about-title'>About <span style={{color:"turquoise"}}>Me</span> </h1>
        <img src={Mustafa} alt="Logo" className='about-logo' />
        <h2>Full Stack Developer</h2>
        <span className='about-paragraph'> Hello, I am Mustafa Karakuş. I graduated from TED University Software Engineering Department in 2025 and I am a passionate engineer in the field of software development. During my university education, I gained practical experience by doing both short-term and long-term internships in Türkiye's leading institutions and organizations and reinforced my theoretical knowledge with real projects. With the experience I have gained in software development processes and my ability to work in a team, I play an effective role in achieving common goals. My curiosity in constantly learning and researching allows me to keep myself up to date in the rapidly developing world of technology. I aim to be a competent and successful software engineer in my field by making the most of every opportunity that comes my way in my career.</span>
        <button className='download-cv-button' onClick={pdfDownload}> Download CV </button>
    </div>
  )
}

export default About