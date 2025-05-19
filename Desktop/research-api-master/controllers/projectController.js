const Project = require('../models/Project')

exports.getAllProjects = async (req, res) => { // Obtener todos los investigadores con sus proyectos
    try {
        const projects = await Researcher.find().populate('researchers') //
        res.status(200).json(projects)
    } catch (error) {
        console.error('Error al obtener proyectos:', error)
        res.status(500).json({ error: 'Error al obtener proyectos' })
    }
} 

exports.createProject = async (req,res) =>{
    try{
        const newProject = new Project(req.body) // Crear un nuevo proyecto     
        await newProject.save() //
        res.status(201).json(newProject) // Respuesta con el nuevo proyecto creado     
    }catch(error){
        console.error('Error al crear un  proyecto: ', error) 
        res.status(400).json({error:'Error al crear proyecto'}) // Error al crear proyecto

    }
}

exports.getProjectById = async (req,res) =>{
    try{
        const project = await Project.findById(req.params.id).populate('researchers')
        if(!project){
             return res.status(404).json({error: 'proyecto no encontrado'});
        }

       return  res.status(200).json(project)
    }catch(error){
        console.error('Error al obtener el proyecto solicitado',error)
        res.status(400).json({error: 'Error al obtener proyecto solicitado'})
    }

}

exports.updateProject = async (req, res) =>{
    try{
        const updateProject = await Project.findByIdAndUpdate(req.params, req.body,{
            new: true,
        }); // req.params es el id que esta en el dominio o link, req.body lo que el cliente mando en un json
        if(!updateProject){
           return res.status(404).json({error: 'Proyecto no encontrado'})
        }
        res.status(200).json(updateProject)
    }catch(error){
        console.error('Error al actualizar proyecto solicitado',error)
        res.status(400).json({error: 'Error al actualizar proyecto solicitado'})

    }
}

exports.deleteProject= async (req,res )=> { 
    try{
        
        const deleteProject = await Project.findByIdAndDelete(req.params.id)
        if(!deleteProject){
            return res.status(404).json({error: 'proyecto no encontrado'})
        }

        res.status(500).json({message: 'Investigador eliminado correctamente'})

    }catch(error){
        console.error('Error al eliminar proyecto: ',error);
        res.status(500).json({error: 'Error al eliminar proyecto'})

    }
    
}
