import catchAsync from '../ultils/catchAsync.mjs';
import Stripe from 'stripe';
import deliController from '../connect/delivery_connect.mjs'

const purchaseItem = catchAsync(async (req, res, next) => {
    
    
    // const user = await User.findById(userId).select('+items');
    // if (!user.items.includes(itemId)) {
    //     user.items.push(itemId);
    //     await user.save({ validateBeforeSave: false });
    // }
    await deliController.addItemToCart(req.body)
    res.status(200).json({
        status: 'success',
    });
});

const addDeliveryFromCart = catchAsync(async (req,res, next) => {
    const cart = req.params.cart;
    await addDelivery(cart);
    res.status(200).json({
        status: 'success'
    })
})
const deletePurchase = catchAsync(async (req, res, next) => {
    
    res.status(200).json({
        status: 'success',
    });
});
const stripe = new Stripe(
    'sk_test_51MpCA0DfcEM9cIAm0SlXbB7WjZpXe7HEwSwCAjde0FZoLndTIYUnHJsp5F5HEcyEUpCy9zJiU2OIIFRf2t5KNnXx00PnlNRkfx'
);
const checkOutSession = catchAsync(async (req, res) => {
    const price = req.params.total;
    //2. Create checkout session
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        success_url: `${req.protocol}://${req.get('host')}/mycart`,
        cancel_url: `${req.protocol}://${req.get('host')}/mycart`,
        line_items: [
            {
                price_data: {
                    currency: 'vnd',
                    unit_amount: price,
                    product_data: {
                        name: `Thanh toán giỏ hàng`,

                        images: [
                            `${req.protocol}://${req.get('host')}/purchase.jpg`,
                        ],
                    },
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
    });
    //3. Create session as response
    res.status(201).json({
        status: 'success',
        session,
    });
});

export { checkOutSession, purchaseItem, deletePurchase, addDeliveryFromCart };
