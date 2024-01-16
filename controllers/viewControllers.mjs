import catchAsync from '../ultils/catchAsync.mjs';
import appError from '../ultils/appError.mjs';
import productControllers from '../connect/product_connect.mjs';
import deliControllers from '../connect/delivery_connect.mjs';

const getOverview = catchAsync(async (req, res) => {
    const page = req.query.page || 1;
    const {products: laptops, message} = await productControllers.getAllProducts(req.query);
    //console.log(laptops);
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
    console.log(product)
    if (!product) next(new appError('There is no product with that name', 404));
    res.status(200).render('product', {
        title: product.product? product.product.product_name : "Không tìm thấy sản phẩm",
        product: product.product,
    });
});

const getManageProduct = catchAsync(async (req, res) => {
    const page = req.query.page || 1;
    const {products: laptops, message} = await productControllers.getAllProducts(req.query);
    if(message == 'error') {
        return next(new appError("The is no product founded"), 404);
    }
    res.status(200).render('manage', {
        title: 'Quản lí kho',
        laptops,
        pageCurrent: parseInt(page),
        req,
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
    res.status(200).render('myProfile', {
        title: 'My profile',
    });
};
const getMyCart = catchAsync(async (req, res) => {
    let products;
    if (req.user) {
        // const itemIds = req.user.items;
        // const itemPromises = itemIds.map((id) => Product.findById(id));
        // products = await Promise.all(itemPromises);
        const listItems = await deliControllers.getCart({p_user_id: req.user.user_id});
        const itemPromises = listItems.map((e) => {
            return productControllers.getProduct(e.product_id)
        });
        products = await Promise.all(itemPromises);
    } else {
        products = null;
    }
    console.log(products);
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
    getManageProduct
};
