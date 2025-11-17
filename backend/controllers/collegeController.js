// backend/controllers/collegeController.js
const College = require("../models/College");

/* ---------------------------------------------------------
   📌 Add a New College
--------------------------------------------------------- */
exports.addCollege = async (req, res) => {
  try {
    const payload = req.body;

    if (!payload.name || !payload.state || !payload.district) {
      return res.status(400).json({
        success: false,
        message: "name, state and district are required",
      });
    }

    const college = new College(payload);
    await college.save();

    return res.json({
      success: true,
      message: "College added",
      data: college,
    });
  } catch (err) {
    console.error("addCollege error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};

/* ---------------------------------------------------------
   📌 Get Colleges (Filter by State, District, Category)
--------------------------------------------------------- */
exports.getColleges = async (req, res) => {
  try {
    const { state, district, category } = req.query;

    const q = {};

    if (state) q.state = state;
    if (district) q.district = district;

    // category filter
    if (category && category !== "All") {
      q.category = category;
    }

    const colleges = await College.find(q).sort({ name: 1 }).lean();

    return res.json({
      success: true,
      data: colleges,
    });
  } catch (err) {
    console.error("getColleges error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};

/* ---------------------------------------------------------
   📌 Get All States
--------------------------------------------------------- */
exports.getStates = async (req, res) => {
  try {
    const states = await College.distinct("state");
    return res.json({ success: true, data: states.sort() });
  } catch (err) {
    console.error("getStates error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};

/* ---------------------------------------------------------
   📌 Get Districts Based on Selected State
--------------------------------------------------------- */
exports.getDistricts = async (req, res) => {
  try {
    const state = req.query.state;

    if (!state) return res.json({ success: true, data: [] });

    const districts = await College.find({ state }).distinct("district");

    return res.json({
      success: true,
      data: districts.sort(),
    });
  } catch (err) {
    console.error("getDistricts error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};

/* ---------------------------------------------------------
   📌 Get All Categories
--------------------------------------------------------- */
exports.getCategories = async (req, res) => {
  try {
    const categories = await College.distinct("category");
    return res.json({ success: true, data: categories });
  } catch (err) {
    console.error("getCategories error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};

/* ---------------------------------------------------------
   📌 Get Single College by ID
--------------------------------------------------------- */
exports.getCollegeById = async (req, res) => {
  try {
    const college = await College.findById(req.params.id);

    if (!college)
      return res
        .status(404)
        .json({ success: false, message: "College not found" });

    return res.json({
      success: true,
      data: college,
    });
  } catch (err) {
    console.error("getCollegeById error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};
