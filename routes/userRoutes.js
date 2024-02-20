// userRoutes.js

import { Router } from 'express';
const router = Router();
import { getAllUsers,createUser } from '../controllers/user.js';

// Define routes
router.get('/', getAllUsers);
// router.get('/:id', getUserById);
router.post('/', createUser);
// router.put('/:id', updateUser);
// router.delete('/:id', deleteUser);

export default router;
