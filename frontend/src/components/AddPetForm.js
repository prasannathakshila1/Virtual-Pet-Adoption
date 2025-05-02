import React, { useState } from 'react';

const AddPetForm = ({ onAddPet }) => {
  const [formData, setFormData] = useState({
    name: '',
    species: '',
    age: '',
    personality: '',
    mood: 'Happy'
  });
  
  const [formError, setFormError] = useState(null);

  const speciesOptions = [
    'Cat', 'Dog', 'Rabbit', 'Hamster', 'Bird', 
    'Fish', 'Turtle', 'Ferret', 'Lizard', 'Snake'
  ];
  
  const moodOptions = ['Happy', 'Excited', 'Sad'];

  const validateForm = () => {
    if (!formData.name || !formData.species || !formData.age || !formData.personality) {
      setFormError('Please fill in all fields');
      return false;
    }
    
    if (formData.name.length < 2) {
      setFormError('Name must be at least 2 characters long');
      return false;
    }
    
    if (isNaN(formData.age) || formData.age < 0) {
      setFormError('Age must be a positive number');
      return false;
    }
    
    setFormError(null);
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    onAddPet({ 
      ...formData, 
      age: parseInt(formData.age),
      adopted: false
    });
    
    setFormData({ 
      name: '', 
      species: '', 
      age: '', 
      personality: '',
      mood: 'Happy'
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 border border-blue-100">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">🐾</span>
        <h2 className="text-2xl font-bold text-blue-800">Add a New Pet</h2>
      </div>
      
      {formError && (
        <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
          <p>{formError}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pet Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors border p-2"
              placeholder="What's your pet's name?"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Species</label>
            <select
              value={formData.species}
              onChange={(e) => setFormData({ ...formData, species: e.target.value })}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors border p-2"
            >
              <option value="">Select a species</option>
              {speciesOptions.map(species => (
                <option key={species} value={species}>{species}</option>
              ))}
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Age (years)</label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors border p-2"
              placeholder="How old is your pet?"
              min="0"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Mood</label>
            <select
              value={formData.mood}
              onChange={(e) => setFormData({ ...formData, mood: e.target.value })}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors border p-2"
            >
              {moodOptions.map(mood => (
                <option key={mood} value={mood}>{mood}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Personality</label>
          <textarea
            value={formData.personality}
            onChange={(e) => setFormData({ ...formData, personality: e.target.value })}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors border p-2"
            placeholder="Describe your pet's personality..."
            rows="3"
          ></textarea>
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition transform hover:scale-105"
          >
            Add Pet
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPetForm;