import * as projectService from '../services/project.service.js';

export const createProject = async (req,res)=>{
    try{
        const project = await projectService.createProject({
            ...req.body,
            userId  : req.user._id
        });
    res.status(201).json({
        success : true,
        data : project,
        message : ' project created successfully'
    })
    }catch(err){
        console.log(`Error in controller :- ${err}`);
    }
}

export const getProjects = async (req,res)=>{
    const projects = await projectService.getAllProject(req.user._id);
    res.json(projects);
}

export const getProject = async (req,res)=>{
    const project = await projectService.getProjectById(req.params.id,req.user._id);
    if(!project){
        res.status(404).json({message : ' Project Not found'});
    }
    res.json(project);
}

export const updateProject = async (req,res)=>{
    const updateProject = await projectService.updateProject(req.params.id,req.user._id,req.body);
    if(!updateProject){
        res.status(404).json({message : 'project not found'})
    }
    res.json(updateProject);
}
export const deleteProject = async(req,res)=>{
    const deleteProject = await projectService.deleteProject(req.params.id,req.user._id)
    if(!deleteProject){
        res.status(404).json({message : ' project not found'});
    }
    res.json(deleteProject);
}
