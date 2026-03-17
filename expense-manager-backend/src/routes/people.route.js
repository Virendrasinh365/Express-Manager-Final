import express from  'express';

import * as peopleController from '../controllers/people.controller.js';
import { portect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.use(portect);

router.post('/register',peopleController.createPeople);
router.get('/',peopleController.getPeoples);
router.get('/:id',peopleController.getPeople);
router.put('/:id',peopleController.updatePeople);
router.delete('/:id',peopleController.deletePeople);

export default router;

