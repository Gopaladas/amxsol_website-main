import React, { useState, useEffect } from "react";
import SubContent from "./SubContent";
import {
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaVoicemail,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.css";
import bgimg from "./video/background.mp4";

const Footer = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 1000);
  }, []);

  const [content] = useState([
    {
      title: "Company",
      subItems: ["About Us", "Careers", "Contact Us", "NewsRoom", "People"],
      links: ["/aboutus", "/carrer", "/contact", "/newsroom", "/"],
    },
    {
      title: "Solutions",
      subItems: [
        "AMXSOL Business Solutions",
        "AMXSOL IT Consulting",
        "AMXSOL Talent Services",
        "AMXSOL Digital",
        "AMXSOL Security",
        "AMXSOL MIT Services",
        "AMXSOL BPO",
        "AMXSOL Health Care",
        "AMXSOL Reality",
      ],
      links: ["/services", "/", "/talent", "/", "/", "/", "/", "/", "/"],
    },
    {
      title: "Programs",
      subItems: [
        "AMXSOL Foundation",
        "AMXSOL Academy",
        "AMXSOL IT Business School",
      ],
      links: ["/foundation", "/academy", "/"],
    },
    {
      title: "Support",
      subItems: [
        "Terms Of Use",
        "Privacy Policy",
        "Cookie Policy",
        "Site Map",
        "Legal",
        "PayNow",
      ],
      links: ["/", "/", "/", "/", "/", "/"],
    },
  ]);

  return (
    <footer className="footer relative z-0">
      <video autoPlay loop muted className="background-video rounded-lg">
        <source src={bgimg} type="video/mp4" />
      </video>

      <div className="footer-content grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 m-10 pl-3">
        {content.map((item, index) => (
          <SubContent
            key={index}
            title={item.title}
            subItems={item.subItems}
            links={item.links}
          />
        ))}
      </div>

      <div className="footer-content h-0.5 bg-green-100 m-10"></div>

      <div className="footer-icons flex justify-center space-x-5 py-2.5 mx-10 rounded-md">
        {/* <div className={`content1 ${showContent ? 'slide-in1' : ''}`}><a href="#"><FaLinkedin /></a></div> */}
        {/* <div className={`content1 ${showContent ? 'slide-in1' : ''}`}><a href="#"><FaFacebook /></a></div> */}
        {/* <div className={`content1 ${showContent ? 'slide-in1' : ''}`}><a href="#"><FaTwitter /></a></div> */}
        {/* <div className={`content2 ${showContent ? 'slide-in1' : ''}`}><a href="#"><FaWhatsapp /></a></div> */}
        {/* <div className={`content2 ${showContent ? 'slide-in1' : ''}`}><a href="#"><FaYoutube /></a></div> */}
        {/* <div className={`content2 ${showContent ? 'slide-in1' : ''}`}><a href="#"><FaVoicemail /></a></div> */}

        {/* <div className="cardf">
            <div className="background"></div>
                    <div className="logo">
                        Socials
                      </div>

                <a href="#"><div className="box box1"><span className="icon">
                </span></div></a>

                <a href="##"><div className="box box2"> <span className="icon">
                </span></div></a>

                <a href="###"><div className="box box3"><span className="icon">
                </span></div></a>

                <a href="###"><div className="box box4"><span className="icon">
                </span></div></a>

                <a href="###"><div className="box box5"><span className="icon">
                </span></div></a>

                <a href="#"><div className="box box6"><span className="icon">
                <FaVoicemail  color="black"/>
                </span></div></a>

            </div>
        </div> */}

        <div className="card_i flex">
          <a
            href="https://www.linkedin.com/company/amxsol"
            className="socialContainer containerOne"
          >
            <FaLinkedin color="black" />
          </a>

          <a
            href="https://www.facebook.com/amxsol"
            class="socialContainer containerTwo"
          >
            <FaFacebook color="black" />
          </a>

          <a href="https://x.com/amxsol" class="socialContainer containerThree">
            <FaTwitter color="black" />
          </a>

          {/* <a href="https://whatsapp.com/channel/0029Vad8BxA1dAwCpJZtys2V"> */}
          <a
            href="https://whatsapp.com/channel/0029Vad8BxA1dAwCpJZtys2V"
            class="socialContainer containerFour"
          >
            <FaWhatsapp color="black" />
          </a>

          <a
            href="https://www.youtube.com/@amxsol"
            class="socialContainer containerFive"
          >
            <FaYoutube color="black" />
          </a>

          <a href="#" class="socialContainer containerOne">
            <FaInstagram color="black" />
          </a>
        </div>
      </div>
      <div className="copyright-container  text-center py-3 text-sm text-white m-10">
        COPYRIGHT &copy; 2022 - 2024 ,AMXSOL ALL RIGHTS RESERVED PRIVACY POLICY.
        All rights reserved.
      </div>

      <div className="h-[30px]"></div>
    </footer>
  );
};

export default Footer;
