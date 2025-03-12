import { Schema, Types, model, type Document } from 'mongoose';
import { Router } from 'express';

interface Ifriends extends Document {
    assignmentId: Schema.Types.ObjectId,
    usernameId: Schema.Types.ObjectId,
    name: string,
    unique: true,
    required: true,
    trim: true,
}

const friendsSchema = new Schema<Ifriends>(
    {
        usernameId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        name: {
            type: String,
            required: true,
        },
        },
);


const friend = model<Ifriends>('Friend', friendsSchema);

export { friend };
export const friends = Router();
const friendsRouter = Router();

friendsRouter.get('/', async (_, res) => {
    try {
        const friendsList = await friend.find();
        res.status(200).json(friendsList);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
});

friendsRouter.post('/', async (req, res) => {
    try {
        const newFriend = new friend(req.body);
        const savedFriend = await newFriend.save();
        res.status(201).json(savedFriend);
    } catch (err) {
        res.status(400).json({ error: (err as Error).message });
    }
});

export { friendsRouter };

