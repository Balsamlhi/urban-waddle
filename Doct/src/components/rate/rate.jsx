import React from 'react';
import styles from './rate.module.css';

const Rate = ({ value }) => {
  // Convert the value to a number and ensure it's within the range [0, 5]
  const rateValue = Math.max(0, Math.min(5, parseInt(value, 10)));

  return (
    <div className={styles.rating}>
      {[1, 2, 3, 4, 5].map((index) => (
        <span key={index}>
          <input
            type="radio"
            id={`star-${index}`}
            name="star-radio"
            value={`star-${index}`}
            checked={index <= rateValue} // Check the stars up to the rateValue
            readOnly // Make the radio buttons read-only
          />
          <label htmlFor={`star-${index}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
              ></path>
            </svg>
          </label>
        </span>
      ))}
    </div>
  );
}

export default Rate;
