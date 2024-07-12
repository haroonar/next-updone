"use client"
import React, { useState } from 'react';

const StarRating = () => {
  const [hoverStars, setHoverStars] = useState(0);
  const [selectedStars, setSelectedStars] = useState(0);
console.log('hoverStars', hoverStars)
  const handleHover = (numStars:number) => {
    setHoverStars(numStars);
  };

  const handleMouseLeave = () => {
    setHoverStars(selectedStars); // Restore hover state to selected stars
  };

  const handleClick = (numStars:number) => {
    setSelectedStars(numStars);
  };

  const getColorClass = (numStars:number) => {
    if (numStars <= hoverStars) {
      return 'text-orange-400'; // Change to orange when hovered
    } else {
      return 'text-white'; // Default fill color
    }
  };
  


  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`relative cursor-pointer ${getColorClass(index + 1)}`}
          onMouseEnter={() => handleHover(index + 1)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={17.5}
            width={17.5}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.46284 0.767578L12.1941 6.30075L18.3018 7.19349L13.8823 11.4981L14.9253 17.5792L9.46284 14.7066L4.00038 17.5792L5.04337 11.4981L0.623901 7.19349L6.73161 6.30075L9.46284 0.767578Z" stroke="black" strokeWidth="0.94282" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {/* Tooltip */}
          {hoverStars === index + 1 && (
            <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 mt-[-42px] ${hoverStars === 1 || hoverStars === 2  || hoverStars === 5 ? "min-w-24" : "min-w-52"}   text-orange-400 text-lg rounded px-2 py-1 opacity-100 transition-opacity duration-300 pointer-events-none`}>
          </div>
          
          )}
        </div>
      ))}
    </div>
  );
};

export default StarRating;
