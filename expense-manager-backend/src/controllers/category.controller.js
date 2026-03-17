import * as categoryService from '../services/category.service.js' ;

export const createCategory = async (req,res)=>{
    try{
        const category = await categoryService.createCategory({
            ...req.body,
            userId : req.user._id
        });
        res.status(201).json({
            success : true,
            data : category,
            message : 'Category created Successfully'
        });

    }catch(err){
        console.log(`Erorr in controller :- ${err} `);
        
    }
}

export const getCategories = async (req,res)=>{
    const categories = await categoryService.getAllCategories(
        req.user._id
    );
    res.json(categories);
   

}

export const getCategory = async (req,res)=>{
    const category = await categoryService.getCategoryById(
        req.params.id,
        req.user._id);
    if(!category){
        return res.status(404).json({message : "Category not Found"});
    }
    res.json(category);
}

export const updateCategory = async (req,res)=>{
    const updateCategory  = await categoryService.updateCategory(req.params.id,req.user._id,req.body);
    if(!updateCategory){
        res.status(404).json({message : "Category Not Found "})
    }
    res.json(updateCategory);
}

export const deleteCategory = async (req,res)=>{
    const deleteCategory = await categoryService.deleteCategory(req.params.id,req.user._id);
    if(!deleteCategory){
        return res.status(404).json({message : " category not found"});
        
    }
    res.json(deleteCategory);

}
