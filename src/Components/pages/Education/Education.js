import React from 'react';
import tedu from '../../Assets/tedu.jpeg'; // kendi logo yoluna göre değiştir
import './Education.css'; // opsiyonel stil dosyası

const Education = () => {
  return (
    <div className="container my-5" id='education'>
      <h1 className="text-center mb-4">Education</h1>
      <div className="row ">
        <div className="col-md-4 ">
          <img
            src={tedu}
            alt="Education"
            className="img-fluid rounded shadow"
            style={{ height:"400px" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title" style={{fontSize:"24px"}}>Software Engineering - TED University</h5>
            <p className="card-text" style={{marginTop:"2vh"}}>
            TED University Software Engineering Department aims to train innovative and 
            qualified software engineers who approach all processes from software design to 
            maintenance with an engineering discipline. The program aims to meet the rapidly 
            growing software needs in sectors such as defense, health, finance and energy, while 
            also raising graduates who are competitive individuals both nationally and internationally. 
            Given the software industry's high-value-added export potential and its critical role in all 
            industries, this department offers a strategic educational opportunity.
            </p>
            <p className="card-text">
              <small className="text" style={{color:"white"}}>Graduated: 2025</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
