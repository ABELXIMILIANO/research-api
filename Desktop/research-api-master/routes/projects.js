const express = require('express'); // es necesario llamar a express
const router = express.Router(); //nesito crear un ruta en este caso usamos router de express
const projectController = require('../controllers/projectController')


router.get('/',projectController.getAllProjects);
router.get('/:id',projectController.getProjectById);
router.post('/', projectController.createProject);
router.delete('/:id', projectController.deleteProject);
router.put('/id', projectController.updateProject)

module.exports = router;