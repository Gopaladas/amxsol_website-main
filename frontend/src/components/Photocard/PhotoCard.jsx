// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './PhotoCard.css';

// const PhotoCard = ({ photo, heading, content }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const navigate = useNavigate();

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const redirectToPage = (e) => {
//     e.stopPropagation();
//     switch (heading) {
//       case 'IT Staffing Services':
//         navigate('/IT-Staff');
//         break;
//       case 'IT Strategy & Reviews':
//         navigate('/IT-Strategy');
//         break;
//       case 'IT AUDITS':
//         navigate('/IT-Audits');
//         break;
//       case 'Projects & Change':
//         navigate('/Project');
//         break;
//       case 'Technical Consulting':
//         navigate('/Technical');
//         break;
//       case 'CLOUD SERVICES':
//           navigate('/Cloud');
//           break;
//       case 'IT Risk Management':
//         navigate('/IT-Risk');
//         break;
//       case 'OUTSOURCING':
//         navigate('/Outsourcing');
//         break;
//       case 'M&A Due Deligence':
//         navigate('/M&A');
//         break;
//       default:
//         navigate('/');
//     }
//   };

//   return (
//     <div className={`photo-card ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
//       <img src={photo} alt="Sample Image" className="photo" />
//       <div className="heading">{heading}</div>
//       <div className={`overlay ${isExpanded ? 'show' : ''}`}>
//         <br /><br />
//         <div className={`content ${isExpanded ? 'show' : ''}`}>{content}</div>
//         <br />
//         <div className='view-content-page' onClick={redirectToPage}>
//           <b>VIEW</b> {heading} ►
//         </div>
//       </div>
//       <button className="expand-btn" onClick={toggleExpand}>
//         {isExpanded ? '▼' : '▲'}
//       </button>
//     </div>
//   );
// };

// export default PhotoCard;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./PhotoCard.css";

const PhotoCard = ({
  photo,
  heading,
  content,
  index,
  isExpanded,
  handleExpand,
}) => {
  const navigate = useNavigate();

  const redirectToPage = (e) => {
    e.stopPropagation();
    switch (heading) {
      case "IT Staffing Services":
        navigate("/IT-Staff");
        break;
      case "IT Strategy & Reviews":
        navigate("/IT-Strategy");
        break;
      case "IT AUDITS":
        navigate("/IT-Audits");
        break;
      case "Projects & Change":
        navigate("/Project");
        break;
      case "Technical Consulting":
        navigate("/Technical");
        break;
      case "CLOUD SERVICES":
        navigate("/Cloud");
        break;
      case "IT Risk Management":
        navigate("/IT-Risk");
        break;
      case "OUTSOURCING":
        navigate("/Outsourcing");
        break;
      case "M&A Due Deligence":
        navigate("/M&A");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <div
      className={`photo-card ${isExpanded ? "expanded" : ""}`}
      onClick={() => handleExpand(index)}
    >
      <img src={photo} alt="Sample Image" className="photo" />
      <div className="heading">{heading}</div>
      <div className={`overlay ${isExpanded ? "show" : ""}`}>
        <br />
        <br />
        <div className={`content ${isExpanded ? "show" : ""}`}>{content}</div>
        <br />
        <div className="view-content-page" onClick={redirectToPage}>
          <b>VIEW</b> {heading} ►
        </div>
      </div>
      <button
        className="expand-btn"
        onClick={(e) => {
          e.stopPropagation();
          handleExpand(index);
        }}
      >
        {isExpanded ? "▼" : "▲"}
      </button>
    </div>
  );
};

export default PhotoCard;
