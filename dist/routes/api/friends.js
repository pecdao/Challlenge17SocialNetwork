import { Router } from 'express';
const router = Router();
import { getAllFriends, getFriendsById, createFriend, deleteFriend, addFriend, } from '../../controllers/friends.js';
// /api/friends
router.route('/').get(getAllFriends).post(createFriend);
// /api/friends/:friendId
router.route('/:usernameId').get(getFriendsById).delete(deleteFriend);
// /api/friends/:friendId/add
router.route('/:usernameId/add').post(addFriend);
export { router as friendRouter };
