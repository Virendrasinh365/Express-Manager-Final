import SubCategory from '../models/subCategogory.model.js';

export const createSubCategory = async (data)=>{
    return await SubCategory.create(data);
}

export const getAllSubCategory = async (userId)=>{
    return await SubCategory.find({userId});
}

export const getSubCategoryById = async (id,userId)=>{
    return await SubCategory.findById({_id : id,userId});
}

export const updateSubCategory = async (id,userId,data)=>{
    return await SubCategory.findByIdAndUpdate({_id : id ,userId},data,{new : true})

}

export const deleteSubCategory = async (id,userId)=>{
    return await SubCategory.findByIdAndUpdate({_id : id , userId});
}