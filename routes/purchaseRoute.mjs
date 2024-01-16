import express from 'express';
import { isLoggedIn, protect } from '../controllers/authiencationControllers.mjs';
import { checkOutSession, addDeliveryFromCart, deletePurchase } from '../controllers/purchaseControllers.mjs';

const router = express.Router();

router.get('/checkout-session/:total', checkOutSession);
router.get('/add-delivery/:cart', addDeliveryFromCart)
router.get('/delete-delivery', isLoggedIn ,deletePurchase)

export default router;
