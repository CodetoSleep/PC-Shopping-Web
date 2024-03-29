const getProductFromForm = (id = -1) => {
    const formValues = {};
    var formElement;
    if(id > -1) {
        formElement = document.querySelector(`form#update-form${id}`);
    } else {
        formElement = document.querySelector(`form#create-form`);
    }
    // console.log(`form#update-form${id}`);
    formValues['p_product_name'] = formElement.querySelector('input#p_product_name').value;
    formValues['p_old_price'] = parseInt(formElement.querySelector('input#p_new_price').value);
    formValues['p_discount_percentage'] = parseInt(formElement.querySelector('input#p_discount_percentage').value);
    formValues['p_display'] = formElement.querySelector('input#p_display').value;
    formValues['p_cpu'] = formElement.querySelector('input#p_cpu').value;
    formValues['p_gpu_name'] = formElement.querySelector('input#p_gpu_name').value;
    formValues['p_ram'] = parseInt(formElement.querySelector('input#p_ram').value);
    formValues['p_ssd'] = parseInt(formElement.querySelector('input#p_ssd').value);
    formValues['p_manufacturer'] = formElement.querySelector('input#p_manufacturer').value;
    formValues['p_stock_quantity'] = parseInt(formElement.querySelector('input#p_stock_quantity').value);
    formValues['p_material'] = formElement.querySelector('input#p_material').value;
    formValues['p_operating_system'] = formElement.querySelector('input#p_operating_system').value;
    formValues['p_cpu_type'] = formElement.querySelector('select#p_cpu_type').options[formElement.querySelector('select#p_cpu_type').selectedIndex].value;
    formValues['p_available'] = parseInt(formElement.querySelector('select#p_available').options[formElement.querySelector('select#p_available').selectedIndex].value);
    formValues['p_gpu_onboard'] = parseInt(formElement.querySelector('select#p_gpu_onboard').options[formElement.querySelector('select#p_gpu_onboard').selectedIndex].value);
    formValues['p_product_id'] = formElement.dataset.product

    return formValues
  
}

const updateProduct = async (id) => {
    try {
        const res = await axios({
            method: 'PATCH',
            url: '/api/products/update',
            data: getProductFromForm(id)
        });
        if (res.data.status === 'success') {
            showAlert('success', 'Updated successfully!');
            // window.setTimeout(() => {
            //     location.assign('/');
            // }, 200);
        }
    } catch (err) {
        console.log(err)
        showAlert('error', 'Invalid Update');
    }
};

const updateBtn = document.querySelectorAll('button.btn.btn-primary.btn-update');
updateBtn.forEach(e => {
    e.onclick = () => {
        updateProduct(e.dataset.id);
    }
})

const deleteBtns = document.querySelectorAll('button.btn.btn-danger.btn-delete');
deleteBtns.forEach(e => {
    e.onclick = () => {
        deleteProduct(e.dataset.id);
    }
})

const deleteProduct = async (id) => {
    console.log(id);
    try {
        const res = await axios({
            method: 'PATCH',
            url: '/api/products/delete',
            data: {id}
        });
        if (res.data.status === 'success') {
            showAlert('success', 'Delete successfully!');
        }
    } catch (err) {
        console.log(err)
        showAlert('error', 'Invalid Delete');
    }
};

const createProduct = async () => {
    try {
        const res = await axios({
            method: 'PATCH',
            url: '/api/products/create',
            data: getProductFromForm()
        });
        if (res.data.status === 'success') {
            showAlert('success', 'Created successfully!');
        }
    } catch (err) {
        console.log(err)
        showAlert('error', 'Invalid Creation');
    }
};

const createbtn = document.querySelector('button.btn.btn-primary.btn-create')
createbtn.onclick = () => {
    createProduct()
}