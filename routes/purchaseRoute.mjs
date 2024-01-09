import express from 'express';
import { protect } from '../controllers/authiencationControllers.mjs';
import { checkOutSession, addDeliveryFromCart } from '../controllers/purchaseControllers.mjs';

const router = express.Router();

router.get('/checkout-session/:total', checkOutSession);
router.get('/add-delivery/:cart', addDeliveryFromCart)
export default router;
