import * as projectController from '../controllers/project.controller.js'
import express from 'express'
import { portect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.use(portect);

router.post('/register',projectController.createProject);
router.get('/',projectController.getProjects);
router.get('/:id',projectController.getProject);
router.put('/:id',projectController.updateProject);
router.delete('/:id',projectController.deleteProject);

export default router;