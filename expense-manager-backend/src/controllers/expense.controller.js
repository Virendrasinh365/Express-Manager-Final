import * as expenseService from '../services/expense.service.js'

export const createExpense = async (req, res) => {
    try {
        const expense = await expenseService.createExpense({
            ...req.body,
            userId : req.user._id
        });
        res.status(201).json({
            success: true,
            data: expense,
            message: 'expense created successfully'
        })
    } catch (err) {
        res.status(500).json({ message: `Error in Controller is :- ${err}` })
    }
}

export const getExpenses = async (req, res) => {
    const expenses = await expenseService.getAllExpense(req.user._id);
    res.json(expenses);
}
export const getExpense = async (req, res) => {
    const expense = await expenseService.getExpenseById(req.params.id,req.user._id);
    if (!expense) {
        res.status(404).json({ message: 'expense Type Not Found' });
    }
    res.json(expense)
}

export const updateExpense = async (req, res) => {
    const updateExpense = await expenseService.updateExpense(req.params.id,req.user._id,req.body);
    if (!updateExpense) {
        res.status(404).json({ message: 'expense Type Not Found' });

    }
    res.json(updateExpense)
}

export const deleteExpense = async (req, res) => {
    const deleteExpense = await expenseService.deleteExpense(req.params.id,req.user._id);
    if (!deleteExpense) {
        res.status(404).json({ message: 'expense Type Not Found' });
    }
    res.json(deleteExpense)
}