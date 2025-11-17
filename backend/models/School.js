const mongoose = require("mongoose");

const SchoolSchema = new mongoose.Schema({
  state: { type: String, required: true },
  district: { type: String, required: true },
  category: { type: String, required: true }, // Primary, Secondary, Higher Secondary
  minClass: { type: Number, required: true },
  maxClass: { type: Number, required: true },
  name: { type: String, required: true },
  location: String,
  notes: String
});

module.exports = mongoose.model("School", SchoolSchema);
