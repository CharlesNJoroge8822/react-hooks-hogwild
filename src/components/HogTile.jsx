// Import React library
import React from 'react';

// HogTile component that accepts hog object, onClick handler, and onHide handler as props
function HogTile({ hog, onClick, onHide }) {
return (
    // Main container div that triggers onClick when clicked
    // className="hog-tile" for styling purposes
    <div className="hog-tile" onClick={onClick}>
      {/* Display hog name in h3 heading */}
    <h3>{hog.name}</h3>

      {/* Display hog image with alt text for accessibility */}
    <img src={hog.image} alt={hog.name} />

      {/* Hide button with click handler */}
    <button 
        onClick={(e) => {
          e.stopPropagation();  // Prevent click event from bubbling up to parent div
          onHide();             // Execute the hide function passed from parent
        }}
    >
        Hide
    </button>
    </div>
);
}

// Export the component for use in other files
export default HogTile;