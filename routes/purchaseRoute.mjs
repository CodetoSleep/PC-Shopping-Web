import express from 'express';
import { isLoggedIn, protect } from '../controllers/authiencationControllers.mjs';
import { checkOutSession, addDeliveryFromCart, deletePurchase, changeItemQtn } from '../controllers/purchaseControllers.mjs';

const router = express.Router();

router.get('/checkout-session/:total', checkOutSession);
router.get('/add-delivery', isLoggedIn, addDeliveryFromCart)
router.patch('/delete-delivery', isLoggedIn ,deletePurchase)
router.patch('/change-item-qtn', isLoggedIn , changeItemQtn)


export default router;
