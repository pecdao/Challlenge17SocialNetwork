import { Schema, model, type Document } from 'mongoose';
import { thoughts } from '.';



interface Ithought extends Document {
    thought: string;
    thoughtId: Schema.Types.ObjectId[];
}

const newThought = new Schema<Ithought>(
    {
        thought: {
            type: String,
            required: true,
            unique: true,
            max_length: 280,
            min_length: 1,
        },
        thoughtId: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }]
    },
);

const allThought = model<Ithought>('Thought', newThought);

export default allThought;
export { newThought };