require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const researcherRoutes = require('./routes/researchers');
const projectRoutes = require('./routes/projects')
app.use('/researchers', researcherRoutes);
app.use('/projects', projectRoutes);

const PORT = process.env.PORT || 3000;

console.log('Conectando a MongoDB...');

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('✅ Conectado a MongoDB');
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('❌ Error al conectar a MongoDB:', err.message);
});