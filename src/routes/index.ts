import { Router } from 'express';
import apiRoutes from './seeds/index';
const router = Router();

router.use('/api', apiRoutes);

export default router;
