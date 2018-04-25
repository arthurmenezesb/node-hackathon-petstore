import {Router} from 'express';
import {Order} from "../models/order";

export const orderController = Router();


orderController.get('', async (req, res, next) => {
    try {
        const orders = await Order.scope(req.query['scope']).findAll();
        res.json(orders);
    } catch (e) {
        next(e);
    }
});
