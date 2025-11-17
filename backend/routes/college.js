// backend/routes/college.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/collegeController');

router.post('/add', controller.addCollege);      // POST /api/colleges/add
router.get('/', controller.getColleges);        // GET /api/colleges?state=&district=
router.get('/states', controller.getStates);   // GET /api/colleges/states
router.get('/districts', controller.getDistricts);  // GET /api/colleges/districts?state=...
router.get('/categories', controller.getCategories); // 
router.get('/:id', controller.getCollegeById); // GET /api/colleges/:id


// router.get("/", async (req, res) => {
//   const { category } = req.query;

//   let filter = {};

//   if (category && category !== "All") {
//     filter.category = category;
//   }

//   try {
//     const colleges = await College.find(filter);
//     res.json(colleges);
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// });



module.exports = router;
