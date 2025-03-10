import { Schema, model, type Document } from 'mongoose';


interface IEmail extends Document {
    name: string;
    required: true;
    unique: true;
   
}

const emailSchema = new Schema<IEmail>({
    name: {
        type: String,
        required: true,
        unique: true,
        max_length: 50,
    },
},
    {
        toJSON: {
            transform: (doc, ret) => {
                delete ret.__v;
                return ret;
            }
        }
    }
);
const Email = model<IEmail>('Email', emailSchema);

export default Email;
