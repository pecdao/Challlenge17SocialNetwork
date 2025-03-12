import { Schema, Types, model, type Document } from 'mongoose';
import { Router as ExpressRouter } from 'express';

interface Ithoughts extends Document {
    thoughtsId: Schema.Types.ObjectId,
    name: string,
    unique: true,
    required: true,
    thoughtText: string,
    length: { min: 1, max: 280 }
}

const thoughtsSchema = new Schema<Ithoughts>(
    {
        thoughtsId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        name: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
            unique: true,
            default: 'thoughts',
        },
        },
);


const thoughts = model('thoughts', thoughtsSchema);

export default thoughts
const router = ExpressRouter();

router.get('/', async (_, res) => {
    try {
        const thoughtsList = await thoughts.find();
        res.json(thoughtsList);
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    }
});

router.post('/', async (req, res) => {
    const newThought = new thoughts({
        name: req.body.name,
        thoughtText: req.body.thoughtText,
    });

    try {
        const savedThought = await newThought.save();
        res.status(201).json(savedThought);
    } catch (err) {
        res.status(400).json({ message: (err as Error).message });
    }
});

export const thoughtsRouter = router;
