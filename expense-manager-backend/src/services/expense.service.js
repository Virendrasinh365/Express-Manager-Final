import Expense from '../models/expenses.model.js';

export const createExpense = async (data)=>{
    return await Expense.create(data);
}

export const getAllExpense = async (userId)=>{
    
    return await Expense.find({userId});
}

export const getExpenseById = async (id,userId)=>{
    return await Expense.findById(id,userId);
}

export const updateExpense = async (id,userId,data)=>{
    return await Expense.findByIdAndUpdate(
        {_id :id,userId}
        ,data,
        {new :true}
    );
}

export const deleteExpense = async (id,userId)=>{
    return await Expense.findByIdAndDelete({_id :id,userId});
}