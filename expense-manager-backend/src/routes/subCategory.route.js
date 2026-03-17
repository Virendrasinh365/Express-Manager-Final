import express from 'express';
import * as subCategoryController from '../controllers/subCategory.controller.js'
import { portect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.use(portect)

router.post('/register',subCategoryController.createSubCategory);
router.get('/',subCategoryController.getSubCategories);
router.get('/:id',subCategoryController.getSubCategoryById);
router.put('/:id',subCategoryController.updateSubCategory);
router.delete('/:id',subCategoryController.deleteSubCategory);

export default router;