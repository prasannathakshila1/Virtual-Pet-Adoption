import React from 'react';
import PetCard from './PetCard';

const PetList = ({ pets, onUpdatePet, onAdoptPet, onDeletePet }) => {
  // Debugging log to verify pets are being received
  console.log('PetList rendering with pets:', pets);
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.isArray(pets) && pets.map((pet, index) => (
        <div 
          key={pet.id || index} 
          className="transform transition duration-300 hover:translate-y-2"
        >
          <PetCard
            pet={pet}
            onUpdate={onUpdatePet}
            onAdopt={onAdoptPet}
            onDelete={onDeletePet}
          />
        </div>
      ))}
    </div>
  );
};

export default PetList;