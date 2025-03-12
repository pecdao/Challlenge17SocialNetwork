import { Request, Response } from 'express';
import UsernameModel from '../models/username';
import { count } from 'console';

// Aggregate function to get number of friends overall

export const getFriendCount = async () => {
    const friendCount = await UsernameModel.aggregate()
        .count('friendsCount');
    return friendCount;
}

/**
 * GET All friends
*/
export const getAllFriends = async (_req: Request, res: Response) => {
    try {
        const friendCount = await UsernameModel.find();

        const friendsObj = {
            friends: friendCount,
            friendCount: await getFriendCount(),
        }

        res.json(friendsObj);
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
}

/**
 * GET Student based on id /students/:id
*/
export const getFriendsById = async (req: Request, res: Response) => {
    const { usernameId } = req.params;
    try {
        const friends = await UsernameModel.findById(usernameId);
        if (friends) {
            res.json({
                friends,
                friendsId: await count(usernameId)
            });
        } else {
            res.status(404).json({
                message: 'username not found'
            });
        }
    } catch (error: any) {
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

export const createFriend = async (req: Request, res: Response) => {
    try {
        const createFriend = await UsernameModel.create(req.body);
        res.json(createFriend);
    } catch (err) {
        res.status(500).json(err);
    }
}
/**
 * DELETE friends based on id /firends/:id
 * @param string id
 * @returns string 
*/

export const deleteFriend = async (req: Request, res: Response) => {
    try {
        const deleteFriend = await UsernameModel.findOneAndDelete({ _id: req.params.friendsId });

        if (!deleteFriend) {
            return res.status(404).json({ message: 'No such username exists' });
        }

     
        return res.json({ message: 'friend successfully deleted' });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}

/**
 * POST Assignment based on /friends/:friendsById
 * @param string id
 * @param object assignment
 * @returns object friends
*/

export const addFriend = async (req: Request, res: Response) => {
    console.log('You are adding a friend');
    console.log(req.body);
    try {
        const addFriend = await UsernameModel.findOneAndUpdate(
            { _id: req.params.studentId },
            { $addToSet: { assignments: req.body } },
            { runValidators: true, new: true }
        );

        if (!addFriend) {
            return res
                .status(404)
                .json({ message: 'No username found with that ID :(' });
        }

        return res.json(addFriend);
    } catch (err) {
        return res.status(500).json(err);
    }
}

