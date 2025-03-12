import { Router } from 'express';
const router = Router();

import {
  getAllThoughts,
  getThoughtById,
  createNewThought,
  updateThoughts,
  deleteThoughts,
} from '../../controllers/thoughts.js';

// /api/thoughts
router.route('/').get(getAllThoughts).post(createNewThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThoughts)
  .delete(deleteThoughts);

export { router as thoughtRouter };
