import {Router} from 'express';
import {Pet} from "../models/pet";

export const petController = Router();

petController.post('', async (req, res, next) => {
    try {
        const createdPet = await Pet.create(req.body);
        res.status(201).json(createdPet);
    } catch (e) {
        next(e);
    }
});

petController.get('/:id', async (req, res, next) => {
    try {
        const pet = await Pet.scope(req.query['scope']).findById(req.params['id']);
        res.json(pet);
    } catch (e) {
        next(e);
    }
});
