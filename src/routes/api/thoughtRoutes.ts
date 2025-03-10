import { create } from 'domain';
import { Router } from 'express';
const router = Router();

import '../../Controllers/Models/friends';
import allThought from '../../Controllers/Models/thoughts';
import createThought from '../../Controllers/Models/thoughts';
import { thoughts } from '../../Controllers/Models';

// /api/courses
// router.route('/').get(thoughts).post(thoughts);

// /api/courses/:courseId
router
  .route('/:thoughtId')
 
  
export { router as thoughtRoutes };
