import React, { useState, useEffect } from 'react';
import './Automotive.css';
import one from '../assets/Automotive/1.jpg';
import two from '../assets/Automotive/two.jfif';
import three from '../assets/Automotive/3.png';
import four from '../assets/Automotive/4.jpg';

const Automotive = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = currentSlide === 4 ? 1 : currentSlide + 1;
      setCurrentSlide(nextSlide);
    }, 3000); 

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="automotive-unique-container">
      <div className="automotive-unique-carousel">
        <input type="radio" name="carousel" id="slide1" checked={currentSlide === 1} onChange={() => setCurrentSlide(1)} />
        <input type="radio" name="carousel" id="slide2" checked={currentSlide === 2} onChange={() => setCurrentSlide(2)} />
        <input type="radio" name="carousel" id="slide3" checked={currentSlide === 3} onChange={() => setCurrentSlide(3)} />
        <input type="radio" name="carousel" id="slide4" checked={currentSlide === 4} onChange={() => setCurrentSlide(4)} />

        <div className="automotive-unique-carousel-inner">
          <div className={`automotive-unique-carousel-item ${currentSlide === 1 ? 'active' : ''}`} id="item1">
            <img src={one} alt="First slide" />
            <div className="automotive-unique-carousel-caption">
              <h3>Advanced Driver Assistance</h3>
              <p>Enhancing vehicle safety with cutting-edge technology.</p>
            </div>
          </div>
          <div className={`automotive-unique-carousel-item ${currentSlide === 2 ? 'active' : ''}`} id="item2">
            <img src={two} alt="Second slide" />
            <div className="automotive-unique-carousel-caption">
              <h3>Autonomous Driving</h3>
              <p>Pioneering the future of transportation.</p>
            </div>
          </div>
          <div className={`automotive-unique-carousel-item ${currentSlide === 3 ? 'active' : ''}`} id="item3">
            <img src={three} alt="Third slide" />
            <div className="automotive-unique-carousel-caption">
              <h3>Predictive Maintenance</h3>
              <p>Reducing downtime and maintenance costs.</p>
            </div>
          </div>
          <div className={`automotive-unique-carousel-item ${currentSlide === 4 ? 'active' : ''}`} id="item4">
            <img src={four} alt="Fourth slide" />
            <div className="automotive-unique-carousel-caption">
              <h3>Connected Vehicles</h3>
              <p>Empowering seamless connectivity on the road.</p>
            </div>
          </div>
        </div>

        <div className="automotive-unique-carousel-nav">
          <label htmlFor="slide1"></label>
          <label htmlFor="slide2"></label>
          <label htmlFor="slide3"></label>
          <label htmlFor="slide4"></label>
        </div>
      </div>
      
      <div className="automotive-unique-content">
        <h2>Automotive Solutions</h2>
        <p className='para-1'>Our comprehensive automotive solutions leverage the latest technologies to enhance safety, efficiency, and connectivity on the road. From advanced driver assistance systems to autonomous driving, predictive maintenance, and connected vehicles, we are at the forefront of innovation in the automotive industry.</p>
        <p className='para-2'>We work closely with industry partners to deliver cutting-edge solutions that meet the evolving needs of the automotive market. Our team of experts is dedicated to developing technologies that improve vehicle performance, reduce maintenance costs, and provide seamless connectivity for drivers and passengers alike.</p>
        <p className='para-3'>Explore our range of automotive solutions and discover how we can help you drive the future of transportation.</p>
        
        <div className="automotive-unique-cards">
          <div className="automotive-unique-card">
            <h3>Telematics</h3>
            <p className='para-1'>Integrating telecommunications and informatics for better fleet management.</p>
          </div>
          <div className="automotive-unique-card">
            <h3>Electric Vehicles</h3>
            <p className='para-3'>Advancing electric vehicle technology for a sustainable future.</p>
          </div>
          <div className="automotive-unique-card">
            <h3>Fleet Management</h3>
            <p className='para-2'>Optimizing fleet operations with real-time data and analytics.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Automotive;
