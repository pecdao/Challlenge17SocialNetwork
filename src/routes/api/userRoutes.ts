import { Router } from 'express';
const router = Router();
// import {} from '../../Controllers/Models';
import { AllFriends, deleteFriend, friendId, addFriend, createFriend } from '../../Controllers/Models/friends';

const getFriendById = (req, res) => {
    res.send('GET request to homepage');
}
const createFriendHandler = (req, res) => {
    res.send('POST request to homepage');
}
const deleteFriendHandler = (req, res) => {
    res.send('DELETE request to homepage');
}
const allFriendsHandler = (req, res) => {
    res.send('GET request to homepage');
}
const friendIdHandler = (req, res) => {
    res.send('GET request to homepage');
}
const addFriendHandler = (req, res) => {
    res.send('POST request to homepage');
}

router.route('/getFriendById').get(getFriendById);
router.route('/addFriend').post(addFriendHandler);
router.route('/allFriends').get(allFriendsHandler);
router.route('/createFriend').post(createFriendHandler);
router.route('/:friendId').get(friendIdHandler).delete(deleteFriendHandler);


export { router as userRoutes} ;