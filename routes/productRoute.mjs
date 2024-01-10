import express from 'express';
import { protect } from '../controllers/authiencationControllers.mjs';
import {
    deleteProduct,
    updateProduct,
} from '../controllers/productControllers.mjs';

const Router = express.Router();


Router.patch('/update', updateProduct)
Router.patch('/delete', deleteProduct)

export default Router;
