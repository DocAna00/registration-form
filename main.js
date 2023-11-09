//Eye icon toggle
const togglePassword = document.querySelector(".togglePassword");
const password = document.querySelector(".password");

togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    this.classList.toggle("bi-eye");
});

const togglePasswordTwo = document.querySelector(".togglePassword-2");
const passwordTwo = document.querySelector(".password-2");

togglePasswordTwo.addEventListener("click", function () {
    const type = passwordTwo.getAttribute("type") === "password" ? "text" : "password";
    passwordTwo.setAttribute("type", type);
    this.classList.toggle("bi-eye");
});

const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});

//Successful registration
const button = document.querySelector('.button');
const container = document.querySelector('.container');
const headingSmall = document.querySelector('.heading-small');

button.addEventListener('click', function () {
    if (form.checkValidity()) {
        form.style.display = 'none';
        headingSmall.style.display = 'none';
        const newDiv = document.createElement("div");
        newDiv.classList.add('success');
        newDiv.innerHTML = "Регистрация успешно завершена";
        container.append(newDiv);
    }
})

//Mock
const inputName = document.querySelector('.input-name');
const inputEmail = document.querySelector('.input-email');
const inputPassword = document.querySelector('.password');
const inputRepeatPassword = document.querySelector('.password-2');
const select = document.querySelector('.form-select');

function makeMockRequest(url, data, callback) {
    setTimeout(() => {
        const response = { status: 'success', data: { public: 'true', username: inputName.value, role: select.value, email: inputEmail.value, password: inputPassword.value, password_repeat: inputRepeatPassword.value } };
        callback(response);
    }, 1000);
}

function createRecord(data) {
    makeMockRequest('/api/records', data, (response) => {
        if (response.status === 'success') {
            console.log('Запись успешно создана:', response.data);
        } else {
            console.error('Не удалось создать запись:', response.error);
        }
    });
}


