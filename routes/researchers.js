// routes/researchers.js
const express = require('express');
const router = express.Router();
const researcherController = require('../controllers/researcherController');

router.get('/', researcherController.getAllResearchers);
router.get('/:id', researcherController.getResearcherById);
router.post('/', researcherController.createResearcher);
router.put('/:id', researcherController.updateResearcher);
router.delete('/:id', researcherController.deleteResearcher);

module.exports = router;