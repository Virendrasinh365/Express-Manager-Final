import Category from '../models/category.model.js';

export const createCategory= async (data)=>{
    return await Category.create(data);
}


export const getAllCategories = async (userId)=>{
    return await Category.find({userId});

}

 
export const getCategoryById = async (id,userId)=>{
    return await Category.findById({_id : id,userId});
}


export const updateCategory = async (id,userId,data)=>{
    return await Category.findByIdAndUpdate({_id : id,userId},data,{new : true})
}


export const deleteCategory = async (id,userId)=>{
    return await Category.findByIdAndDelete({_id : id,userId});
}