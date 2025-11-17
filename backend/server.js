const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const collegeRoutes = require('./routes/college');

const app = express();  
app.use(cors());
app.use(express.json());

// Routes
const schoolRoutes = require("./routes/schools");
app.use("/api/schools", require("./routes/schools"));
app.use('/api/colleges', collegeRoutes);

// Connect DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error:", err));

// Start server
app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});
