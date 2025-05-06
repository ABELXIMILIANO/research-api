const Researcher = require('../models/Researcher');
require('../models/Project'); // Importamos el modelo Project para que funcione el populate

// Obtener todos los investigadores con sus proyectos
exports.getAllResearchers = async (req, res) => {
  try {
    const researchers = await Researcher.find().populate('projects');
    res.status(200).json(researchers);
  } catch (error) {
    console.error('Error al obtener investigadores:', error);
    res.status(500).json({ error: 'Error al obtener investigadores' });
  }
};

// Crear un nuevo investigador
exports.createResearcher = async (req, res) => {
  try {
    const newResearcher = new Researcher(req.body);
    await newResearcher.save();
    res.status(201).json(newResearcher);
  } catch (error) {
    console.error('Error al crear investigador:', error);
    res.status(400).json({ error: error.message });
  }
};

// Obtener un investigador por ID con sus proyectos
exports.getResearcherById = async (req, res) => {
  try {
    const researcher = await Researcher.findById(req.params.id).populate('projects');
    if (!researcher) {
      return res.status(404).json({ error: 'Investigador no encontrado' });
    }
    res.status(200).json(researcher);
  } catch (error) {
    console.error('Error al obtener el investigador:', error);
    res.status(500).json({ error: 'Error al obtener el investigador' });
  }
};

// Actualizar investigador
exports.updateResearcher = async (req, res) => {
  try {
    const updatedResearcher = await Researcher.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedResearcher) {
      return res.status(404).json({ error: 'Investigador no encontrado' });
    }
    res.status(200).json(updatedResearcher);
  } catch (error) {
    console.error('Error al actualizar el investigador:', error);
    res.status(500).json({ error: 'Error al actualizar el investigador' });
  }
};

// Eliminar investigador
exports.deleteResearcher = async (req, res) => {
  try {
    const deletedResearcher = await Researcher.findByIdAndDelete(req.params.id);
    if (!deletedResearcher) {
      return res.status(404).json({ error: 'Investigador no encontrado' });
    }
    res.status(200).json({ message: 'Investigador eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el investigador:', error);
    res.status(500).json({ error: 'Error al eliminar el investigador' });
  }
};