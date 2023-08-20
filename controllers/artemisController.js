/*
Here we are creating a Node.js application and using the Express.js framework to create API routes for managing a collection of pets. The code defines routes for retrieving all pets, retrieving a single pet by its ID, creating a new pet, updating an existing pet, and deleting a pet. The routes use various functions from the imported modules for database queries and input validation.
*/

const express = require("express");
const pets = express.Router();
const {
  getAllPets,
  getPet,
  createPet,
  deletePet,
  updatePet,
} = require("../queries/pets");


// INDEX
// Route to retrieve all pets
pets.get("/", async (req, res) => {
  const allPets = await getAllPets();
  if (allPets[0]) {
    res.status(200).json(allPets);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
// Route to retrieve a specific pet by its ID
pets.get("/:id", async (req, res) => {
  const { id } = req.params;
  const pet = await getPet(id);
  if (pet) {
    res.json(pet);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
// Route to create a new pet
pets.post("/", async (req, res) => {
  try {
    const pets = await createPet(req.body);
    res.json(pets);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// UPDATE

// Route to update an existing pet by its ID
pets.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedPet = await updatePet(id, req.body);
  res.status(200).json(updatedPet);

});

// DELETE
// Route to delete a pet by its ID
pets.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedPet = await deletePet(id);
  if (deletedPet.id) {
    res.status(200).json(deletedPet);

  } else {
    res.status(404).json("We have not found your pet. 😿");
  }
});

module.exports = pets;

