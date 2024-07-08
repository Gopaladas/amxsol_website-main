import React, { useState, useEffect } from "react";
import "./Banking.css";
import one from "../assets/Banking/1.jpg";
import two from "../assets/Banking/2.jpg";
import three from "../assets/Banking/three.jfif";
import four from "../assets/Banking/4.jpg";

const Banking = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = currentSlide === 4 ? 1 : currentSlide + 1;
      setCurrentSlide(nextSlide);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="banking-unique-container">
      <div className="banking-unique-carousel">
        <input
          type="radio"
          name="carousel"
          id="slide1"
          checked={currentSlide === 1}
          onChange={() => setCurrentSlide(1)}
        />
        <input
          type="radio"
          name="carousel"
          id="slide2"
          checked={currentSlide === 2}
          onChange={() => setCurrentSlide(2)}
        />
        <input
          type="radio"
          name="carousel"
          id="slide3"
          checked={currentSlide === 3}
          onChange={() => setCurrentSlide(3)}
        />
        <input
          type="radio"
          name="carousel"
          id="slide4"
          checked={currentSlide === 4}
          onChange={() => setCurrentSlide(4)}
        />

        <div className="banking-unique-carousel-inner">
          <div
            className={`banking-unique-carousel-item ${
              currentSlide === 1 ? "active" : ""
            }`}
            id="item1"
          >
            <img src={one} alt="First slide" />
            <div className="banking-unique-carousel-caption">
              <h3>Digital Banking Solutions</h3>
              <p>Revolutionizing banking with cutting-edge digital services.</p>
            </div>
          </div>
          <div
            className={`banking-unique-carousel-item ${
              currentSlide === 2 ? "active" : ""
            }`}
            id="item2"
          >
            <img src={two} alt="Second slide" />
            <div className="banking-unique-carousel-caption">
              <h3>Customer Experience</h3>
              <p>
                Enhancing customer interactions with innovative technologies.
              </p>
            </div>
          </div>
          <div
            className={`banking-unique-carousel-item ${
              currentSlide === 3 ? "active" : ""
            }`}
            id="item3"
          >
            <img src={three} alt="Third slide" />
            <div className="banking-unique-carousel-caption">
              <h3>Fraud Prevention</h3>
              <p>
                Safeguarding financial transactions with advanced security
                measures.
              </p>
            </div>
          </div>
          <div
            className={`banking-unique-carousel-item ${
              currentSlide === 4 ? "active" : ""
            }`}
            id="item4"
          >
            <img src={four} alt="Fourth slide" />
            <div className="banking-unique-carousel-caption">
              <h3>Financial Analytics</h3>
              <p>Leveraging data to drive strategic financial decisions.</p>
            </div>
          </div>
        </div>

        <div className="banking-unique-carousel-nav">
          <label htmlFor="slide1"></label>
          <label htmlFor="slide2"></label>
          <label htmlFor="slide3"></label>
          <label htmlFor="slide4"></label>
        </div>
      </div>

      <div className="banking-content">
        <h2>Banking Industry Solutions</h2>
        <p className="pink">Transforming Banking with Innovative Solutions</p>
        <p>
          At Amxsol, we understand the unique challenges and opportunities
          within the banking industry. Our comprehensive suite of solutions is
          designed to help banks navigate the complexities of the modern
          financial landscape, ensuring they stay ahead of the competition while
          providing exceptional service to their customers.
        </p>

        <h3>Our Services</h3>
        <div className="services-grid">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h4>Digital Banking Transformation</h4>
              </div>
              <div className="flip-card-back">
                <ul>
                  <li>Seamless Customer Experience</li>
                  <li>Mobile Banking</li>
                  <li>Omni-channel Integration</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h4>Risk Management and Compliance</h4>
              </div>
              <div className="flip-card-back">
                <ul>
                  <li>Regulatory Compliance</li>
                  <li>Fraud Detection and Prevention</li>
                  <li>Risk Assessment</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h4>Data Analytics and Insights</h4>
              </div>
              <div className="flip-card-back">
                <ul>
                  <li>Customer Analytics</li>
                  <li>Predictive Analytics</li>
                  <li>Performance Metrics</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h4>Cybersecurity Solutions</h4>
              </div>
              <div className="flip-card-back">
                <ul>
                  <li>Threat Intelligence</li>
                  <li>Secure Transactions</li>
                  <li>Incident Response</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h4>Financial Technology Integration</h4>
              </div>
              <div className="flip-card-back">
                <ul>
                  <li>Fintech Collaboration</li>
                  <li>API Management</li>
                  <li>Blockchain Technology</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h3>Why Choose Us?</h3>
        <p>
          <b className="pink">Expertise: </b> Our team of industry experts has
          deep knowledge and experience in the banking sector.
        </p>
        <p>
          <b className="pink">Innovation:</b> We leverage the latest
          technologies to deliver innovative solutions that drive business
          growth.
        </p>
        <p>
          <b className="pink">Customer-Centric Approach:</b> We prioritize our
          clients' needs, ensuring our solutions are tailored to their unique
          requirements.
        </p>
        <p>
          <b className="pink">Proven Track Record:</b> We have a history of
          successful projects and satisfied clients in the banking industry.
        </p>

        <h3>Case Studies</h3>
        <h4 className="cases">
          {" "}
          <b>Case Study 1:</b> Enhancing Customer Engagement
        </h4>
        <p>
          We helped a leading bank transform its customer engagement strategy
          through a comprehensive digital platform, resulting in a 30% increase
          in customer satisfaction and a 20% growth in digital transactions.
        </p>

        <h4 className="cases">
          <b>Case Study 2:</b> Strengthening Cybersecurity
        </h4>
        <p>
          Our advanced cybersecurity solutions enabled a regional bank to detect
          and prevent fraud in real-time, reducing fraud-related losses by 40%.
        </p>

        <h3>Get in Touch</h3>
        <p className="contact">
          {" "}
          <b>Ready to transform your banking operations?</b> 📞 Contact us ✉️
          today to learn how we can help you achieve your business goals.
        </p>
      </div>
    </div>
  );
};

export default Banking;
