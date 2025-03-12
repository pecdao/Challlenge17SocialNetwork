import { Router } from 'express';
import { thoughtRouter } from './thoughts.js';
import { friendRouter } from './friends.js';
const router = Router();
router.use('/thoughts', thoughtRouter);
router.use('/friends', friendRouter);
export default router;
