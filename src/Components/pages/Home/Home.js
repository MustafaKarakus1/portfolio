import React from 'react';
import home from '../../Assets/home.png';
import './Home.css'; 

const Home = () => {
  return (
    <div className='home'>
        <div className="card text-bg-dark custom-card">
        <img src={home} className="card-img" alt="Logo" />
        <div className="home-img-overlay home-overlay">
            <h5 className="home-card-title">Hi, I'm Mustafa Karakuş</h5>
            <p className="home-card-text">Software Engineer</p>
        </div>
        </div>
    </div>
  );
};

export default Home;
