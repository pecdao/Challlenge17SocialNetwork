import { Router } from 'express';
import { thoughtRouter } from './thoughts';
import { friendRouter } from './friends';

const router = Router();

router.use('/thoughts', thoughtRouter);
router.use('/friends', friendRouter);

export default router;
