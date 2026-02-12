const Pet = require("../models/Pet");

// ADD PET
exports.addPet = async (req, res) => {
  try {
    const { name, age, category, image } = req.body;

    const pet = new Pet({
      name,
      age,
      category,
      image,
      owner: req.user.id,
    });

    await pet.save();

    res.status(201).json({
      message: "Pet added successfully",
      pet,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// GET PETS BY CATEGORY
exports.getPetsByCategory = async (req, res) => {
  try {
    const pets = await Pet.find({
      category: req.params.category,
    });

    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
