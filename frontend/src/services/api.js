const API_URL = 'http://localhost:5000/pets';

export const getAllPets = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const addPet = async (petData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(petData),
  });
  return response.json();
};

export const getPetById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export const updatePet = async (id, petData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(petData),
  });
  return response.json();
};

export const adoptPet = async (id) => {
  const response = await fetch(`${API_URL}/${id}/adopt`, {
    method: 'PATCH',
  });
  return response.json();
};

export const deletePet = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};

export const filterPetsByMood = async (mood) => {
  const response = await fetch(`${API_URL}/filter?mood=${mood}`);
  return response.json();
};