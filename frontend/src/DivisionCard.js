import React, { useState, useEffect } from 'react';
import { checkFollowStatus } from './mockApi'; // Ensure this import path is correct

const DivisionCard = ({ title, tagline, link }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  const handleFollowClick = () => {
    window.open(link, '_blank');
    setCheckingStatus(true);
    setTimeout(() => {
      checkFollowStatus(link).then((response) => {
        setIsFollowing(response.isFollowing);
        setCheckingStatus(false);
      });
    }, 1000); // Simulate the time taken to follow
  };

  useEffect(() => {
    checkFollowStatus(link).then((response) => {
      setIsFollowing(response.isFollowing);
      setCheckingStatus(false);
    });
  }, [link]);

  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white max-w-sm mx-auto">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-700 mt-2">{tagline}</p>
      {title.includes('Instagram') ? (
        <button
          onClick={() => window.open(link, '_blank')}
          className="mt-4 px-4 py-2 rounded bg-pink-500 text-white flex items-center transition-colors duration-300 hover:bg-pink-700"
        >
          Visit
        </button>
      ) : (
        <button
          onClick={handleFollowClick}
          className={`mt-4 px-4 py-2 rounded ${isFollowing ? 'bg-gray-400' : 'bg-blue-500'} text-white flex items-center transition-colors duration-300 hover:bg-blue-700 disabled:opacity-50`}
          disabled={checkingStatus}
        >
          {isFollowing ? (
            <>
              Following <span className="ml-2">&#10003;</span>
            </>
          ) : (
            'Follow'
          )}
        </button>
      )}
    </div>
  );
};

export default DivisionCard;
