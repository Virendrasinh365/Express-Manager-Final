import express from  'express';

import * as userController from '../controllers/user.controller.js';

const router = express.Router();

router.post('/register',userController.createUser);
router.get('/',userController.getUsers);
router.get('/:id',userController.getUser);
router.put('/:id',userController.updateUser);
router.delete('/:id',userController.deleteUser);
router.post('/login',userController.login);

export default router;
