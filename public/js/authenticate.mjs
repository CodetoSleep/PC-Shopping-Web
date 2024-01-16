const login = async (data) => {
    try {
        console.log(data)
        const res = await axios({
            method: 'POST',
            url: '/api/users/login',
            data
        });
        if (res.data.status === 'success') {
            showAlert('success', 'Đăng nhập thành công!');
            window.setTimeout(() => {
                location.assign('/');
            }, 200);
        }
    } catch (err) {
        showAlert('error', 'Sai email hoặc mật khẩu');
    }
};
const signup = async (data) => {
    try {
        console.log(data)
        const res = await axios({
            method: 'POST',
            url: '/api/users/signup',
            data
        });
        if (res.data.status === 'success') {
            showAlert('success', 'Create successfully!');
            window.setTimeout(() => {
                location.assign('/login');
            }, 200);
        } else {
            showAlert('error', 'Thông tin đăng kí không hợp lệ');
        }
    } catch (err) {
        showAlert('error', 'Thông tin đăng kí không hợp lệ');
    }
};
const logout = async () => {
    try {
        const res = await axios({
            method: 'POST',
            url: '/api/users/logout',
        });
        showAlert('success', 'Logged out');
        if (res.data.status === 'success') {
            location.assign('/');
        }
    } catch (error) {}
};
if (document.querySelector('.logout-btn')) {
    document.querySelector('.logout-btn').onclick = (e) => {
        e.preventDefault();
        logout();
    };
}
if (document.querySelector('.login-form')) {
    document.querySelector('.login-form').onsubmit = (e) => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        login({email, password});
    };
}
if (document.querySelector('.form-signup')) {
    document.querySelector('.form-signup').onsubmit = (e) => {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const passwordConfirm =
            document.querySelector('#passwordConfirm').value;
            const phone =
            document.querySelector('#phone').value;
            const address =
            document.querySelector('#address').value;
        signup({email, phone, address, name,  password, passwordConfirm});
    };
}
