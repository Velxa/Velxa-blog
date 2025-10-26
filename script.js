// script.js

document.addEventListener('DOMContentLoaded', function() {

    const loginBtn = document.getElementById('loginBtn');

    const signupBtn = document.getElementById('signupBtn');

    const uploadFileBtn = document.getElementById('uploadFileBtn');

    const loginModal = document.getElementById('loginModal');

    const signupModal = document.getElementById('signupModal');

    const fileUploadModal = document.getElementById('fileUploadModal');

    const closeButtons = document.querySelectorAll('.close');

    const loginSubmit = document.getElementById('loginSubmit');

    const signupSubmit = document.getElementById('signupSubmit');

    const uploadButton = document.getElementById('uploadButton');

    const fileInput = document.getElementById('fileInput');

    const usernameInput = document.getElementById('username');

    const passwordInput = document.getElementById('password');

    const newUsernameInput = document.getElementById('newUsername');

    const newEmailInput = document.getElementById('newEmail');

    const newPasswordInput = document.getElementById('newPassword');

    const loginError = document.getElementById('loginError');

    const signupError = document.getElementById('signupError');

    const uploadMessage = document.getElementById('uploadMessage');

    loginBtn.addEventListener('click', function() {

        loginModal.style.display = 'block';

    });

    signupBtn.addEventListener('click', function() {

        signupModal.style.display = 'block';

    });

    uploadFileBtn.addEventListener('click', function() {

        fileUploadModal.style.display = 'block';

    });

    closeButtons.forEach(function(button) {

        button.addEventListener('click', function() {

            const modal = button.closest('.modal');

            modal.style.display = 'none';

            const errorElement = modal.querySelector('.error');

            const messageElement = modal.querySelector('.message');

            if (errorElement) {

                errorElement.textContent = '';

            }

            if (messageElement) {

                messageElement.textContent = '';

            }

        });

    });

    window.addEventListener('click', function(event) {

        if (event.target.classList.contains('modal')) {

            event.target.style.display = 'none';

            const errorElement = event.target.querySelector('.error');

            const messageElement = event.target.querySelector('.message');

            if (errorElement) {

                errorElement.textContent = '';

            }

              if (messageElement) {

                messageElement.textContent = '';

            }

        }

    });

    loginSubmit.addEventListener('click', function() {

        const username = usernameInput.value;

        const password = passwordInput.value;

        // Insecure login simulation (DO NOT USE IN PRODUCTION)

        if (username === 'admin' && password === 'password') {

            loginError.textContent = 'Login berhasil!';

            loginError.style.color = 'green';

            setTimeout(function() {

                loginModal.style.display = 'none';

                loginError.textContent = '';

                loginError.style.color = 'red';

            }, 1500);

        } else {

            loginError.textContent = 'Nama pengguna atau kata sandi salah.';

        }

    });

    signupSubmit.addEventListener('click', function() {

        const newUsername = newUsernameInput.value;

        const newEmail = newEmailInput.value;

        const newPassword = newPasswordInput.value;

        // Insecure signup simulation (DO NOT USE IN PRODUCTION)

        if (newUsername && newEmail && newPassword) {

            signupError.textContent = 'Pendaftaran berhasil!';

            signupError.style.color = 'green';

            setTimeout(function() {

                signupModal.style.display = 'none';

                signupError.textContent = '';

                signupError.style.color = 'red';

            }, 1500);

        } else {

            signupError.textContent = 'Mohon isi semua kolom.';

        }

    });

    uploadButton.addEventListener('click', function() {

        const file = fileInput.files[0];

        if (file) {

            // Insecure file upload (DO NOT USE IN PRODUCTION)

            uploadMessage.textContent = `File "${file.name}" berhasil diunggah!`;

            uploadMessage.style.color = 'green';

            setTimeout(function() {

                fileUploadModal.style.display = 'none';

                uploadMessage.textContent = '';

                uploadMessage.style.color = 'black';

            }, 2000);

        } else {

            uploadMessage.textContent = 'Mohon pilih sebuah file.';

            uploadMessage.style.color = 'red';

        }

    });

});