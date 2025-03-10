import { Router } from 'express';
import { thoughtRoutes } from './thoughtRoutes';
import { userRoutes } from './userRoutes';
import { Schema, model, type Document } from 'mongoose';

const router = Router();
const userRouterInstance = userRoutes;

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRouterInstance);

export default router;
// Compare this snippet from Controllers/Models/thoughts.ts:
// import { Schema, model, type Document } from 'mongoose';
//