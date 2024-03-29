const increaseBtns = document.querySelectorAll('.increaseBtn');
const decreaseBtns = document.querySelectorAll('.decreaseBtn');
const deleteBtns = document.querySelectorAll('.deleteBtn');
let cost = document.querySelectorAll('.cost');
let costTotal = document.querySelectorAll('.totalCost');
const calculateTotal = () => {
    const total = Array.from(cost).reduce((acc, cur) => {
        if (cur.closest('li').style.display !== 'none') {
            return acc + parseFloat(cur.innerText.replaceAll(',', ''));
        }
        return acc;
    }, 0);
    costTotal.forEach((el) => {
        el.innerText = total.toLocaleString('en-US');
    });
};
const costChange = (sign, btn) => () => {
    console.log(123134)

    const productCost = parseFloat(
        btn
            .closest('li')
            .querySelector('.productCost')
            .innerText.replaceAll(',', '')
    );
    const cost = btn.closest('li').querySelector('.cost');
    const qtnBtn = btn
        .closest('.btn-group')
        .querySelector('button:nth-child(2)');
    let qtn = parseFloat(qtnBtn.innerText.replaceAll(',', ''));
    if (sign) {
        qtn++;
        cost.innerText = (productCost * qtn).toLocaleString('en-US');
        calculateTotal();
    } else {
        if (qtn === 0) return;
        qtn--;
        cost.innerText = (productCost * qtn).toLocaleString('en-US');
        calculateTotal();
    }
    console.log(qtn)
    qtnBtn.innerText = qtn;
};
increaseBtns.forEach( (btn) => {
    const p_product_id = btn.dataset.item;
    const p_user_id = btn.dataset.user;
    btn.onclick = async () => {
        costChange(true, btn)();
        await axios({
            method: 'PATCH',
            url: '/api/purchase/change-item-qtn',
            data: {
                p_product_id,
                p_user_id,
                dif: 1
            },
        });
    }
});

decreaseBtns.forEach( (btn) => {
    const p_product_id = btn.dataset.item;
    const p_user_id = btn.dataset.user;
    btn.onclick = async () => {
        costChange(false, btn)();
        await axios({
            method: 'PATCH',
            url: '/api/purchase/change-item-qtn',
            data: {
                p_product_id,
                p_user_id,
                dif: -1
            },
        });
    }
});

deleteBtns.forEach((btn) => {
    const p_product_id = parseInt(btn.dataset.item);
    const p_user_id = btn.dataset.user;
    btn.onclick = async () => {
        btn.closest('li').style.display = 'none';
        if (p_user_id !== 'null') {
            await axios({
                method: 'PATCH',
                url: '/api/users/deletePurchase',
                data: {
                    p_product_id,
                    p_user_id,
                },
            });
        } else {
            console.log('delete');
            let items = JSON.parse(localStorage.getItem('cart'));
            items = items.filter((item) => item.product_id !== p_product_id);
            localStorage.setItem('cart', JSON.stringify(items));
        }
        calculateTotal();
    };
});
