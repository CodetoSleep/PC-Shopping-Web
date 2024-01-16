const list = document.querySelector('ul.my-cart');
if(list != null) {

    const totalCost = document.querySelectorAll('.totalCost');
    let products;
    products = JSON.parse(list.dataset.products);
    console.log(products);
    user = JSON.parse(list.dataset.user);
    const render = (products) => {
        let html = products.reduce((accumulate, item) => {
            let product
            if(item.product != undefined) {
                product = item.product
            }
       
            return (
                accumulate +
                `<li class="row border-bottom border-secondary pb-4 pt-4">
                    <div class="col-12 col-md-3 col-lg-3 d-flex justify-content-center mb-3">
                        <img src="/laptop/${
                            product.image_name? product.image_name :
                            product.image_names.split(',')[0]
                        }" style="max-width: 150px; max-height: 150px">
                    </div>
                    <div class="col-12 col-md-9 col-lg-6">
                        <p class="h5 font-weight-bold mt-0 mb-1">
                            ${product.product_name} (${product.cpu} | ${
                    product.ram
                } | ${product.ssd} | ${product.display} | ${
                    product.operating_system
                } | ${product.color}) 
                        </p>
                        <span class="small">Bảo hành 24 tháng chính hãng, Pin và sạc bảo hành 12 tháng, Đổi mới trong 15 ngày nếu có lỗi do nhà sản xuất</span>
                        <br>
                        <span class="text-danger">Khuyến mại:</span>
                        <br>
                        <i class="fa-solid fa-gift text-warning"></i>
                        <span class="text-danger font-weight-bold">&nbsp;&nbsp;Gói quà tặng giá trị bao gồm:</span>
                        <br>
                        <span class="small">✦ Hỗ trợ mua Ram laptop 8GB bus 3200(RAGK0092) chỉ với giá</span>
                        <span class="text-danger font-weight-bold">529.000vnđ </span>
                        <span class="small">bảo hành 3 năm chính hãng</span>
                        <br>
                        <span class="small">✦ Balo Laptop AnPhatpc (TUNB0097)</span>
                        <br>
                        <span class="small">✦ Giảm giá màn hình lên tới </span>
                        <span class="text-danger font-weight-bold">1.000.000đ </span>
                        <span class="small">khi mua cùng màn hình</span>
                        <br>
                        <span class="small">✦ Ưu đãi giảm giá 10% khi mua đế tản nhiệt laptop</span>
                        <br>
                        <span class="small">✦ Ưu đãi giảm giá 50% khi mua túi chống sốc HP 14-15,6" cao cấp</span>
                        <br>
                        <span class="small text-primary font-weight-bold">✦ Giảm 20% khi mua cùng Đế Tản Nhiệt máy tính HIDEKI H36</span>
                    </div>
                    <div class="col-12 col-lg-3 text-right">
                        <span class="line-through text-secondary">
                            ${parseFloat(product.old_price).toLocaleString('en-US')}
                        </span>
                        <span>đ</span>
                        <br>
                        <span class="productCost text-secondary">
                            ${parseFloat(product.new_price).toLocaleString('en-US')}
                        </span>
                        <span>đ</span>
                        <br>
                        <span class="text-danger font-weight-bold">Tổng: </span>
                        <span class="cost">${parseFloat(product.new_price).toLocaleString(
                            'en-US'
                        )}</span>
                        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups" style="display: block; margin: 5px 0; ">
                            <div class="btn-group mr-2" role="group" aria-label="First group">
                                <button data-user = "${
                                    user === null ? null : user.user_id
                                }" data-item = "${product.product_id}" class="border border-secondary btn btn-light decreaseBtn" type="button">-</button>
                                <button class="border border-secondary btn btn-white quantity" type="button">${item.quantity}</button>
                                <button data-user = "${
                                    user === null ? null : user.user_id
                                }" data-item = "${product.product_id}" class="border border-secondary btn btn-light increaseBtn" type="button">+</button>
                            </div>
                        </div>
                        <button class="deleteBtn btn btn-danger btn-sm mt-3" type="button" data-user = "${
                            user === null ? null : user.user_id
                        }" data-item = "${product.product_id}">Xóa</button>
                    </div>
                </li>`
            );
        }, '');
        list.innerHTML = html;
        let cost = products.reduce((acc, cur) => acc + parseFloat(cur.product.new_price), 0);
        totalCost.forEach((el) => {
            el.innerText = cost.toLocaleString('en-US');
        });
    };
    if (products === null) {
        products = JSON.parse(localStorage.getItem('cart') || '[]');
    }
    products = products.filter((el) => el !== null && (Object.keys(el).length !== 0));
    console.log(products)
    if(products.length != 0) {
        render(products);
    }
}

const deliveryList = document.querySelector('ul.my-delivery');
if(deliveryList != null) {

    const delivery = JSON.parse(deliveryList.dataset.delivery);
    console.log(delivery)
    const renderDelivery = () => {
        deliveryList.innerHTML = delivery.reduce((acc, deli, index) => {
            return acc +  `
                <div class="card" style='margin-top: 20px'>
                    <h3 class="card-header" style='color:#007bff'>
                        ...... <i class="fa-solid fa-truck"></i>
                    </h3>
                    <div class="card-body">
                    <h5 class="card-title">Tổng tiền: ${deli.total_price.toLocaleString('en-US')}</h5>
                    <p class="card-text">Ngày đặt hàng: ${formatDate(deli.created_day)}</p>
                    <p class="card-text">Ngày giao đến dự kiến: ${formatDate(deli.expected_day_arrive)}</p>
                    <p class="card-text">Tình trạng đơn hàng: ${deli.status}</p>
                    </div>
                </div>
                `
        }, '')
    }
    renderDelivery()
}

function formatDate(dateString) {
    const date = new Date(dateString);
  
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();
  
    const formattedDate = `${day}-${month}-${year}`;
  
    return formattedDate;
  }