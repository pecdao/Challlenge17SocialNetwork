import { Router } from 'express';
import { thoughtRoutes } from '../api/thoughtRoutes';
import { userRoutes } from '../api/userRoutes';

const router = Router();
const userRouterInstance = userRoutes;

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRouterInstance);

export default router;
// Compare this snippet from Controllers/Models/thoughts.ts:
// import { Schema, model, type Document } from 'mongoose';
//