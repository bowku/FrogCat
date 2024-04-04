import React from 'react';
import frogIcon from '../images/frog.png'; // Import the frog icon image
import './ScrollingText.css';

const ScrollingText = () => {
  const text = "It's a Frog, It's a Cat, It's a Frog Cat";
  const repeatCount = 5; // Adjust the number of repetitions as needed

  // Dynamically generate repeated text elements with frog icon next to each one
  const textWithFrogIcon = Array.from({ length: repeatCount }, (_, index) => (
    <React.Fragment key={index}>
      <p>{text}</p>
      <img src={frogIcon} alt="Frog Icon" className="frog-icon" /> {/* Add the frog icon */}
    </React.Fragment>
  ));

  return (
    <div className="scrolling-text-container">
      <div className="scrolling-text">
        {textWithFrogIcon}
        {textWithFrogIcon} {/* Duplicate the text to ensure smooth transition at the end */}
      </div>
    </div>
  );
};

export default ScrollingText;
