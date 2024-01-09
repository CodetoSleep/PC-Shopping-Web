import catchAsync from '../ultils/catchAsync.mjs';
import appError from '../ultils/appError.mjs';
import apiFeatures from '../ultils/APIFeatures.mjs';
import productControllers from '../connect/product_connect.mjs';
const getOverview = catchAsync(async (req, res) => {
    // //EXECUTE QUERY
    // if (!req.query.limit) req.query.limit = 16;
    // const features = new apiFeatures(Product.find(), req.query)
    //     .filter()
    //     .sort()
    //     .limit()
    //     .paginate();
    // const laptops = await features.query;
    // const stores = await Store.find({});
    // const pageCurrent = req.query.page || 1;
    const page = req.query.page || 1;
    const {products: laptops, message} = await productControllers.getAllProducts(req.query);
    if(message == 'error') {
        return next(new appError("The is no product founded"), 404);
    }

    res.status(200).render('overview', {
        title: 'Laptop An Phát 2023 Ưu đãi ngập tràn',
        laptops,
        pageCurrent: parseInt(page),
        req,
    });
});
const getProduct = catchAsync(async (req, res, next) => {
    const product = await productControllers.getProduct(parseInt(req.params.id));
    if (!product) next(new appError('There is no product with that name', 404));

    res.status(200).render('product', {
        title: product.product.product_name,
        product: product.product,
    });
});
const getLoginForm = (req, res) => {
    res.status(200).render('login', {
        title: 'Login to your acount',
    });
};
const getSignupForm = (req, res) => {
    res.status(200).render('signup', {
        title: 'Create your acount',
    });
};
const changePassword = (req, res) => {
    res.status(200).render('changePassword', {
        title: 'My acount',
    });
};
const getMyCart = catchAsync(async (req, res) => {
    let products;
    if (req.user) {
        const itemIds = req.user.items;
        const itemPromises = itemIds.map((id) => Product.findById(id));
        products = await Promise.all(itemPromises);
    } else {
        products = null;
    }
    res.status(200).render('cart', {
        title: 'My cart',
        products,
    });
});
export {
    getOverview,
    getProduct,
    getLoginForm,
    changePassword,
    getSignupForm,
    getMyCart,
};
