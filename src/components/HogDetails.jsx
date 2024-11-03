// Import React library
import React from 'react';

// Create HogDetail component that accepts a 'hog' prop
function HogDetail({ hog }) {
return (
    
    // Main container div with 'hog-detail' class
    <div className="hog-detail">
      {/* Display the hog's specialty */}
    <p>Specialty: {hog.specialty}</p>

      {/* Display the hog's weight */}
    <p>Weight: {hog.weight}</p>

      {/* Display whether the hog is greased or not using ternary operator */}
    <p>Greased: {hog.greased ? "Yes" : "No"}</p>

      {/* Display highest medal using bracket notation because of spaces in property name */}
    <p>Highest Medal Achieved: {hog['highest medal achieved']}</p>
    </div>
);
}

// Export the component to be used in other files
export default HogDetail;
