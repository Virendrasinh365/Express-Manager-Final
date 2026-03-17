import express from 'express';
import { portect } from '../middleware/auth.middleware.js';
import * as categoryController from '../controllers/category.controller.js';

const router = express.Router();

router.use(portect);

router.post('/register',categoryController.createCategory);
router.get('/',categoryController.getCategories);
router.get('/:id',categoryController.getCategory);
router.put('/:id',categoryController.updateCategory);
router.delete('/:id',categoryController.deleteCategory);

export default router;