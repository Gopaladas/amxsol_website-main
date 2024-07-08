import React, { useState, useEffect } from 'react';
import './Aerospace.css';
import one from '../assets/Aerospace/1.webp';
import two from '../assets/Aerospace/2.png';
import three from '../assets/Aerospace/3.png';
import four from '../assets/Aerospace/4.jfif';

const Aerospace = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = currentSlide === 4 ? 1 : currentSlide + 1;
      setCurrentSlide(nextSlide);
    }, 2500); 
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="aerospace-container">
      <div className="carousel">
        <input type="radio" name="carousel" id="slide1" checked={currentSlide === 1} onChange={() => setCurrentSlide(1)} />
        <input type="radio" name="carousel" id="slide2" checked={currentSlide === 2} onChange={() => setCurrentSlide(2)} />
        <input type="radio" name="carousel" id="slide3" checked={currentSlide === 3} onChange={() => setCurrentSlide(3)} />
        <input type="radio" name="carousel" id="slide4" checked={currentSlide === 4} onChange={() => setCurrentSlide(4)} />

        <div className="carousel-inner">
          <div className={`carousel-item ${currentSlide === 1 ? 'active' : ''}`} id="item1">
            <img src={one} alt="First slide" />
            <div className="carousel-caption">
              <h3>Innovative Solutions</h3>
              <p>Advancing aerospace with cutting-edge technology.</p>
            </div>
          </div>
          <div className={`carousel-item ${currentSlide === 2 ? 'active' : ''}`} id="item2">
            <img src={two} alt="Second slide" />
            <div className="carousel-caption">
              <h3>Predictive Maintenance</h3>
              <p>Anticipate equipment failures before they occur.</p>
            </div>
          </div>
          <div className={`carousel-item ${currentSlide === 3 ? 'active' : ''}`} id="item3">
            <img src={three} alt="Third slide" />
            <div className="carousel-caption">
              <h3>Autonomous Systems</h3>
              <p>Enhancing capabilities of aerial vehicles.</p>
            </div>
          </div>
          <div className={`carousel-item ${currentSlide === 4 ? 'active' : ''}`} id="item4">
            <img src={four} alt="Fourth slide" />
            <div className="carousel-caption">
              <h3>Data Analytics</h3>
              <p>Driving decisions with big data insights.</p>
            </div>
          </div>
        </div>

        <div className="carousel-nav">
          <label htmlFor="slide1"></label>
          <label htmlFor="slide2"></label>
          <label htmlFor="slide3"></label>
          <label htmlFor="slide4"></label>
        </div>
      </div>
      <div className="aerospace-content">
        <h2>Revolutionizing the Aerospace Industry with Advanced Technologies</h2>
        <p>At Amxsol, we are committed to advancing the aerospace industry through innovative solutions that enhance efficiency, safety, and performance. Our team of experts leverages cutting-edge technologies and years of industry experience to deliver transformative results for our clients.</p>
        
        <h3>Our Expertise</h3>
        <h4>Predictive Maintenance</h4>
        <p>Utilizing machine learning algorithms, we provide predictive maintenance solutions that help aerospace companies anticipate equipment failures before they occur. This proactive approach reduces downtime, lowers maintenance costs, and ensures the highest levels of safety and reliability.</p>

        <h4>Advanced Materials and Manufacturing</h4>
        <p>We specialize in the development and application of advanced materials, including lightweight composites and high-strength alloys, to improve the performance and durability of aerospace components. Our state-of-the-art manufacturing techniques ensure precision and quality in every product we deliver.</p>

        <h4>Autonomous Systems</h4>
        <p>Our autonomous systems enhance the capabilities of both manned and unmanned aerial vehicles. From automated flight control systems to advanced navigation technologies, we help our clients achieve greater operational efficiency and mission success.</p>

        <h4>Aerospace Data Analytics</h4>
        <p>We harness the power of big data to provide actionable insights that drive decision-making in the aerospace sector. Our analytics solutions optimize flight operations, improve fuel efficiency, and enhance passenger experience.</p>

        <h4>Safety and Compliance</h4>
        <p>Safety is paramount in the aerospace industry. Our comprehensive safety and compliance services ensure that our clients meet all regulatory requirements and maintain the highest standards of operational safety.</p>

        <h3>Key Benefits</h3>
        <p> <b>Enhanced Operational Efficiency: </b>Our solutions streamline processes and improve overall efficiency, leading to significant cost savings and improved performance.</p>
        <p> <b>Increased Safety and Reliability:</b> By leveraging advanced technologies, we enhance the safety and reliability of aerospace operations, reducing risks and ensuring compliance with industry standards.</p>
        <p> <b>Innovation and Competitiveness:</b> Our focus on innovation helps our clients stay ahead of the competition, driving growth and success in the dynamic aerospace market.</p>

        <h3>Success Stories</h3>
        <h4>Case Study: Predictive Maintenance for Leading Airline</h4>
        <p>We partnered with a leading airline to implement a predictive maintenance solution that reduced unscheduled maintenance by 30%, resulting in significant cost savings and improved fleet availability.</p>

        <h4>Case Study: Autonomous Flight Control for Unmanned Aerial Vehicles (UAVs)</h4>
        <p>Our autonomous flight control system was successfully integrated into a fleet of UAVs, enhancing their operational capabilities and enabling new applications in surveillance and delivery services.</p>

        <h3>Partner with Us</h3>
        <p>At Amxsol, we are dedicated to driving the future of the aerospace industry. Our tailored solutions and industry expertise make us the partner of choice for aerospace companies seeking to innovate and excel.</p>
        <p className='contact-us'>📞 Contact us ✉️ today to learn more about how we can help you achieve your aerospace goals.</p>
      </div>
    </div>
  );
}

export default Aerospace;
