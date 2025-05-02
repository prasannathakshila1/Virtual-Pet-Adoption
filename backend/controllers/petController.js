const petService = require('../services/petService');

const addPet = (req, res) => {
  const pet = petService.addPet(req.body);
  res.status(201).json(pet);
};

const getAllPets = (req, res) => {
  const pets = petService.getAllPets();
  res.json(pets);
};

const getPetById = (req, res) => {
  const pet = petService.getPetById(req.params.id);
  if (pet) {
    res.json(pet);
  } else {
    res.status(404).json({ message: 'Pet not found' });
  }
};

const updatePet = (req, res) => {
  const pet = petService.updatePetProfile(req.params.id, req.body);
  if (pet) {
    res.json(pet);
  } else {
    res.status(404).json({ message: 'Pet not found' });
  }
};

const adoptPet = (req, res) => {
  const pet = petService.adoptPet(req.params.id);
  if (pet) {
    res.json({ message: 'Pet adopted successfully', pet });
  } else {
    res.status(404).json({ message: 'Pet not found' });
  }
};

const deletePet = (req, res) => {
  const success = petService.deletePet(req.params.id);
  if (success) {
    res.json({ message: 'Pet deleted successfully' });
  } else {
    res.status(404).json({ message: 'Pet not found' });
  }
};

const filterPetsByMood = (req, res) => {
  const pets = petService.filterPetsByMood(req.query.mood);
  res.json(pets);
};

module.exports = {
  addPet,
  getAllPets,
  getPetById,
  updatePet,
  adoptPet,
  deletePet,
  filterPetsByMood,
};