import express from 'express';
import {
    deleteProduct,
    updateProduct,
    createProduct
} from '../controllers/productControllers.mjs';

const Router = express.Router();


Router.patch('/update', updateProduct)
Router.patch('/delete', deleteProduct)
Router.patch('/create', createProduct)


export default Router;
