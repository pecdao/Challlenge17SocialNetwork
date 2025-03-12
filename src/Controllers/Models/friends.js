import { Schema, model, type Document } from 'mongoose';
import { Request, Response } from 'express';

interface Ifriend extends Document {
    addFriend: boolean;
    friendId: Schema.Types.ObjectId[];
    email: string;
    password: string;
    username: string;
    _id: Schema.Types.ObjectId;
    delete: (friend: Ifriend) => void;
}
const createFriend = (req: Request, res: Response) => {
}
const addFriend = new Schema<Ifriend>(
    {
        addFriend: {  
            type: Boolean,
        },
        friendId: [{
            type: Schema.Types.ObjectId,
            ref: 'friends'
        }]
    },
);
console.log(addFriend);

const friendId = {
    _id: Schema.Types.ObjectId,    
  
};
console.log(`Friend with id: ${friendId._id}`);

const deleteFriend = {
    delete: function(friend: Ifriend) {
        // logic to delete a friend
        console.log(`Deleting friend with id: ${friend._id}`);
    }
};
const AllFriends = model<Ifriend>('friends');
console.log(AllFriends);

export {createFriend}
export { addFriend };
export { AllFriends };
export { friendId };
export { deleteFriend };
