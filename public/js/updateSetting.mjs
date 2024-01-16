const passForm = document.querySelector('form.update-pass');
if (passForm) {
    passForm.onsubmit = (e) => {
        e.preventDefault();
        const data = {
            id: passForm.dataset.id,
            passwordCurrent: document.querySelector('#curentPassword').value,
            password: document.querySelector('#newPassword').value,
            passwordConfirm: document.querySelector('#newPasswordConfirm')
                .value,
        };
        if(data.passwordCurrent != passForm.dataset.pass) {
            showAlert('error', 'Mật khẩu hiện tại sai');
            return;
        }
        if(data.password != data.passwordConfirm) {
            showAlert('error', 'Mật khẩu mới không trùng với mật khẩu xác nhận');
            return;
        }
        (async () => {
            const status = await axios({
                method: 'PATCH',  
                url: '/api/users/updatePassword',
                data,
            });
            if (status.data.status === 'success') {
                showAlert('success', 'Cập nhật mật khẩu thành công');
                passForm.dataset.pass = data.password
            }
        })();
    };
}

const inforForm = document.querySelector('form.update-info');
if (inforForm) {
    inforForm.onsubmit = (e) => {
        console.log('submit')
        e.preventDefault();
        const data = {   
            p_phone: document.querySelector('input#phone').value,
            p_address: document.querySelector('input#address').value,
            p_name: document.querySelector('input#name').value};
        if(!/^\d{10}$/.test(data.p_phone)) {
            showAlert('error', 'Số điện thoại mới không hợp lệ');
            return;
        }
        (async () => {
            const status = await axios({
                method: 'PATCH',  
                url: '/api/users/updateMe',
                data,
            });
            if (status.data.status === 'success') {
                showAlert('success', 'Cập nhật thông tin thành công');
            } else {
                showAlert('error', 'Thông tin mới không hợp lệ');
            }
        })();
    };
}
