import * as incomeService from '../services/income.service.js';

export const createIncome = async (req,res)=>{
    try{
        const income = await incomeService.createIncome({
            ...req.body,
            userId : req.user._id
        });
    res.status(201).json({
        success : true,
        data : income,
        message : ' Income created successfully'
    })
    }catch(err){
        console.log(`Error in controller :- ${err}`);
    }
}

export const getIncomes = async (req,res)=>{
    const incomes = await incomeService.getAllIncome(req.user._id);
    res.json(incomes);
}

export const getIncome = async (req,res)=>{
    const income = await incomeService.getIncomeById(req.params.id,req.user._id);
    if(!income){
        res.status(404).json({message : ' Income Not found'});
    }
    res.json(income);
}

export const updateIncome = async (req,res)=>{
    const updateIncome = await incomeService.updateIncome(req.params.id,req.user._id,req.body);
    if(!updateIncome){
        res.status(404).json({message : 'Income not found'})
    }
    res.json(updateIncome);
}
export const deleteIncome = async(req,res)=>{
    const deleteIncome = await incomeService.deleteIncome(req.params.id,req.user._id)
    if(!deleteIncome){
        res.status(404).json({message : ' Income not found'});
    }
    res.json(deleteIncome);
}
