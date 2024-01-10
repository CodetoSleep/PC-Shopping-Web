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
        // console.log(message)
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
        // console.log(message)
        res.status(500).json({
            status: "error"
        })
    }
})
const deleteProduct = catchAsync(async (req, res, next) => {
    console.log(req.body)
    const message = await dbController.deleteProduct(req.body.id);
    if(message === 'success') {
        res.status(200).json({
            status: "success"
        })    
    } else {
        // console.log(message)
        res.status(500).json({
            status: "error"
        })
    }
})
const topSellerProduct = catchAsync(async (req, res, next) => {
    req.query.page = '1';
    req.query.limit = '5';
    req.query.sort = '-ratingAvg, price';
    next();
});

export {
    // getProduct,
    // getAllProducts,
    createProduct,
    deleteProduct,
    updateProduct,
    topSellerProduct,
};
