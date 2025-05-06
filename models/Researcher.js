// models/Researcher.js
const mongoose = require('mongoose');

const researcherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: String,
  email: { type: String, required: true, unique: true },
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }]
});

module.exports = mongoose.model('Researcher', researcherSchema);