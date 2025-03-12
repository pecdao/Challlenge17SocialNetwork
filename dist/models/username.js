import { Schema, Types, model } from 'mongoose';
const usernameSchema = new Schema({
    usernameId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    name: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 4,
        unique: true,
        default: 'username',
    },
});
const Username = model('Username', usernameSchema);
export default Username;
