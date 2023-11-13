/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const StarRating = ({ rating }) => {
    const roundedRating = Math.round(rating * 5) / 4; // Redondear la calificación a los cuartos más cercanos
    const stars = Array.from({ length: 5 }, (_, index) => {
      const starValue = index + 0.25;
      const isFilled = roundedRating >= starValue;
  
      return (
        <span key={index} className={isFilled ? 'star-filled' : 'star-empty'}>
          ★
        </span>
      );
    });
  
    return <div className="star-rating">{stars}</div>;
  };

export default StarRating