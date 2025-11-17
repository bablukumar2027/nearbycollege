// backend/models/College.js
const mongoose = require('mongoose');

const CollegeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  state: { type: String, required: true },
  district: { type: String, required: true },
  address: String,

  // existing
  programs: [String],
  cutoffs: Object, // e.g. {BSc: 85, BA: 70}
  medium: String, // e.g. 'English', 'Hindi'
  facilities: [String],

  // geolocation
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], default: [0, 0] } // [lng, lat]
  },

  // NEW fields (per choice A)
  category: String,             // e.g. 'Engineering', 'Arts', 'Medical'
  institutionType: String,     // e.g. 'Government', 'Semi-Govt', 'Private'
  locationType: String,        // string label like 'City/Town/Village'
  coursesOffered: [String],    // e.g. ['UG', 'PG', 'Diploma']
  primaryAdmissionExam: String,// e.g. 'NEET', 'JEE Main', 'Merit', 'CUET'

  // ratings (optional)
  averageRating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },

}, { timestamps: true });

CollegeSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('College', CollegeSchema);
