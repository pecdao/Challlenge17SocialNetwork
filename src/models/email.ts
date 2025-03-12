import { Schema, model, type Document } from 'mongoose';

interface Iemail extends Document {
    name: string,
    required: true,
    unique: true,
    email: Schema.Types.ObjectId[]
}

const newEmail = new Schema<Iemail>(
    {
        email: [{
            type: Schema.Types.ObjectId,
            required: true,
            unique: true,
            ref: 'email',
        }],

    },
);

const email = model<Iemail>('email', newEmail);

export default email;
