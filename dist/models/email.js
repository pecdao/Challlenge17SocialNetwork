import { Schema, model } from 'mongoose';
const newEmail = new Schema({
    email: [{
            type: Schema.Types.ObjectId,
            required: true,
            unique: true,
            ref: 'email',
        }],
});
const email = model('email', newEmail);
export default email;
