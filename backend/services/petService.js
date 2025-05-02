const petModel = require('../models/petModel');
const { updatePetMood, updateAllPetMoods } = require('../utils/moodLogic');

const addPet = (petData) => {
  const pet = petModel.createPet(petData);
  return updatePetMood(pet);
};

const getAllPets = () => {
  const pets = petModel.findAllPets();
  return updateAllPetMoods(pets);
};

const getPetById = (id) => {
  const pet = petModel.findPetById(id);
  return pet ? updatePetMood(pet) : null;
};

const updatePetProfile = (id, petData) => {
  const pet = petModel.updatePet(id, petData);
  return pet ? updatePetMood(pet) : null;
};

const adoptPet = (id) => {
  const pet = petModel.adoptPet(id);
  return pet ? updatePetMood(pet) : null;
};

const deletePet = (id) => petModel.deletePet(id);

const filterPetsByMood = (mood) => {
  const pets = petModel.filterPetsByMood(mood);
  return updateAllPetMoods(pets);
};

module.exports = {
  addPet,
  getAllPets,
  getPetById,
  updatePetProfile,
  adoptPet,
  deletePet,
  filterPetsByMood,
};