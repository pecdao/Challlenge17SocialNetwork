import { Schema, Types, model } from 'mongoose';
const thoughtsSchema = new Schema({
    thoughtsId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1,
        unique: true,
        default: 'thoughts',
    },
    name: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 4,
        unique: true,
        default: 'username',
    }
});
const Thoughts = model('Thoughts', thoughtsSchema);
export default Thoughts;
// const router = ExpressRouter();
// router.get('/', async (_, res) => {
//     try {
//         const thoughtsList = await thoughts.find();
//         res.json(thoughtsList);
//     } catch (err) {
//         res.status(500).json({ message: (err as Error).message });
//     }
// });
// router.post('/', async (req, res) => {
//     const newThought = new thoughts({
//         name: req.body.name,
//         thoughtText: req.body.thoughtText,
//     });
//     try {
//         const savedThought = await newThought.save();
//         res.status(201).json(savedThought);
//     } catch (err) {
//         res.status(400).json({ message: (err as Error).message });
//     }
// });
// export const thoughtsRouter = router;
