const mongoose = require('mongoose'); // Importamos mongoose para crear el esquema del modelo 

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  startDate: { type: Date, default: Date.now },
  endDate: Date,
  researchers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Researcher' }] // Referencia al modelo Researcher
});

module.exports = mongoose.model(`Project`, projectSchema); // Exportamos el modelo Project