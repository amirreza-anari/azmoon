function validateForm(){

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("passwordkey").value;
    let confirmPassword = document.getElementById("confirmpassword").value;
    let form = document.getElementById('form');
    let errormsg = document.querySelector('p');


    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        showError("همه فیلدها باید پر شوند.");
        return false;
    }

    if (!validateEmail(email)) {
        showError("ایمیل دارای فرمت معتبر نیست.");
        return false;
    }

    if (password.length < 8) {
        showError("رمز عبور باید حداقل ۸ کاراکتر داشته باشد.");
        return false;
    }

    if (password !== confirmPassword) {
        showError("رمز عبور و تکرار آن باید یکسان باشند.");
        return false;
    }

    errormsg.style.display = "none";
    return true;
}

document.getElementById("form").onsubmit = function() {
     return validateForm();
};

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(message) {
    let errorElement = document.querySelector("p");
    errorElement.textContent = message;
    errorElement.style.display = "block";
}