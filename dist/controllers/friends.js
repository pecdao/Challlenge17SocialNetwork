import { Username } from '../models/index.js';
import { count } from 'console';
// Aggregate function to get number of friends overall
export const getFriendCount = async () => {
    const friendCount = await Username.aggregate()
        .count('friendsCount');
    return friendCount;
};
/**
 * GET All friends
*/
export const getAllFriends = async (_req, res) => {
    try {
        const friendCount = await Username.find();
        const friendsObj = {
            friends: friendCount,
            friendCount: await getFriendCount(),
        };
        res.json(friendsObj);
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
/**
 * GET Student based on id /students/:id
*/
export const getFriendsById = async (req, res) => {
    const { usernameId } = req.params;
    try {
        const friends = await Username.findById(usernameId);
        if (friends) {
            res.json({
                friends,
                friendsId: await count(usernameId)
            });
        }
        else {
            res.status(404).json({
                message: 'username not found'
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
/**
 * POST friends
 * @param object friends
 * @returns a single friend object
*/
export const createFriend = async (req, res) => {
    try {
        const createFriend = await Username.create(req.body);
        res.json(createFriend);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
/**
 * DELETE friends based on id /firends/:id
 * @param string id
 * @returns string
*/
export const deleteFriend = async (req, res) => {
    try {
        const deleteFriend = await Username.findOneAndDelete({ _id: req.params.friendsId });
        if (!deleteFriend) {
            return res.status(404).json({ message: 'No such username exists' });
        }
        return res.json({ message: 'friend successfully deleted' });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
/**
 * POST Assignment based on /friends/:friendsById
 * @param string id
 * @param object assignment
 * @returns object friends
*/
export const addFriend = async (req, res) => {
    console.log('You are adding a friend');
    console.log(req.body);
    try {
        const addFriend = await Username.findOneAndUpdate({ _id: req.params.studentId }, { $addToSet: { assignments: req.body } }, { runValidators: true, new: true });
        if (!addFriend) {
            return res
                .status(404)
                .json({ message: 'No username found with that ID :(' });
        }
        return res.json(addFriend);
    }
    catch (err) {
        return res.status(500).json(err);
    }
};
