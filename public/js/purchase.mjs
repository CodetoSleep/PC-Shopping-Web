const purchaseBtns = document.querySelectorAll('.purchase-btn');

const purchaseUser = (p_product_id, p_user_id) => async () => {
    const res = (
        await axios({
            method: 'PATCH',
            url: '/api/users/purchase',
            data: {
                p_user_id,
                p_product_id
            },
        })
    ).data;

    if (res.status === 'success') {
        showAlert('success', 'Thêm vào giỏ thành công');
    }
};

const purchaseLocal = (item) => async () => {
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
    const cart = JSON.parse(localStorage.getItem('cart'));
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].product_id === item.product_id) {
            showAlert('success', 'Thêm vào giỏ thành công');
            //return;
        }
    }
    cart.push(item);
    console.log(item)
    localStorage.setItem('cart', JSON.stringify(cart));
    showAlert('success', 'Thêm vào giỏ thành công');

};

purchaseBtns.forEach((btn) => {
    const item = JSON.parse(btn.dataset.item);
    const user = btn.dataset.user;
    if (user !== 'null') {
        btn.onclick = purchaseUser(item.product_id, parseInt(user));
    } else {
        btn.onclick = purchaseLocal(item);
    }
});
