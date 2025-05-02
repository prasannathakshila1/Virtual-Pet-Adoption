import React, { useState, useEffect } from 'react';
import PetList from '../components/PetList';
import AddPetForm from '../components/AddPetForm';
import FilterBar from '../components/FilterBar';
import Layout from '../components/Layout';
import { getAllPets, addPet, updatePet, adoptPet, deletePet, filterPetsByMood } from '../services/api';

const HomePage = () => {
  const [pets, setPets] = useState([]);
  const [filterMood, setFilterMood] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    fetchPets();
  }, [filterMood]);

  const fetchPets = async () => {
    try {
      const data = filterMood
        ? await filterPetsByMood(filterMood)
        : await getAllPets();
      setPets(data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  const handleAddPet = async (petData) => {
    try {
      await addPet(petData);
      fetchPets();
      setIsFormVisible(false);
    } catch (error) {
      console.error('Error adding pet:', error);
    }
  };

  const handleUpdatePet = async (id, petData) => {
    try {
      await updatePet(id, petData);
      fetchPets();
    } catch (error) {
      console.error('Error updating pet:', error);
    }
  };

  const handleAdoptPet = async (id) => {
    try {
      await adoptPet(id);
      fetchPets();
    } catch (error) {
      console.error('Error adopting pet:', error);
    }
  };

  const handleDeletePet = async (id) => {
    try {
      await deletePet(id);
      fetchPets();
    } catch (error) {
      console.error('Error deleting pet:', error);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-blue-700 text-white rounded-lg shadow-xl mb-10 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">Find Your Perfect Companion</h1>
            <p className="text-xl mb-6">Adopt a virtual pet today and bring joy to your digital life!</p>
            <button 
              onClick={() => setIsFormVisible(!isFormVisible)} 
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105 w-full md:w-auto"
            >
              {isFormVisible ? "Hide Form" : "Add a New Pet"}
            </button>
          </div>
          <div className="md:w-1/2 bg-blue-600 p-4 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 transform -rotate-6">
              <div className="bg-white rounded-lg p-2 shadow-md transform rotate-3">
                <div className="h-32 bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 text-6xl">🐶</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-2 shadow-md transform -rotate-3">
                <div className="h-32 bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 text-6xl">🐱</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-2 shadow-md transform rotate-6">
                <div className="h-32 bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 text-6xl">🐰</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-2 shadow-md transform -rotate-6">
                <div className="h-32 bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 text-6xl">🐹</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      {isFormVisible && (
        <div className="mb-8 animate-fade-in">
          <AddPetForm onAddPet={handleAddPet} />
        </div>
      )}
      
      {/* Filter and Pet List Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Available Pets</h2>
          <FilterBar onFilterChange={setFilterMood} />
        </div>
        
        {pets.length > 0 ? (
          <PetList
            pets={pets}
            onUpdatePet={handleUpdatePet}
            onAdoptPet={handleAdoptPet}
            onDeletePet={handleDeletePet}
          />
        ) : (
          <div className="text-center py-12 text-gray-500">
            <p className="text-xl">No pets found matching your criteria</p>
            <p className="mt-2">Try changing your filter or add a new pet</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;