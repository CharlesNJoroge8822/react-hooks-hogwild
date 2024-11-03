// Import necessary dependencies and components
import React, { useState } from 'react';
import HogTile from './HogTile';
import HogDetail from './HogDetails';

// HogList component that accepts hogs array, filterGreased boolean, and sortBy string as props
function HogList({ hogs, filterGreased, sortBy }) {
    // State for tracking which hog is selected for detail view
    const [selectedHog, setSelectedHog] = useState(null);
    // State for tracking which hogs should be hidden from view
    const [hiddenHogs, setHiddenHogs] = useState([]);

    // Toggle hog selection when clicked
    const handleHogClick = (hog) => {
        setSelectedHog(selectedHog === hog ? null : hog);  // If same hog clicked, deselect it
    };

    // Add a hog to the hidden list
    const hideHog = (hogName) => {
        setHiddenHogs([...hiddenHogs, hogName]);  // Add new hog name to hidden list
    };

    // Create a copy of hogs array to manipulate
    let displayedHogs = [...hogs];

    // Filter greased hogs if filterGreased is true
    if (filterGreased) {
        displayedHogs = displayedHogs.filter(hog => hog.greased);
    }

    // Apply filters and sorting
    displayedHogs = displayedHogs
        // Remove hidden hogs
        .filter(hog => !hiddenHogs.includes(hog.name))
        // Sort by name or weight based on sortBy prop
        .sort((a, b) => {
            if (sortBy === 'name') return a.name.localeCompare(b.name);
            return a.weight - b.weight;
        });

    // Render the component
    return (
        <div className="hog-list">
            {/* Map through filtered and sorted hogs */}
            {displayedHogs.map(hog => (
                <div key={hog.name}>
                    {/* Render HogTile component with click and hide handlers */}
                    <HogTile 
                        hog={hog} 
                        onClick={() => handleHogClick(hog)}
                        onHide={() => hideHog(hog.name)}
                    />
                    {/* Show HogDetail component only for selected hog */}
                    {selectedHog === hog && <HogDetail hog={hog} />}
                </div>
            ))}
        </div>
    );
}

export default HogList;