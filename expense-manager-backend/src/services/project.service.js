import Project from '../models/project.model.js';

export const createProject  = async (data) => {
        return await Project.create(data)
}

export const getAllProject = async (userId)=>{
    return await Project.find({userId});
}

export const getProjectById = async (id,userId)=>{
    return await Project.findById({_id : id,userId})
}

export const updateProject = async (id,userId,data)=>{
    return await Project.findByIdAndUpdate({_id : id,userId},data,{new : true})
}

export const deleteProject = async (id,userId)=>{
    return await Project.findByIdAndDelete({_id : id,userId});
}
