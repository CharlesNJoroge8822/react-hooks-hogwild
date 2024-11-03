// Import necessary dependencies and components
import React, { useState } from 'react';
import HogList from './HogList';
import NewHogForm from './newHogForm';
import hogsData from '../porkers_data';
import '../index.css';

function App() {
    // State hooks for various app functionalities
    const [filterGreased, setFilterGreased] = useState(false);
    const [sortBy, setSortBy] = useState('name');
    const [showForm, setShowForm] = useState(false);
    const [hogs, setHogs] = useState(hogsData);

    // Handler for changing sort criteria
    const handleSort = (e) => {
        setSortBy(e.target.value);
    };

    // Handler for toggling greased filter
    const handleFilter = () => {
        setFilterGreased(!filterGreased);
    };

    // Handler for adding a new hog
    const handleAddHog = (newHog) => {
        setHogs(prev => [...prev, newHog]);
        setShowForm(false);  // Hide form after adding
    };

    return (
        <div className="App">
            <h1>Hogwarts</h1>
            
            {/* Control panel for filtering, sorting, and adding hogs */}
            <div className="controls">
                {/* Toggle filter button */}
                <button onClick={handleFilter}>
                    {filterGreased ? "Show All" : "Show Greased Only"}
                </button>
                
                {/* Sort dropdown */}
                <select onChange={handleSort}>
                    <option value="name">Sort by Name</option>
                    <option value="weight">Sort by Weight</option>
                </select>
                
                {/* Toggle form visibility button */}
                <button onClick={() => setShowForm(!showForm)}>
                    {showForm ? "Hide Form" : "Add New Hog"}
                </button>
            </div>
            
            {/* Conditional rendering of NewHogForm */}
            {showForm && <NewHogForm onAddHog={handleAddHog} />}
            
            {/* HogList component with necessary props */}
            <HogList 
                hogs={hogs} 
                filterGreased={filterGreased}
                sortBy={sortBy}
            />
        </div>
    );
}

export default App;