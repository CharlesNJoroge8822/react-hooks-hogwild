// Import necessary dependencies
import React, { useState } from 'react';

// NewHogForm component that accepts onAddHog function as a prop
function NewHogForm({ onAddHog }) {
  // Initialize form state with empty values
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    weight: '',
    'highest medal achieved': ''
  });

  // Handle changes in form inputs
  function handleChange(e) {
    setFormData({
      ...formData,                    // Spread existing form data
      [e.target.name]: e.target.value // Update the changed field
    });
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();  // Prevent default form submission behavior
    onAddHog({...formData, greased: false});  // Add new hog with greased set to false
    // Reset form to initial state
    setFormData({ 
      name: '', 
      image: '', 
      weight: '', 
      'highest medal achieved': '' 
    });
  }

  // Render form
  return (
    <form onSubmit={handleSubmit}>
      {/* Name input field */}
      <input 
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Hog name"
      />

      {/* Image URL input field */}
      <input 
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
      />

      {/* Weight input field (numeric) */}
      <input 
        name="weight"
        value={formData.weight}
        onChange={handleChange}
        placeholder="Weight"
        type="number"
      />

      {/* Medal selection dropdown */}
      <select 
        name="highest medal achieved"
        value={formData['highest medal achieved']}
        onChange={handleChange}
      >
        <option value="">Select medal</option>
        <option value="bronze">Bronze</option>
        <option value="silver">Silver</option>
        <option value="gold">Gold</option>
      </select>

      {/* Submit button */}
      <button>Add Hog</button>
    </form>
  );
}

export default NewHogForm;