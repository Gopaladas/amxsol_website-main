import React, { useState, useEffect } from "react";
import "./Newsroom.css";
import one from "../assets/Newsroom/1.webp";
import two from "../assets/Newsroom/2.png";
import three from "../assets/Newsroom/three.jpg";
import four from "../assets/Newsroom/4.jfif";

const Newsroom = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = currentSlide === 4 ? 1 : currentSlide + 1;
      setCurrentSlide(nextSlide);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="newsroom-unique-container relative top-[-30px]">
      <div className="newsroom-unique-carousel">
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

        <div className="newsroom-unique-carousel-inner">
          <div
            className={`newsroom-unique-carousel-item ${
              currentSlide === 1 ? "active" : ""
            }`}
            id="item1"
          >
            <img src={one} alt="First slide" />
            <div className="newsroom-unique-carousel-caption">
              <h3>New Product Launch</h3>
              <p>
                Introducing our latest product designed to enhance user
                experience.
              </p>
            </div>
          </div>
          <div
            className={`newsroom-unique-carousel-item ${
              currentSlide === 2 ? "active" : ""
            }`}
            id="item2"
          >
            <img src={two} alt="Second slide" />
            <div className="newsroom-unique-carousel-caption">
              <h3>Community Outreach</h3>
              <p>Learn about our initiatives supporting local communities.</p>
            </div>
          </div>
          <div
            className={`newsroom-unique-carousel-item ${
              currentSlide === 3 ? "active" : ""
            }`}
            id="item3"
          >
            <img src={three} alt="Third slide" />
            <div className="newsroom-unique-carousel-caption">
              <h3>Corporate Partnership</h3>
              <p>Announcing our strategic partnership to drive innovation.</p>
            </div>
          </div>
          <div
            className={`newsroom-unique-carousel-item ${
              currentSlide === 4 ? "active" : ""
            }`}
            id="item4"
          >
            <img src={four} alt="Fourth slide" />
            <div className="newsroom-unique-carousel-caption">
              <h3>Industry Recognition</h3>
              <p>Recognition for our commitment to excellence in technology.</p>
            </div>
          </div>
        </div>

        <div className="newsroom-unique-carousel-nav">
          <label htmlFor="slide1"></label>
          <label htmlFor="slide2"></label>
          <label htmlFor="slide3"></label>
          <label htmlFor="slide4"></label>
        </div>
      </div>
      <div className="news-content">
        <section className="news-unique">
          <h2>Latest News</h2>
          <p>
            Stay updated with the latest news and developments from our company.
            Here, you’ll find timely updates on our products, services, and
            community initiatives.
          </p>
          <ul>
            <li>New Service Launch</li>
            <li>Company Milestones</li>
            <li>Customer Success Stories</li>
          </ul>
        </section>

        <section className="resources-unique">
          <h2>Media Resources</h2>
          <p>
            Access a variety of resources for media professionals, including
            high-resolution images, logos, and fact sheets. Please contact our
            media relations team for additional materials.
          </p>
        </section>

        <section className="logos-images-unique">
          <h3>Logos and Images</h3>
          <p>
            Download our official logos and high-resolution images for use in
            your publications.
          </p>
        </section>

        <section className="fact-sheets-unique">
          <h3>Fact Sheets</h3>
          <p>
            Get detailed information about our company, products, and services.
          </p>
        </section>

        <section className="media-kits-unique">
          <h3>Media Kits</h3>
          <p>
            Download our comprehensive media kits for in-depth information about
            our latest projects and initiatives.
          </p>
        </section>

        <section className="additional-content">
          <h2>Additional Content</h2>
          <p>Explore more about our recent achievements and upcoming events.</p>
          <ul>
            <li>Event Highlights</li>
            <li>New Office Opening</li>
            <li>Technology Awards</li>
          </ul>
        </section>

        <section className="contact-unique">
          <h2>Contact Us</h2>
          <p>
            For media inquiries, please reach out to our media relations team.
          </p>
          <p>
            <strong>Email:</strong> info@amxsol.com
          </p>
          <p>
            <strong>Phone:</strong> +1 (215) 268-6168
          </p>
        </section>

        <footer className="footer-unique">
          <p>
            We are committed to providing timely and accurate information. If
            you have any questions or need further assistance, don't hesitate to
            contact us.
          </p>
          <p>
            <strong>Contact Us</strong>
          </p>
          <p>
            AMXSOL LLC | 1000 Northbrook Drive, Suite 100, Trevose PA 19053 USA
            | +1 (215) 268-6168 | info@amxsol.com |{" "}
            <a
              href="http://www.amxsol.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.amxsol.com
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Newsroom;
