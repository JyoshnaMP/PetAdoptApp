const express = require("express");
const router = express.Router();

const {
  addPet,
  getPetsByCategory,
} = require("../controllers/petController");

const authMiddleware = require("../middleware/authMiddleware");

// Add pet (Protected)
router.post("/add", authMiddleware, addPet);

// Get pets by category
router.get("/:category", getPetsByCategory);

module.exports = router;
