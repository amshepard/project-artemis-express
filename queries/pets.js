// Import the database configuration module
const db = require("../db/dbConfig.js");

// Retrieve all pets from the 'pets' table
const getAllPets = async () => {
  try {
    const allPets = await db.any("SELECT * FROM pets");
    return allPets;
  } catch (error) {
    return error;
  }
};

// Retrieve a single pet by its ID from the 'pets' table
const getPet = async (id) => {
  try {
    const onePet = await db.one("SELECT * FROM pets WHERE id=$1", id);
    return onePet;
  } catch (err) {
    return err;
  }
};

// Create a new pet by inserting a record into the 'pets' table
const createPet = async (pet) => {
  try {
    const newPet = await db.one(
      "INSERT INTO pets (name, type, breed, city, found_date) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [pet.name, pet.type, pet.breed, pet.city, pet.found_date]
    );

    return newPet;
  } catch (err) {
    return err;
  }
};

// Delete a pet by its ID from the 'pets' table
const deletePet = async (id) => {
  try {
    const deletedPet = await db.one(
      "DELETE FROM pets WHERE id = $1 RETURNING *",
      id
    );
    return deletedPet;
  } catch (err) {
    return err;
  }
};

// Update an existing pet's information by its ID in the 'pets' table
const updatePet = async (id, pet) => {
  try {
    const updatedPet = await db.one(
      "UPDATE pets SET name=$1, type=$2, breed=$3, city=$4, found_date=$5 WHERE id =$6 RETURNING *",
      [pet.name, pet.type, pet.breed, pet.city, pet.found_date, id]
    );
    return updatedPet;
  } catch (err) {
    return err;
  }
};

// Export all the defined functions to be used in other modules
module.exports = {
  getAllPets,
  getPet,
  createPet,
  deletePet,
  updatePet,
};