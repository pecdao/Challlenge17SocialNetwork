import { Schema, Types, model, type Document } from 'mongoose';

interface Iusername extends Document {
    // assignmentId: Schema.Types.ObjectId,
    usernameId: Schema.Types.ObjectId,
    name: string,
    // unique: true,
    // required: true,
    // trim: true,
}

const usernameSchema = new Schema<Iusername>(
    {
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
        },
);


const Username = model('Username', usernameSchema);

export default Username;
