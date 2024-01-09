import Product from '../models/productModel.mjs';
import catchAsync from '../ultils/catchAsync.mjs';
import appError from '../ultils/appError.mjs';
import {
    createOne,
    deleteOne,
    getAll,
    getOne,
    updateOne,
} from './handleFactory.mjs';

const getProduct = getOne(Product);
const getAllProducts = getAll(Product);
// const createProduct = createOne(Product);
// const updateProduct = updateOne(Product);
// const deleteProduct = deleteOne(Product);


const createProduct = catchAsync(async (req, res, next) => {
    const {productName, nsx, price, display, cpuName,
        cpuType, gpuName, gpuOnBoard, ram, ssd, os, stockQtn} = req.body;
    await createProduct(productName, nsx, price, display, cpuName,
        cpuType, gpuName, OnBoard, ram, ssd, os, stockQtn);
    res.status(200).json({
        status: "success"
    })
})
const updateProduct = catchAsync(async (req, res, next) => {
    const {productId} = req.query.id;
    const {productName, nsx, price, display, cpuName,
        cpuType, gpuName, gpuOnBoard, ram, ssd, os, stockQtn} = req.body;
    await updateProduct(productId, productName, nsx, price, display, cpuName,
        cpuType, gpuName, gpuOnBoard, ram, ssd, os, stockQtn);
    res.status(200).json({
        status: "success"
    })    
})
const deleteProduct = catchAsync(async (req, res, next) => {
    const {productId} = req.query.id;
    await deleteProduct(productId);
    res.status(200).json({
        status: "success"
    }) 
})
const topSellerProduct = catchAsync(async (req, res, next) => {
    req.query.page = '1';
    req.query.limit = '5';
    req.query.sort = '-ratingAvg, price';
    next();
});

export {
    getProduct,
    getAllProducts,
    createProduct,
    deleteProduct,
    updateProduct,
    topSellerProduct,
};
