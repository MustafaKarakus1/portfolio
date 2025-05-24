import React from 'react';
import home1 from '../../Assets/home1.png';
import './Home.css'; 

const Home = () => {
  return (
    <div className='home' id='home'>
        <div className="card text-bg-dark custom-card">
        <img src={home1} className="card-img" alt="Logo" />
        <div className="home-img-overlay home-overlay">
            <h5 className="home-card-title">Hi, I'm Mustafa Karakuş</h5>
            <h5 className="home-card-text">
              <span className='static-text'>Software</span>
              <span className='animated-words'>
                <span>Engineer</span>
                <span>Developer</span>
                <span>Designer</span>
                <span>Programmer</span>
              </span>
            </h5>
        </div>
        </div>
    </div>
  );
};

export default Home;
