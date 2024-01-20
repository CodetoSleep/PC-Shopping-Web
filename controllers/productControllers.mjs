import catchAsync from '../ultils/catchAsync.mjs';
import appError from '../ultils/appError.mjs';
import dbController from '../connect/product_connect.mjs'



const createProduct = catchAsync(async (req, res, next) => {
    const message = await dbController.createProduct(req.body);
    if(message === 'success') {
        res.status(200).json({
            status: "success"
        })    
    } else {
        res.status(500).json({
            status: "error"
        })
    }
})
const updateProduct = catchAsync(async (req, res, next) => {
    const message = await dbController.updateProduct(req.body);
    if(message === 'success') {
        res.status(200).json({
            status: "success"
        })    
    } else {
        res.status(500).json({
            status: "error"
        })
    }
})
const deleteProduct = catchAsync(async (req, res, next) => {
    console.log(req.body)
    const {message} = await dbController.deleteProduct(req.body.id);
    console.log(message);
    if(message === 'success') {
        res.status(200).json({
            status: "success"
        })    
    } else {
        res.status(500).json({
            status: "error"
        })
    }
})


export {
    createProduct,
    deleteProduct,
    updateProduct,
};
