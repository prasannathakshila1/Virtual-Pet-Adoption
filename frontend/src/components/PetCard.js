import React, { useState } from 'react';

const PetCard = ({ pet, onUpdate, onAdopt, onDelete }) => {
  // For debugging
  console.log('Rendering PetCard with pet:', pet);

  const [isEditing, setIsEditing] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [formData, setFormData] = useState({
    name: pet.name || '',
    species: pet.species || '',
    age: pet.age || 0,
    personality: pet.personality || '',
    mood: pet.mood || 'Happy'
  });

  // Updated mood configurations with emojis
  const moodConfig = {
    Happy: {
      color: 'bg-green-50 border-green-500',
      emoji: '😊',
      gradientBg: 'from-green-400 to-green-600'
    },
    Excited: {
      color: 'bg-yellow-50 border-yellow-500',
      emoji: '🤩',
      gradientBg: 'from-yellow-400 to-yellow-600'
    },
    Sad: {
      color: 'bg-blue-50 border-blue-500',
      emoji: '😢',
      gradientBg: 'from-blue-400 to-blue-600'
    }
  };

  const moodData = moodConfig[pet.mood] || {
    color: 'bg-gray-50 border-gray-500',
    emoji: '😐',
    gradientBg: 'from-gray-400 to-gray-600'
  };

  // Pet species emoji mapping
  const speciesEmoji = {
    Cat: '🐱',
    Dog: '🐶',
    Rabbit: '🐰',
    Hamster: '🐹',
    Bird: '🐦',
    Fish: '🐠',
    Turtle: '🐢',
    Ferret: '🐹',
    Lizard: '🦎',
    Snake: '🐍',
  };

  // Get pet emoji or use default
  const getPetEmoji = () => {
    const defaultEmoji = '🐾';
    if (!pet.species) return defaultEmoji;
    
    const speciesLower = pet.species.toLowerCase();
    
    for (const [key, emoji] of Object.entries(speciesEmoji)) {
      if (speciesLower.includes(key.toLowerCase())) {
        return emoji;
      }
    }
    
    return defaultEmoji;
  };

  const handleUpdate = () => {
    onUpdate(pet.id, formData);
    setIsEditing(false);
  };

  const handleConfirmDelete = () => {
    setShowConfirmDelete(true);
  };

  const executeDelete = () => {
    onDelete(pet.id);
    setShowConfirmDelete(false);
  };

  if (!pet || !pet.id) {
    return <div className="border rounded-xl p-4 bg-red-50">Invalid pet data</div>;
  }

  return (
    <div className={`border-2 rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${moodData.color} h-full flex flex-col`}>
      {/* Card Header with Mood */}
      <div className={`bg-gradient-to-r ${moodData.gradientBg} text-white p-3 flex justify-between items-center`}>
        <div className="flex items-center">
          <span className="text-2xl mr-2">{moodData.emoji}</span>
          <span className="font-semibold">{pet.mood}</span>
        </div>
        <div>
          {pet.adopted && (
            <span className="inline-block bg-white text-green-600 text-xs font-bold px-3 py-1 rounded-full">
              Adopted
            </span>
          )}
        </div>
      </div>

      {isEditing ? (
        <div className="p-5 flex-grow">
          <h3 className="text-lg font-semibold mb-3">Edit Pet</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Species</label>
              <input
                type="text"
                value={formData.species}
                onChange={(e) => setFormData({ ...formData, species: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Age</label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Personality</label>
              <input
                type="text"
                value={formData.personality}
                onChange={(e) => setFormData({ ...formData, personality: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mood</label>
              <select
                value={formData.mood}
                onChange={(e) => setFormData({ ...formData, mood: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Happy">Happy</option>
                <option value="Excited">Excited</option>
                <option value="Sad">Sad</option>
              </select>
            </div>
          </div>
          <div className="mt-4 flex justify-end space-x-2">
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdate}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </div>
      ) : showConfirmDelete ? (
        <div className="p-5 flex-grow flex flex-col items-center justify-center text-center">
          <div className="text-red-600 text-5xl mb-3">⚠️</div>
          <h3 className="text-lg font-bold mb-2">Delete {pet.name}?</h3>
          <p className="text-gray-600 mb-4">This action cannot be undone.</p>
          <div className="flex space-x-3">
            <button
              onClick={() => setShowConfirmDelete(false)}
              className="px-4 py-2 bg-gray-200 rounded-md text-gray-800 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={executeDelete}
              className="px-4 py-2 bg-red-600 rounded-md text-white hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Pet Avatar */}
          <div className="flex justify-center p-4">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-5xl shadow-inner">
              {getPetEmoji()}
            </div>
          </div>

          {/* Pet Details */}
          <div className="px-5 pb-5 flex-grow">
            <h2 className="text-2xl font-bold text-center mb-3">{pet.name}</h2>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Species:</span>
                <span className="font-medium">{pet.species}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Age:</span>
                <span className="font-medium">{pet.age} {pet.age === 1 ? 'year' : 'years'}</span>
              </div>
              <div className="mt-2">
                <span className="text-gray-600 block">Personality:</span>
                <p className="italic text-gray-700 mt-1">"{pet.personality}"</p>
              </div>
              {pet.adoption_date && (
                <div className="mt-2">
                  <span className="text-gray-600 block">Adopted on:</span>
                  <p className="text-gray-700 mt-1">{new Date(pet.adoption_date).toLocaleDateString()}</p>
                </div>
              )}
            </div>
          </div>

          {/* Card Actions */}
          <div className="px-5 pb-5 pt-2 bg-gray-50">
            <div className="flex flex-wrap gap-2">
              {!pet.adopted && (
                <button
                  onClick={() => onAdopt(pet.id)}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded-md transition-colors flex items-center justify-center"
                >
                  <span className="mr-1">🏠</span> Adopt
                </button>
              )}
              <button
                onClick={() => setIsEditing(true)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-md transition-colors flex items-center justify-center"
              >
                <span className="mr-1">✏️</span> Edit
              </button>
              <button
                onClick={handleConfirmDelete}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-md transition-colors flex items-center justify-center"
              >
                <span className="mr-1">🗑️</span> Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PetCard;