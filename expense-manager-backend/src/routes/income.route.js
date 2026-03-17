import express from 'express';

import * as incomeController from '../controllers/income.controller.js';
import { portect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.use(portect);

router.post('/register',incomeController.createIncome);
router.get('/',incomeController.getIncomes);
router.get('/:id',incomeController.getIncome);
router.put('/:id',incomeController.updateIncome);
router.delete('/:id',incomeController.deleteIncome);

export default router;