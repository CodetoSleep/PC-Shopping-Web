import express from 'express';
import {
    isLoggedIn,
    login,
    logout,
    protect,
    signup,
    updatePassword,
    updateUser
} from '../controllers/authiencationControllers.mjs';
import {
    deletePurchase,
    purchaseItem,
} from '../controllers/purchaseControllers.mjs';
const Router = express.Router();
Router.route('/signup').post(signup);
Router.route('/login').post(login);
Router.route('/logout').post(logout);
Router.route('/purchase').patch(isLoggedIn, purchaseItem);
Router.route('/deletePurchase').patch(isLoggedIn, deletePurchase);

Router.use(protect);
Router.route('/updatePassword').patch(updatePassword);
Router.route('/updateMe').patch(updateUser);

export default Router;
