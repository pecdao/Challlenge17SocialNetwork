import { Schema, Types, model, type Document } from 'mongoose';


interface Iusername extends Document {
    first: string,
    last: string,
    email: string,
    username: string,
    usernameId: Types.ObjectId,
    required: true,
    unique: true;
}

const NewUsername= new Schema<Iusername>(
    {
        usernameId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        username: {
            type: String,
            required: true,
            maxlength: 50,
            minlength: 4,
            default: 'Username',
        },
});
const user = model<Iusername>('username', NewUsername);

export default user;
export { NewUsername };
