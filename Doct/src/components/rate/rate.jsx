import React from 'react';
import styles from './rate.module.css'; // Make sure the path is correct

const Rate = ({ value}) => {
  return (
    <div className={styles.rating}>
      {[1, 2, 3, 4, 5].map((val) => (
        <React.Fragment key={val}>
          <input
            type="radio"
            id={`star-${val}`}
            name="star-radio"
            value={`star-${val}`}
            checked={value === val}
            // onChange={() => onChange(val)}
          />
          <label htmlFor={`star-${val}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
              ></path>
            </svg>
          </label>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Rate;
