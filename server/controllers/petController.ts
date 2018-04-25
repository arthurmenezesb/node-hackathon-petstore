import {Router} from 'express';
import {Pet} from "../models/pet";
import {Order} from "../models/order";


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

petController.post('/:id/order', async (req, res, next) => {
    try {
        const createdOrder = await Order.create(req.body);
        res.status(201).json(createdOrder);
    } catch (e) {
        next(e);
    }
});
