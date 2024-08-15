// src/components/StarRating.js
import React from 'react';

const StarRating = ({ rating }) => {
  // Number of full stars to display
  const fullStars = Math.floor(rating);
  // Number of half stars to display
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  // Number of empty stars to display
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="flex items-center">
      {/* Full Stars */}
      {Array(fullStars).fill(0).map((_, i) => (
        <svg key={`full-${i}`} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
        </svg>
      ))}
      {/* Half Star */}
      {halfStars === 1 && (
        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="half-star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half-star-gradient)"
            d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z"
          />
        </svg>
      )}
      {/* Empty Stars */}
      {Array(emptyStars).fill(0).map((_, i) => (
        <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
