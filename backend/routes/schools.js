const express = require("express");
const router = express.Router();
const School = require("../models/School");

// --------------------------------------------------------
// GET ALL STATES
// --------------------------------------------------------
router.get("/states", async (req, res) => {
  try {
    const states = await School.distinct("state");
    res.json(states.sort());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --------------------------------------------------------
// GET DISTRICTS BY STATE
// --------------------------------------------------------
router.get("/districts/:state", async (req, res) => {
  try {
    const districts = await School.distinct("district", {
      state: req.params.state
    });

    res.json(districts.sort());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --------------------------------------------------------
// GET CATEGORIES BY DISTRICT
// --------------------------------------------------------
router.get("/categories/:district", async (req, res) => {
  try {
    const categories = await School.distinct("category", {
      district: req.params.district
    });

    res.json(categories.sort());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --------------------------------------------------------
// MAIN FILTER ROUTE (Your existing code improved)
// --------------------------------------------------------
router.get("/", async (req, res) => {
  try {
    const { state, district, category, classNum } = req.query;

    const filters = {};

    if (state) filters.state = state;
    if (district) filters.district = district;
    if (category) filters.category = category;

    if (classNum) {
      filters.minClass = { $lte: Number(classNum) };
      filters.maxClass = { $gte: Number(classNum) };
    }

    const schools = await School.find(filters);
    res.json(schools);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// FILTER SCHOOLS
router.get("/filter", async (req, res) => {
  try {
    const { state, district, category, classNum } = req.query;

    const schools = await School.find({
      state,
      district,
      category,
      minClass: { $lte: Number(classNum) },
      maxClass: { $gte: Number(classNum) }
    });

    res.json(schools);
  } catch (err) {
    console.error("Filter error:", err);
    res.status(500).json({ error: "Failed to search schools. Please check your connection and try again." });
  }
});


module.exports = router;
