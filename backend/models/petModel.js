let pets = [];
let idCounter = 1;

const createPet = (petData) => {
  const pet = {
    id: idCounter++,
    name: petData.name,
    species: petData.species,
    age: petData.age,
    personality: petData.personality,
    mood: 'Happy',
    adopted: false,
    adoption_date: null,
    created_at: new Date(),
  };
  pets.push(pet);
  return pet;
};

const findAllPets = () => pets;

const findPetById = (id) => pets.find((pet) => pet.id === parseInt(id));

const updatePet = (id, petData) => {
  const pet = findPetById(id);
  if (pet) {
    Object.assign(pet, petData);
    return pet;
  }
  return null;
};

const adoptPet = (id) => {
  const pet = findPetById(id);
  if (pet) {
    pet.adopted = true;
    pet.adoption_date = new Date();
    return pet;
  }
  return null;
};

const deletePet = (id) => {
  const index = pets.findIndex((pet) => pet.id === parseInt(id));
  if (index !== -1) {
    pets.splice(index, 1);
    return true;
  }
  return false;
};

const filterPetsByMood = (mood) => pets.filter((pet) => pet.mood === mood);

module.exports = {
  createPet,
  findAllPets,
  findPetById,
  updatePet,
  adoptPet,
  deletePet,
  filterPetsByMood,
};