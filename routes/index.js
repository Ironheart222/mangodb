// routes/index.js
import { Router } from 'express';
const router = Router();
import userRoutes from './userRoutes.js';

// User routes
router.use('/api/users', userRoutes);

export default router;
