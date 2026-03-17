import express from 'express';
import * as expenseController from '../controllers/expense.controller.js'
import { portect } from '../middleware/auth.middleware.js';



const router = express.Router();

router.use(portect);

router.post('/register',expenseController.createExpense);
router.get('/',expenseController.getExpenses);
router.get('/:id',expenseController.getExpense);
router.put('/:id',expenseController.updateExpense);
router.delete('/:id',expenseController.deleteExpense);

export default router