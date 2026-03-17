import * as subCategoryService from '../services/subCategory.service.js';

export const createSubCategory = async (req,res)=>{
    try{
        const subCategogory = await subCategoryService.createSubCategory({...req.body,userId : req.user._id});
        res.json({
            success : true,
            data : subCategogory,
            message : 'SubCategory Created Successully'

        })
    }catch(err){
        res.status(500).json({message : `Error In Controller :- ${err}`});
    }

}

export const getSubCategories = async (req,res)=>{
    const subCategogories = await subCategoryService.getAllSubCategory(req.user._id);
    res.json(subCategogories);
}

export const getSubCategoryById = async (req,res)=>{
    const subCategory = await subCategoryService.getSubCategoryById(req.params.id,req.user._id);
    if(!subCategory){
        res.status(404).json({message : ' subcategory not found'});
    }
    res.json(subCategory);

}
export const updateSubCategory = async (req,res)=>{
    const updateSubCategory = await subCategoryService.updateSubCategory(req.params.id,req.user._id,req.body);
    if(!updateSubCategory){
        res.status(404).json({message : 'subCategory not Found'});
    }
    res.json(updateSubCategory);
}
export const deleteSubCategory = async (req,res)=>{
    const deleteSubCategory = await subCategoryService.deleteSubCategory(req.params.id,req.user._id)
    if(!deleteSubCategory){
        res.status(404).json({message : 'Subcategory NOt Found'});
    }
    res.json(deleteSubCategory)
}