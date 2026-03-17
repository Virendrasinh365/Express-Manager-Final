import Income from '../models/income.model.js';

export const createIncome  = async (data) => {
        return await Income.create(data)
}

export const getAllIncome = async (userId)=>{
    return await Income.find({userId});
}

export const getIncomeById = async (id,userId)=>{
    return await Income.findById({_id : id,userId})
}

export const updateIncome = async (id,userId,data)=>{
    return await Income.findByIdAndUpdate({_id : id,userId},data,{new : true})
}

export const deleteIncome = async (id,userId)=>{
    return await Income.findByIdAndDelete({_id : id ,userId});
}
