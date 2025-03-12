import { Request, Response } from 'express';
import thoughts from '../models/thoughts';

/**
 * GET All thoughts
 * @returns an array of thoughts
*/
export const getAllThoughts = async (_req: Request, res: Response) => {
    try {
        const getAllThoughts = await thoughts.find();
        res.json(getAllThoughts);
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
}

/**
 * GET thoughts based on id /course/:id
 * @param string id
 * @returns a single thoughts object
*/
export const getThoughtById = async (req: Request, res: Response) => {
    const getThoughtsById = req.params.id;
    try {
        const thought = await thoughts.findById(getThoughtsById);
        if (thought) {
            res.json(thought);
        } else {
            res.status(404).json({
                message: 'thoughts not found'
            });
        }
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
};

/**
* POST thoughts
* @param object username
* @returns a single thought object
*/
export const createNewThought = async (req: Request, res: Response) => {
    try {
        const newThoughts = await thoughts.create({
           NewThoughts: req.body.newThoughts,
        });
        res.status(201).json(newThoughts);
    } catch (error: any) {
        res.status(400).json({
            message: error.message
        });
    }
};

/**
 * PUT thought based on id /thought/:id
 * @param object id, username
 * @returns a single Course object
*/
export const updateThoughts = async (req: Request, res: Response) => {
    try {
        const updateThoughts = await thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        );

        if (!updateThoughts) {
            res.status(404).json({ message: 'No thoughts with this id!' });
        }

        res.json(updateThoughts)
    } catch (error: any) {
        res.status(400).json({
            message: error.message
        });
    }
};

/**
* DELETE thoughts based on id /thoughts/:id
* @param string id
* @returns string 
*/
export const deleteThoughts = async (req: Request, res: Response) => {
    try {
        await thoughts.findOneAndDelete({ _id: req.params.id });

        if (!thoughts) {
            res.status(404).json({
                message: 'No thoughts with that ID'
            });
        } else {
            await thoughts.deleteMany({ _id: { $in: req.body.thoughtIds } });
            res.json({ message: 'thought deleted!' });
        }

    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
};
