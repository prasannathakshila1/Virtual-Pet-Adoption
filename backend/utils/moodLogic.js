const updatePetMood = (pet) => {
    const now = new Date();
    const timeInSystem = (now - new Date(pet.created_at)) / (1000 * 60 * 60 * 24); // Days
  
    if (timeInSystem < 1) {
      pet.mood = 'Happy';
    } else if (timeInSystem <= 3) {
      pet.mood = 'Excited';
    } else {
      pet.mood = 'Sad';
    }
    return pet;
  };
  
  const updateAllPetMoods = (pets) => {
    return pets.map(updatePetMood);
  };
  
  module.exports = { updatePetMood, updateAllPetMoods };