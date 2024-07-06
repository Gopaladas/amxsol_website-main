import PhotoCard from './Photocard/PhotoCard';
import './css/ServicePage1.css';
import one from '../assets/1.jpg';
import two from '../assets/2.jpg';
import three from '../assets/3.jpg';
import four from '../assets/4.jpg';
import five from '../assets/5.jpg';
import six from '../assets/6.jpg';
import seven from '../assets/7.jpg';
import eight from '../assets/8.jpg';
import nine from '../assets/9.jpg';
import Service_main from '../assets/Service_main2.jfif';

const ServicePage1 = () =>{
const photos = [
    { src: one, heading: 'IT Staffing Services', content: 'Discover premier IT staffing solutions connecting you with top talent to streamline hiring and empower business success.' },
    { src: two, heading: 'IT Strategy & Reviews', content: 'Optimize IT infrastructure, align with business goals, and enhance performance to drive efficiency, innovation, and growth.' },
    { src: three, heading: 'IT AUDITS', content: 'Enhance security, compliance, and efficiency with expert IT audits that optimize infrastructure, mitigate risks, and strengthen operations.' },
    { src: four, heading: 'Projects & Change', content: 'Transform your business and achieve project goals with expert project management and seamless change management services.' },
    { src: five, heading: 'Technical Consulting', content: 'Empower your business and drive growth with tailored, expert technical consulting that transforms IT strategy and optimizes infrastructure.' },
    { src: six, heading: 'CLOUD SERVICES', content: 'Elevate your business with tailored cloud services, driving innovation, efficiency, and secure, scalable IT infrastructure transformation.' },
    { src: seven, heading: 'IT Risk Management', content: 'Manage IT risks effectively with comprehensive risk management services that mitigate threats and ensure strategic resilience.' },
    { src: eight, heading: 'OUTSOURCING', content: 'Maximize efficiency and focus on core functions with strategic outsourcing partnerships that enhance performance and innovation.' },
    { src: nine, heading: 'M&A Due Deligence', content: 'Ensure M&A success with comprehensive due diligence services that mitigate risks and maximize strategic outcomes.' }
  ];

  return(
    <div className='service-page-container'>
      <img src={Service_main} alt="" />
    <div className='initial-content'>
    <p>AMXSOL maintains a network of the most highly skilled IT professionals to help support all of our clients IT Application Development needs. We provide top level talent for Application Development services including the design, development, and delivery of software applications.</p>
    <br/>
    <p>Information Technology and business advisory services to meet your needs.</p>
    </div>
    <div className="photo-gallery">
        {photos.map((photo, index) => (
          <PhotoCard
            key={index}
            photo={photo.src}
            heading={photo.heading}
            content={photo.content}
          />
        ))}
        </div>
    </div>
  );
}
export default ServicePage1;