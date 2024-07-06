import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PhotoCard.css';

const PhotoCard = ({ photo, heading, content, index, isExpanded, handleExpand }) => {
  const navigate = useNavigate();

  const renderContent = () => {
    if (typeof content === 'string' && content.includes('. ')) {
      return (
        <ul>
          {content.split('. ').map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      );
    }
    return <p>{content}</p>;
  };

  return (
    <div className={`photo-card ${isExpanded ? 'expanded' : ''}`} onClick={() => handleExpand(index)}>
      <img src={photo} alt={heading} className="photo" />
      <div className={`overlay ${isExpanded ? 'show' : ''}`}>
        <br /><br />
        <div className={`content ${isExpanded ? 'show' : ''}`}>
          {renderContent()}
        </div>
        <div className="heading">{heading}</div>
      </div>
      <button className="expand-btn" onClick={(e) => { e.stopPropagation(); handleExpand(index); }}>
        {isExpanded ? '▼' : '▲'}
      </button>
    </div>
  );
};

export default PhotoCard;
